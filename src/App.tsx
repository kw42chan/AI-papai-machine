import { useState, useMemo, useEffect } from 'react';
import { allCards, findCardByQuery } from './data/cards';
import { CardData, FilterCategory, FilterWeek } from './types/card';
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
  const [isOcrOpen, setIsOcrOpen] = useState(false);
  const [customCardImages, setCustomCardImages] = useState<Record<string, string>>({});

  // Real-time search & filter
  const filteredCards = useMemo(() => {
    return allCards.filter((card) => {
      // Category filter
      if (selectedCategory !== 'ALL' && card.category !== selectedCategory) {
        return false;
      }

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
  }, [searchQuery, selectedCategory, selectedWeek]);

  // When search matches a single card or query is a direct card number like "21", auto-focus on it
  useEffect(() => {
    if (searchQuery.trim()) {
      const match = findCardByQuery(searchQuery);
      if (match) {
        setSelectedCard(match);
      }
    }
  }, [searchQuery]);

  const handleRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * allCards.length);
    setSelectedCard(allCards[randomIndex]);
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

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <Header
        onOpenOcr={() => setIsOcrOpen(true)}
        onRandomCard={handleRandomCard}
        totalCards={allCards.length}
      />

      {/* Main Split-View Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
        {/* Left Column: Interactive Card Gallery & Search (5 cols) */}
        <section className="lg:col-span-5 h-[calc(100vh-120px)] min-h-[500px]">
          <CardGallery
            cards={filteredCards}
            selectedCard={selectedCard}
            onSelectCard={setSelectedCard}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedWeek={selectedWeek}
            onWeekChange={setSelectedWeek}
            onRandomCard={handleRandomCard}
          />
        </section>

        {/* Right Column: High-Res Card & Rich Markdown Content (7 cols) */}
        <section className="lg:col-span-7 h-[calc(100vh-120px)] min-h-[500px]">
          <CardDetailView
            card={selectedCard}
            customImageUrl={customCardImages[selectedCard.cardNumber]}
            onOpenOcrModal={() => setIsOcrOpen(true)}
          />
        </section>
      </main>

      {/* OCR Scanner Modal */}
      <OcrModal
        isOpen={isOcrOpen}
        onClose={() => setIsOcrOpen(false)}
        onSelectMatchedCard={handleSelectMatchedCard}
      />
    </div>
  );
}
