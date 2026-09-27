import React, { useState } from 'react';
import { CardData } from '../types/card';
import { CardVisualRenderer } from './CardVisualRenderer';
import { CarouselVisualizer } from './CarouselVisualizer';
import {
  Copy,
  Check,
  Bot,
  Zap,
  Quote,
  AlertCircle,
  Sparkles,
  FileText,
  Share2,
  ExternalLink,
  Code2,
  CheckCircle2,
  ScanText
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CardDetailViewProps {
  card: CardData;
  customImageUrl?: string;
  onOpenOcrModal?: () => void;
}

export const CardDetailView: React.FC<CardDetailViewProps> = ({
  card,
  customImageUrl,
  onOpenOcrModal,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'carousel' | 'rawMarkdown'>('overview');
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#3b82f6', '#10b981'],
    });
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(card.promptShort);
    setCopiedPrompt(true);
    triggerConfetti();
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyCaption = () => {
    if (card.igCaption) {
      navigator.clipboard.writeText(card.igCaption);
      setCopiedCaption(true);
      triggerConfetti();
      setTimeout(() => setCopiedCaption(false), 2000);
    }
  };

  const generateRawMarkdown = () => {
    return `${card.articleNumber ? `${card.articleNumber}. ` : ''}${card.articleTitle || card.chineseTitle}

🎴 卡片原始資料（卡 ${card.cardNumber}）

中文標題：${card.chineseTitle} ｜ English：${card.englishTitle}
情境：${card.scenarioSummary}
輸入指令：${card.promptShort}
卡片效益：${card.benefits.join(' ')}

🎣 Hook（封面）

${card.hook || `「${card.chineseTitle}，不再手忙腳亂。」`}

😩 白領痛點
${card.painPoints || card.scenarioSummary}

🤖 AI Agent 點樣幫到手
${card.aiHelp ? card.aiHelp.map((h) => `- ${h}`).join('\n') : ''}

✍️ IG 文案
${card.igCaption || ''}

📱 Carousel 分鏡（${card.carouselSlides?.length || 6} 版）
${
  card.carouselSlides
    ? card.carouselSlides
        .map((s) => `${s.label}：${s.title} - ${s.description}`)
        .join('\n')
    : ''
}

#Hashtags：${card.hashtags ? card.hashtags.join(' ') : ''}
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateRawMarkdown());
    setCopiedMarkdown(true);
    triggerConfetti();
    setTimeout(() => setCopiedMarkdown(false), 2000);
  };

  return (
    <div className="h-full flex flex-col bg-slate-950/60 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Top Banner / Breadcrumb */}
      <div className="border-b border-slate-800 bg-slate-900/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-purple-600/20 text-purple-300 border border-purple-500/40 px-3 py-1 rounded-lg text-xs font-mono font-bold">
            <span>CARD</span>
            <span className="text-base text-white">{card.cardNumber}</span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {card.week}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/40">
                {card.category}
              </span>
            </div>
            <h1 className="text-lg font-bold text-white mt-1 leading-snug">
              {card.articleTitle || `${card.chineseTitle} (${card.englishTitle})`}
            </h1>
          </div>
        </div>

        {/* Tab Switcher & Quick Actions */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex items-center text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                activeTab === 'overview'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              卡片情報 & Prompt
            </button>
            <button
              onClick={() => setActiveTab('carousel')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                activeTab === 'carousel'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              IG Carousel 分鏡
            </button>
            <button
              onClick={() => setActiveTab('rawMarkdown')}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                activeTab === 'rawMarkdown'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              原始 Markdown
            </button>
          </div>

          {onOpenOcrModal && (
            <button
              onClick={onOpenOcrModal}
              title="卡牌 OCR 重新掃描識別"
              className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-500/30 px-3 py-1.5 rounded-xl transition"
            >
              <ScanText className="w-4 h-4 text-purple-400" />
              <span>OCR 掃描</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {activeTab === 'rawMarkdown' ? (
          /* Raw Markdown Viewer */
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                ai-papai-ig-carousel-ideas-all.md 內之原始文本
              </span>
              <button
                onClick={handleCopyMarkdown}
                className="flex items-center gap-1.5 text-xs bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-lg font-medium transition shadow-md"
              >
                {copiedMarkdown ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedMarkdown ? '已複製 Markdown' : '一鍵複製 Markdown'}</span>
              </button>
            </div>
            <pre className="p-5 rounded-2xl bg-black/70 border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-purple-900 selection:text-white">
              {generateRawMarkdown()}
            </pre>
          </div>
        ) : activeTab === 'carousel' ? (
          /* Carousel Visualizer */
          <CarouselVisualizer
            slides={card.carouselSlides}
            chineseTitle={card.chineseTitle}
            cardNumber={card.cardNumber}
            igCaption={card.igCaption}
            hashtags={card.hashtags}
          />
        ) : (
          /* Overview & Rich Details View */
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
            {/* Left Column: Visual Card Replica */}
            <div className="xl:col-span-5 flex flex-col items-center">
              <CardVisualRenderer
                card={card}
                customImageUrl={customImageUrl}
                onCopyPrompt={handleCopyPrompt}
              />
            </div>

            {/* Right Column: Structured Markdown Content */}
            <div className="xl:col-span-7 space-y-6">
              {/* Primary AI Prompt Box */}
              <div className="bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-indigo-950/40 border border-purple-500/40 rounded-2xl p-5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-purple-400" />
                    <h3 className="font-bold text-white text-base">
                      輸入指令（AI Agent Prompt）
                    </h3>
                  </div>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-1.5 text-xs bg-purple-600 hover:bg-purple-500 text-white px-3.5 py-1.5 rounded-xl font-semibold transition shadow-lg shadow-purple-600/30"
                  >
                    {copiedPrompt ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-300" />
                        <span>已複製指令！</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>複製指令</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-purple-500/20 text-slate-100 font-mono text-sm leading-relaxed relative z-10">
                  {card.promptShort}
                </div>

                {/* Benefits */}
                <div className="mt-4 pt-3 border-t border-purple-500/20 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-purple-300 font-semibold flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> 卡片效益：
                  </span>
                  {card.benefits.map((b, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-purple-900/40 text-purple-200 border border-purple-700/50 px-2.5 py-0.5 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hook (Cover) */}
              {card.hook && (
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                    <Quote className="w-4 h-4" />
                    <span>🎣 Hook（封面金句）</span>
                  </div>
                  <blockquote className="text-base font-semibold text-slate-100 border-l-4 border-amber-400 pl-4 py-1 italic">
                    {card.hook}
                  </blockquote>
                </div>
              )}

              {/* Workplace Pain Points */}
              {card.painPoints && (
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-400 uppercase tracking-wider mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>😩 香港白領痛點</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.painPoints}
                  </p>
                </div>
              )}

              {/* AI Agent Help Points */}
              {card.aiHelp && card.aiHelp.length > 0 && (
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span>🤖 AI Agent 點樣幫到手</span>
                  </div>
                  <ul className="space-y-2">
                    {card.aiHelp.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* IG Caption */}
              {card.igCaption && (
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                      <Share2 className="w-4 h-4" />
                      <span>✍️ IG 文案</span>
                    </div>
                    <button
                      onClick={handleCopyCaption}
                      className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-purple-300 px-3 py-1 rounded-lg border border-purple-500/30 transition"
                    >
                      {copiedCaption ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCaption ? '已複製文案' : '複製 IG 文案'}</span>
                    </button>
                  </div>
                  <div className="bg-black/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 whitespace-pre-wrap leading-relaxed font-sans max-h-60 overflow-y-auto">
                    {card.igCaption}
                  </div>

                  {card.hashtags && card.hashtags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {card.hashtags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-purple-400 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-800/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
