import { NextRequest, NextResponse } from "next/server";
import { query, initializeDatabase } from "@/lib/db";

// Helper to slugify string
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * GET /api/categories
 * Returns list of product categories with their respective product counts
 */
export async function GET() {
  try {
    await initializeDatabase();

    const sql = `
      SELECT 
        c.id,
        c.name,
        c.slug,
        c.description,
        c.display_order,
        c.created_at,
        COUNT(p.id)::int AS product_count
      FROM categories c
      LEFT JOIN products p ON p.category_id = c.id
      GROUP BY c.id
      ORDER BY c.display_order ASC, c.name ASC
    `;

    const result = await query(sql);
    return NextResponse.json({ categories: result.rows });
  } catch (err) {
    console.error("[API Categories] GET Error:", err);
    return NextResponse.json(
      {
        categories: [
          { id: 1, name: "In-Can Preservatives", slug: "in-can-preservatives", product_count: 5 },
          { id: 2, name: "Industrial Biocides", slug: "industrial-biocides", product_count: 2 },
          { id: 3, name: "Dry Film Preservatives", slug: "dry-film-preservatives", product_count: 1 },
        ],
        warning: "Database offline, using fallback categories",
      },
      { status: 200 }
    );
  }
}

/**
 * POST /api/categories
 * Creates a new product category
 */
export async function POST(req: NextRequest) {
  try {
    await initializeDatabase();
    const body = await req.json();

    const { name, description, display_order } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }

    const slug = body.slug ? slugify(body.slug) : slugify(name);

    const checkSql = "SELECT id FROM categories WHERE name = $1 OR slug = $2";
    const existing = await query(checkSql, [name.trim(), slug]);
    if (existing.rows.length > 0) {
      return NextResponse.json(
        { error: "A category with this name or slug already exists" },
        { status: 409 }
      );
    }

    const insertSql = `
      INSERT INTO categories (name, slug, description, display_order)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, slug, description, display_order, created_at
    `;

    const order = typeof display_order === "number" ? display_order : 0;
    const result = await query(insertSql, [
      name.trim(),
      slug,
      description?.trim() || null,
      order,
    ]);

    return NextResponse.json(
      {
        message: "Category created successfully",
        category: result.rows[0],
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[API Categories] POST Error:", err);
    return NextResponse.json(
      { error: "Failed to create category", details: (err as Error).message },
      { status: 500 }
    );
  }
}
