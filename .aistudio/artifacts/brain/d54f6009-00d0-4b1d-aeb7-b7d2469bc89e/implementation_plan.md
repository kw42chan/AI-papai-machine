# Implementation Plan - AI 拍拍機 (AI Card Deck & IG Content Studio)

An interactive, high-productivity card navigator and content studio designed for the 40+ "AI 拍拍機" strategy cards and their corresponding IG Carousel markdown content.

## User Requirements & Clarified Preferences
1. **Interactive Gallery & Split View**: Grid/list of card previews on the left with instant search and category/week filters; rich detail view on the right showing high-resolution card graphic, OCR breakdown, prompt runner, and markdown content.
2. **Card Search & OCR Indexing**: Search by card number (e.g. `21` or `卡 21`), Chinese title (e.g. `項目章程撰寫`), English title (`Project Charter`), week, scenario, or tags.
3. **Structured Content & IG Carousel Visualizer**:
   - Card image with zoom/lightbox and OCR text overlay inspection.
   - 🎴 Card Original Data (Title, English, Scenario, Prompt, Benefits).
   - 🎣 Hook & 😩 Pain points breakdown.
   - 🤖 AI Agent Workflow & copyable prompt with parameter highlights.
   - ✍️ IG Caption with one-click copy.
   - 📱 Interactive IG Carousel Slide Visualizer (step-through slides 1 to 6/7 previewing slide graphics & text).
   - #Hashtags copier.
4. **On-demand AI Scan / Upload**: Built-in Gemini OCR scanner to scan any newly uploaded card image or re-verify existing ones.

## Architecture & Implementation Steps

### 1. Card & Markdown Dataset Compilation
- Extract and index all 40 cards (`card_01` to `card_40` plus backup cards) with:
  - Card number (`01` to `40`)
  - Image file mapping (`/20260818_gunmetal_silver_whiteoutline_card_XX.png`)
  - Chinese Title, English Title, Week (第1週 to 第6週)
  - Scenario summary, Expected benefits (1, 2, 3), Prompt instructions
  - Complete Markdown article from the IG Carousel Content Library (Hook, White-collar pain points, AI Agent capabilities, IG Caption, Carousel Storyboard 5-7 slides, Hashtags)
  - Category tags (項目管理, 財務會計, 商業溝通, 行政行政, 銷售策略, etc.)

### 2. Assets & Server Setup
- Place or serve the 40 card images in public/assets or express static middleware so they render crisply in browser.
- Set up Gemini 2.5 Flash / 2.0 Flash via server API `/api/ocr` for on-demand image scanning and OCR extraction.

### 3. Frontend UI Components
- **Top Bar**: Search bar (with card number badge quick filter, e.g. "21", Chinese/English quick search), category filter pills, week selector, layout toggle (Split View vs Full Screen Focus Mode), and Random Card ("拍一張卡") button.
- **Left Column (Card Gallery)**:
  - Responsive cards with card thumbnail, card number badge, Chinese title, English title, week indicator, and quick-copy prompt button.
  - Active card highlighted with futuristic cyberpunk/gunmetal-silver glowing accent matching the card theme.
- **Right Column (Card Details & Studio)**:
  - **Header & Actions**: Card Number, Week badge, Bilingual Titles, "Copy Prompt", "Copy IG Caption", "View Storyboard".
  - **Tabs**:
    1. **Overview & Card Art**: High-resolution zoomable card image, OCR structured badges, prompt card with copy button.
    2. **IG Carousel Storyboard**: Interactive Instagram swipeable preview displaying the 5 to 7 slides with visual mockup frames.
    3. **Full Content (Markdown)**: Nicely formatted markdown with Hong Kong Cantonese colloquial flair, collapsible sections (Pain point, AI Agent, Caption, Hashtags).
    4. **AI Scanner / OCR Tool**: Allows testing live Gemini OCR on the card or uploading custom cards.

### 4. Polish & Verification
- Compile and test with `compile_applet`.
- Verify searching "21" immediately loads Card 21 with both image, bilingual titles, and all markdown sections.
- Verify smooth responsive behavior on desktop and mobile.
