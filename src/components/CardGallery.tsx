import React, { useEffect, useRef, useState } from 'react';
import { CardData, FilterCategory, FilterProgress, FilterWeek } from '../types/card';
import { ProgressMap } from '../hooks/useProgress';
import { CATEGORIES, WEEKS } from '../data/cards';
import { Search, X } from 'lucide-react';

interface CardGalleryProps {
  cards: CardData[];
  totalCount: number;
  selectedCard: CardData;
  onSelectCard: (card: CardData) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  selectedWeek: FilterWeek;
  onWeekChange: (week: FilterWeek) => void;
  selectedProgress: FilterProgress;
  onProgressChange: (p: FilterProgress) => void;
  progress: ProgressMap;
  onToggleProgress: (cardNumber: string) => void;
  exportProgress: () => string;
  importProgress: (text: string) => { progress: number; cards: number };
}

const selectClass =
  'w-full rounded-sm border border-rule bg-paper px-2 py-1.5 text-sm text-ink focus-visible:border-royal';

export const CardGallery: React.FC<CardGalleryProps> = ({
  cards,
  totalCount,
  selectedCard,
  onSelectCard,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedWeek,
  onWeekChange,
  selectedProgress,
  onProgressChange,
  progress,
  onToggleProgress,
  exportProgress,
  importProgress,
}) => {
  const [backupNote, setBackupNote] = useState('');
  const importRef = useRef<HTMLInputElement>(null);
  const madeCount = Object.keys(progress).length;

  const handleExport = () => {
    const blob = new Blob([exportProgress()], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-papai-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupNote('已匯出進度與自訂卡片');
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    try {
      const r = importProgress(await file.text());
      setBackupNote(`已合併 ${r.progress} 張進度` + (r.cards ? `、${r.cards} 張自訂卡片` : ''));
    } catch {
      setBackupNote('匯入失敗：請選擇由本頁匯出的 JSON 檔');
    }
  };

  const listRef = useRef<HTMLDivElement>(null);

  // Keep the picked card in view inside the list (e.g. the default card 21, or a random pick)
  useEffect(() => {
    const list = listRef.current;
    const row = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!list || !row) return;
    const top = row.offsetTop - list.offsetTop;
    if (top < list.scrollTop || top + row.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = top - list.clientHeight / 2 + row.offsetHeight / 2;
    }
  }, [selectedCard.id]);

  const isFiltered =
    searchQuery !== '' || selectedCategory !== 'ALL' || selectedWeek !== 'ALL' || selectedProgress !== 'ALL';

  const resetFilters = () => {
    onProgressChange('ALL');
    onSearchChange('');
    onCategoryChange('ALL');
    onWeekChange('ALL');
  };

  // Group by week, keeping the order the data is written in
  const groups: { week: string; cards: CardData[] }[] = [];
  cards.forEach((c) => {
    const last = groups[groups.length - 1];
    if (last && last.week === c.week) last.cards.push(c);
    else groups.push({ week: c.week, cards: [c] });
  });

  return (
    <div className="flex h-full max-h-[80vh] flex-col lg:max-h-none">
      <div className="space-y-3 border-b border-rule p-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft"
            aria-hidden
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="搜尋卡牌"
            placeholder="搜尋卡號、標題或情境，例如 21、合約"
            className="w-full rounded-sm border border-rule bg-white py-2 pl-9 pr-9 text-sm text-ink placeholder:text-ink-soft focus-visible:border-royal [&::-webkit-search-cancel-button]:hidden"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              aria-label="清除搜尋"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-ink-soft hover:text-ink"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 text-sm">
          <label className="block">
            <span className="mb-1 block text-xs text-ink-soft">週數</span>
            <select
              value={String(selectedWeek)}
              onChange={(e) => {
                const v = e.target.value;
                onWeekChange(v === 'ALL' || v === 'BONUS' ? v : (Number(v) as FilterWeek));
              }}
              className={selectClass}
            >
              {WEEKS.map((w) => (
                <option key={String(w.value)} value={String(w.value)}>
                  {w.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs text-ink-soft">分類</span>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value as FilterCategory)}
              className={selectClass}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'ALL' ? '全部分類' : cat}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-xs text-ink-soft">輪播</span>
            <select
              value={selectedProgress}
              onChange={(e) => onProgressChange(e.target.value as FilterProgress)}
              className={selectClass}
            >
              <option value="ALL">全部</option>
              <option value="DONE">已製作</option>
              <option value="TODO">未製作</option>
            </select>
          </label>
        </div>

        <div className="flex items-center justify-between gap-3 text-sm text-ink-soft" aria-live="polite">
          <span>
            {isFiltered ? `找到 ${cards.length} / ${totalCount} 張` : `共 ${totalCount} 張`}
            <span className="ml-3 text-royal">
              已製作輪播 {madeCount} / {totalCount}
            </span>
          </span>
          {isFiltered && (
            <button onClick={resetFilters} className="text-royal underline underline-offset-2 hover:text-royal-deep">
              重設篩選
            </button>
          )}
        </div>
      </div>

      <div ref={listRef} className="relative flex-1 overflow-y-auto">
        {cards.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="font-medium">找不到相符的卡牌</p>
            <p className="mt-1 text-sm text-ink-soft">
              試試輸入卡號（如 21）或標題關鍵字，或重設篩選。
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 rounded-sm border border-rule px-3 py-1.5 text-sm hover:border-royal hover:text-royal"
            >
              重設篩選
            </button>
          </div>
        ) : (
          groups.map((g, gi) => (
            <section key={`${g.week}-${gi}`}>
              <h2 className="sticky top-0 z-10 border-b border-rule bg-ground px-4 py-1.5 text-sm font-medium text-ink-soft">
                {g.week}
              </h2>
              <ul>
                {g.cards.map((c) => {
                  const isSelected = c.id === selectedCard.id;
                  const isMade = Boolean(progress[c.cardNumber]);
                  return (
                    <li
                      key={c.id}
                      className={`flex items-stretch border-b border-l-[3px] border-b-rule/70 transition-colors ${
                        isSelected ? 'border-l-brass bg-brass-wash/60' : 'border-l-transparent hover:bg-ground/60'
                      }`}
                    >
                      <label className="flex cursor-pointer items-center pl-3 pr-1">
                        <input
                          type="checkbox"
                          checked={isMade}
                          onChange={() => onToggleProgress(c.cardNumber)}
                          aria-label={`卡 ${c.cardNumber} ${c.chineseTitle}：輪播已製作`}
                          className="h-4 w-4 cursor-pointer accent-royal"
                        />
                      </label>
                      <button
                        onClick={() => onSelectCard(c)}
                        aria-current={isSelected ? 'true' : undefined}
                        className="grid min-w-0 flex-1 grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-x-2 py-2.5 pl-2 pr-4 text-left"
                      >
                        <span className="tabular font-display text-lg font-black text-royal">
                          {c.cardNumber}
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate font-medium leading-snug">{c.chineseTitle}</span>
                          <span className="block truncate text-xs text-ink-soft">{c.englishTitle}</span>
                        </span>
                        <span className="text-xs text-ink-soft">{c.category}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-rule px-4 py-2 text-sm">
        <button onClick={handleExport} className="text-royal underline underline-offset-2 hover:text-royal-deep">
          匯出進度
        </button>
        <button
          onClick={() => importRef.current?.click()}
          className="text-royal underline underline-offset-2 hover:text-royal-deep"
        >
          匯入進度
        </button>
        <input ref={importRef} type="file" accept="application/json,.json" onChange={handleImport} className="hidden" />
        <span className="text-xs text-ink-soft" role="status">
          {backupNote || '進度只存在這個瀏覽器，換裝置前請先匯出'}
        </span>
      </div>
    </div>
  );
};
