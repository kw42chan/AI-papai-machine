import React, { useEffect, useState } from 'react';
import { CardData } from '../types/card';
import { CardVisualRenderer } from './CardVisualRenderer';
import { CarouselVisualizer } from './CarouselVisualizer';
import { Copy, Check } from 'lucide-react';

interface CardDetailViewProps {
  card: CardData;
  customImageUrl?: string;
  /** ISO time the carousel was last made or updated; undefined when not made yet */
  madeAt?: string;
  onToggleMade: () => void;
  onMarkUpdated: () => void;
  /** Only passed for cards created from a scan */
  onRemoveCard?: () => void;
}

type Tab = 'overview' | 'carousel' | 'rawMarkdown';

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: '卡片與指令' },
  { id: 'carousel', label: 'IG 輪播' },
  { id: 'rawMarkdown', label: '原始文本' },
];

const CopyButton: React.FC<{ onClick: () => void; copied: boolean; label: string; doneLabel?: string }> = ({
  onClick,
  copied,
  label,
  doneLabel = '已複製',
}) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 rounded-sm border border-rule bg-paper px-3 py-1.5 text-sm transition-colors hover:border-royal hover:text-royal"
  >
    {copied ? <Check className="h-4 w-4 text-royal" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
    <span>{copied ? doneLabel : label}</span>
  </button>
);

const SectionHeading: React.FC<{ children: React.ReactNode; tone?: 'stamp' }> = ({ children, tone }) => (
  <h3 className={`mb-2 text-base font-bold ${tone === 'stamp' ? 'text-stamp' : 'text-ink'}`}>{children}</h3>
);

export const CardDetailView: React.FC<CardDetailViewProps> = ({
  card,
  customImageUrl,
  madeAt,
  onToggleMade,
  onMarkUpdated,
  onRemoveCard,
}) => {
  const [confirmRemove, setConfirmRemove] = useState(false);
  useEffect(() => setConfirmRemove(false), [card.id]);
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [copied, setCopied] = useState<'prompt' | 'caption' | 'markdown' | null>(null);

  const copy = (kind: 'prompt' | 'caption' | 'markdown', text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(kind);
    setTimeout(() => setCopied((c) => (c === kind ? null : c)), 2000);
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

  return (
    <div className="px-4 pb-16 pt-6 lg:px-10 lg:pt-8">
      <div className="text-sm text-ink-soft">
        <span>{card.week}</span>
        <span className="ml-4">{card.category}</span>
      </div>
      <h2 className="mt-1 max-w-[34em] text-balance font-display text-2xl font-black leading-snug lg:text-[1.75rem]">
        {card.articleTitle || `${card.chineseTitle}（${card.englishTitle}）`}
      </h2>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={Boolean(madeAt)}
            onChange={onToggleMade}
            className="h-4 w-4 cursor-pointer accent-royal"
          />
          <span className="font-medium">輪播已製作</span>
        </label>
        {madeAt && (
          <>
            <span className="text-ink-soft">
              最後更新 {new Date(madeAt).toLocaleDateString('zh-HK', { year: 'numeric', month: 'numeric', day: 'numeric' })}
            </span>
            <button onClick={onMarkUpdated} className="text-royal underline underline-offset-2 hover:text-royal-deep">
              標記為今天已更新
            </button>
          </>
        )}
        {onRemoveCard &&
          (confirmRemove ? (
            <span className="flex items-center gap-3">
              <span className="text-stamp">刪除這張自訂卡片？</span>
              <button onClick={onRemoveCard} className="font-medium text-stamp underline underline-offset-2">
                確定刪除
              </button>
              <button onClick={() => setConfirmRemove(false)} className="text-ink-soft underline underline-offset-2">
                取消
              </button>
            </span>
          ) : (
            <button onClick={() => setConfirmRemove(true)} className="text-ink-soft underline underline-offset-2 hover:text-stamp">
              刪除自訂卡片
            </button>
          ))}
      </div>

      <div className="mt-5 flex gap-1 border-b border-rule" role="tablist" aria-label="卡片內容">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={activeTab === t.id}
            onClick={() => setActiveTab(t.id)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm transition-colors ${
              activeTab === t.id
                ? 'border-royal font-bold text-royal'
                : 'border-transparent text-ink-soft hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6" role="tabpanel">
        {activeTab === 'rawMarkdown' ? (
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-sm text-ink-soft">ai-papai-ig-carousel-ideas-all.md 內的原始文本</span>
              <CopyButton
                onClick={() => copy('markdown', generateRawMarkdown())}
                copied={copied === 'markdown'}
                label="複製 Markdown"
              />
            </div>
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-rule bg-paper p-5 text-[13px] leading-relaxed">
              {generateRawMarkdown()}
            </pre>
          </div>
        ) : activeTab === 'carousel' ? (
          <CarouselVisualizer
            slides={card.carouselSlides}
            chineseTitle={card.chineseTitle}
            cardNumber={card.cardNumber}
            igCaption={card.igCaption}
            hashtags={card.hashtags}
          />
        ) : (
          <div className="grid grid-cols-1 items-start gap-10 xl:grid-cols-[minmax(0,420px)_minmax(0,1fr)]">
            <div className="xl:sticky xl:top-20">
              <CardVisualRenderer card={card} customImageUrl={customImageUrl} />
            </div>

            <div className="max-w-[38em] space-y-8">
              <section>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <h3 className="text-base font-bold">輸入指令</h3>
                  <CopyButton onClick={() => copy('prompt', card.promptShort)} copied={copied === 'prompt'} label="複製指令" />
                </div>
                <p className="rounded-sm border border-rule bg-paper p-4 leading-relaxed">{card.promptShort}</p>
              </section>

              {card.hook && (
                <section>
                  <SectionHeading>封面金句</SectionHeading>
                  <p className="text-balance font-display text-xl font-black leading-snug text-royal">{card.hook}</p>
                </section>
              )}

              {card.painPoints && (
                <section>
                  <SectionHeading tone="stamp">白領痛點</SectionHeading>
                  <p className="leading-relaxed">{card.painPoints}</p>
                </section>
              )}

              {card.aiHelp && card.aiHelp.length > 0 && (
                <section>
                  <SectionHeading>AI Agent 點樣幫到手</SectionHeading>
                  <ul className="space-y-2">
                    {card.aiHelp.map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-brass" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {card.igCaption && (
                <section>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="text-base font-bold">IG 文案</h3>
                    <CopyButton
                      onClick={() => copy('caption', card.igCaption!)}
                      copied={copied === 'caption'}
                      label="複製文案"
                    />
                  </div>
                  <div className="max-h-72 overflow-y-auto whitespace-pre-wrap rounded-sm border border-rule bg-paper p-4 text-sm leading-relaxed">
                    {card.igCaption}
                  </div>
                  {card.hashtags && card.hashtags.length > 0 && (
                    <p className="mt-3 flex flex-wrap gap-x-3 text-sm text-royal">
                      {card.hashtags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                    </p>
                  )}
                </section>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
