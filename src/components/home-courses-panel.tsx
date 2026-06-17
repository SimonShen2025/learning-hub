"use client";

import { useMemo } from "react";
import type { Course, CourseStatus } from "@/lib/content";
import { CourseCard } from "@/components/course-card";
import { usePersistentValue } from "@/lib/use-persistent-value";

type FilterOption = CourseStatus | "all";
type SortOption =
  | "start_date_desc"
  | "start_date_asc"
  | "title_asc"
  | "title_desc";

const FILTER_KEY = "learningHub.home.filter";
const SORT_KEY = "learningHub.home.sort";

const FILTER_OPTIONS: Array<{ value: FilterOption; label: string }> = [
  { value: "learning", label: "Learning" },
  { value: "on_hold", label: "On Hold" },
  { value: "complete", label: "Complete" },
  { value: "all", label: "All" },
];

const SORT_OPTIONS: Array<{ value: SortOption; label: string }> = [
  { value: "start_date_desc", label: "Start Date (Latest)" },
  { value: "start_date_asc", label: "Start Date (Earliest)" },
  { value: "title_asc", label: "Title (A-Z)" },
  { value: "title_desc", label: "Title (Z-A)" },
];

function dateToNumber(value?: string): number {
  if (!value) return 0;
  const parsed = new Date(`${value}T00:00:00`);
  if (isNaN(parsed.getTime())) return 0;
  return parsed.getTime();
}

export function HomeCoursesPanel({ courses }: { courses: Course[] }) {
  const [filter, setFilter] = usePersistentValue<FilterOption>(
    FILTER_KEY,
    "learning",
    { isValid: (raw) => FILTER_OPTIONS.some((item) => item.value === raw) },
  );
  const [sort, setSort] = usePersistentValue<SortOption>(
    SORT_KEY,
    "start_date_desc",
    { isValid: (raw) => SORT_OPTIONS.some((item) => item.value === raw) },
  );

  const filterCounts = useMemo(() => {
    const counts: Record<FilterOption, number> = {
      all: courses.length,
      learning: 0,
      on_hold: 0,
      complete: 0,
    };
    for (const course of courses) {
      counts[course.status]++;
    }
    return counts;
  }, [courses]);

  const visibleCourses = useMemo(() => {
    const filtered =
      filter === "all"
        ? courses
        : courses.filter((course) => course.status === filter);

    const sorted = [...filtered].sort((a, b) => {
      if (sort === "start_date_desc") {
        return dateToNumber(b.startDate) - dateToNumber(a.startDate);
      }
      if (sort === "start_date_asc") {
        return dateToNumber(a.startDate) - dateToNumber(b.startDate);
      }
      if (sort === "title_asc") return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });
    return sorted;
  }, [courses, filter, sort]);

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="space-y-4">
        <div className="rounded-xl border border-violet-100 dark:border-violet-900/50 p-4">
          <h3 className="text-xs font-semibold tracking-tight text-violet-600 uppercase mb-3">
            Filter
          </h3>
          <div className="space-y-2">
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFilter(option.value)}
                className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  filter === option.value
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 font-medium"
                    : "hover:bg-accent"
                }`}
              >
                <span>{option.label}</span>
                <span
                  className={`tabular-nums text-xs ${
                    filter === option.value
                      ? "text-violet-600 dark:text-violet-300"
                      : "text-muted-foreground"
                  }`}
                >
                  {filterCounts[option.value]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-violet-100 dark:border-violet-900/50 p-4">
          <h3 className="text-xs font-semibold tracking-tight text-violet-600 uppercase mb-3">
            Sort
          </h3>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-xs focus-visible:ring-violet-500 focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl border border-violet-100 dark:border-violet-900/50 p-4 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/50 dark:to-indigo-950/50">
          <h3 className="text-xs font-semibold tracking-tight text-violet-600 uppercase mb-2">
            Other Projects
          </h3>
          <p className="text-sm font-medium">Prompt Studio</p>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            Manage and organize AI prompts with version control.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[10px]">
            <span className="rounded-full px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              100% Free
            </span>
            <span className="rounded-full px-2 py-0.5 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              No Credit Card
            </span>
          </div>
          <a
            href="https://prompt-studio-ebon.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-3 py-1.5 text-xs font-medium transition-all"
          >
            Go to Dashboard
          </a>
        </div>
      </aside>

      <section>
        <h2 className="text-xs font-semibold tracking-tight text-violet-600 uppercase mb-4">
          Courses
        </h2>
        {visibleCourses.length === 0 ? (
          <div className="rounded-xl border-dashed border-2 p-8 text-center">
            <p className="text-muted-foreground text-sm">
              No courses match this filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 sm:auto-rows-fr">
            {visibleCourses.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
