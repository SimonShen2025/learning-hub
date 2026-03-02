import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ courseSlug: string }> },
) {
  const { courseSlug } = await params;
  const metaPath = path.join(CONTENT_DIR, courseSlug, "_course.json");

  if (!fs.existsSync(metaPath)) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }

  const existing = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  const updates = await request.json();

  const allowedKeys = ["startDate", "endDate", "notes"];
  for (const key of Object.keys(updates)) {
    if (allowedKeys.includes(key)) {
      existing[key] = updates[key];
    }
  }

  fs.writeFileSync(metaPath, JSON.stringify(existing, null, 2) + "\n", "utf-8");

  return NextResponse.json({ ok: true });
}
