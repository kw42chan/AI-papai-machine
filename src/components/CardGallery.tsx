import React from 'react';
import { CardData, FilterCategory, FilterWeek } from '../types/card';
import { CATEGORIES, WEEKS } from '../data/cards';
import { Search, Sparkles, X, Dices, Layers } from 'lucide-react';

interface CardGalleryProps {
  cards: CardData[];
  selectedCard: CardData;
  onSelectCard: (card: CardData) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  selectedWeek: FilterWeek;
  onWeekChange: (week: FilterWeek) => void;
  onRandomCard: () => void;
}

export const CardGallery: React.FC<CardGalleryProps> = ({
  cards,
  selectedCard,
  onSelectCard,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedWeek,
  onWeekChange,
  onRandomCard,
}) => {
  return (
    <div className="h-full flex flex-col bg-slate-950/70 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Top Search & Filter Area */}
      <div className="p-4 border-b border-slate-800 space-y-3 bg-slate-900/80">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="搜尋卡號（如 21、卡 21）、中英標題或情境..."
            className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 pl-10 pr-9 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-xs transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Search Chips */}
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
            <span className="text-slate-500 shrink-0">快捷範例:</span>
            <button
              onClick={() => onSearchChange('21')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-purple-300 font-mono shrink-0 transition"
            >
              #21 項目章程
            </button>
            <button
              onClick={() => onSearchChange('01')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-purple-300 font-mono shrink-0 transition"
            >
              #01 長文件摘要
            </button>
            <button
              onClick={() => onSearchChange('合約')}
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 shrink-0 transition"
            >
              合約審查
            </button>
          </div>

          <button
            onClick={onRandomCard}
            title="隨機拍一張卡"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-600/30 hover:bg-purple-600/60 text-purple-200 border border-purple-500/40 shrink-0 transition"
          >
            <Dices className="w-3.5 h-3.5" />
            <span>隨機拍卡</span>
          </button>
        </div>

        {/* Week Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs no-scrollbar">
          {WEEKS.map((w) => (
            <button
              key={String(w.value)}
              onClick={() => onWeekChange(w.value as FilterWeek)}
              className={`px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition ${
                selectedWeek === w.value
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-800/70 text-slate-400 hover:text-slate-200'
              }`}
            >
              {w.label}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat as FilterCategory)}
              className={`px-2.5 py-0.5 rounded-full border transition whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600/30 border-blue-400 text-blue-200 font-semibold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-300 hover:border-slate-700'
              }`}
            >
              {cat === 'ALL' ? '全部分類' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Card Count Bar */}
      <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-purple-400" />
          <span>共找到 <strong className="text-white font-mono">{cards.length}</strong> 張卡牌</span>
        </span>
        {searchQuery && (
          <span className="text-[11px] text-purple-300 font-mono">
            搜尋「{searchQuery}」
          </span>
        )}
      </div>

      {/* Cards Scrollable List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {cards.length === 0 ? (
          <div className="text-center py-12 px-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-3 text-slate-500">
              <Search className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-300">找不到相符的卡牌</p>
            <p className="text-xs text-slate-500 mt-1">
              試試搜尋卡號「21」、標題「項目章程」或清除篩選條件
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onCategoryChange('ALL');
                onWeekChange('ALL');
              }}
              className="mt-3 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-purple-300 transition"
            >
              重設所有條件
            </button>
          </div>
        ) : (
          cards.map((c) => {
            const isSelected = c.id === selectedCard.id;
            return (
              <div
                key={c.id}
                onClick={() => onSelectCard(c)}
                className={`p-3 rounded-xl cursor-pointer border transition-all duration-200 select-none ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-950/80 to-slate-900 border-purple-500 shadow-lg shadow-purple-950/50 scale-[1.01]'
                    : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  {/* Left: Number & Titles */}
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-400'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      {c.cardNumber}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-white leading-tight">
                          {c.chineseTitle}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-purple-400/90 tracking-wide mt-0.5">
                        {c.englishTitle}
                      </div>
                    </div>
                  </div>

                  {/* Right Badges */}
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 font-mono">
                      {c.week}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/70 text-blue-300 border border-blue-900/50">
                      {c.category}
                    </span>
                  </div>
                </div>

                {/* Scenario preview */}
                <p className="text-xs text-slate-400 mt-2 line-clamp-1 pl-11">
                  {c.scenarioSummary}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
