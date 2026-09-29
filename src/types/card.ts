export interface CarouselSlide {
  slideNumber: number;
  label: string;
  title: string;
  description: string;
  type: 'cover' | 'pain' | 'process' | 'solution' | 'outcome' | 'cta';
  highlight?: string;
}

export interface CardData {
  id: string;
  cardNumber: string; // "01", "02", ... "21", "40", "B01"
  week: string; // "第1週", "第2週", ...
  weekNumber: number; // 1 - 6, 7 for Bonus
  category: string; // e.g. "日常文檔", "項目管理", "數據分析", "財務預算", "客戶服務", "商務溝通", "商業策略"
  chineseTitle: string;
  englishTitle: string;
  scenarioSummary: string;
  promptShort: string;
  benefits: string[];
  articleNumber?: number; // #11 - #54
  articleTitle?: string;
  hook?: string;
  painPoints?: string;
  aiHelp?: string[];
  igCaption?: string;
  carouselSlides?: CarouselSlide[];
  hashtags?: string[];
  imageFileName?: string;
}

export interface OcrResult {
  cardNumber?: string;
  week?: string;
  chineseTitle?: string;
  englishTitle?: string;
  scenario?: string;
  expectedOutcomes?: string[];
  promptText?: string;
  branding?: string;
  rawOcrText?: string;
}

export type FilterCategory = 'ALL' | '日常文檔' | '商務溝通' | '項目管理' | '數據分析' | '財務預算' | '客戶服務' | '商業策略';
export type FilterWeek = 'ALL' | 1 | 2 | 3 | 4 | 5 | 6 | 'BONUS';

export type FilterProgress = 'ALL' | 'DONE' | 'TODO';
