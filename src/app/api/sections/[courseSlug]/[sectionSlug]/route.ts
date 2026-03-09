import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function PATCH(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ courseSlug: string; sectionSlug: string }>;
  },
) {
  const { courseSlug, sectionSlug } = await params;
  const sectionDir = path.join(CONTENT_DIR, courseSlug, sectionSlug);

  if (!fs.existsSync(sectionDir)) {
    return NextResponse.json({ error: "Section not found" }, { status: 404 });
  }

  const metaPath = path.join(sectionDir, "_section.json");
  let existing: Record<string, unknown> = {};
  if (fs.existsSync(metaPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    } catch {
      /* ignore */
    }
  }

  const updates = await request.json();
  const allowedKeys = ["important", "note"];
  for (const key of Object.keys(updates)) {
    if (allowedKeys.includes(key)) {
      existing[key] = updates[key];
    }
  }

  fs.writeFileSync(
    metaPath,
    JSON.stringify(existing, null, 2) + "\n",
    "utf-8",
  );

  return NextResponse.json({ ok: true });
}
