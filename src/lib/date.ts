export const NZ_TIMEZONE = "Pacific/Auckland";

/** Validate a calendar date string (YYYY-MM-DD). */
export function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day));
  return (
    utc.getUTCFullYear() === year &&
    utc.getUTCMonth() === month - 1 &&
    utc.getUTCDate() === day
  );
}

/** Today's calendar date in New Zealand (YYYY-MM-DD). */
export function todayIsoDate(now: Date = new Date()): string {
  return now.toLocaleDateString("en-CA", { timeZone: NZ_TIMEZONE });
}

/** Format a stored ISO date string for display in New Zealand. */
export function formatIsoDateDisplay(value?: string): string {
  if (!value) return "--";
  if (!isValidIsoDate(value)) return "--";
  const [year, month, day] = value.split("-").map(Number);
  const utcNoon = new Date(Date.UTC(year, month - 1, day, 12));
  return utcNoon.toLocaleDateString("en-NZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: NZ_TIMEZONE,
  });
}

/** Format ISO dates; leave other date strings unchanged. */
export function formatDateDisplay(value?: string): string {
  if (!value) return "";
  if (isValidIsoDate(value)) return formatIsoDateDisplay(value);
  return value;
}

/** Numeric sort key for YYYY-MM-DD strings. */
export function isoDateToSortKey(value?: string): number {
  if (!value || !isValidIsoDate(value)) return 0;
  return Number(value.replace(/-/g, ""));
}

function getNzUtcOffset(now: Date): string {
  const tzName =
    new Intl.DateTimeFormat("en-US", {
      timeZone: NZ_TIMEZONE,
      timeZoneName: "shortOffset",
    })
      .formatToParts(now)
      .find((part) => part.type === "timeZoneName")?.value ?? "GMT";

  if (tzName === "GMT") return "+00:00";

  const match = tzName.match(/GMT([+-])(\d{1,2})(?::(\d{2}))?/);
  if (!match) return "+00:00";

  const [, sign, hours, minutes = "00"] = match;
  return `${sign}${hours.padStart(2, "0")}:${minutes}`;
}

/** Current timestamp as ISO 8601 in New Zealand time. */
export function nowNzIsoTimestamp(now: Date = new Date()): string {
  const date = now.toLocaleDateString("en-CA", { timeZone: NZ_TIMEZONE });
  const time = now.toLocaleTimeString("en-GB", {
    timeZone: NZ_TIMEZONE,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${date}T${time}${getNzUtcOffset(now)}`;
}

/** Filename-friendly date stamp in New Zealand (YYYY-MM-DD). */
export function todayFilenameDate(now: Date = new Date()): string {
  return todayIsoDate(now);
}
