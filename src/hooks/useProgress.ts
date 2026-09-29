import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'ai-papai:carousel-progress:v1';

/** cardNumber -> ISO timestamp of when the carousel was last marked made or updated */
export type ProgressMap = Record<string, string>;

function load(): ProgressMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? sanitize(JSON.parse(raw)) : {};
  } catch {
    return {};
  }
}

function sanitize(value: unknown): ProgressMap {
  const out: ProgressMap = {};
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (typeof v === 'string' && !Number.isNaN(Date.parse(v))) out[k] = v;
    }
  }
  return out;
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressMap>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage full or blocked (private mode): progress still works for this session
    }
  }, [progress]);

  // Keep several open tabs in step
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setProgress(load());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const toggle = useCallback((cardNumber: string) => {
    setProgress((prev) => {
      const next = { ...prev };
      if (next[cardNumber]) delete next[cardNumber];
      else next[cardNumber] = new Date().toISOString();
      return next;
    });
  }, []);

  /** Stamp today's date on a card that is already marked, for when its carousel is redone */
  const touch = useCallback((cardNumber: string) => {
    setProgress((prev) => (prev[cardNumber] ? { ...prev, [cardNumber]: new Date().toISOString() } : prev));
  }, []);

  const exportJson = useCallback(
    () => JSON.stringify({ version: 1, progress }, null, 2),
    [progress]
  );

  /**
   * Merges an export into the current progress, keeping the later date when a card is in both,
   * so importing never un-ticks anything. Returns the number of cards in the file, or throws
   * if the text isn't a valid export.
   */
  const importJson = useCallback((text: string) => {
    const parsed = JSON.parse(text);
    const incoming = sanitize(parsed?.progress ?? parsed);
    setProgress((prev) => {
      const merged = { ...prev };
      for (const [k, v] of Object.entries(incoming)) {
        if (!merged[k] || Date.parse(v) > Date.parse(merged[k])) merged[k] = v;
      }
      return merged;
    });
    return Object.keys(incoming).length;
  }, []);

  return { progress, toggle, touch, exportJson, importJson };
}
