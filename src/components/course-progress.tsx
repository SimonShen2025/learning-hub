"use client";

import { useState, useRef } from "react";

interface CourseProgressProps {
  courseSlug: string;
  startDate: string;
  endDate: string;
  notes: string;
}

function formatDisplay(dateStr: string): string {
  if (!dateStr) return "--";
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return "--";
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function CourseProgress({
  courseSlug,
  startDate: initialStart,
  endDate: initialEnd,
  notes: initialNotes,
}: CourseProgressProps) {
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);
  const [notes, setNotes] = useState(initialNotes);
  const [editingNotes, setEditingNotes] = useState(false);
  const notesRef = useRef<HTMLTextAreaElement>(null);

  async function save(updates: Record<string, string>) {
    await fetch(`/api/courses/${courseSlug}/meta`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
  }

  function handleDateChange(field: "startDate" | "endDate", value: string) {
    if (field === "startDate") setStartDate(value);
    else setEndDate(value);
    save({ [field]: value });
  }

  function handleNotesSave() {
    setEditingNotes(false);
    save({ notes });
  }

  return (
    <>
      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-0.5">
          <dt className="text-xs text-muted-foreground">Started</dt>
          <dd className="flex items-center gap-2">
            <span className="text-sm">{formatDisplay(startDate)}</span>
            <label className="relative cursor-pointer">
              <input
                type="date"
                value={startDate}
                onChange={(e) => handleDateChange("startDate", e.target.value)}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
              />
              <svg
                className="h-4 w-4 text-muted-foreground hover:text-violet-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </label>
          </dd>
        </div>

        <div className="flex flex-col gap-0.5">
          <dt className="text-xs text-muted-foreground">Finished</dt>
          <dd className="flex items-center gap-2">
            <span className="text-sm">{formatDisplay(endDate)}</span>
            <label className="relative cursor-pointer">
              <input
                type="date"
                value={endDate}
                onChange={(e) => handleDateChange("endDate", e.target.value)}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
              />
              <svg
                className="h-4 w-4 text-muted-foreground hover:text-violet-600 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </label>
          </dd>
        </div>
      </dl>

      <div className="mt-4 pt-3 border-t border-violet-100 dark:border-violet-900/50">
        <dt className="text-xs text-muted-foreground mb-1">Notes</dt>
        {editingNotes ? (
          <div className="flex flex-col gap-2">
            <textarea
              ref={notesRef}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="rounded-md border bg-background px-3 py-2 text-sm shadow-xs focus-visible:ring-violet-500 focus-visible:ring-2 focus-visible:ring-offset-2 resize-y"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleNotesSave}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setNotes(initialNotes);
                  setEditingNotes(false);
                }}
                className="border bg-background shadow-xs rounded-md px-3 py-1.5 text-xs font-medium hover:bg-accent transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <dd
            className="text-sm leading-relaxed whitespace-pre-line cursor-pointer hover:bg-violet-50/50 dark:hover:bg-violet-900/10 rounded-md px-2 py-1.5 -mx-2 transition-colors min-h-[2rem] flex items-start"
            onClick={() => setEditingNotes(true)}
          >
            {notes || (
              <span className="text-muted-foreground">
                -- Click to add notes
              </span>
            )}
          </dd>
        )}
      </div>
    </>
  );
}
