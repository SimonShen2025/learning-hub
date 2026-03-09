"use client";

import { useState } from "react";

interface StarToggleProps {
  initialValue: boolean;
  apiUrl: string;
  size?: "sm" | "md";
}

export function StarToggle({
  initialValue,
  apiUrl,
  size = "sm",
}: StarToggleProps) {
  const [starred, setStarred] = useState(initialValue);

  async function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const next = !starred;
    setStarred(next);
    await fetch(apiUrl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ important: next }),
    });
  }

  const dim = size === "md" ? "h-5 w-5" : "h-4 w-4";

  return (
    <button
      type="button"
      onClick={toggle}
      className="shrink-0 transition-colors hover:scale-110 active:scale-95"
      title={starred ? "Unmark as important" : "Mark as important"}
    >
      <svg
        className={`${dim} ${starred ? "text-amber-400 fill-amber-400" : "text-muted-foreground/40 hover:text-amber-300"} transition-colors`}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        fill={starred ? "currentColor" : "none"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </button>
  );
}
