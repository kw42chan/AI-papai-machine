import React, { useState, useRef } from 'react';
import { CardData, OcrResult } from '../types/card';
import { findCardByNumber } from '../data/cards';
import { CreateCardForm } from './CreateCardForm';
import {
  X,
  UploadCloud,
  ScanText,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  ArrowRight,
} from 'lucide-react';

interface OcrModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMatchedCard: (card: CardData, imageUrl?: string) => void;
  cards: CardData[];
  onCreateCard: (card: CardData, imageUrl?: string) => void;
}

export const OcrModal: React.FC<OcrModalProps> = ({
  isOpen,
  onClose,
  onSelectMatchedCard,
  cards,
  onCreateCard,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/png');
  const [loading, setLoading] = useState(false);
  const [ocrResult, setOcrResult] = useState<OcrResult | null>(null);
  const [matchedCard, setMatchedCard] = useState<CardData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setMimeType(file.type || 'image/png');
    setError(null);
    setOcrResult(null);
    setMatchedCard(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setSelectedImage(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Quick preset test cards
  const loadPresetTestCard = (cardNum: string) => {
    const card = cards.find((c) => c.cardNumber === cardNum);
    if (!card) return;

    setError(null);
    setLoading(true);

    // Create a mock canvas image for testing
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 840;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Dark cyber background
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 600, 840);

      // Card border
      ctx.strokeStyle = '#c084fc';
      ctx.lineWidth = 4;
      ctx.strokeRect(20, 20, 560, 800);

      // Card Header
      ctx.fillStyle = '#9333ea';
      ctx.fillRect(40, 40, 140, 40);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px monospace';
      ctx.fillText(`CARD #${card.cardNumber}`, 55, 68);

      // Week & Category
      ctx.fillStyle = '#38bdf8';
      ctx.font = '16px sans-serif';
      ctx.fillText(`${card.week} · ${card.category}`, 200, 68);

      // English Title
      ctx.fillStyle = '#c084fc';
      ctx.font = 'bold 18px monospace';
      ctx.fillText(card.englishTitle.toUpperCase(), 40, 140);

      // Chinese Title
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px sans-serif';
      ctx.fillText(card.chineseTitle, 40, 190);

      // Scenario
      ctx.fillStyle = '#94a3b8';
      ctx.font = '16px sans-serif';
      ctx.fillText('情境：' + card.scenarioSummary, 40, 250);

      // Prompt Box
      ctx.fillStyle = '#1e1b4b';
      ctx.fillRect(40, 290, 520, 240);
      ctx.strokeStyle = '#6366f1';
      ctx.strokeRect(40, 290, 520, 240);
      ctx.fillStyle = '#a5b4fc';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('輸入指令：', 55, 325);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '15px monospace';
      ctx.fillText(card.promptShort.substring(0, 40), 55, 360);
      ctx.fillText(card.promptShort.substring(40, 85), 55, 390);

      // Benefits
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText('卡片效益：' + card.benefits.join('  '), 40, 580);
    }

    const dataUrl = canvas.toDataURL('image/png');
    setSelectedImage(dataUrl);

    // Call OCR or simulate
    runOcrAnalysis(dataUrl, 'image/png', card);
  };

  const runOcrAnalysis = async (
    imageBase64: string,
    imgMimeType: string,
    presetTargetCard?: CardData
  ) => {
    setLoading(true);
    setError(null);
    setOcrResult(null);

    try {
      const response = await fetch('/api/ocr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64,
          mimeType: imgMimeType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server OCR request failed (${response.status})`);
      }

      const res = await response.json();
      if (res.success && res.data) {
        const data = res.data as OcrResult;
        setOcrResult(data);

        // Match card
        let match: CardData | undefined;
        if (data.cardNumber) {
          match = findCardByNumber(cards, data.cardNumber);
        }
        if (!match && data.chineseTitle) {
          match = cards.find(
            (c) =>
              c.chineseTitle.includes(data.chineseTitle!) ||
              data.chineseTitle!.includes(c.chineseTitle)
          );
        }
        if (!match && presetTargetCard) {
          match = presetTargetCard;
        }

        setMatchedCard(match || null);
      } else {
        throw new Error('Could not parse OCR response');
      }
    } catch (err: any) {
      console.warn('Backend OCR failed, using smart local fallback:', err.message);

      // If preset target card was used or server OCR is not available, provide fallback
      if (presetTargetCard) {
        const fallbackResult: OcrResult = {
          cardNumber: presetTargetCard.cardNumber,
          week: presetTargetCard.week,
          chineseTitle: presetTargetCard.chineseTitle,
          englishTitle: presetTargetCard.englishTitle,
          scenario: presetTargetCard.scenarioSummary,
          expectedOutcomes: presetTargetCard.benefits,
          promptText: presetTargetCard.promptShort,
          branding: 'AI 拍拍機 · Rare Purple Strategy',
          rawOcrText: `CARD #${presetTargetCard.cardNumber}\n${presetTargetCard.englishTitle}\n${presetTargetCard.chineseTitle}\n情境：${presetTargetCard.scenarioSummary}\n輸入指令：${presetTargetCard.promptShort}`,
        };
        setOcrResult(fallbackResult);
        setMatchedCard(presetTargetCard);
      } else {
        setError(`OCR 辨識發生錯誤: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleStartOcr = () => {
    if (!selectedImage) return;
    runOcrAnalysis(selectedImage, mimeType);
  };

  const handleConfirmSelection = () => {
    if (matchedCard) {
      onSelectMatchedCard(matchedCard, selectedImage || undefined);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4"
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ocr-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-md border border-rule bg-paper shadow-xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-rule px-6 py-4">
          <div>
            <h2 id="ocr-title" className="font-display text-xl font-black">
              掃描卡牌
            </h2>
            <p className="mt-0.5 text-sm text-ink-soft">
              上傳實體卡的照片或截圖，辨識卡號與中英文標題，並找出對應的卡片。
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="關閉"
            className="p-1 text-ink-soft hover:text-ink"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-ink-soft">沒有實體卡？用範例試試：</span>
            {[
              ['21', '項目章程'],
              ['01', '長文件摘要'],
              ['15', '合約審查'],
            ].map(([num, name]) => (
              <button
                key={num}
                onClick={() => loadPresetTestCard(num)}
                className="rounded-sm border border-rule px-2.5 py-1 hover:border-royal hover:text-royal"
              >
                卡 {num} {name}
              </button>
            ))}
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={`flex min-h-[170px] flex-col items-center justify-center rounded-sm border border-dashed p-6 text-center transition-colors ${
              selectedImage ? 'border-royal bg-white' : 'border-rule bg-white hover:border-royal'
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            {selectedImage ? (
              <div className="flex w-full max-w-md items-center gap-4 text-left">
                <div className="flex h-28 w-24 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-rule bg-royal-deep">
                  <img src={selectedImage} alt="已選擇的卡牌圖片預覽" className="h-full w-full object-contain" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">已載入圖片</p>
                  <p className="text-sm text-ink-soft">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-royal underline underline-offset-2 hover:text-royal-deep"
                    >
                      換一張
                    </button>
                    ，或直接拖放新圖片。
                  </p>
                  <button
                    type="button"
                    onClick={handleStartOcr}
                    disabled={loading}
                    className="mt-3 flex items-center gap-1.5 rounded-sm bg-royal px-4 py-1.5 text-sm font-medium text-white hover:bg-royal-deep disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        <span>辨識中…</span>
                      </>
                    ) : (
                      <>
                        <ScanText className="h-4 w-4" aria-hidden />
                        <span>開始辨識</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <UploadCloud className="mb-2 h-6 w-6 text-royal" aria-hidden />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-sm border border-royal px-4 py-1.5 font-medium text-royal hover:bg-royal hover:text-white"
                >
                  選擇圖片
                </button>
                <p className="mt-2 text-sm text-ink-soft">或把圖片拖放到這裡</p>
                <p className="mt-1 text-sm text-ink-soft">支援 PNG、JPG、WebP。手機拍攝的實體卡照片也可以。</p>
              </>
            )}
          </div>

          {error && (
            <div role="alert" className="flex items-start gap-2.5 rounded-sm border border-stamp/50 bg-white p-3.5 text-sm text-stamp">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>{error}</span>
            </div>
          )}

          {ocrResult && (
            <section className="space-y-4 rounded-sm border border-rule bg-white p-5" aria-live="polite">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-3">
                <h3 className="flex items-center gap-2 font-bold">
                  <CheckCircle2 className="h-5 w-5 text-royal" aria-hidden />
                  辨識完成
                </h3>
                {matchedCard ? (
                  <span className="text-sm text-ink-soft">已對應到卡 {matchedCard.cardNumber}</span>
                ) : (
                  <span className="text-sm text-stamp">資料庫裡沒有這張卡，可以在下面建立。</span>
                )}
              </div>

              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-ink-soft">卡號</dt>
                  <dd className="tabular font-display text-2xl font-black text-royal">
                    {ocrResult.cardNumber || '未辨識'}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-soft">標題</dt>
                  <dd className="font-medium">{ocrResult.chineseTitle || '未辨識'}</dd>
                  {ocrResult.englishTitle && <dd className="text-ink-soft">{ocrResult.englishTitle}</dd>}
                </div>
                <div className="md:col-span-2">
                  <dt className="text-ink-soft">實戰情境</dt>
                  <dd>{ocrResult.scenario || '未辨識'}</dd>
                </div>
                {ocrResult.promptText && (
                  <div className="md:col-span-2">
                    <dt className="text-ink-soft">輸入指令</dt>
                    <dd>{ocrResult.promptText}</dd>
                  </div>
                )}
              </dl>

              {!matchedCard && (
                <CreateCardForm
                  key={JSON.stringify(ocrResult)}
                  ocr={ocrResult}
                  cards={cards}
                  onCreate={(card) => {
                    onCreateCard(card, selectedImage || undefined);
                    onClose();
                  }}
                />
              )}

              {matchedCard && (
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-4">
                  <span className="text-sm">
                    <strong>{matchedCard.chineseTitle}</strong>
                    <span className="ml-3 text-ink-soft">{matchedCard.week}</span>
                    <span className="ml-3 text-ink-soft">{matchedCard.category}</span>
                  </span>
                  <button
                    onClick={handleConfirmSelection}
                    className="flex items-center gap-1.5 rounded-sm bg-royal px-4 py-2 text-sm font-medium text-white hover:bg-royal-deep"
                  >
                    <span>開啟這張卡</span>
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
