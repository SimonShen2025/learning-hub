"use client";

interface CompleteCourseDialogProps {
  open: boolean;
  sectionCount: number;
  lectureCount: number;
  endDate: string;
  loading: boolean;
  error?: string;
  onEndDateChange: (value: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
}

export function CompleteCourseDialog({
  open,
  sectionCount,
  lectureCount,
  endDate,
  loading,
  error,
  onEndDateChange,
  onCancel,
  onConfirm,
}: CompleteCourseDialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="complete-course-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"
        aria-label="Close dialog"
        onClick={loading ? undefined : onCancel}
      />
      <div className="relative w-full max-w-lg rounded-xl border border-violet-200 dark:border-violet-800 bg-background shadow-xl">
        <div className="border-b border-violet-100 dark:border-violet-900/50 px-5 py-4">
          <h2
            id="complete-course-title"
            className="text-base font-semibold text-foreground"
          >
            Mark course as complete?
          </h2>
        </div>

        <div className="space-y-4 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            Completing this course will{" "}
            <strong className="font-medium text-foreground">
              permanently remove study notes
            </strong>{" "}
            stored in this repository:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Lecture summaries and personal notes across{" "}
              <strong className="font-medium text-foreground">
                {lectureCount}
              </strong>{" "}
              lecture{lectureCount === 1 ? "" : "s"}
            </li>
            <li>
              Section notes across{" "}
              <strong className="font-medium text-foreground">
                {sectionCount}
              </strong>{" "}
              section{sectionCount === 1 ? "" : "s"}
            </li>
          </ul>
          <p>
            Course metadata (title, dates, tags in frontmatter) is kept. Use{" "}
            <strong className="font-medium text-foreground">Export JSON</strong>{" "}
            above if you want a backup before continuing.
          </p>

          <div className="rounded-lg border border-violet-100 dark:border-violet-900/50 bg-violet-50/40 dark:bg-violet-950/20 px-3 py-3">
            <label
              htmlFor="complete-course-date"
              className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-violet-700 dark:text-violet-300"
            >
              Finish date
            </label>
            <input
              id="complete-course-date"
              type="date"
              value={endDate}
              disabled={loading}
              onChange={(e) => onEndDateChange(e.target.value)}
              className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-xs focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:opacity-60"
            />
          </div>
          {error ? (
            <p className="text-xs text-rose-600 dark:text-rose-400" role="alert">
              {error}
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap justify-end gap-2 border-t border-violet-100 dark:border-violet-900/50 px-5 py-4">
          <button
            type="button"
            disabled={loading}
            onClick={onCancel}
            className="rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs hover:bg-accent transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={loading || !endDate}
            onClick={onConfirm}
            className="rounded-md bg-gradient-to-r from-rose-600 to-red-600 px-4 py-2 text-sm font-medium text-white hover:from-rose-700 hover:to-red-700 transition-all disabled:opacity-50"
          >
            {loading ? "Completing…" : "Mark complete"}
          </button>
        </div>
      </div>
    </div>
  );
}
