# AI 拍拍機 (AI Papai Machine)

卡牌與 IG 內容庫 — a card preview, bilingual OCR lookup and Instagram carousel library for **AI Agent hands-on scenarios aimed at Hong Kong office workers**.

Each card describes one practical workplace task (e.g. Card 21 「項目章程撰寫 / Project Charter」) with its scenario, expected outcomes, a ready-to-use prompt, and a matching IG carousel storyboard and caption.

## Features

- **Card gallery**: 44 scenario cards across Weeks 1–6, with a search box, category filter, week filter and a random-card button.
  - Search by card number (`21`, `card 21`, `卡 21`, `#21`), Chinese or English title, scenario, or pain points.
  - Categories: 日常文檔, 商務溝通, 項目管理, 數據分析, 財務預算, 客戶服務, 商業策略.
- **Card detail view**: the rendered card (title, scenario, expected outcomes, prompt), plus hook, pain points and how AI helps.
- **IG carousel visualizer**: a slide-by-slide phone-style preview (cover, pain, process, solution, outcome and CTA slides), with copy-to-clipboard for the caption and hashtags.
- **Bilingual OCR lookup**: upload a photo or screenshot of a card and a vision model (through OpenRouter) extracts the card number, titles, scenario, outcomes and prompt (Chinese and English). The app matches the result to a card in the library and shows it. The uploaded image can replace the rendered card visual.
- **Create cards from scans**: if a scan matches no card, a prefilled form lets you check the text and add it as a new card. New cards live in this browser and are included in the backup file.
- **Carousel progress**: tick each card once its IG carousel is made, filter by made or not made, and back the ticks up to a JSON file.

## Tech stack

- React 19 + TypeScript, bundled with Vite 8
- Tailwind CSS 4, `lucide-react` icons, `motion`, `canvas-confetti`
- Express server (`server.ts`) that hosts the app and the OCR endpoint
- OpenRouter (any vision model, chosen with `OPENROUTER_MODEL`) for OCR

## Getting started

### Prerequisites

- [Bun](https://bun.sh/), or Node.js with npm (tested on Node 26 and npm 11; a `bun.lock` is included)
- An [OpenRouter API key](https://openrouter.ai/keys), needed only for the OCR feature

### Install and run

```bash
# 1. Install dependencies
bun install        # or: npm install --legacy-peer-deps

# 2. Configure environment
cp .env.example .env     # Windows: copy .env.example .env
# then set OPENROUTER_API_KEY (and optionally OPENROUTER_MODEL) in .env

# 3. Start the dev server
bun run dev        # or: npm run dev
```

The app is served at <http://localhost:3000>. The port is set in `server.ts`.

### Scripts

| Script | What it does |
| --- | --- |
| `dev` / `start` | Runs `server.ts` with `tsx`. Express plus Vite in middleware mode, with HMR disabled. |
| `build` | Builds the front end into `dist/` with `vite build`. |
| `preview` | Previews the Vite build. |
| `lint` | Type-checks with `tsc --noEmit`. |
| `clean` | Deletes `dist/`. |

### Production

```bash
bun run build
NODE_ENV=production bun run start
```

With `NODE_ENV=production`, the Express server serves the static files in `dist/` instead of starting Vite.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `OPENROUTER_API_KEY` | For OCR | OpenRouter API key used by `POST /api/ocr`. |
| `OPENROUTER_MODEL` | No | A vision-capable OpenRouter model. Defaults to `google/gemini-2.5-flash`. Some providers refuse requests from certain regions with a "terms of service" error; `qwen/qwen3-vl-32b-instruct` works there. |

`.env` files are git-ignored. Only `.env.example` is committed.

## API

| Endpoint | Description |
| --- | --- |
| `GET /api/health` | Returns `{ status: "ok", timestamp }`. |
| `POST /api/ocr` | Body: `{ imageBase64, mimeType? }` (up to 25 MB). Returns `{ success: true, data }`, where `data` holds `cardNumber`, `week`, `chineseTitle`, `englishTitle`, `scenario`, `expectedOutcomes`, `promptText`, `branding` and `rawOcrText`. |

## Project structure

```
├── server.ts             # Express server: static hosting / Vite middleware + /api/ocr
├── index.html            # Vite entry HTML
├── vite.config.ts
├── src/
│   ├── App.tsx           # Layout, search and filter logic, selected-card state
│   ├── main.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── CardGallery.tsx          # Card list, search and filters
│   │   ├── CardDetailView.tsx       # Selected card details
│   │   ├── CardVisualRenderer.tsx   # Card artwork
│   │   ├── CarouselVisualizer.tsx   # IG carousel preview, caption and hashtags
│   │   └── OcrModal.tsx             # Upload image, run OCR, match to a card
│   ├── data/
│   │   ├── cards.ts                 # Merges all cards, lookup helpers, category and week lists
│   │   ├── cardsWeek1_2.ts
│   │   ├── cardsWeek3_4.ts
│   │   └── cardsWeek5_6.ts
│   └── types/card.ts     # CardData, CarouselSlide, OcrResult, filter types
├── agent/skills/         # Design-oriented agent skills (see skills-lock.json)
├── .agents/skills/       # Same skills for agent tooling
└── metadata.json         # Google AI Studio app metadata
```

## Adding or editing cards

Cards are plain TypeScript objects in `src/data/cardsWeek*.ts`, typed by `CardData` in `src/types/card.ts`. To add one, append an entry to the relevant week file with these fields:

- `cardNumber`, `week`, `weekNumber` and `category`
- `chineseTitle`, `englishTitle` and `scenarioSummary`
- `promptShort` and `benefits`
- Optionally `hook`, `painPoints`, `aiHelp`, `igCaption`, `carouselSlides` and `hashtags`

It shows up in the gallery, search and OCR matching automatically.
## Notes

- The project was generated in Google AI Studio (see `.aistudio/` and `metadata.json`), which is why the default port and HMR settings are fixed.
- The skills in `agent/skills/` come from [`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) and are pinned in `skills-lock.json`. They guide AI-assisted UI work and aren't used at runtime.
