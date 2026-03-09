"use client";

import { useState } from "react";

interface SectionNoteProps {
  courseSlug: string;
  sectionSlug: string;
  initialNote: string;
}

export function SectionNote({
  courseSlug,
  sectionSlug,
  initialNote,
}: SectionNoteProps) {
  const [note, setNote] = useState(initialNote);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(initialNote);

  const apiUrl = `/api/sections/${courseSlug}/${sectionSlug}`;

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
        onClick={(e) => {
          e.stopPropagation();
          setDraft("");
          setEditing(true);
        }}
        className="mx-4 mb-3 flex items-center gap-1.5 text-xs text-violet-500 dark:text-violet-400 hover:underline"
      >
        <svg
          className="h-3 w-3"
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
      <div
        className="mx-4 mb-3 rounded-lg border border-violet-100 dark:border-violet-900/50 p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={3}
          className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-xs focus-visible:ring-violet-500 focus-visible:ring-2 focus-visible:ring-offset-2 resize-y"
          autoFocus
          onClick={(e) => e.stopPropagation()}
        />
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              save();
            }}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-md px-3 py-1 text-xs font-medium transition-all"
          >
            Save
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDraft(note);
              setEditing(false);
            }}
            className="border bg-background shadow-xs rounded-md px-3 py-1 text-xs font-medium hover:bg-accent transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="mx-4 mb-3 rounded-lg border border-violet-100 dark:border-violet-900/50 bg-background p-3"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-semibold tracking-tight text-indigo-600 dark:text-indigo-400 uppercase">
          Note
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDraft(note);
              setEditing(true);
            }}
            className="text-[10px] text-violet-600 dark:text-violet-400 hover:underline"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              remove();
            }}
            className="text-[10px] text-red-500 dark:text-red-400 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-xs leading-relaxed whitespace-pre-line">{note}</p>
    </div>
  );
}
