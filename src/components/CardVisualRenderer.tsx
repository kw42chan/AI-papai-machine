import React, { useState } from 'react';
import { CardData } from '../types/card';
import { Check, Copy } from 'lucide-react';

interface CardVisualRendererProps {
  card: CardData;
  customImageUrl?: string;
  onCopyPrompt?: () => void;
}

/** Gold circuit traces in the corners, echoing the printed deck. */
const CircuitLines: React.FC = () => (
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full"
    viewBox="0 0 420 588"
    preserveAspectRatio="none"
    fill="none"
    stroke="#b48a2c"
    strokeWidth="1"
    aria-hidden
  >
    <g opacity="0.55">
      <path d="M14 96 V52 Q14 14 52 14 H120 L138 32 H208" />
      <path d="M26 96 V60 Q26 26 60 26 H108" />
      <circle cx="212" cy="32" r="3" fill="#b48a2c" />
      <path d="M406 470 V540 Q406 574 372 574 H340" />
      <path d="M394 470 V532 Q394 562 364 562" />
      <circle cx="406" cy="462" r="3" fill="#b48a2c" />
    </g>
  </svg>
);

/** The deck's robot, drawn as brass line art. */
const Mascot: React.FC = () => (
  <svg
    viewBox="0 0 96 96"
    className="h-28 w-28"
    fill="none"
    stroke="#b48a2c"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M48 16 V8" />
    <circle cx="48" cy="6" r="3" fill="#b48a2c" />
    <rect x="22" y="16" width="52" height="38" rx="10" />
    <rect x="14" y="28" width="8" height="14" rx="2" />
    <rect x="74" y="28" width="8" height="14" rx="2" />
    <circle cx="38" cy="34" r="4" fill="#b48a2c" />
    <circle cx="58" cy="34" r="4" fill="#b48a2c" />
    <path d="M40 45 H56" />
    <path d="M30 60 H66 V84 Q66 90 60 90 H36 Q30 90 30 84 Z" />
    <circle cx="48" cy="74" r="5" />
    <path d="M30 68 L18 78" />
    <path d="M66 68 L78 58" />
  </svg>
);

export const CardVisualRenderer: React.FC<CardVisualRendererProps> = ({
  card,
  customImageUrl,
  onCopyPrompt,
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'photo'>(customImageUrl ? 'photo' : 'card');

  const handleCopy = () => {
    navigator.clipboard.writeText(card.promptShort);
    setCopiedPrompt(true);
    if (onCopyPrompt) onCopyPrompt();
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const tabClass = (active: boolean) =>
    `px-3 py-1 text-sm transition-colors ${
      active ? 'border-b-2 border-royal font-medium text-royal' : 'border-b-2 border-transparent text-ink-soft hover:text-ink'
    }`;

  return (
    <div className="mx-auto w-full max-w-[420px]">
      {customImageUrl && (
        <div className="mb-3 flex gap-2 border-b border-rule" role="tablist" aria-label="卡牌檢視方式">
          <button role="tab" aria-selected={viewMode === 'card'} onClick={() => setViewMode('card')} className={tabClass(viewMode === 'card')}>
            數位卡牌
          </button>
          <button role="tab" aria-selected={viewMode === 'photo'} onClick={() => setViewMode('photo')} className={tabClass(viewMode === 'photo')}>
            上傳的照片
          </button>
        </div>
      )}

      {viewMode === 'photo' && customImageUrl ? (
        <div className="aspect-[63/88] w-full overflow-hidden rounded-[14px] bg-royal-deep">
          <img src={customImageUrl} alt={`卡 ${card.cardNumber} 的上傳照片`} className="h-full w-full object-contain" />
        </div>
      ) : (
        <article
          key={card.id}
          id={`visual-card-${card.cardNumber}`}
          className="deal relative flex aspect-[63/88] w-full flex-col overflow-hidden rounded-[14px] bg-royal-deep p-6 text-[#efeaf9] shadow-[0_18px_30px_-18px_rgba(29,22,51,0.7)]"
        >
          {/* Printed inner border */}
          <div className="pointer-events-none absolute inset-2 rounded-[9px] border border-brass/70" aria-hidden />
          <CircuitLines />

          <header className="relative flex items-start justify-between">
            <span className="tabular font-display text-5xl font-black leading-none text-brass">
              {card.cardNumber}
            </span>
            <span className="pt-1 text-right text-sm leading-tight text-[#cfc4ea]">
              <span className="block">{card.week}</span>
              <span className="block">{card.category}</span>
            </span>
          </header>

          <div className="relative mt-6">
            <p className="text-sm text-[#cfc4ea]">{card.englishTitle}</p>
            <h2 className="font-display text-[1.75rem] font-black leading-tight text-white">
              {card.chineseTitle}
            </h2>
          </div>

          <p className="relative mt-4 border-t border-white/15 pt-3 text-sm leading-relaxed text-[#e4ddf5]">
            {card.scenarioSummary}
          </p>

          {/* Speech bubble: the mascot speaks the prompt */}
          <p className="relative mt-4 rounded-md bg-[#f8f7fb] px-3 py-2 text-[13px] leading-relaxed text-ink before:absolute before:-bottom-1.5 before:left-12 before:h-3 before:w-3 before:rotate-45 before:bg-[#f8f7fb] before:content-['']">
            {card.promptShort}
          </p>

          <div className="relative flex flex-1 items-end pb-3 pl-6" aria-hidden>
            <Mascot />
          </div>

          <footer className="relative">
            <ul className="grid grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-2 text-center text-xs leading-snug text-[#e4ddf5]">
              {card.benefits.map((b, idx) => (
                <li key={idx} className="px-2">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between text-xs text-[#a99fc9]">
              <span>AI 拍拍機</span>
              <span>Rare Purple Strategy</span>
            </div>
          </footer>
        </article>
      )}

      <div className="mt-3 flex items-center justify-between gap-3 text-sm">
        <button
          onClick={handleCopy}
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-sm border border-rule px-3 py-1.5 transition-colors hover:border-royal hover:text-royal"
        >
          {copiedPrompt ? <Check className="h-4 w-4 text-royal" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
          <span>{copiedPrompt ? '已複製' : '複製指令'}</span>
        </button>
        <span className="truncate text-xs text-ink-soft" title={card.imageFileName}>
          {card.imageFileName || `card_${card.cardNumber}.png`}
        </span>
      </div>
    </div>
  );
};
