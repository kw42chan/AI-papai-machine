import React, { useState } from 'react';
import { CardData } from '../types/card';
import { Sparkles, Copy, Check, Download, Layers, ShieldCheck, Zap, Bot } from 'lucide-react';

interface CardVisualRendererProps {
  card: CardData;
  customImageUrl?: string;
  onCopyPrompt?: () => void;
}

export const CardVisualRenderer: React.FC<CardVisualRendererProps> = ({
  card,
  customImageUrl,
  onCopyPrompt,
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'photo'>(customImageUrl ? 'photo' : 'card');

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(card.promptShort);
    setCopiedPrompt(true);
    if (onCopyPrompt) onCopyPrompt();
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '項目管理':
        return 'from-blue-600/30 to-indigo-600/30 border-blue-400/40 text-blue-300';
      case '日常文檔':
        return 'from-emerald-600/30 to-teal-600/30 border-emerald-400/40 text-emerald-300';
      case '商務溝通':
        return 'from-purple-600/30 to-pink-600/30 border-purple-400/40 text-purple-300';
      case '數據分析':
        return 'from-cyan-600/30 to-sky-600/30 border-cyan-400/40 text-cyan-300';
      case '財務預算':
        return 'from-amber-600/30 to-yellow-600/30 border-amber-400/40 text-amber-300';
      case '客戶服務':
        return 'from-rose-600/30 to-orange-600/30 border-rose-400/40 text-rose-300';
      case '商業策略':
        return 'from-violet-600/30 to-fuchsia-600/30 border-violet-400/40 text-violet-300';
      default:
        return 'from-slate-700/30 to-slate-800/30 border-slate-500/40 text-slate-300';
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[420px] mx-auto">
      {/* View Switcher if custom photo is available */}
      {customImageUrl && (
        <div className="flex items-center gap-2 mb-3 bg-slate-900/80 p-1 rounded-lg border border-slate-700 text-xs">
          <button
            onClick={() => setViewMode('card')}
            className={`px-3 py-1 rounded font-medium transition ${
              viewMode === 'card'
                ? 'bg-purple-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            數位卡牌 (Cyber Deck)
          </button>
          <button
            onClick={() => setViewMode('photo')}
            className={`px-3 py-1 rounded font-medium transition ${
              viewMode === 'photo'
                ? 'bg-purple-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            上傳實體照 (Original Photo)
          </button>
        </div>
      )}

      {/* Main Card Container */}
      {viewMode === 'photo' && customImageUrl ? (
        <div className="relative rounded-2xl overflow-hidden border-2 border-slate-600 shadow-2xl bg-black aspect-[3/4.2] w-full flex items-center justify-center">
          <img
            src={customImageUrl}
            alt={`Card ${card.cardNumber}`}
            className="w-full h-full object-contain"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-slate-900/85 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300 flex justify-between items-center">
            <span>📷 已上傳卡牌影像：卡 {card.cardNumber}</span>
            <button
              onClick={() => setViewMode('card')}
              className="text-purple-400 hover:underline flex items-center gap-1"
            >
              <Layers className="w-3 h-3" /> 切換數位版
            </button>
          </div>
        </div>
      ) : (
        <div
          id={`visual-card-${card.cardNumber}`}
          className="relative w-full aspect-[3/4.4] rounded-2xl gunmetal-card-border metallic-shine shadow-2xl p-5 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#181d2a] via-[#10141f] to-[#0b0e17] transition-all hover:scale-[1.01] duration-300 select-none group"
        >
          {/* Futuristic Circuit & Glow background */}
          <div className="absolute inset-0 opacity-15 circuit-bg pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Card Header: Badges & Number */}
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/40 text-purple-300 text-[11px] font-semibold tracking-wider">
                  {card.week}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-md bg-gradient-to-r ${getCategoryColor(
                    card.category
                  )} border text-[11px] font-medium tracking-wide`}
                >
                  {card.category}
                </span>
              </div>

              {/* Card Number Badge */}
              <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg px-2.5 py-1 shadow-inner">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-300">
                  CARD
                </span>
                <span className="text-base font-black font-mono text-white tracking-wider">
                  {card.cardNumber}
                </span>
              </div>
            </div>

            {/* Bilingual Titles */}
            <div className="mt-4 pt-1">
              <div className="text-[11px] font-bold tracking-widest text-purple-400/90 uppercase font-mono mb-0.5">
                {card.englishTitle}
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight leading-snug drop-shadow-sm flex items-center gap-2">
                {card.chineseTitle}
              </h2>
            </div>

            {/* Scenario Box */}
            <div className="mt-3 bg-slate-900/70 border border-slate-700/60 rounded-xl p-2.5 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>實戰情境</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {card.scenarioSummary}
              </p>
            </div>
          </div>

          {/* Middle: AI Prompt Speech Bubble */}
          <div className="relative z-10 my-3">
            <div className="relative bg-gradient-to-r from-purple-950/70 via-slate-900/90 to-indigo-950/70 border border-purple-500/30 rounded-xl p-3 shadow-lg">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1 text-[11px] font-bold text-purple-300">
                  <Bot className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                  <span>AI Agent 操作指令</span>
                </div>
                <button
                  onClick={handleCopy}
                  title="複製指令"
                  className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-purple-600/30 hover:bg-purple-600/60 border border-purple-400/40 text-purple-200 transition"
                >
                  {copiedPrompt ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>已複製</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>複製</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-slate-100 font-mono leading-relaxed line-clamp-4 bg-black/40 p-2 rounded-lg border border-white/5">
                {card.promptShort}
              </p>
            </div>
          </div>

          {/* Bottom: Expected Outcomes / Benefits */}
          <div className="relative z-10">
            <div className="text-[11px] font-semibold text-slate-400 mb-1.5 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>卡片預期效益</span>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {card.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/60 px-2 py-1 rounded-md border border-slate-800"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate">{b}</span>
                </div>
              ))}
            </div>

            {/* Footer Tech Watermark */}
            <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400/70" /> AI 拍拍機 · CARD {card.cardNumber}
              </span>
              <span>RARE PURPLE STRATEGY</span>
            </div>
          </div>
        </div>
      )}

      {/* Action bar under card */}
      <div className="flex items-center justify-between w-full mt-3 px-1 text-xs text-slate-400">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 hover:text-purple-300 transition py-1 px-2.5 rounded-lg hover:bg-slate-800"
        >
          {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedPrompt ? '已複製指令到剪貼簿' : '一鍵複製 Prompt 指令'}</span>
        </button>

        <span className="text-[11px] text-slate-500 font-mono">
          {card.imageFileName || `card_${card.cardNumber}.png`}
        </span>
      </div>
    </div>
  );
};
