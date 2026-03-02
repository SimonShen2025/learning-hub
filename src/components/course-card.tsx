import Link from "next/link";

interface CourseCardProps {
  slug: string;
  title: string;
  platform: string;
  sectionCount: number;
  lectureCount: number;
}

export function CourseCard({
  slug,
  title,
  platform,
  sectionCount,
  lectureCount,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${slug}`}>
      <div className="group rounded-xl border shadow-sm transition-all hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800 border-violet-100 dark:border-violet-900/50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-sm font-bold">
            {title.charAt(0)}
          </div>
          <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-0 capitalize">
            {platform}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {title}
        </h3>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{sectionCount} sections</span>
          <span>{lectureCount} lectures</span>
        </div>
      </div>
    </Link>
  );
}
