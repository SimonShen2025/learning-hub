import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse, getSections, getLecture, getLectures } from "@/lib/content";
import { Breadcrumb } from "@/components/breadcrumb";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { LectureNote } from "@/components/lecture-note";

interface Props {
  params: Promise<{
    courseSlug: string;
    sectionSlug: string;
    lectureSlug: string;
  }>;
}

export default async function LecturePage({ params }: Props) {
  const { courseSlug, sectionSlug, lectureSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const sections = getSections(courseSlug);
  const section = sections.find((s) => s.slug === sectionSlug);
  if (!section) notFound();

  const lecture = getLecture(courseSlug, sectionSlug, lectureSlug);
  if (!lecture) notFound();

  const allLectures = getLectures(courseSlug, sectionSlug);
  const currentIndex = allLectures.findIndex((l) => l.slug === lectureSlug);
  const prevLecture = currentIndex > 0 ? allLectures[currentIndex - 1] : null;
  const nextLecture =
    currentIndex < allLectures.length - 1
      ? allLectures[currentIndex + 1]
      : null;

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: course.title, href: `/courses/${courseSlug}` },
          {
            label: section.title,
            href: `/courses/${courseSlug}/${sectionSlug}`,
          },
          { label: lecture.title },
        ]}
      />

      <article>
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-xs font-bold">
              {lecture.lectureId}
            </span>
            <h1 className="text-3xl font-bold tracking-tight">
              {lecture.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 ml-11">
            {lecture.date && (
              <span className="text-sm text-muted-foreground">
                {lecture.date}
              </span>
            )}
            {lecture.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <LectureNote
          courseSlug={courseSlug}
          sectionSlug={sectionSlug}
          lectureSlug={lectureSlug}
          initialNote={lecture.note ?? ""}
        />

        <div className="rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm p-6 lg:p-8">
          <MarkdownRenderer content={lecture.content} />
        </div>
      </article>

      <nav className="mt-8 flex items-center justify-between gap-4">
        {prevLecture ? (
          <Link
            href={`/courses/${courseSlug}/${sectionSlug}/${prevLecture.slug}`}
            className="group flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-sm"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="truncate max-w-[200px]">{prevLecture.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextLecture ? (
          <Link
            href={`/courses/${courseSlug}/${sectionSlug}/${nextLecture.slug}`}
            className="group flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-all hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-sm"
          >
            <span className="truncate max-w-[200px]">{nextLecture.title}</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
