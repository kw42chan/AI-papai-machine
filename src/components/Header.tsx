import React from 'react';
import { ScanText, Dices } from 'lucide-react';

interface HeaderProps {
  onOpenOcr: () => void;
  onRandomCard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOcr, onRandomCard }) => {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-between gap-4 px-4 lg:px-6">
        <h1 className="font-display text-xl font-black tracking-wide text-royal">
          AI 拍拍機
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={onRandomCard}
            className="flex items-center gap-1.5 rounded-sm border border-rule px-3 py-1.5 text-sm text-ink transition-colors hover:border-royal hover:text-royal"
          >
            <Dices className="h-4 w-4" aria-hidden />
            <span>隨機拍卡</span>
          </button>

          <button
            onClick={onOpenOcr}
            className="flex items-center gap-1.5 rounded-sm bg-royal px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-royal-deep"
          >
            <ScanText className="h-4 w-4" aria-hidden />
            <span>掃描卡牌</span>
          </button>
        </div>
      </div>
    </header>
  );
};
