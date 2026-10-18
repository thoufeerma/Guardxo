import { NextRequest, NextResponse } from "next/server";
import { query, initializeDatabase } from "@/lib/db";
import { PRODUCTS_CATALOGUE } from "@/lib/products-data";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * GET /api/products
 * Fetch products with optional filtering by category, search term, and status
 */
export async function GET(req: NextRequest) {
  try {
    await initializeDatabase();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const limit = searchParams.get("limit");

    let sql = `
      SELECT 
        p.*,
        c.name AS category_name,
        c.slug AS category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE 1=1
    `;
    const params: any[] = [];

    if (category && category !== "all" && category !== "All") {
      params.push(category);
      sql += ` AND (p.family ILIKE $${params.length} OR c.slug = $${params.length} OR c.name ILIKE $${params.length})`;
    }

    if (search && search.trim()) {
      params.push(`%${search.trim()}%`);
      sql += ` AND (
        p.grade ILIKE $${params.length} OR 
        p.active_ingredient ILIKE $${params.length} OR 
        p.target_application ILIKE $${params.length} OR 
        p.description ILIKE $${params.length} OR 
        p.cas_number ILIKE $${params.length}
      )`;
    }

    sql += " ORDER BY p.num ASC, p.created_at DESC";

    if (limit && !isNaN(parseInt(limit, 10))) {
      params.push(parseInt(limit, 10));
      sql += ` LIMIT $${params.length}`;
    }

    const result = await query(sql, params);

    return NextResponse.json({
      products: result.rows,
      total: result.rows.length,
    });
  } catch (err) {
    console.warn("[API Products] Fallback to standard catalogue due to:", err);
    return NextResponse.json({
      products: PRODUCTS_CATALOGUE,
      total: PRODUCTS_CATALOGUE.length,
      warning: "Database query failed, returning fallback catalogue",
    });
  }
}

/**
 * POST /api/products
 * Creates / Uploads a new product to PostgreSQL
 */
export async function POST(req: NextRequest) {
  try {
    await initializeDatabase();
    const body = await req.json();

    const {
      grade,
      family,
      category_id,
      active_ingredient,
      cas_number,
      target_application,
      description,
      features,
      dosage_guide,
      ph_stability,
      temperature_limit,
      appearance,
      packaging,
      image_url,
      tds_url,
      msds_url,
      badge,
      is_featured,
      status,
    } = body;

    // Validation
    if (!grade || typeof grade !== "string" || !grade.trim()) {
      return NextResponse.json(
        { error: "Product grade / name is required" },
        { status: 400 }
      );
    }

    // Generate unique slug
    let baseSlug = body.slug ? slugify(body.slug) : slugify(grade);
    let finalSlug = baseSlug;
    let counter = 1;
    while (true) {
      const existing = await query("SELECT id FROM products WHERE slug = $1", [
        finalSlug,
      ]);
      if (existing.rows.length === 0) break;
      finalSlug = `${baseSlug}-${counter++}`;
    }

    // Determine category ID and Family name
    let resolvedCatId: number | null = category_id ? parseInt(category_id, 10) : null;
    let resolvedFamily = family?.trim() || "In-Can Preservatives";

    if (resolvedCatId) {
      const catRow = await query("SELECT id, name FROM categories WHERE id = $1", [
        resolvedCatId,
      ]);
      if (catRow.rows.length > 0) {
        resolvedFamily = catRow.rows[0].name;
      }
    } else if (resolvedFamily) {
      const catRow = await query("SELECT id, name FROM categories WHERE name ILIKE $1", [
        resolvedFamily,
      ]);
      if (catRow.rows.length > 0) {
        resolvedCatId = catRow.rows[0].id;
        resolvedFamily = catRow.rows[0].name;
      }
    }

    // Determine sequence number (e.g. 09, 10...)
    let numStr = body.num;
    if (!numStr) {
      const countRes = await query("SELECT COUNT(*) FROM products");
      const nextNum = parseInt(countRes.rows[0].count, 10) + 1;
      numStr = nextNum < 10 ? `0${nextNum}` : `${nextNum}`;
    }

    // Generate product ID
    const prodId = body.id?.trim() || `prod-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

    // Format features array safely for JSONB
    let featuresJson: string;
    if (Array.isArray(features)) {
      featuresJson = JSON.stringify(features.filter((f) => typeof f === "string" && f.trim()));
    } else if (typeof features === "string") {
      try {
        featuresJson = JSON.stringify(JSON.parse(features));
      } catch {
        // Split by lines or commas
        const lines = features.split(/[\r\n]+/).map((s: string) => s.trim()).filter(Boolean);
        featuresJson = JSON.stringify(lines);
      }
    } else {
      featuresJson = JSON.stringify([]);
    }

    const insertSql = `
      INSERT INTO products (
        id, num, grade, slug, family, category_id, active_ingredient, cas_number,
        target_application, description, features, dosage_guide, ph_stability,
        temperature_limit, appearance, packaging, image_url, tds_url, msds_url,
        badge, is_featured, status
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22
      )
      RETURNING *
    `;

    const values = [
      prodId,
      numStr,
      grade.trim(),
      finalSlug,
      resolvedFamily,
      resolvedCatId,
      active_ingredient?.trim() || null,
      cas_number?.trim() || null,
      target_application?.trim() || "Industrial biocide formulation",
      description?.trim() || "Advanced microbiological preservation solution by GuardExo.",
      featuresJson,
      dosage_guide?.trim() || "0.10% – 0.25% w/w",
      ph_stability?.trim() || "pH 2.0 – 12.0",
      temperature_limit?.trim() || "Up to 80°C",
      appearance?.trim() || "Clear liquid",
      packaging?.trim() || "25kg carboys / 200kg drums / 1,000kg IBCs",
      image_url?.trim() || "/in-can-preservatives/can image.png",
      tds_url?.trim() || null,
      msds_url?.trim() || null,
      badge?.trim() || null,
      is_featured !== undefined ? Boolean(is_featured) : true,
      status?.trim() || "active",
    ];

    const result = await query(insertSql, values);

    return NextResponse.json(
      {
        message: "Product created and uploaded successfully",
        product: result.rows[0],
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[API Products] POST Error:", err);
    return NextResponse.json(
      { error: "Failed to create product", details: (err as Error).message },
      { status: 500 }
    );
  }
}
