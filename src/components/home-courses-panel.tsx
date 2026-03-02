"use client";

import { useEffect, useMemo, useState } from "react";
import type { Course, CourseStatus } from "@/lib/content";
import { CourseCard } from "@/components/course-card";

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
  const [filter, setFilter] = useState<FilterOption>("learning");
  const [sort, setSort] = useState<SortOption>("start_date_desc");

  useEffect(() => {
    const storedFilter = localStorage.getItem(FILTER_KEY);
    const storedSort = localStorage.getItem(SORT_KEY);
    if (
      storedFilter &&
      FILTER_OPTIONS.some((item) => item.value === storedFilter)
    ) {
      setFilter(storedFilter as FilterOption);
    }
    if (storedSort && SORT_OPTIONS.some((item) => item.value === storedSort)) {
      setSort(storedSort as SortOption);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FILTER_KEY, filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem(SORT_KEY, sort);
  }, [sort]);

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
                className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  filter === option.value
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 font-medium"
                    : "hover:bg-accent"
                }`}
              >
                {option.label}
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
