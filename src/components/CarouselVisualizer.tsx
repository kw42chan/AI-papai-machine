import React, { useState } from 'react';
import { CarouselSlide } from '../types/card';
import { ChevronLeft, ChevronRight, Copy, Check, Smartphone, Sparkles, Hash } from 'lucide-react';

interface CarouselVisualizerProps {
  slides?: CarouselSlide[];
  chineseTitle: string;
  cardNumber: string;
  igCaption?: string;
  hashtags?: string[];
}

export const CarouselVisualizer: React.FC<CarouselVisualizerProps> = ({
  slides = [],
  chineseTitle,
  cardNumber,
  igCaption,
  hashtags,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [copiedCaption, setCopiedCaption] = useState(false);

  if (!slides || slides.length === 0) {
    return (
      <div className="text-center py-8 text-slate-500 text-sm">
        此卡片未設定分鏡資訊
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCopyCaption = () => {
    if (igCaption) {
      navigator.clipboard.writeText(igCaption);
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 2000);
    }
  };

  const getSlideTheme = (type: string) => {
    switch (type) {
      case 'cover':
        return {
          bg: 'from-purple-900/60 via-slate-900 to-black',
          badge: 'bg-purple-600/30 text-purple-300 border-purple-500/40',
          accent: 'text-purple-400',
        };
      case 'pain':
        return {
          bg: 'from-rose-950/60 via-slate-900 to-black',
          badge: 'bg-rose-600/30 text-rose-300 border-rose-500/40',
          accent: 'text-rose-400',
        };
      case 'solution':
      case 'process':
        return {
          bg: 'from-blue-950/60 via-slate-900 to-black',
          badge: 'bg-blue-600/30 text-blue-300 border-blue-500/40',
          accent: 'text-blue-400',
        };
      case 'outcome':
        return {
          bg: 'from-emerald-950/60 via-slate-900 to-black',
          badge: 'bg-emerald-600/30 text-emerald-300 border-emerald-500/40',
          accent: 'text-emerald-400',
        };
      case 'cta':
        return {
          bg: 'from-amber-950/60 via-slate-900 to-black',
          badge: 'bg-amber-600/30 text-amber-300 border-amber-500/40',
          accent: 'text-amber-400',
        };
      default:
        return {
          bg: 'from-slate-900 via-slate-950 to-black',
          badge: 'bg-slate-700/30 text-slate-300 border-slate-600/40',
          accent: 'text-slate-400',
        };
    }
  };

  const theme = getSlideTheme(currentSlide.type);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-purple-400" />
          <h3 className="font-bold text-white text-base">
            IG Carousel 輪播分鏡視覺化
          </h3>
          <span className="text-xs bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded-full border border-purple-500/30">
            {slides.length} 版分鏡
          </span>
        </div>

        {igCaption && (
          <button
            onClick={handleCopyCaption}
            className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 transition"
          >
            {copiedCaption ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>已複製 IG 文案</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>一鍵複製 IG 文案</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Main Slide Mockup */}
      <div className="relative max-w-[380px] mx-auto">
        <div
          className={`relative aspect-[4/5] rounded-2xl bg-gradient-to-b ${theme.bg} border-2 border-slate-700 p-6 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300`}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          {/* Top Bar: Brand & Slide Indicator */}
          <div className="flex items-center justify-between text-xs z-10">
            <span className="font-mono text-slate-400 tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> @ai.papai
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${theme.badge}`}>
              {currentSlide.slideNumber} / {slides.length} · {currentSlide.label}
            </span>
          </div>

          {/* Slide Main Body Content */}
          <div className="my-auto z-10 text-center px-2">
            <div className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
              CARD #{cardNumber}
            </div>

            <h4 className="text-xl font-black text-white leading-tight mb-3">
              {currentSlide.title}
            </h4>

            <p className="text-sm text-slate-300 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm">
              {currentSlide.description}
            </p>
          </div>

          {/* Slide Footer */}
          <div className="z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <span className="truncate max-w-[200px]">{chineseTitle}</span>
            <span className="font-mono">SWIPE ➔</span>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-800/90 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 shadow-lg transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-800/90 border border-slate-600 text-white flex items-center justify-center hover:bg-slate-700 shadow-lg transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Thumbnails / Indicator bar */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {slides.map((s, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition ${
              currentSlideIndex === index
                ? 'bg-purple-600 text-white font-bold shadow'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            P{s.slideNumber} {s.label}
          </button>
        ))}
      </div>

      {/* Hashtags Strip */}
      {hashtags && hashtags.length > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-1.5 items-center">
          <Hash className="w-3.5 h-3.5 text-slate-500" />
          {hashtags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
