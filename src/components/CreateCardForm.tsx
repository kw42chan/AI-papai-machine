import React, { useMemo, useState } from 'react';
import { CardData, OcrResult } from '../types/card';
import { CATEGORIES, findCardByNumber } from '../data/cards';

interface CreateCardFormProps {
  ocr: OcrResult;
  cards: CardData[];
  onCreate: (card: CardData) => void;
}

const FIELD = 'w-full rounded-sm border border-rule bg-white px-2 py-1.5 text-sm text-ink focus-visible:border-royal';

/** "① 目標範圍清晰" -> "目標範圍清晰" */
const stripMarker = (s: string) => s.replace(/^[\s①②③④⑤⑥⑦⑧⑨⑩0-9.、)）]+/, '').trim();

function weekNumberOf(week: string, cardNumber: string): number {
  if (/^b/i.test(cardNumber.trim())) return 7;
  const m = week.match(/[0-9]+/);
  const n = m ? Number(m[0]) : 0;
  return n >= 1 && n <= 6 ? n : 0;
}

export const CreateCardForm: React.FC<CreateCardFormProps> = ({ ocr, cards, onCreate }) => {
  const categories = CATEGORIES.filter((c) => c !== 'ALL');
  const [cardNumber, setCardNumber] = useState((ocr.cardNumber ?? '').trim());
  const [week, setWeek] = useState((ocr.week ?? '').trim());
  const [category, setCategory] = useState<string>(categories[0]);
  const [chineseTitle, setChineseTitle] = useState((ocr.chineseTitle ?? '').trim());
  const [englishTitle, setEnglishTitle] = useState((ocr.englishTitle ?? '').trim());
  const [scenario, setScenario] = useState((ocr.scenario ?? '').trim());
  const [prompt, setPrompt] = useState((ocr.promptText ?? '').trim());
  const [benefits, setBenefits] = useState((ocr.expectedOutcomes ?? []).map(stripMarker).filter(Boolean).join('\n'));
  const [submitted, setSubmitted] = useState(false);

  const problems = useMemo(() => {
    const list: string[] = [];
    if (!cardNumber.trim()) list.push('請輸入卡號');
    else if (findCardByNumber(cards, cardNumber)) list.push(`卡號 ${cardNumber.trim()} 已經有卡片了`);
    if (!chineseTitle.trim()) list.push('請輸入中文標題');
    return list;
  }, [cardNumber, chineseTitle, cards]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (problems.length) return;
    const number = cardNumber.trim();
    const weekLabel = week.trim() || (/^b/i.test(number) ? 'Bonus 彩蛋' : '自訂卡片');
    onCreate({
      id: `custom-${number.toLowerCase()}`,
      cardNumber: number,
      week: weekLabel,
      weekNumber: weekNumberOf(weekLabel, number),
      category,
      chineseTitle: chineseTitle.trim(),
      englishTitle: englishTitle.trim(),
      scenarioSummary: scenario.trim(),
      promptShort: prompt.trim(),
      benefits: benefits.split('\n').map((b) => b.trim()).filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border-t border-rule pt-4">
      <h4 className="font-bold">用這次掃描建立新卡片</h4>
      <p className="text-sm text-ink-soft">
        資料庫裡沒有這張卡。請核對辨識結果，改好後建立。新卡片只存在這個瀏覽器。
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="mb-1 block text-ink-soft">卡號</span>
          <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className={FIELD} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-ink-soft">週數</span>
          <input value={week} onChange={(e) => setWeek(e.target.value)} placeholder="例如 第3週" className={FIELD} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-ink-soft">分類</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={FIELD}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-ink-soft">中文標題</span>
          <input value={chineseTitle} onChange={(e) => setChineseTitle(e.target.value)} className={FIELD} />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-ink-soft">英文標題</span>
          <input value={englishTitle} onChange={(e) => setEnglishTitle(e.target.value)} className={FIELD} />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-1 block text-ink-soft">實戰情境</span>
        <textarea value={scenario} onChange={(e) => setScenario(e.target.value)} rows={2} className={FIELD} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-ink-soft">輸入指令</span>
        <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3} className={FIELD} />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-ink-soft">卡片效益（一行一項）</span>
        <textarea value={benefits} onChange={(e) => setBenefits(e.target.value)} rows={3} className={FIELD} />
      </label>

      {submitted && problems.length > 0 && (
        <ul role="alert" className="text-sm text-stamp">
          {problems.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      <button
        type="submit"
        className="rounded-sm bg-royal px-4 py-2 text-sm font-medium text-white hover:bg-royal-deep"
      >
        建立新卡片
      </button>
    </form>
  );
};
