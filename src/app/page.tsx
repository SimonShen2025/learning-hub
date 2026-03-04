import { getCourses } from "@/lib/content";
import { HomeCoursesPanel } from "@/components/home-courses-panel";
import { WorkflowGuide } from "@/components/workflow-guide";

export default function HomePage() {
  const courses = getCourses();

  return (
    <div className="p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Learning Hub
          </span>
        </h1>
        <p className="text-muted-foreground">
          Course notes and study materials, organised by course, section, and
          lecture.
        </p>
      </div>

      <div className="mb-8">
        <WorkflowGuide />
      </div>

      {courses.length === 0 ? (
        <div className="rounded-xl border-dashed border-2 p-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/30 dark:to-indigo-900/30">
            <svg
              className="h-6 w-6 text-violet-600 dark:text-violet-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">
            No courses yet. Use the summarise command to add your first lecture
            notes.
          </p>
        </div>
      ) : (
        <HomeCoursesPanel courses={courses} />
      )}
    </div>
  );
}
