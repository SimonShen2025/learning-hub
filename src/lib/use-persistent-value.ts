"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

type StorageKind = "local" | "session";

function getStorage(kind: StorageKind): Storage | null {
  if (typeof window === "undefined") return null;
  return kind === "local" ? window.localStorage : window.sessionStorage;
}

/**
 * Reads a value from web storage and keeps it in sync across same-tab updates
 * (via a custom event) and cross-tab updates (via the native `storage` event).
 *
 * Uses `useSyncExternalStore` so the value is restored after hydration without
 * a synchronous `setState` inside an effect (which triggers cascading renders).
 */
export function usePersistentValue<T extends string>(
  key: string,
  defaultValue: T,
  options?: { storage?: StorageKind; isValid?: (raw: string) => boolean },
): [T, (next: T) => void] {
  const storageKind = options?.storage ?? "local";
  const isValid = options?.isValid;
  const eventName = `learningHub.storage.${key}`;

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (typeof window === "undefined") return () => {};
      const handleStorage = (event: StorageEvent) => {
        if (event.key === key) onChange();
      };
      window.addEventListener("storage", handleStorage);
      window.addEventListener(eventName, onChange);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(eventName, onChange);
      };
    },
    [key, eventName],
  );

  const getSnapshot = useCallback(() => {
    const raw = getStorage(storageKind)?.getItem(key) ?? null;
    if (raw !== null && (!isValid || isValid(raw))) return raw as T;
    return defaultValue;
  }, [key, storageKind, defaultValue, isValid]);

  const value = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => defaultValue,
  );

  const setValue = useCallback(
    (next: T) => {
      getStorage(storageKind)?.setItem(key, next);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event(eventName));
      }
    },
    [key, storageKind, eventName],
  );

  return useMemo(() => [value, setValue], [value, setValue]);
}
