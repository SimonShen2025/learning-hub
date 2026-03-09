import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      courseSlug: string;
      sectionSlug: string;
      lectureSlug: string;
    }>;
  },
) {
  const { courseSlug, sectionSlug, lectureSlug } = await params;
  const filePath = path.join(
    CONTENT_DIR,
    courseSlug,
    sectionSlug,
    `${lectureSlug}.md`,
  );

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Lecture not found" }, { status: 404 });
  }

  const updates = await request.json();
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if ("note" in updates) {
    data.note = updates.note;
  }
  if ("important" in updates) {
    data.important = updates.important;
  }

  const updated = matter.stringify(content, data);
  fs.writeFileSync(filePath, updated, "utf-8");

  return NextResponse.json({ ok: true });
}
