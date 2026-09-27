import { CardData } from '../types/card';
import { cardsWeek1_2 } from './cardsWeek1_2';
import { cardsWeek3_4 } from './cardsWeek3_4';
import { cardsWeek5_6 } from './cardsWeek5_6';

export const allCards: CardData[] = [
  ...cardsWeek1_2,
  ...cardsWeek3_4,
  ...cardsWeek5_6,
];

export const cardMapByNumber: Record<string, CardData> = {};
allCards.forEach((c) => {
  cardMapByNumber[c.cardNumber.toLowerCase()] = c;
  const numClean = c.cardNumber.replace(/^0+/, '');
  if (numClean && !cardMapByNumber[numClean]) {
    cardMapByNumber[numClean] = c;
  }
});

export function findCardByQuery(query: string): CardData | undefined {
  if (!query) return undefined;
  const q = query.trim().toLowerCase();
  
  // Try exact match or card number match e.g. "21", "card 21", "卡 21", "#21"
  const cardNumMatch = q.match(/(?:card|卡|#)?\s*([0-9]{1,2}|b[0-9]{2})/i);
  if (cardNumMatch) {
    const rawNum = cardNumMatch[1].toUpperCase();
    const padded = rawNum.length === 1 ? `0${rawNum}` : rawNum;
    if (cardMapByNumber[padded.toLowerCase()]) return cardMapByNumber[padded.toLowerCase()];
    if (cardMapByNumber[rawNum.toLowerCase()]) return cardMapByNumber[rawNum.toLowerCase()];
  }

  // Try title or content search
  return allCards.find(c => 
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
