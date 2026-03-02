import Link from "next/link";

interface CourseCardProps {
  slug: string;
  title: string;
  platform: string;
  startDate?: string;
  endDate?: string;
}

function formatDate(value?: string): string {
  if (!value) return "--";
  const parsed = new Date(`${value}T00:00:00`);
  if (isNaN(parsed.getTime())) return "--";
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function CourseCard({
  slug,
  title,
  platform,
  startDate,
  endDate,
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

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-xs text-muted-foreground">Started</p>
            <p className="font-medium">{formatDate(startDate)}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Finished</p>
            <p className="font-medium">{formatDate(endDate)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
