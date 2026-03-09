"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { StarToggle } from "@/components/star-toggle";
import { SectionNote } from "@/components/section-note";

interface LectureItem {
  slug: string;
  title: string;
  lectureId: number;
  date: string;
  tags: string[];
  important?: boolean;
}

interface SectionItem {
  slug: string;
  number: number;
  title: string;
  lectureCount: number;
  important?: boolean;
  note?: string;
  lectures: LectureItem[];
}

interface SectionListProps {
  courseSlug: string;
  sections: SectionItem[];
}

export function SectionList({ courseSlug, sections }: SectionListProps) {
  const [openSectionSlug, setOpenSectionSlug] = useState<string | null>(null);
  const [restoreTarget, setRestoreTarget] = useState<{
    sectionSlug: string;
    lectureSlug?: string;
  } | null>(null);

  const openSectionKey = `learningHub.course.${courseSlug}.openSection`;
  const lastLectureKey = `learningHub.course.${courseSlug}.lastLecture`;

  useEffect(() => {
    const storedSection = window.sessionStorage.getItem(openSectionKey);
    const storedLecture = window.sessionStorage.getItem(lastLectureKey);
    if (!storedSection) return;
    if (!sections.some((section) => section.slug === storedSection)) return;

    setOpenSectionSlug(storedSection);
    setRestoreTarget({
      sectionSlug: storedSection,
      lectureSlug: storedLecture ?? undefined,
    });
  }, [openSectionKey, lastLectureKey, sections]);

  useEffect(() => {
    if (openSectionSlug) {
      window.sessionStorage.setItem(openSectionKey, openSectionSlug);
      return;
    }
    window.sessionStorage.removeItem(openSectionKey);
  }, [openSectionSlug, openSectionKey]);

  useEffect(() => {
    if (!restoreTarget) return;
    if (openSectionSlug !== restoreTarget.sectionSlug) return;

    const timer = window.setTimeout(() => {
      const lectureId = restoreTarget.lectureSlug
        ? `lecture-${courseSlug}-${restoreTarget.sectionSlug}-${restoreTarget.lectureSlug}`
        : null;
      const sectionId = `section-${courseSlug}-${restoreTarget.sectionSlug}`;
      const targetElement =
        (lectureId ? document.getElementById(lectureId) : null) ??
        document.getElementById(sectionId);

      if (targetElement) {
        const top = targetElement.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
      setRestoreTarget(null);
    }, 80);

    return () => window.clearTimeout(timer);
  }, [restoreTarget, openSectionSlug, courseSlug]);

  return (
    <div className="divide-y divide-violet-100 dark:divide-violet-900/50 rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm overflow-hidden">
      {sections.map((section) => {
        const isOpen = openSectionSlug === section.slug;
        return (
          <div
            key={section.slug}
            id={`section-${courseSlug}-${section.slug}`}
          >
            <button
              type="button"
              onClick={() => {
                setOpenSectionSlug(isOpen ? null : section.slug);
                window.sessionStorage.removeItem(lastLectureKey);
              }}
              className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-violet-50/50 dark:hover:bg-violet-900/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-bold text-white">
                {String(section.number).padStart(2, "0")}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-medium capitalize truncate">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {section.lectureCount} lecture
                  {section.lectureCount !== 1 ? "s" : ""}
                </p>
              </div>

              <StarToggle
                initialValue={section.important ?? false}
                apiUrl={`/api/sections/${courseSlug}/${section.slug}`}
              />

              <svg
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-violet-100 dark:border-violet-900/50 bg-violet-50/30 dark:bg-violet-950/20">
                  <SectionNote
                    courseSlug={courseSlug}
                    sectionSlug={section.slug}
                    initialNote={section.note ?? ""}
                  />

                  {section.lectures.length === 0 ? (
                    <p className="px-4 py-3 text-sm text-muted-foreground">
                      No lecture notes yet.
                    </p>
                  ) : (
                    <ul>
                      {section.lectures.map((lecture) => (
                        <li
                          key={lecture.slug}
                          id={`lecture-${courseSlug}-${section.slug}-${lecture.slug}`}
                        >
                          <Link
                            href={`/courses/${courseSlug}/${section.slug}/${lecture.slug}`}
                            onClick={() => {
                              window.sessionStorage.setItem(
                                openSectionKey,
                                section.slug,
                              );
                              window.sessionStorage.setItem(
                                lastLectureKey,
                                lecture.slug,
                              );
                            }}
                            className="group flex items-center gap-3 px-4 py-3 transition-colors hover:bg-violet-100/50 dark:hover:bg-violet-900/20"
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-100 dark:bg-violet-900/30 text-[10px] font-bold text-violet-700 dark:text-violet-300">
                              {lecture.lectureId}
                            </span>
                            <span className="min-w-0 flex-1 truncate text-sm group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                              {lecture.title}
                            </span>
                            <StarToggle
                              initialValue={lecture.important ?? false}
                              apiUrl={`/api/lectures/${courseSlug}/${section.slug}/${lecture.slug}`}
                            />
                            {lecture.tags.length > 0 && (
                              <div className="hidden sm:flex gap-1">
                                {lecture.tags.slice(0, 2).map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full px-1.5 py-0.5 text-[10px] font-medium border bg-background"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            <svg
                              className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1"
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
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
