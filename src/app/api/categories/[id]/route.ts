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
 * PUT /api/categories/[id]
 * Updates category details
 */
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await initializeDatabase();
    const { id } = await context.params;
    const body = await req.json();
    const { name, description, display_order } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }

    const slug = body.slug ? slugify(body.slug) : slugify(name);

    const updateSql = `
      UPDATE categories
      SET 
        name = $1,
        slug = $2,
        description = $3,
        display_order = $4,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $5
      RETURNING id, name, slug, description, display_order, updated_at
    `;

    const result = await query(updateSql, [
      name.trim(),
      slug,
      description?.trim() || null,
      typeof display_order === "number" ? display_order : 0,
      parseInt(id, 10),
    ]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    // Also update cached family name on associated products
    await query("UPDATE products SET family = $1 WHERE category_id = $2", [
      name.trim(),
      parseInt(id, 10),
    ]);

    return NextResponse.json({
      message: "Category updated successfully",
      category: result.rows[0],
    });
  } catch (err) {
    console.error("[API Categories] PUT Error:", err);
    return NextResponse.json(
      { error: "Failed to update category", details: (err as Error).message },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/categories/[id]
 * Deletes category (sets product category_id to NULL to prevent orphan errors)
 */
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await initializeDatabase();
    const { id } = await context.params;
    const catId = parseInt(id, 10);

    // Unlink products from this category
    await query("UPDATE products SET category_id = NULL WHERE category_id = $1", [
      catId,
    ]);

    const deleteSql = "DELETE FROM categories WHERE id = $1 RETURNING id, name";
    const result = await query(deleteSql, [catId]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Category deleted successfully",
      deletedCategory: result.rows[0],
    });
  } catch (err) {
    console.error("[API Categories] DELETE Error:", err);
    return NextResponse.json(
      { error: "Failed to delete category", details: (err as Error).message },
      { status: 500 }
    );
  }
}
