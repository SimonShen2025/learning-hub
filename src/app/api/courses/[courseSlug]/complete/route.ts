import { NextRequest, NextResponse } from "next/server";
import { completeCourseContent } from "@/lib/content";

function isValidDate(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const d = new Date(`${dateStr}T00:00:00`);
  return !isNaN(d.getTime());
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ courseSlug: string }> },
) {
  const { courseSlug } = await params;
  const body = (await request.json()) as { endDate?: string };
  const endDate =
    body.endDate?.trim() || new Date().toISOString().slice(0, 10);

  if (!isValidDate(endDate)) {
    return NextResponse.json({ error: "Invalid end date" }, { status: 400 });
  }

  const result = completeCourseContent(courseSlug, endDate);
  if (!result) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}
