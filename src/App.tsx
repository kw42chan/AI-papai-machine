import { useState, useMemo, useEffect, useRef } from 'react';
import { allCards, findCardByQuery } from './data/cards';
import { CardData, FilterCategory, FilterProgress, FilterWeek } from './types/card';
import { useProgress } from './hooks/useProgress';
import { useCustomCards } from './hooks/useCustomCards';
import { Header } from './components/Header';
import { CardGallery } from './components/CardGallery';
import { CardDetailView } from './components/CardDetailView';
import { OcrModal } from './components/OcrModal';

export default function App() {
  // Default to Card 21 ("項目章程撰寫") as requested by user!
  const defaultCard = useMemo(() => {
    return allCards.find((c) => c.cardNumber === '21') || allCards[0];
  }, []);

  const [selectedCard, setSelectedCard] = useState<CardData>(defaultCard);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('ALL');
  const [selectedWeek, setSelectedWeek] = useState<FilterWeek>('ALL');
  const [selectedProgress, setSelectedProgress] = useState<FilterProgress>('ALL');
  const { progress, toggle, touch, importJson } = useProgress();
  const { customCards, addCard, removeCard, importCards } = useCustomCards();

  // Built-in cards plus cards created from scans, kept in week order (the sort is stable)
  const cards = useMemo(
    () => [...allCards, ...customCards].sort((a, b) => (a.weekNumber || 99) - (b.weekNumber || 99)),
    [customCards]
  );
  const [isOcrOpen, setIsOcrOpen] = useState(false);
  const [customCardImages, setCustomCardImages] = useState<Record<string, string>>({});

  // Real-time search & filter
  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      // Category filter
      if (selectedCategory !== 'ALL' && card.category !== selectedCategory) {
        return false;
      }

      // Carousel progress filter
      if (selectedProgress === 'DONE' && !progress[card.cardNumber]) return false;
      if (selectedProgress === 'TODO' && progress[card.cardNumber]) return false;

      // Week filter
      if (selectedWeek !== 'ALL') {
        if (selectedWeek === 'BONUS' && card.weekNumber !== 7) return false;
        if (typeof selectedWeek === 'number' && card.weekNumber !== selectedWeek) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();

        // Exact or clean card number matching
        const num = card.cardNumber.toLowerCase();
        const numClean = card.cardNumber.replace(/^0+/, '').toLowerCase();
        if (num === q || numClean === q || `card ${num}`.includes(q) || `卡 ${num}`.includes(q) || `#${num}`.includes(q)) {
          return true;
        }

        // Chinese / English title
        if (
          card.chineseTitle.toLowerCase().includes(q) ||
          card.englishTitle.toLowerCase().includes(q)
        ) {
          return true;
        }

        // Scenario or pain points
        if (
          card.scenarioSummary.toLowerCase().includes(q) ||
          (card.painPoints && card.painPoints.toLowerCase().includes(q))
        ) {
          return true;
        }

        // Hashtags
        if (card.hashtags && card.hashtags.some((t) => t.toLowerCase().includes(q))) {
          return true;
        }

        return false;
      }

      return true;
    });
  }, [cards, searchQuery, selectedCategory, selectedWeek, selectedProgress, progress]);

  // When search matches a single card or query is a direct card number like "21", auto-focus on it
  useEffect(() => {
    if (searchQuery.trim()) {
      const match = findCardByQuery(searchQuery, cards);
      if (match) {
        setSelectedCard(match);
      }
    }
  }, [searchQuery]);

  // On narrow screens the catalogue sits above the detail, so bring the picked card into view
  const detailRef = useRef<HTMLElement>(null);
  const revealDetailOnMobile = () => {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      detailRef.current?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    }
  };

  const handlePickCard = (card: CardData) => {
    setSelectedCard(card);
    revealDetailOnMobile();
  };

  const handleRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setSelectedCard(cards[randomIndex]);
  };

  const handleSelectMatchedCard = (card: CardData, imageUrl?: string) => {
    setSelectedCard(card);
    if (imageUrl) {
      setCustomCardImages((prev) => ({
        ...prev,
        [card.cardNumber]: imageUrl,
      }));
    }
  };

  const handleCreateCard = (card: CardData, imageUrl?: string) => {
    addCard(card);
    setSelectedCard(card);
    if (imageUrl) setCustomCardImages((prev) => ({ ...prev, [card.cardNumber]: imageUrl }));
  };

  const handleRemoveCard = (card: CardData) => {
    removeCard(card.id);
    setSelectedCard(defaultCard);
  };

  // One backup file holds both the carousel ticks and the cards created from scans
  const exportAll = () => JSON.stringify({ version: 2, progress, customCards }, null, 2);
  const importAll = (text: string) => {
    const progressCount = importJson(text); // throws on text that isn't JSON
    let cardCount = 0;
    try {
      cardCount = importCards(JSON.parse(text)?.customCards, allCards);
    } catch {
      // a v1 export has no cards
    }
    return { progress: progressCount, cards: cardCount };
  };

  return (
    <div className="min-h-screen bg-ground text-ink flex flex-col">
      <Header onOpenOcr={() => setIsOcrOpen(true)} onRandomCard={handleRandomCard} />

      <main className="mx-auto grid w-full max-w-[1500px] flex-1 grid-cols-1 lg:grid-cols-[minmax(340px,420px)_minmax(0,1fr)]">
        {/* Catalogue: sticks to the viewport on desktop and scrolls on its own */}
        <aside className="border-b border-rule bg-paper lg:sticky lg:top-14 lg:h-[calc(100dvh-3.5rem)] lg:border-b-0 lg:border-r">
          <CardGallery
            cards={filteredCards}
            totalCount={cards.length}
            selectedCard={selectedCard}
            onSelectCard={handlePickCard}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedWeek={selectedWeek}
            onWeekChange={setSelectedWeek}
            selectedProgress={selectedProgress}
            onProgressChange={setSelectedProgress}
            progress={progress}
            onToggleProgress={toggle}
            exportProgress={exportAll}
            importProgress={importAll}
          />
        </aside>

        <section ref={detailRef} className="min-w-0 scroll-mt-14">
          <CardDetailView
            card={selectedCard}
            customImageUrl={customCardImages[selectedCard.cardNumber]}
            madeAt={progress[selectedCard.cardNumber]}
            onToggleMade={() => toggle(selectedCard.cardNumber)}
            onMarkUpdated={() => touch(selectedCard.cardNumber)}
            onRemoveCard={selectedCard.id.startsWith('custom-') ? () => handleRemoveCard(selectedCard) : undefined}
          />
        </section>
      </main>

      {/* OCR Scanner Modal */}
      <OcrModal
        isOpen={isOcrOpen}
        onClose={() => setIsOcrOpen(false)}
        onSelectMatchedCard={handleSelectMatchedCard}
        cards={cards}
        onCreateCard={handleCreateCard}
      />
    </div>
  );
}
