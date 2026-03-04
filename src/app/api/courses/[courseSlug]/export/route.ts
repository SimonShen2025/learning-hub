import { NextRequest, NextResponse } from "next/server";
import { getFullCourseExport } from "@/lib/content";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ courseSlug: string }> },
) {
  const { courseSlug } = await params;
  const data = getFullCourseExport(courseSlug);

  if (!data) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const filename = `${courseSlug}-export-${new Date().toISOString().slice(0, 10)}.json`;

  return new NextResponse(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
