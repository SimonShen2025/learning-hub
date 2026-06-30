import { NextRequest, NextResponse } from "next/server";
import { completeCourseContent } from "@/lib/content";
import { isValidIsoDate, todayIsoDate } from "@/lib/date";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ courseSlug: string }> },
) {
  const { courseSlug } = await params;
  const body = (await request.json()) as { endDate?: string };
  const endDate = body.endDate?.trim() || todayIsoDate();

  if (!isValidIsoDate(endDate)) {
    return NextResponse.json({ error: "Invalid end date" }, { status: 400 });
  }

  const result = completeCourseContent(courseSlug, endDate);
  if (!result) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}
