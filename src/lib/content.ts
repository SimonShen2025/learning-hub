import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface Course {
  slug: string;
  title: string;
  platform: string;
  url: string;
  status: CourseStatus;
  startDate?: string;
  endDate?: string;
  sectionCount: number;
  lectureCount: number;
}

export type CourseStatus = "learning" | "on_hold" | "complete";

export interface CourseDetail {
  slug: string;
  title: string;
  platform: string;
  url: string;
  status: CourseStatus;
  instructor?: string;
  lastUpdated?: string;
  language?: string;
  rating?: number;
  totalStudents?: number;
  totalHours?: number;
  level?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  notes?: string;
}

export interface Section {
  slug: string;
  number: number;
  title: string;
  lectureCount: number;
}

export interface LectureMeta {
  slug: string;
  title: string;
  lectureId: number;
  section: number;
  sectionTitle: string;
  sectionSlug: string;
  date: string;
  tags: string[];
}

export interface Lecture extends LectureMeta {
  content: string;
}

function parseSectionFolder(folderName: string): {
  number: number;
  title: string;
} {
  const match = folderName.match(/^s(\d+)-(.+)$/);
  if (!match) return { number: 0, title: folderName };
  return {
    number: parseInt(match[1], 10),
    title: match[2].replace(/-/g, " "),
  };
}

function parseLectureFile(fileName: string): { id: number; slug: string } {
  const base = fileName.replace(/\.md$/, "");
  const match = base.match(/^l(\d+)-(.+)$/);
  if (!match) return { id: 0, slug: base };
  return { id: parseInt(match[1], 10), slug: base };
}

function isValidDateString(value?: string): boolean {
  if (!value) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00`);
  return !isNaN(parsed.getTime());
}

function resolveCourseStatus(meta: {
  endDate?: string;
  status?: string;
}): CourseStatus {
  if (isValidDateString(meta.endDate)) return "complete";
  if (meta.status === "on_hold") return "on_hold";
  return "learning";
}

export function getCourses(): Course[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
  const courses: Course[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const metaPath = path.join(CONTENT_DIR, entry.name, "_course.json");
    if (!fs.existsSync(metaPath)) continue;

    const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
    const sections = getSections(entry.name);
    const lectureCount = sections.reduce((sum, s) => sum + s.lectureCount, 0);

    courses.push({
      slug: entry.name,
      title: meta.title,
      platform: meta.platform,
      url: meta.url,
      status: resolveCourseStatus(meta),
      startDate: meta.startDate,
      endDate: meta.endDate,
      sectionCount: sections.length,
      lectureCount,
    });
  }

  return courses;
}

export function getSections(courseSlug: string): Section[] {
  const courseDir = path.join(CONTENT_DIR, courseSlug);
  if (!fs.existsSync(courseDir)) return [];

  const entries = fs.readdirSync(courseDir, { withFileTypes: true });
  const sections: Section[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const parsed = parseSectionFolder(entry.name);
    const sectionDir = path.join(courseDir, entry.name);
    const lectures = fs
      .readdirSync(sectionDir)
      .filter((f) => f.endsWith(".md"));

    sections.push({
      slug: entry.name,
      number: parsed.number,
      title: parsed.title,
      lectureCount: lectures.length,
    });
  }

  return sections.sort((a, b) => a.number - b.number);
}

export function getLectures(
  courseSlug: string,
  sectionSlug: string,
): LectureMeta[] {
  const sectionDir = path.join(CONTENT_DIR, courseSlug, sectionSlug);
  if (!fs.existsSync(sectionDir)) return [];

  const files = fs.readdirSync(sectionDir).filter((f) => f.endsWith(".md"));
  const lectures: LectureMeta[] = [];

  for (const file of files) {
    const filePath = path.join(sectionDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    const parsed = parseLectureFile(file);

    lectures.push({
      slug: parsed.slug,
      title: data.title ?? file.replace(/\.md$/, ""),
      lectureId: data.lectureId ?? parsed.id,
      section: data.section ?? 0,
      sectionTitle: data.sectionTitle ?? "",
      sectionSlug,
      date: data.date ?? "",
      tags: data.tags ?? [],
    });
  }

  return lectures.sort((a, b) => a.lectureId - b.lectureId);
}

export function getLecture(
  courseSlug: string,
  sectionSlug: string,
  lectureSlug: string,
): Lecture | null {
  const filePath = path.join(
    CONTENT_DIR,
    courseSlug,
    sectionSlug,
    `${lectureSlug}.md`,
  );
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const parsed = parseLectureFile(`${lectureSlug}.md`);

  return {
    slug: lectureSlug,
    title: data.title ?? lectureSlug,
    lectureId: data.lectureId ?? parsed.id,
    section: data.section ?? 0,
    sectionTitle: data.sectionTitle ?? "",
    sectionSlug,
    date: data.date ?? "",
    tags: data.tags ?? [],
    content,
  };
}

export function getCourse(
  courseSlug: string,
): Pick<CourseDetail, "slug" | "title" | "platform" | "url" | "status"> | null {
  const metaPath = path.join(CONTENT_DIR, courseSlug, "_course.json");
  if (!fs.existsSync(metaPath)) return null;

  const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  return {
    slug: courseSlug,
    title: meta.title,
    platform: meta.platform,
    url: meta.url,
    status: resolveCourseStatus(meta),
  };
}

export function getCourseDetail(courseSlug: string): CourseDetail | null {
  const metaPath = path.join(CONTENT_DIR, courseSlug, "_course.json");
  if (!fs.existsSync(metaPath)) return null;

  const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  return {
    slug: courseSlug,
    title: meta.title,
    platform: meta.platform,
    url: meta.url,
    status: resolveCourseStatus(meta),
    instructor: meta.instructor,
    lastUpdated: meta.lastUpdated,
    language: meta.language,
    rating: meta.rating,
    totalStudents: meta.totalStudents,
    totalHours: meta.totalHours,
    level: meta.level,
    description: meta.description,
    startDate: meta.startDate,
    endDate: meta.endDate,
    notes: meta.notes,
  };
}

export interface CourseExport {
  exportedAt: string;
  course: CourseDetail;
  stats: {
    sectionCount: number;
    lectureCount: number;
    tagCloud: Record<string, number>;
  };
  sections: Array<{
    slug: string;
    number: number;
    title: string;
    lectures: Lecture[];
  }>;
}

export function getFullCourseExport(courseSlug: string): CourseExport | null {
  const course = getCourseDetail(courseSlug);
  if (!course) return null;

  const sections = getSections(courseSlug);
  const tagCloud: Record<string, number> = {};
  let lectureCount = 0;

  const sectionsWithLectures = sections.map((section) => {
    const lectureMetas = getLectures(courseSlug, section.slug);
    const lectures: Lecture[] = lectureMetas.map((meta) => {
      const lecture = getLecture(courseSlug, section.slug, meta.slug);
      if (lecture) {
        for (const tag of lecture.tags) {
          tagCloud[tag] = (tagCloud[tag] ?? 0) + 1;
        }
      }
      lectureCount++;
      return lecture ?? { ...meta, content: "" };
    });

    return {
      slug: section.slug,
      number: section.number,
      title: section.title,
      lectures,
    };
  });

  return {
    exportedAt: new Date().toISOString(),
    course,
    stats: {
      sectionCount: sections.length,
      lectureCount,
      tagCloud,
    },
    sections: sectionsWithLectures,
  };
}
