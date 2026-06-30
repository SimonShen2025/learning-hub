"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { CourseStatus } from "@/lib/content";
import {
  formatIsoDateDisplay,
  isValidIsoDate,
  todayIsoDate,
} from "@/lib/date";
import { CompleteCourseDialog } from "@/components/complete-course-dialog";

interface CourseProgressProps {
  courseSlug: string;
  status: CourseStatus;
  startDate: string;
  endDate: string;
  notes: string;
  sectionCount: number;
  lectureCount: number;
}


export function CourseProgress({
  courseSlug,
  status: initialStatus,
  startDate: initialStart,
  endDate: initialEnd,
  notes: initialNotes,
  sectionCount,
  lectureCount,
}: CourseProgressProps) {
  const router = useRouter();
  const [status, setStatus] = useState<CourseStatus>(initialStatus);
  const [startDate, setStartDate] = useState(initialStart);
  const [endDate, setEndDate] = useState(initialEnd);
  const [notes, setNotes] = useState(initialNotes);
  const [editingNotes, setEditingNotes] = useState(false);
  const [completeDialogOpen, setCompleteDialogOpen] = useState(false);
  const [pendingCompleteDate, setPendingCompleteDate] = useState(todayIsoDate());
  const [completing, setCompleting] = useState(false);
  const [completeError, setCompleteError] = useState("");
  const notesRef = useRef<HTMLTextAreaElement>(null);
  const finishDateInputRef = useRef<HTMLInputElement>(null);

  const computedStatus: CourseStatus = isValidIsoDate(endDate) ? "complete" : status;

  async function save(updates: Record<string, string>) {
    await fetch(`/api/courses/${courseSlug}/meta`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
  }

  function openCompleteDialog(date: string) {
    setCompleteError("");
    setPendingCompleteDate(date);
    setCompleteDialogOpen(true);
  }

  function handleDateChange(field: "startDate" | "endDate", value: string) {
    if (field === "startDate") {
      setStartDate(value);
      save({ startDate: value });
      return;
    }

    if (value && !isValidIsoDate(endDate) && isValidIsoDate(value)) {
      openCompleteDialog(value);
      finishDateInputRef.current?.blur();
      return;
    }

    setEndDate(value);
    save({ endDate: value });
  }

  function handleStatusChange(value: CourseStatus) {
    if (value === "complete") {
      openCompleteDialog(todayIsoDate());
      return;
    }

    setStatus(value);
    if (isValidIsoDate(endDate)) {
      setEndDate("");
      save({ status: value, endDate: "" });
    } else {
      save({ status: value });
    }
  }

  function handleReopen() {
    setStatus("learning");
    setEndDate("");
    save({ status: "learning", endDate: "" });
    router.refresh();
  }

  function handleCompleteCancel() {
    setCompleteDialogOpen(false);
    setCompleteError("");
    if (finishDateInputRef.current) {
      finishDateInputRef.current.value = endDate;
    }
  }

  async function handleCompleteConfirm() {
    if (!isValidIsoDate(pendingCompleteDate)) {
      setCompleteError("Please choose a valid finish date.");
      return;
    }

    setCompleting(true);
    setCompleteError("");
    try {
      const res = await fetch(`/api/courses/${courseSlug}/complete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ endDate: pendingCompleteDate }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "Failed to complete course");
      }

      setEndDate(pendingCompleteDate);
      setCompleteDialogOpen(false);
      router.refresh();
    } catch (e) {
      setCompleteError((e as Error).message || "Failed to complete course");
    } finally {
      setCompleting(false);
    }
  }

  function handleNotesSave() {
    setEditingNotes(false);
    save({ notes });
  }

  return (
    <>
      <CompleteCourseDialog
        open={completeDialogOpen}
        sectionCount={sectionCount}
        lectureCount={lectureCount}
        endDate={pendingCompleteDate}
        loading={completing}
        error={completeError}
        onEndDateChange={setPendingCompleteDate}
        onCancel={handleCompleteCancel}
        onConfirm={handleCompleteConfirm}
      />

      <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="flex flex-col gap-0.5">
          <dt className="text-xs text-muted-foreground">Status</dt>
          <dd className="text-sm">
            {computedStatus === "complete" ? (
              <span className="inline-flex items-center gap-2">
                <span className="rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Complete
                </span>
                <button
                  type="button"
                  onClick={handleReopen}
                  className="text-xs text-muted-foreground hover:text-violet-600 underline-offset-2 hover:underline"
                >
                  Reopen
                </button>
              </span>
            ) : (
              <select
                value={computedStatus}
                onChange={(e) =>
                  handleStatusChange(e.target.value as CourseStatus)
                }
                className="rounded-md border bg-background px-2 py-1 text-xs shadow-xs focus-visible:ring-violet-500 focus-visible:ring-2 focus-visible:ring-offset-2"
              >
                <option value="learning">Learning</option>
                <option value="on_hold">On Hold</option>
                <option value="complete">Complete</option>
              </select>
            )}
          </dd>
        </div>

        <div className="flex flex-col gap-0.5">
          <dt className="text-xs text-muted-foreground">Started</dt>
          <dd className="flex items-center gap-2">
            <span className="text-sm">{formatIsoDateDisplay(startDate)}</span>
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
            <span className="text-sm">{formatIsoDateDisplay(endDate)}</span>
            <label className="relative cursor-pointer">
              <input
                ref={finishDateInputRef}
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
