import { NextRequest, NextResponse } from "next/server";
import { query, initializeDatabase } from "@/lib/db";

// Fallback in-memory store if PostgreSQL is temporarily offline during local dev
const fallbackInquiries: any[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, industrySector, targetGrade, formulationDetails } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and corporate email are required fields." },
        { status: 400 }
      );
    }

    try {
      await initializeDatabase();
      const result = await query(
        `INSERT INTO inquiries (name, email, industry_sector, target_grade, formulation_details)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING *`,
        [
          name.trim(),
          email.trim(),
          industrySector || null,
          targetGrade || null,
          formulationDetails || null,
        ]
      );

      return NextResponse.json(
        {
          success: true,
          message: "Technical inquiry logged successfully in PostgreSQL.",
          inquiry: result.rows[0],
        },
        { status: 201 }
      );
    } catch (dbError) {
      // Graceful fallback to memory storage
      console.warn("[API Inquiries] Database offline, saving to local state:", dbError);
      const newInquiry = {
        id: fallbackInquiries.length + 1,
        name,
        email,
        industry_sector: industrySector,
        target_grade: targetGrade,
        formulation_details: formulationDetails,
        created_at: new Date().toISOString(),
      };
      fallbackInquiries.push(newInquiry);

      return NextResponse.json(
        {
          success: true,
          message: "Technical inquiry received (Fallback Mode: ready for PostgreSQL sync).",
          inquiry: newInquiry,
        },
        { status: 201 }
      );
    }
  } catch (error: any) {
    console.error("[API Inquiries] Error:", error);
    return NextResponse.json(
      { error: "Internal server error while processing inquiry." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await query("SELECT * FROM inquiries ORDER BY created_at DESC");
    return NextResponse.json({ inquiries: result.rows });
  } catch {
    return NextResponse.json({ inquiries: fallbackInquiries });
  }
}
