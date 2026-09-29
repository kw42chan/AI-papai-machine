import React, { useEffect, useState } from 'react';
import { CarouselSlide } from '../types/card';
import { ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

interface CarouselVisualizerProps {
  slides?: CarouselSlide[];
  chineseTitle: string;
  cardNumber: string;
  igCaption?: string;
  hashtags?: string[];
}

type SlideTone = 'dark' | 'light' | 'result';

// Three tones instead of one colour per slide type: the deck's purple opens and
// closes the post, results get the brass wash, everything between stays paper.
const toneOf = (type: CarouselSlide['type']): SlideTone => {
  if (type === 'cover' || type === 'cta') return 'dark';
  if (type === 'outcome') return 'result';
  return 'light';
};

const TONE_CLASS: Record<SlideTone, { box: string; muted: string; title: string }> = {
  dark: { box: 'bg-royal-deep text-white', muted: 'text-[#cfc4ea]', title: 'text-white' },
  light: { box: 'bg-paper text-ink', muted: 'text-ink-soft', title: 'text-ink' },
  result: { box: 'bg-brass-wash text-ink', muted: 'text-brass-ink', title: 'text-ink' },
};

export const CarouselVisualizer: React.FC<CarouselVisualizerProps> = ({
  slides = [],
  chineseTitle,
  cardNumber,
  igCaption,
  hashtags,
}) => {
  const [index, setIndex] = useState(0);
  const [copiedCaption, setCopiedCaption] = useState(false);

  // A new card starts back on its cover
  useEffect(() => {
    setIndex(0);
  }, [cardNumber]);

  if (!slides || slides.length === 0) {
    return <p className="py-8 text-ink-soft">這張卡片還沒有輪播分鏡。</p>;
  }

  const current = slides[index] || slides[0];
  const tone = TONE_CLASS[toneOf(current.type)];
  const go = (delta: number) => setIndex((i) => (i + delta + slides.length) % slides.length);

  const handleCopyCaption = () => {
    if (!igCaption) return;
    navigator.clipboard.writeText(igCaption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
      <div className="mx-auto w-full max-w-[380px]">
        <div
          key={current.slideNumber}
          className={`deal flex aspect-[4/5] flex-col justify-between rounded-sm border border-rule p-7 ${tone.box}`}
        >
          <div className={`flex items-center justify-between text-sm ${tone.muted}`}>
            <span>@ai.papai</span>
            <span className="tabular">
              {current.slideNumber} / {slides.length}
            </span>
          </div>

          <div>
            <p className={`mb-2 text-sm ${current.type === 'pain' ? 'font-medium text-stamp' : tone.muted}`}>
              {current.label}
            </p>
            <h4 className={`font-display text-[1.65rem] font-black leading-tight ${tone.title}`}>
              {current.title}
            </h4>
            <p className={`mt-3 leading-relaxed ${tone.muted}`}>{current.description}</p>
          </div>

          <p className={`border-t pt-3 text-sm ${tone.muted} ${toneOf(current.type) === 'dark' ? 'border-white/20' : 'border-ink/15'}`}>
            {chineseTitle}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <button
            onClick={() => go(-1)}
            className="flex items-center gap-1 rounded-sm border border-rule px-3 py-1.5 text-sm hover:border-royal hover:text-royal"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            <span>上一頁</span>
          </button>
          <button
            onClick={() => go(1)}
            className="flex items-center gap-1 rounded-sm border border-rule px-3 py-1.5 text-sm hover:border-royal hover:text-royal"
          >
            <span>下一頁</span>
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>

        {/* Filmstrip: the whole post at a glance */}
        <ol className="mt-4 grid grid-cols-6 gap-2">
          {slides.map((s, i) => {
            const t = TONE_CLASS[toneOf(s.type)];
            return (
              <li key={s.slideNumber}>
                <button
                  onClick={() => setIndex(i)}
                  aria-label={`第 ${s.slideNumber} 頁：${s.label}`}
                  aria-current={i === index ? 'true' : undefined}
                  className={`flex aspect-[4/5] w-full flex-col justify-end rounded-[2px] p-1 text-left text-[10px] leading-tight ${t.box} ${
                    i === index ? 'outline outline-2 outline-offset-2 outline-royal' : 'border border-rule hover:border-royal'
                  }`}
                >
                  <span className="tabular">{s.slideNumber}</span>
                  <span className="truncate">{s.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="max-w-[38em]">
        {igCaption && (
          <>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h3 className="text-base font-bold">IG 文案</h3>
              <button
                onClick={handleCopyCaption}
                className="flex items-center gap-1.5 rounded-sm border border-rule bg-paper px-3 py-1.5 text-sm transition-colors hover:border-royal hover:text-royal"
              >
                {copiedCaption ? <Check className="h-4 w-4 text-royal" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                <span>{copiedCaption ? '已複製' : '複製文案'}</span>
              </button>
            </div>
            <div className="whitespace-pre-wrap rounded-sm border border-rule bg-paper p-4 text-sm leading-relaxed">
              {igCaption}
            </div>
          </>
        )}
        {hashtags && hashtags.length > 0 && (
          <p className="mt-3 flex flex-wrap gap-x-3 text-sm text-royal">
            {hashtags.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};
