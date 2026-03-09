"use client";

import { useState } from "react";

interface LectureNoteProps {
  courseSlug: string;
  sectionSlug: string;
  lectureSlug: string;
  initialNote: string;
}

export function LectureNote({
  courseSlug,
  sectionSlug,
  lectureSlug,
  initialNote,
}: LectureNoteProps) {
  const [note, setNote] = useState(initialNote);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(initialNote);

  const apiUrl = `/api/lectures/${courseSlug}/${sectionSlug}/${lectureSlug}`;

  async function save() {
    setNote(draft);
    setEditing(false);
    await fetch(apiUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note: draft }),
    });
  }

  async function remove() {
    setNote("");
    setDraft("");
    setEditing(false);
    await fetch(apiUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note: "" }),
    });
  }

  if (!note && !editing) {
    return (
      <button
        type="button"
        onClick={() => {
          setDraft("");
          setEditing(true);
        }}
        className="mb-6 flex items-center gap-2 rounded-lg border border-dashed border-violet-300 dark:border-violet-700 px-4 py-3 text-sm text-violet-600 dark:text-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 transition-colors w-full justify-center"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Note
      </button>
    );
  }

  if (editing) {
    return (
      <div className="mb-6 rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm p-5">
        <h3 className="text-xs font-semibold tracking-tight text-indigo-600 dark:text-indigo-400 uppercase mb-3">
          My Note
        </h3>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={4}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-xs focus-visible:ring-violet-500 focus-visible:ring-2 focus-visible:ring-offset-2 resize-y"
          autoFocus
        />
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={save}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-md px-3 py-1.5 text-xs font-medium transition-all"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              setDraft(note);
              setEditing(false);
            }}
            className="border bg-background shadow-xs rounded-md px-3 py-1.5 text-xs font-medium hover:bg-accent transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6 rounded-xl border border-violet-100 dark:border-violet-900/50 shadow-sm p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold tracking-tight text-indigo-600 dark:text-indigo-400 uppercase">
          My Note
        </h3>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setDraft(note);
              setEditing(true);
            }}
            className="text-xs text-violet-600 dark:text-violet-400 hover:underline"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={remove}
            className="text-xs text-red-500 dark:text-red-400 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-sm leading-relaxed whitespace-pre-line">{note}</p>
    </div>
  );
}
