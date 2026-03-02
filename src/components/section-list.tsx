import Link from "next/link";

interface SectionItem {
  slug: string;
  number: number;
  title: string;
  lectureCount: number;
}

interface SectionListProps {
  courseSlug: string;
  sections: SectionItem[];
}

export function SectionList({ courseSlug, sections }: SectionListProps) {
  return (
    <div className="space-y-3">
      {sections.map((section) => (
        <Link
          key={section.slug}
          href={`/courses/${courseSlug}/${section.slug}`}
        >
          <div className="group flex items-center gap-4 rounded-xl border shadow-sm transition-all hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800 border-violet-100 dark:border-violet-900/50 p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30 text-sm font-bold text-violet-700 dark:text-violet-300">
              {String(section.number).padStart(2, "0")}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-medium capitalize group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {section.lectureCount} lecture{section.lectureCount !== 1 ? "s" : ""}
              </p>
            </div>

            <svg
              className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
}
