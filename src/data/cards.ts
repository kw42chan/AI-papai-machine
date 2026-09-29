import { CardData } from '../types/card';
import { cardsWeek1_2 } from './cardsWeek1_2';
import { cardsWeek3_4 } from './cardsWeek3_4';
import { cardsWeek5_6 } from './cardsWeek5_6';

export const allCards: CardData[] = [
  ...cardsWeek1_2,
  ...cardsWeek3_4,
  ...cardsWeek5_6,
];

export function buildCardMap(cards: CardData[]): Record<string, CardData> {
  const map: Record<string, CardData> = {};
  cards.forEach((c) => {
    map[c.cardNumber.toLowerCase()] = c;
  });
  // "1" finds "01", without letting it shadow an exact card number
  cards.forEach((c) => {
    const numClean = c.cardNumber.replace(/^0+/, '').toLowerCase();
    if (numClean && !map[numClean]) map[numClean] = c;
  });
  return map;
}

export const cardMapByNumber = buildCardMap(allCards);

/** Finds a card by its number as printed or read by OCR: "21", "1", "01", "b01". */
export function findCardByNumber(cards: CardData[], raw: string): CardData | undefined {
  const map = buildCardMap(cards);
  const key = raw.trim().toLowerCase();
  return map[key] || map[key.replace(/^0+/, '')];
}

export function findCardByQuery(query: string, cards: CardData[] = allCards): CardData | undefined {
  if (!query) return undefined;
  const q = query.trim().toLowerCase();
  const map = cards === allCards ? cardMapByNumber : buildCardMap(cards);

  // Try exact match or card number match e.g. "21", "card 21", "卡 21", "#21"
  const cardNumMatch = q.match(/(?:card|卡|#)?\s*([0-9]{1,2}|b[0-9]{2})/i);
  if (cardNumMatch) {
    const rawNum = cardNumMatch[1].toUpperCase();
    const padded = rawNum.length === 1 ? `0${rawNum}` : rawNum;
    if (map[padded.toLowerCase()]) return map[padded.toLowerCase()];
    if (map[rawNum.toLowerCase()]) return map[rawNum.toLowerCase()];
  }

  // Try title or content search
  return cards.find(c =>
    c.cardNumber.toLowerCase() === q ||
    c.chineseTitle.toLowerCase().includes(q) ||
    c.englishTitle.toLowerCase().includes(q) ||
    c.scenarioSummary.toLowerCase().includes(q)
  );
}

export const CATEGORIES = [
  'ALL',
  '日常文檔',
  '商務溝通',
  '項目管理',
  '數據分析',
  '財務預算',
  '客戶服務',
  '商業策略'
] as const;

export const WEEKS = [
  { label: '全部週數', value: 'ALL' },
  { label: '第1週 (01-07)', value: 1 },
  { label: '第2週 (08-14)', value: 2 },
  { label: '第3週 (15-21)', value: 3 },
  { label: '第4週 (22-28)', value: 4 },
  { label: '第5週 (29-35)', value: 5 },
  { label: '第6週 (36-40)', value: 6 },
  { label: 'Bonus 彩蛋 (B01-B04)', value: 'BONUS' },
] as const;
