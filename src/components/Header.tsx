import React from 'react';
import { Sparkles, ScanText, Dices, Layers, ShieldCheck, Share2 } from 'lucide-react';

interface HeaderProps {
  onOpenOcr: () => void;
  onRandomCard: () => void;
  totalCards: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenOcr,
  onRandomCard,
  totalCards,
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 p-0.5 shadow-lg shadow-purple-900/30 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-black tracking-tight text-white">
                AI 拍拍機
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/50 font-mono">
                DECK & STUDIO
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              香港白領專用 AI Agent 實戰情境卡牌 · 雙語 OCR 檢索與 IG 分鏡內容庫
            </p>
          </div>
        </div>

        {/* Middle Stats Chips */}
        <div className="hidden md:flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>收錄 <strong className="text-white font-mono">{totalCards}</strong> 張實戰卡</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>雙語 OCR 索引</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            <Share2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>IG 輪播分鏡</span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onRandomCard}
            className="flex items-center gap-1.5 text-xs bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 px-3 py-2 rounded-xl transition"
          >
            <Dices className="w-4 h-4 text-purple-400" />
            <span className="hidden sm:inline">隨機拍卡</span>
          </button>

          <button
            onClick={onOpenOcr}
            className="flex items-center gap-1.5 text-xs bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold px-3.5 py-2 rounded-xl transition shadow-lg shadow-purple-600/30"
          >
            <ScanText className="w-4 h-4" />
            <span>上傳卡牌 OCR</span>
          </button>
        </div>
      </div>
    </header>
  );
};
