import type { CourseDetail } from "@/lib/content";
import { CourseProgress } from "@/components/course-progress";

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
        <div className="mt-4 rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm p-5 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50">
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
      )}

      <CourseProgress
        courseSlug={course.slug}
        startDate={course.startDate ?? ""}
        endDate={course.endDate ?? ""}
        notes={course.notes ?? ""}
      />
    </div>
  );
}
