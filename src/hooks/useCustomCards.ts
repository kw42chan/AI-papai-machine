import { useCallback, useEffect, useState } from 'react';
import { CardData } from '../types/card';

const STORAGE_KEY = 'ai-papai:custom-cards:v1';

function isCard(value: unknown): value is CardData {
  const c = value as Partial<CardData> | null;
  return (
    !!c &&
    typeof c.id === 'string' &&
    typeof c.cardNumber === 'string' &&
    typeof c.chineseTitle === 'string' &&
    typeof c.englishTitle === 'string' &&
    typeof c.scenarioSummary === 'string' &&
    typeof c.promptShort === 'string' &&
    typeof c.week === 'string' &&
    typeof c.weekNumber === 'number' &&
    typeof c.category === 'string' &&
    Array.isArray(c.benefits)
  );
}

function load(): CardData[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(isCard) : [];
  } catch {
    return [];
  }
}

/** Cards created from scans. They live in this browser only, next to the carousel progress. */
export function useCustomCards() {
  const [customCards, setCustomCards] = useState<CardData[]>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customCards));
    } catch {
      // Storage blocked or full: the cards still work for this session
    }
  }, [customCards]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setCustomCards(load());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const addCard = useCallback((card: CardData) => {
    setCustomCards((prev) => [...prev.filter((c) => c.id !== card.id), card]);
  }, []);

  const removeCard = useCallback((id: string) => {
    setCustomCards((prev) => prev.filter((c) => c.id !== id));
  }, []);

  /** Adds the cards from an export file, skipping any card number already in `existing`. Returns how many were added. */
  const importCards = useCallback(
    (value: unknown, existing: CardData[]) => {
      const incoming = Array.isArray(value) ? value.filter(isCard) : [];
      const taken = new Set([...existing, ...customCards].map((c) => c.cardNumber.toLowerCase()));
      const added: CardData[] = [];
      for (const c of incoming) {
        if (taken.has(c.cardNumber.toLowerCase())) continue;
        taken.add(c.cardNumber.toLowerCase());
        added.push(c);
      }
      if (added.length) setCustomCards((prev) => [...prev, ...added]);
      return added.length;
    },
    [customCards]
  );

  return { customCards, addCard, removeCard, importCards };
}
