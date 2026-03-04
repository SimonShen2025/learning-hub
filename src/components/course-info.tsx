import type { CourseDetail } from "@/lib/content";
import { CourseProgress } from "@/components/course-progress";
import { ExportCourseButton } from "@/components/export-course-button";

interface CourseInfoProps {
  course: CourseDetail;
}

function InfoItem({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className={`text-sm ${bold ? "font-bold" : ""}`}>{value}</dd>
    </div>
  );
}

export function CourseInfo({ course }: CourseInfoProps) {
  const statusConfig = {
    learning: {
      label: "Learning",
      className:
        "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
    },
    on_hold: {
      label: "On Hold",
      className:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    },
    complete: {
      label: "Complete",
      className:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    },
  };

  const hasCourseInfo =
    course.instructor ||
    course.lastUpdated ||
    course.language ||
    course.rating ||
    course.totalStudents ||
    course.totalHours ||
    course.description;

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
        <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-0 capitalize">
          {course.platform}
        </span>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusConfig[course.status].className}`}
        >
          {statusConfig[course.status].label}
        </span>
        <ExportCourseButton courseSlug={course.slug} />
      </div>

      {course.url && (
        <a
          href={course.url}
          className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on {course.platform}
        </a>
      )}

      {hasCourseInfo && (
        <details className="group mt-4 rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3 text-xs font-semibold tracking-tight text-violet-600 uppercase bg-violet-50/70 dark:bg-violet-950/30 [&::-webkit-details-marker]:hidden">
            Course Details
            <svg
              className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="border-t border-violet-100 dark:border-violet-900/50 p-5 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50">
            {course.description && (
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                {course.description}
              </p>
            )}
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <InfoItem label="Instructor" value={course.instructor ?? ""} />
              <InfoItem
                label="Last Updated"
                value={course.lastUpdated ?? ""}
                bold
              />
              <InfoItem label="Language" value={course.language ?? ""} />
              <InfoItem
                label="Rating"
                value={course.rating ? `${course.rating} / 5` : ""}
              />
              <InfoItem
                label="Students"
                value={
                  course.totalStudents
                    ? course.totalStudents.toLocaleString()
                    : ""
                }
              />
              <InfoItem
                label="Total Hours"
                value={course.totalHours ? `${course.totalHours}h` : ""}
              />
              <InfoItem label="Level" value={course.level ?? ""} />
            </dl>
          </div>
        </details>
      )}

      <details className="group mt-4 rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm overflow-hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-3 text-xs font-semibold tracking-tight text-indigo-600 dark:text-indigo-400 uppercase bg-background [&::-webkit-details-marker]:hidden">
          My Progress
          <svg
            className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <div className="border-t border-violet-100 dark:border-violet-900/50 p-5">
          <CourseProgress
            courseSlug={course.slug}
            status={course.status}
            startDate={course.startDate ?? ""}
            endDate={course.endDate ?? ""}
            notes={course.notes ?? ""}
          />
        </div>
      </details>
    </div>
  );
}
