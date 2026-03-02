import Link from "next/link";

interface LectureCardProps {
  courseSlug: string;
  sectionSlug: string;
  slug: string;
  title: string;
  lectureId: number;
  date: string;
  tags: string[];
}

export function LectureCard({
  courseSlug,
  sectionSlug,
  slug,
  title,
  lectureId,
  date,
  tags,
}: LectureCardProps) {
  return (
    <Link href={`/courses/${courseSlug}/${sectionSlug}/${slug}`}>
      <div className="group flex items-start gap-4 rounded-xl border shadow-sm transition-all hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800 border-violet-100 dark:border-violet-900/50 p-4">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 text-xs font-bold text-violet-700 dark:text-violet-300">
          {lectureId}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-medium group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {title}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {date && (
              <span className="text-xs text-muted-foreground">{date}</span>
            )}
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2 py-0.5 text-xs font-medium border bg-background"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <svg
          className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
