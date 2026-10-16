import { NextRequest, NextResponse } from "next/server";
import { query, initializeDatabase } from "@/lib/db";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * GET /api/products/[id]
 * Fetch single product by id or slug
 */
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await initializeDatabase();
    const { id } = await context.params;

    const sql = `
      SELECT 
        p.*,
        c.name AS category_name,
        c.slug AS category_slug
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.id = $1 OR p.slug = $1
      LIMIT 1
    `;

    const result = await query(sql, [id]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product: result.rows[0] });
  } catch (err) {
    console.error("[API Products] GET [id] Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch product", details: (err as Error).message },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/products/[id]
 * Update product
 */
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await initializeDatabase();
    const { id } = await context.params;
    const body = await req.json();

    // Check product exists
    const existing = await query("SELECT id FROM products WHERE id = $1 OR slug = $1", [id]);
    if (existing.rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    const realId = existing.rows[0].id;

    const {
      num,
      grade,
      slug,
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

    let finalSlug = slug ? slugify(slug) : (grade ? slugify(grade) : undefined);

    let resolvedCatId: number | null = category_id ? parseInt(category_id, 10) : null;
    let resolvedFamily = family?.trim();

    if (resolvedCatId) {
      const catRow = await query("SELECT name FROM categories WHERE id = $1", [resolvedCatId]);
      if (catRow.rows.length > 0) resolvedFamily = catRow.rows[0].name;
    }

    let featuresJson: string | undefined = undefined;
    if (features !== undefined) {
      if (Array.isArray(features)) {
        featuresJson = JSON.stringify(features.filter((f) => typeof f === "string" && f.trim()));
      } else if (typeof features === "string") {
        try {
          featuresJson = JSON.stringify(JSON.parse(features));
        } catch {
          const lines = features.split(/[\r\n]+/).map((s: string) => s.trim()).filter(Boolean);
          featuresJson = JSON.stringify(lines);
        }
      }
    }

    const updateSql = `
      UPDATE products
      SET
        num = COALESCE($1, num),
        grade = COALESCE($2, grade),
        slug = COALESCE($3, slug),
        family = COALESCE($4, family),
        category_id = COALESCE($5, category_id),
        active_ingredient = COALESCE($6, active_ingredient),
        cas_number = COALESCE($7, cas_number),
        target_application = COALESCE($8, target_application),
        description = COALESCE($9, description),
        features = COALESCE($10::jsonb, features),
        dosage_guide = COALESCE($11, dosage_guide),
        ph_stability = COALESCE($12, ph_stability),
        temperature_limit = COALESCE($13, temperature_limit),
        appearance = COALESCE($14, appearance),
        packaging = COALESCE($15, packaging),
        image_url = COALESCE($16, image_url),
        tds_url = COALESCE($17, tds_url),
        msds_url = COALESCE($18, msds_url),
        badge = COALESCE($19, badge),
        is_featured = COALESCE($20, is_featured),
        status = COALESCE($21, status),
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $22
      RETURNING *
    `;

    const result = await query(updateSql, [
      num?.trim() || null,
      grade?.trim() || null,
      finalSlug || null,
      resolvedFamily || null,
      resolvedCatId,
      active_ingredient?.trim() || null,
      cas_number?.trim() || null,
      target_application?.trim() || null,
      description?.trim() || null,
      featuresJson || null,
      dosage_guide?.trim() || null,
      ph_stability?.trim() || null,
      temperature_limit?.trim() || null,
      appearance?.trim() || null,
      packaging?.trim() || null,
      image_url?.trim() || null,
      tds_url?.trim() || null,
      msds_url?.trim() || null,
      badge !== undefined ? badge : null,
      is_featured !== undefined ? Boolean(is_featured) : null,
      status?.trim() || null,
      realId,
    ]);

    return NextResponse.json({
      message: "Product updated successfully",
      product: result.rows[0],
    });
  } catch (err) {
    console.error("[API Products] PUT [id] Error:", err);
    return NextResponse.json(
      { error: "Failed to update product", details: (err as Error).message },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/products/[id]
 * Deletes a product from database
 */
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await initializeDatabase();
    const { id } = await context.params;

    const deleteSql = "DELETE FROM products WHERE id = $1 OR slug = $1 RETURNING id, grade";
    const result = await query(deleteSql, [id]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Product deleted successfully",
      deletedProduct: result.rows[0],
    });
  } catch (err) {
    console.error("[API Products] DELETE [id] Error:", err);
    return NextResponse.json(
      { error: "Failed to delete product", details: (err as Error).message },
      { status: 500 }
    );
  }
}
