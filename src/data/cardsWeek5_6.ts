import { CardData } from '../types/card';

export const cardsWeek5_6: CardData[] = [
  {
    id: 'card-29',
    cardNumber: '29',
    week: '第5週',
    weekNumber: 5,
    category: '客戶服務',
    chineseTitle: '客戶跟進計劃',
    englishTitle: 'Client Follow-up',
    scenarioSummary: '拜訪客戶後準備跟進事項，避免流失商機。',
    promptShort: '輸入：貼上會面紀錄，製作四星期跟進計劃，列出每週事項、渠道、內容重點及目標。',
    benefits: ['規劃四星期跟進', '明確渠道與重點', '避免遺漏後續行動'],
    articleNumber: 50,
    articleTitle: '【見完客好滿意，兩個月後先記得冇 follow up】跟進計劃一頁排好',
    hook: '「見完客好滿意，兩個月後你先記得：咦，我冇 follow up 過。」',
    painPoints: '見完客最有 feel 嗰刻，你答應咗「返去 send 份資料」，但第二日開完會就唔記得。客戶唔會主動追你，但會靜靜揀第二間。想跟進又唔知幾時跟、跟咩、用 email 定 WhatsApp 定打電話，最後拖到個 deal 涼咗先發現 —— 商機唔係輸喺報價，係輸喺冇跟。',
    aiHelp: [
      '貼上會面紀錄，出四星期跟進計劃（每週事項、渠道、內容重點、目標）',
      '標明用 email / 電話 / 見面邊個渠道最啱',
      '每週一個明確目標，唔會「得閒再傾」',
      '跟進清單可以放入日曆，唔會再忘記'
    ],
    igCaption: `【見完客好滿意，兩個月後先記得：我冇 follow up 過 😳】

你答應咗「返去 send 份資料」，
第二日開完會就唔記得。
客戶唔會主動追你 —— 佢會靜靜揀第二間。
商機唔係輸喺報價，係輸喺冇跟。

AI Agent 幫你：
✅ 貼會面紀錄 → 四星期跟進計劃
✅ 每週事項 + 渠道 + 內容重點 + 目標
✅ 標明 email / 電話 / 見面邊個最啱
✅ 清單入日曆，唔會再忘記

由「想跟進」變成「每週都跟到」。

📇 拍到「客戶跟進計劃」呢張卡，跟住做就唔會斷。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '我冇 follow up 過', description: 'Hook 大字', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '會面後承諾 send 資料', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '兩個月後先記得，客戶已走', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成四星期跟進計劃', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '計劃表示範', description: '週次 / 渠道 / 重點 / 目標', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#客戶跟進', '#銷售技巧', '#BD', '#AI工具', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_29.png'
  },
  {
    id: 'card-30',
    cardNumber: '30',
    week: '第5週',
    weekNumber: 5,
    category: '客戶服務',
    chineseTitle: '報價單生成',
    englishTitle: 'Quotation Generation',
    scenarioSummary: '需要製作格式一致的報價單。',
    promptShort: '輸入：客戶名稱、產品／服務清單、單價、數量、折扣、稅項、總額、有效期及付款條款；製作含公司品牌資訊的專業報價單。',
    benefits: ['格式一致專業', '減少手動出錯', '報價資訊完整'],
    articleNumber: 24,
    articleTitle: '【客戶追報價，你仲喺度 copy 上一份改數字】報價單一鍵生成',
    hook: '「客戶追咗三次報價，你仲喺度 copy 上一份改數字。」',
    painPoints: 'SME 做 sales、CS、admin，出報價單永遠係「copy 上一份、改公司名、改單價」。出事位好多：計錯稅、漏咗折扣、唔記得寫有效期、公司 logo 冇咗、格式睇落唔專業。send 出去先發現打錯單價，第二日要 send 更正版 —— 客戶個印象即刻扣分。明明只係一份單，點解每次都要搞半個鐘？',
    aiHelp: [
      '輸入客戶名稱、產品／服務清單、單價、數量 → 出專業報價單，減少手動出錯',
      '自動計折扣、稅項、總額，唔怕計錯',
      '檢查漏項（有效期、付款條款、單價），send 前提醒你',
      '格式一致、含公司品牌資訊，報價資訊完整唔漏項'
    ],
    igCaption: `【客戶追咗三次報價，你仲喺度 copy 上一份改數字 📄】

改完單價發現漏咗稅，
加返稅又唔記得寫有效期。
Send 出去第二日要補一份更正版 ——
客戶個印象即刻扣分。

AI Agent 幫你：
✅ 輸入清單 → 出含品牌資訊嘅專業報價單
✅ 自動計折扣、稅項、總額
✅ 檢查漏項（有效期、付款條款），send 前提醒
✅ 格式一致，logo 唔會漏

由半個鐘變成 3 分鐘。

📇 拍到「報價單生成」呢張卡，跟住做就出得手。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '客戶催第三次報價嘅對話框 + 無奈表情', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: 'copy 上一份改數字嘅土炮流程', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '計錯稅 / 漏寫有效期嘅連環出錯', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步出單', description: '輸入清單 → 計數 → 檢查', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'Before vs After 對比', description: 'Before（土炮 Word） vs After（專業報價單）', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#報價單', '#SME', '#AI工具', '#銷售日常', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_30.png'
  },
  {
    id: 'card-31',
    cardNumber: '31',
    week: '第5週',
    weekNumber: 5,
    category: '客戶服務',
    chineseTitle: '客戶滿意度分析',
    englishTitle: 'Client Satisfaction Report',
    scenarioSummary: '整理客戶反饋，找出模式及改善方向。',
    promptShort: '輸入：分析客戶反饋，找出3大正面主題、3大負面主題及2個急需改善範疇；每項引用原文，最後提出3個改善建議。[貼上反饋]',
    benefits: ['找出正負面主題', '聚焦急需改善範疇', '建議附原文佐證'],
    articleNumber: 39,
    articleTitle: '【客戶 complaint 散落三個渠道】滿意度分析找出真問題',
    hook: '「客戶 complaint 散落 WhatsApp、email、會議紀錄 —— 你只記得最大聲嗰個。」',
    painPoints: '客戶反饋從來唔會整整齊齊出現喺問卷。佢哋會喺 WhatsApp 講兩句、email 投訴一段、見面時順口提一句。到季度檢討，你只能講「好似有幾個客不滿」，講唔出係邊類問題、影響幾多人、應該先改邊樣。結果改善方向永遠靠印象，改完冇人知有冇效。',
    aiHelp: [
      '貼上所有反饋，自動抽出 3 大正面主題 + 3 大負面主題',
      '標示 2 個急需改善範疇，按嚴重程度排',
      '每項引用原文佐證，唔怕老細話你「憑感覺」',
      '最後提出 3 個改善建議，直接變成行動清單'
    ],
    igCaption: `【客戶 complaint 散落三個渠道，你只記得最大聲嗰個 😶】

WhatsApp 講兩句、email 投訴一段、
見面時順口提一句 ——
到季度檢討，你只講到「好似有幾個客不滿」。
邊類問題、影響幾多人、先改邊樣？答唔到。

AI Agent 幫你：
✅ 3 大正面主題 + 3 大負面主題
✅ 標示 2 個急需改善範疇
✅ 每項引用原文佐證
✅ 提出 3 個改善建議

由「好似有啲不滿」，變成一份有證據嘅改善清單。

📇 拍到「客戶滿意度分析」呢張卡，跟住做就講得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '三個渠道嘅對話框浮喺畫面', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '反饋散亂，冇人整理', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '季度檢討只講到「好似不滿」', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 分析流程', description: '分類 → 主題 → 排序', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '正負面主題 + 原文引用 + 改善建議', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#客戶滿意度', '#客戶服務', '#AI工具', '#數據分析', '#CX'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_31.png'
  },
  {
    id: 'card-32',
    cardNumber: '32',
    week: '第5週',
    weekNumber: 5,
    category: '商務溝通',
    chineseTitle: '商務行程規劃',
    englishTitle: 'Business Trip Planning',
    scenarioSummary: '安排外地商務差旅，統籌航班住宿會議及預算',
    promptShort: '輸入：[天數]天、目的地[城市]；規劃每日行程、航班、住宿、交通、預算及簽證、時差、商務禮儀備註。',
    benefits: ['行程安排更完整', '交通住宿一目了然', '預算及注意事項齊備'],
    articleNumber: 20,
    articleTitle: '【公司話「下個禮拜去新加坡」】商務出差一鍵規劃',
    hook: '「公司話『下個禮拜去新加坡』，你成個週末喺度 plan 行程。」',
    painPoints: '公司一句「下個禮拜去新加坡」，出差規劃就全部落喺你身上：航班、住宿、交通、會議地點，仲要計埋預算。一個出差搞足成個週末 —— 比完價又驚揀錯，行程表整到亂，仲要自己記住簽證、時差、商務禮儀嘅備註。老細問「點安排？」，你連每日行程都講唔清。',
    aiHelp: [
      '輸入天數 + 目的地 → 規劃每日行程（連會議安排）',
      '航班、住宿、交通一齊列好，唔使自己逐個網站查',
      '預算計好，另加簽證、時差、商務禮儀備註',
      '生成完整行程表，一鍵 send 畀老細 / 助理'
    ],
    igCaption: `【公司話「下個禮拜去新加坡」，我個週末又冇咗 ✈️】

搵航班、比價、book 酒店、安排交通、
確認會議地點、整行程表……
一個出差搞足兩日，仲要驚漏簽證。

AI Agent 幫你：
✅ 天數 + 目的地 → 每日行程（連會議）
✅ 航班、住宿、交通一次列好
✅ 預算 + 簽證 / 時差 / 商務禮儀備註
✅ 完整行程表，一鍵 send 老細

由兩日變成兩分鐘。

📇 拍到「商務行程規劃」呢張卡，跟住做就輕鬆出發。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '行李 + 慌失失表情', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '成個週末喺度 plan 行程', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '驚漏簽證 / 時差嘅焦慮', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 一鍵生成行程', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '航班酒店交通預算一覽', description: '', type: 'outcome' },
      { slideNumber: 6, label: '畫面', title: '完整行程表示範', description: '', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#商務出差', '#出差規劃', '#AI工具', '#職場生活', '#飛來飛去'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_32.png'
  },
  {
    id: 'card-33',
    cardNumber: '33',
    week: '第5週',
    weekNumber: 5,
    category: '財務預算',
    chineseTitle: '每月帳單整理',
    englishTitle: 'Bills Organisation',
    scenarioSummary: '整理分散電郵中的帳單發票，避免遺漏',
    promptShort: '輸入：將所有帳單整理成Excel總表，列供應商、月份、金額、到期日、付款狀態及來源連結；缺漏標示「待確認」，按到期日排序。',
    benefits: ['帳單集中整理', '減少遺漏入帳', '按到期日排序'],
    articleNumber: 38,
    articleTitle: '【月尾對單，對到懷疑自己數學能力】帳單整理一頁對清',
    hook: '「月尾對單：帳單散落喺 email、WhatsApp、同事枱面，你對到懷疑自己數學能力。」',
    painPoints: 'admin、財務、甚至細公司老闆，月尾都要做同一件事：搵齊今個月嘅帳單。供應商 email 寄、同事 WhatsApp 影相、有啲仲係紙本。你一項項抄落 Excel，抄完仲要對到期日、對付款狀態。遺漏一張帳單，下個月就會出現逾期罰款或者重複付款 —— 而冇人會記得係你有冇收過。',
    aiHelp: [
      '帳單統一整理成 Excel 總表：供應商、月份、金額、到期日、付款狀態、來源連結',
      '缺漏或者唔清楚嘅標示「待確認」，唔會靜靜漏咗',
      '按到期日自動排序，邊張先到期一眼睇清',
      '每月跑一次，變成固定流程，唔使年尾追數追到崩潰'
    ],
    igCaption: `【月尾對單，對到懷疑自己嘅數學能力 🧾】

供應商 email 寄、
同事 WhatsApp 影相、
有啲仲係紙本。
抄落 Excel 之後又要對到期日同付款狀態。
漏一張，下個月就係罰款或者重複付款。

AI Agent 幫你：
✅ 帳單統一成一份總表
✅ 缺漏標示「待確認」，唔會靜靜漏
✅ 按到期日排序
✅ 每月跑一次，變成固定流程

月尾對單，由兩個鐘變 10 分鐘。

📇 拍到「每月帳單整理」呢張卡，跟住做就對得清。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '帳單散落 email／WhatsApp／枱面', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '逐項抄落 Excel 嘅痛苦', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '漏一張 = 罰款／重複付款', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 整理流程', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '總表示範', description: '供應商 / 金額 / 到期日 / 狀態', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#帳單管理', '#行政', '#財務', '#AI工具', '#月尾地獄'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_33.png'
  },
  {
    id: 'card-34',
    cardNumber: '34',
    week: '第5週',
    weekNumber: 5,
    category: '財務預算',
    chineseTitle: '訂閱服務審計',
    englishTitle: 'Subscription Audit',
    scenarioSummary: '審計公司每月訂閱服務，找出續約及取消項目。',
    promptShort: '輸入：訂閱清單；找出新訂閱、價格變動、30日內到期及可能重複工具，整理固定成本與潛在節省。',
    benefits: ['掌握每月固定成本', '識別重複及變價工具', '清楚決定續約或取消'],
    articleNumber: 51,
    articleTitle: '【公司同時付緊三個功能一樣嘅軟件】訂閱審計一頁看清',
    hook: '「年尾睇數先發現：公司同時付緊三個功能一樣嘅軟件。」',
    painPoints: 'SaaS 訂閱係最容易失控嘅成本 —— 同事各自開 account、試用完冇取消、加價冇人留意、離職同事嘅 seat 仲喺度付錢。你手上冇一張完整清單，開會講「我哋要 cut cost」但講唔出 cut 邊項。續約通知一嚟就自動續期，取消要打去客服等半個鐘，結果每年白交好多錢，年尾先被老細問。',
    aiHelp: [
      '貼上訂閱清單，找出新訂閱、價格變動、30 日內到期',
      '標示功能重複嘅工具，避免同一件事付兩次',
      '整理固定成本同潛在節省金額',
      '列出續約／取消建議，開會有數講'
    ],
    igCaption: `【年尾睇數先發現：公司同時付緊三個功能一樣嘅軟件 💸】

同事各自開 account、試用完冇取消、
離職同事嘅 seat 仲喺度付錢。
開會講「要 cut cost」，但講唔出 cut 邊項。

AI Agent 幫你：
✅ 找出新訂閱 / 價格變動 / 30 日內到期
✅ 標示功能重複工具，唔使付兩次
✅ 整理固定成本 + 潛在節省
✅ 列出續約 / 取消建議

由「唔知付咗幾多」變成「一眼睇清要 cut 邊個」。

📇 拍到「訂閱服務審計」呢張卡，跟住做就有數。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '多個軟件 logo + 重複收費圖示', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '冇人知公司訂咗幾多個 tool', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '自動續約、離職 seat 仲喺度', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 審計流程', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '固定成本 + 潛在節省示範', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#成本控制', '#SaaS', '#財務', '#AI工具', '#營運'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_34.png'
  },
  {
    id: 'card-35',
    cardNumber: '35',
    week: '第5週',
    weekNumber: 5,
    category: '財務預算',
    chineseTitle: '預算規劃建議',
    englishTitle: 'Budget Planning',
    scenarioSummary: '根據去年開支及今年目標規劃年度預算。',
    promptShort: '輸入：去年開支數據及今年業務目標。草擬年度預算：列出各類別預算、同比變化及假設說明，最後加入風險提示。',
    benefits: ['列明各類別預算', '說明同比變化假設', '提供預算風險提示'],
    articleNumber: 30,
    articleTitle: '【年尾做 Budget，唔知今年應該寫幾多】預算規劃一頁講清',
    hook: '「做明年 budget，你對住去年盤數，唔知應該寫幾多。」',
    painPoints: '年尾做 department budget，最痛苦係冇 baseline、唔知同比應該加幾多、又唔敢寫假設。你交個數上去，老細第一句一定係「點解要加 20%？」，你答唔到理由，個預算就被砍。反而有啲部門冇解釋都批 —— 因為佢哋講得清楚每個假設。你自己交上去嘅版本，只係一堆數字，冇故事，冇風險提示。',
    aiHelp: [
      '貼上去年開支 + 今年目標，自動列出各類別預算',
      '每項附同比變化同假設說明，老細問就有得答',
      '加入預算風險提示（收入未達標、突發開支點應對）',
      '生成 1 頁精簡版，老細 3 分鐘睇完'
    ],
    igCaption: `【做明年 budget，你對住去年盤數，唔知應該寫幾多 📊】

交個數上去，老細第一句：
「點解要加 20%？」
你答唔到理由，預算直接被砍。
有啲部門冇解釋都批 —— 因為佢哋講得清假設。

AI Agent 幫你：
✅ 貼上數據 → 列出各類別預算
✅ 每項附同比變化 + 假設說明
✅ 加入預算風險提示
✅ 生成 1 頁精簡版

由一堆數字變成一份有故事嘅預算。

📇 拍到「預算規劃建議」呢張卡，跟住做就答得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '年尾日曆 + 一堆數字 + 苦惱表情', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '對住去年盤數唔知點加', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '老細問「點解加 20%」答唔到', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步生成', description: '貼數據 → 分類 → 加假設', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '同比變化 + 假設說明示範', description: '', type: 'outcome' },
      { slideNumber: 6, label: '畫面', title: '預算風險提示段落', description: '', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#預算規劃', '#財務', '#AI工具', '#年尾總結', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_35.png'
  },
  {
    id: 'card-36',
    cardNumber: '36',
    week: '第6週',
    weekNumber: 6,
    category: '財務預算',
    chineseTitle: '開支報告整理',
    englishTitle: 'Expenditure Report',
    scenarioSummary: '員工提交單據後，整理開支並按類別核算。',
    promptShort: '輸入：將開支單據整理成報告，列出日期、類別、金額、描述及總額；按類別小計，並列出前三大開支類別。[貼上單據資料]',
    benefits: ['資料整齊易核對', '按類別小計', '掌握前三大開支'],
    articleNumber: 52,
    articleTitle: '【二十張單據攤喺枱面逐張打字】開支報告一頁整理',
    hook: '「二十張單據攤喺枱面，你逐張打落 Excel，打到懷疑人生。」',
    painPoints: '同事交單據永遠唔會整齊：有 receipt 相、有 PDF、有手寫收據，金額有時寫大寫。你要逐張打日期、類別、金額、描述，打錯一個數字，之後個總數就對唔上，又要逐行翻。老細想知「邊類開支最多」，你仲要重新拉一次 pivot。呢啲工明明唔需要用人手做。',
    aiHelp: [
      '單據資料貼落去，自動整理成報告（日期／類別／金額／描述／總額）',
      '按類別小計，唔使自己拉 pivot',
      '列出前三大開支類別，老細問即有答案',
      '資料整齊易核對，總數對得上'
    ],
    igCaption: `【二十張單據攤喺枱面，逐張打落 Excel 打到懷疑人生 🧾】

receipt 相、PDF、手寫收據 —— 格式各式各樣。
打錯一個數字，總數就對唔上，
又要逐行翻。
老細問「邊類開支最多」，你仲要重新拉 pivot。

AI Agent 幫你：
✅ 自動整理成報告（日期 / 類別 / 金額 / 描述 / 總額）
✅ 按類別小計
✅ 列出前三大開支類別
✅ 資料整齊易核對，總數對得上

由人手打字變成貼上就好。

📇 拍到「開支報告整理」呢張卡，跟住做就對得清。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '枱面散滿單據 + 頭痛 icon', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '格式唔同、手寫金額難認', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '打錯數字要逐行翻', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 整理流程', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '報告示範', description: '類別小計 + 前三大', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#開支報告', '#報銷', '#財務', '#AI工具', '#Excel技巧'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_36.png'
  },
  {
    id: 'card-37',
    cardNumber: '37',
    week: '第6週',
    weekNumber: 6,
    category: '財務預算',
    chineseTitle: '活動預算規劃',
    englishTitle: 'Event Budget Planning',
    scenarioSummary: '籌辦活動或會議時製作完整預算。',
    promptShort: '輸入：為[人數]人的[活動類型]製作預算表，列出場地、餐飲、物料、講者、宣傳、雜費的預算及備註，最後加總並計算每人成本。',
    benefits: ['列出各項預算', '附上項目備註', '計算每人成本'],
    articleNumber: 37,
    articleTitle: '【老細話搞個 event】活動預算一頁計到每人成本',
    hook: '「老細話『你搞個 event』，你連場地租幾錢都未知。」',
    painPoints: '公司年會、客戶活動、team building，通常一句「你搞啦」就落喺你身上。真正痛苦唔係執行，係一開始報 budget：場地、餐飲、物料、講者、宣傳、雜費，你要逐項估，估漏一項就要自己部門食。老細問「每人成本幾多」你答唔出，報上去嘅數就唔夠說服力，最後被削預算再自己補鑊。',
    aiHelp: [
      '講清人數同活動類型，即出完整預算表（場地／餐飲／物料／講者／宣傳／雜費）',
      '每項附備註（例如場地包唔包音響），報 budget 時有得解釋',
      '自動加總並計算每人成本，老細問即有數',
      '1 頁預算表交得出去，有數有備註'
    ],
    igCaption: `【老細話「你搞個 event」，你連場地租幾錢都未知 🎪】

場地、餐飲、物料、講者、宣傳、雜費 ——
逐項估，估漏一項就係自己部門食。
老細問「每人成本幾多」，
你答唔出，預算就被削。

AI Agent 幫你：
✅ 一頁完整活動預算表
✅ 每項附備註，報 budget 有得解釋
✅ 自動加總 + 計算每人成本
✅ 1 頁預算表，報得上枱

一句「你搞啦」，變成一份報得上枱嘅預算。

📇 拍到「活動預算規劃」呢張卡，跟住做就有數。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '活動場地草圖 + 一堆問號', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '逐項估價嘅痛苦', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '估漏一項 = 自己部門食', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成預算表', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '預算表示範 + 每人成本計算', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#活動策劃', '#預算', '#AI工具', '#行政', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_37.png'
  },
  {
    id: 'card-38',
    cardNumber: '38',
    week: '第6週',
    weekNumber: 6,
    category: '商業策略',
    chineseTitle: '決策矩陣分析',
    englishTitle: 'Decision-Making Matrix',
    scenarioSummary: '面對多個選項時提供系統化決策建議。',
    promptShort: '輸入：列出3至4個選項及4至5個評估準則，為準則設定權重並評分，最後推薦選項及說明理由。',
    benefits: ['比較多個選項', '準則加權評分', '推薦選項有理據'],
    articleNumber: 34,
    articleTitle: '【三個方案，開咗三次會都揀唔到】決策矩陣一頁搞掂',
    hook: '「三個方案，開咗三次會，最後老細問：『點解揀 A？』——會議室突然好靜。」',
    painPoints: '香港開會最常出現嘅畫面：三個方案攤喺白板，人人有偏好，講到最後係「邊個大聲邊個贏」。老細問「點解揀 A」，冇人答得出，因為其實冇比較過準則。下次出事，責任就落喺當初「提議」嘅你身上。你需要的唔係再開一次會，係一套睇得見嘅評分邏輯。',
    aiHelp: [
      '列出 3–4 個選項 + 4–5 個評估準則（成本、時間、風險、回報）',
      '為準則設定權重再評分，唔使靠感覺',
      '自動排出總分同差異位，邊個選項憑咩贏一眼睇清',
      '最後推薦一個並寫明理由，順手幫你答「點解唔揀 B」'
    ],
    igCaption: `【三個方案，開咗三次會都揀唔到 🤯】

人人有偏好，
講到最後係「邊個大聲邊個贏」。
老細問「點解揀 A」——
會議室突然好靜。

AI Agent 幫你：
✅ 選項 x 準則，全部攤出嚟
✅ 設定權重 + 評分，唔靠感覺
✅ 排總分，睇清差異位
✅ 推薦 + 寫明理由（連「點解唔揀 B」都有）

由吵三次會，變成開一次會就決定。

📇 拍到「決策矩陣分析」呢張卡，跟住做就答得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '白板上三個方案 + 靜咗嘅會議室', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '人人有偏好、靠大聲', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '老細問「點解揀 A」嘅沉默', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 建立矩陣', description: '選項 x 準則 x 權重', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '評分表示範 + 推薦理由', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#決策', '#管理技巧', '#AI工具', '#開會日常', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_38.png'
  },
  {
    id: 'card-39',
    cardNumber: '39',
    week: '第6週',
    weekNumber: 6,
    category: '商業策略',
    chineseTitle: 'SWOT 分析與競爭策略',
    englishTitle: 'SWOT Analysis',
    scenarioSummary: '面對新競爭壓力，結構化分析應對策略。',
    promptShort: '輸入：為[產品／業務／項目]進行SWOT分析，提出3個策略選項，列出資源、效果、風險及時間框架，最後推薦一項並說明理由。[貼上競爭形勢]',
    benefits: ['結構化分析競爭形勢', '提出三個策略選項', '推薦方案並說明理由'],
    articleNumber: 35,
    articleTitle: '【對手減價，老細要你即場講策略】SWOT 一頁交到貨',
    hook: '「對手出新價，老細開會一句：『我哋點應對？』——你連 SWOT 都未寫。」',
    painPoints: '老細睇完對手新聞就開始緊張，隨時一句「我哋策略係咩？」。你手上只有零散市場資訊，未做過分析，只能答「我哋質素好啲」。問題係老細要嘅唔係口號，係「點做、要幾多資源、幾時見效」。冇結構化分析，你連自己想講咩都講唔清，最後個策略會就變成「再研究下」。',
    aiHelp: [
      '貼上競爭形勢，出 SWOT 四象限（優勢／弱點／機會／威脅）',
      '提出 3 個策略選項，每個列明資源、效果、風險、時間框架',
      '推薦其中一項並說明理由，開會唔使臨場作',
      '附 1 頁策略比較表，開會直接投上去'
    ],
    igCaption: `【對手減價，老細一句「我哋點應對？」😰】

你手上只有零散市場資訊，
答到嘅只有「我哋質素好啲」。
老細要嘅係「點做、用幾多資源、幾時見效」——
你答唔到，個策略會就變成「再研究下」。

AI Agent 幫你：
✅ SWOT 四象限（優勢／弱點／機會／威脅）
✅ 3 個策略選項（資源／效果／風險／時間）
✅ 推薦一項 + 說明理由
✅ 附策略比較表，開會直接講

由口號變成一份交得出去嘅策略。

📇 拍到「SWOT 分析與競爭策略」呢張卡，跟住做就講得清。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '對手降價新聞 + 老細凝重表情', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '「我哋點應對？」嘅即場壓力', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '手上只有零散資訊、答「質素好啲」', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成 SWOT 四象限', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '3 個策略選項對比表', description: '', type: 'outcome' },
      { slideNumber: 6, label: '畫面', title: '推薦方案 + 理由 + 策略比較表', description: '', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#SWOT', '#商業策略', '#市場分析', '#AI工具', '#管理層'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_39.png'
  },
  {
    id: 'card-40',
    cardNumber: '40',
    week: '第6週',
    weekNumber: 6,
    category: '商業策略',
    chineseTitle: '供應商評估報告',
    englishTitle: 'Vendor Selection Analysis',
    scenarioSummary: '需要製作正式供應商選擇評估報告。',
    promptShort: '輸入：供應商資料；按價格、交期、品質、服務及穩定性評估，每項以1至5分評分，最後排名、推薦，並列出風險及跟進建議。',
    benefits: ['按準則評分排名', '選擇有理有據', '識別風險及跟進'],
    articleNumber: 36,
    articleTitle: '【用咗兩年嘅供應商，老細要你出評估報告】供應商評估一頁排名',
    hook: '「用咗兩年嘅供應商，老細一句：『出份評估報告，睇下要唔要換。』」',
    painPoints: '採購、營運最怕呢句。你心裡面知道邊間好邊間麻麻，但要寫成正式報告，就要有準則、有評分、有排名 —— 唔可以寫「感覺 A 好啲」。而且換供應商風險高：交期、品質、售後、穩定性，一項出事都係你孭。冇一套寫得出理由嘅評估，你連自己都說服唔到。',
    aiHelp: [
      '按價格、交期、品質、服務、穩定性逐項 1–5 分評分',
      '自動排名，推薦首選並講清理由',
      '標示風險（單一供應商依賴、交期波動）同跟進建議',
      '出正式報告格式，管理層直接睇得明'
    ],
    igCaption: `【用咗兩年嘅供應商，老細要你出評估報告 📋】

你知邊間好、邊間麻麻，
但報告唔可以寫「感覺 A 好啲」。
換供應商風險高 ——
交期、品質、售後，一項出事都係你孭。

AI Agent 幫你：
✅ 按價格／交期／品質／服務／穩定性評分
✅ 自動排名 + 推薦首選
✅ 標示風險 + 跟進建議
✅ 出正式報告格式

由「我感覺」變成「有分數有理由」。

📇 拍到「供應商評估報告」呢張卡，跟住做就交得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '兩年合約文件 + 老細一句「要唔要換？」', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '心裡有數但寫唔出理由', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '換供應商嘅風險清單', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 評分流程', description: '5 個準則 x 1–5 分', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '排名表 + 風險 + 跟進建議', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#採購', '#供應商管理', '#評估報告', '#AI工具', '#營運'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_40.png'
  },
  {
    id: 'card-B01',
    cardNumber: 'B01',
    week: 'Bonus',
    weekNumber: 7,
    category: '日常文檔',
    chineseTitle: '培訓材料製作',
    englishTitle: 'Training Materials',
    scenarioSummary: '需要為新工具或流程製作內部培訓材料。',
    promptShort: '輸入：「製作一份[主題]的培訓材料，包含：學習目標、核心概念解釋、3 個實作練習、常見問題、評估小測。適合初學者。」',
    benefits: ['建立清晰學習架構', '新人可自學上手', '材料即時可用'],
    articleNumber: 53,
    articleTitle: '【同一個 training 講咗第四次】培訓材料一頁成形（備用卡版本）',
    hook: '「同一個 training 講咗第四次，你開始懷疑自己係人定係錄音機。」',
    painPoints: '新人一個接一個入職，你每次都坐低由頭講一次：「個 system 咁開、個 report 咁交、有問題搵邊個。」講到第四個你已經冇心機，新人又聽得一舊舊，返去做錯又要你補鑊。公司冇現成材料，你又唔想花幾日砌 —— 因為砌完都唔知有冇人睇。時間就係咁樣一個一個新人流走。',
    aiHelp: [
      '出一份完整材料：學習目標、核心概念、3 個實作練習、常見問題、評估小測',
      '練習同小測按初學者程度設計，新人可以自己跟上',
      '一份材料重複用，新人入職直接發出去，唔使自己再講一次',
      '新人自己睇得明，唔需要你逐個再帶一次'
    ],
    igCaption: `【同一個 training 講咗第四次，我開始懷疑自己係錄音機 🎙️】

新人一個接一個入嚟，
每次都由頭講一次：
「個 system 咁開、個 report 咁交、有問題搵邊個。」
講到第四個已經冇心機。

AI Agent 幫你：
✅ 完整材料：學習目標 / 核心概念 / 實作練習 / 常見問題 / 小測
✅ 按初學者程度設計，新人自學得明
✅ 一份材料重複用，入職直接發出去
✅ 新人自己睇得明，唔使再帶

講第四次嘅時間，省返落嚟做正經事。

📇 拍到「培訓材料製作」呢張卡，跟住做就唔使再講。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '講咗第四次', description: 'Hook 大字 + 錄音機 icon', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '每次坐低由頭講一次', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '新人聽得一舊舊，返去做錯要補鑊', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成材料結構', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '材料預覽', description: '目標 → 概念 → 練習 → 小測', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#培訓', '#新人上手', '#HR', '#AI工具', '#帶人日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_B01.png'
  },
  {
    id: 'card-B02',
    cardNumber: 'B02',
    week: 'Bonus',
    weekNumber: 7,
    category: '日常文檔',
    chineseTitle: '政策法規摘要',
    englishTitle: 'Policy Briefing',
    scenarioSummary: '新發佈的政策或法規，需要快速掌握對公司的影響。',
    promptShort: '輸入：「摘要以下政策／法規文件：核心條文、生效日期、對行業的影響、需要採取的行動、合規截止日期。無法找到的標示「待確認」。」',
    benefits: ['抓取核心條文', '釐清合規行動', '掌握截止日期'],
    articleNumber: 25,
    articleTitle: '【落咗份新政策幾十頁】合規重點一頁睇完',
    hook: '「公司 email 落咗份新政策，你只知要跟，唔知要跟咩。」',
    painPoints: '做合規、HR、營運、財務，成日收到監管機構文件或者公司新政策 —— 幾十頁 PDF，條文寫到冇人睇得明。你要答管理層三條問題：「對我們有咩影響？」「幾時要交嘢？」「具體要做咩？」。睇完仲要寫 email 通知同事要跟，但你自己都唔肯定理解得對唔對。文件睇漏一段，之後就係合規風險。',
    aiHelp: [
      '抽取核心條文 + 生效日期，唔使逐頁睇',
      '講清對行業同公司嘅實際影響',
      '列出需要採取嘅行動 + 合規截止日期',
      '文件冇寫清楚嘅，標示「待確認」，唔會幫你估'
    ],
    igCaption: `【落咗份新政策幾十頁，你只知要跟唔知跟咩 📑】

條文寫到冇人睇得明，
管理層問「對我哋有咩影響」——
你只能答「我再研究下」。
睇漏一段，之後就係合規風險。

AI Agent 幫你：
✅ 抽取核心條文 + 生效日期
✅ 講清對行業同公司嘅影響
✅ 列出要採取嘅行動 + 合規死線
✅ 文件冇寫嘅 → 標示「待確認」

幾十頁壓縮成一頁，重點一個都唔漏。

📇 拍到「政策法規摘要」呢張卡，跟住做就有答案。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '幾十頁政策文件 + 頭暈 icon', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '條文睇唔明、睇到一半放棄', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '管理層三條問題都答唔到', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步摘要', description: '核心條文 → 影響 → 行動', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '合規死線 timeline 展示', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#合規', '#政策法規', '#AI工具', '#職場自救', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_B02.png'
  },
  {
    id: 'card-B03',
    cardNumber: 'B03',
    week: 'Bonus',
    weekNumber: 7,
    category: '日常文檔',
    chineseTitle: '合同條款審閱',
    englishTitle: 'Contract Review',
    scenarioSummary: '收到一份合同，需要快速找出潛在風險條款。',
    promptShort: '輸入：「審閱以下合同，找出：5 個潛在風險條款、每個風險的嚴重程度（高／中／低）、建議修改方向。最後列出 3 個需要法律顧問確認的條款。  [貼上合同]」',
    benefits: ['辨識風險條款', '排序嚴重程度', '聚焦法律確認'],
    articleNumber: 54,
    articleTitle: '【同事叫你睇下份約有冇問題】合同風險條款一頁篩出',
    hook: '「同事話『你睇下份約有冇問題』，你望住幾十頁密密麻麻嘅條款。」',
    painPoints: 'SME 冇 in-house lawyer，合同通常簽到最後一刻先有人睇。你唔係法律背景，睇完都唔肯定邊句有風險，只能夠逐頁掃過去然後簽名。最怕係簽咗之後先發現有自動續約、獨家條款、賠償上限寫到對自己不利。想拎去問律師，但又唔知應該問邊三條問題 —— 律師鐘錢貴，總不能全文讀一次。',
    aiHelp: [
      '審閱合同，找出 5 個潛在風險條款',
      '標示每個風險嘅嚴重程度（高／中／低），先睇高危',
      '建議修改方向，同律師討論時有具體起點',
      '最後列出 3 個必須法律顧問確認嘅條款，唔會大海撈針',
      '⚠️ AI 輸出屬初步篩查，唔代替法律意見；正式簽署前仍須由律師確認'
    ],
    igCaption: `【同事話「你睇下份約有冇問題」，你望住幾十頁條款 📑】

唔係法律背景，
睇完都唔肯定邊句有風險。
最怕簽咗之後先發現：
自動續約、獨家條款、賠償上限寫死對自己不利。

AI Agent 幫你：
✅ 找出 5 個潛在風險條款
✅ 標示嚴重程度（高／中／低）
✅ 建議修改方向
✅ 列出 3 個必須律師確認嘅條款

由「逐頁掃過去」變成「先睇高危三條」。
⚠️ AI 篩查唔代替法律意見，正式簽署前仍要問律師。

📇 拍到「合同條款審閱」呢張卡，跟住做就唔會盲簽。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '一疊合同 + 放大鏡', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '非法律背景硬睇條款', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '自動續約 / 獨家條款 / 賠償上限嘅陷阱', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 篩查流程', description: '5 風險 → 嚴重程度 → 修改方向', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '高危條款 + 律師確認清單', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#合同', '#法務', '#SME', '#AI工具', '#風險管理'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_B03.png'
  },
  {
    id: 'card-B04',
    cardNumber: 'B04',
    week: 'Bonus',
    weekNumber: 7,
    category: '客戶服務',
    chineseTitle: '客戶成功案例撰寫',
    englishTitle: 'Success Story',
    scenarioSummary: '完成成功案例，需要整理成可供銷售使用的案例研究。',
    promptShort: '輸入：「根據以下項目成果，撰寫一份 1 頁客戶成功案例：客戶背景、挑戰、解決方案、實施過程、量化成果、客戶評價。語氣真實，不宜過度誇張。」',
    benefits: ['結構化案例敘事', '呈現量化成果', '支援銷售溝通'],
    articleNumber: 28,
    articleTitle: '【做完單靚 Case，老細問「有冇 case study？」】成功案例一頁寫完',
    hook: '「項目做完好成功，但老細問『有冇 case study？』你答唔出。」',
    painPoints: '做得成一單 case 唔等於有素材 —— 客戶背景、挑戰、解決方案、量化成果，全部散落喺 email、會議紀錄、自己腦入面。銷售想用嚟 pitch 又冇現成資料，客戶過半年都唔記得成果。想寫 case study，又怕寫得太誇張、又要客戶 approve，結果一拖再拖，最後不了了之，成單戰績白做。',
    aiHelp: [
      '按結構生成 1 頁案例：客戶背景、挑戰、解決方案、實施過程、量化成果、客戶評價',
      '幫你把散落嘅成果數字整理成可量化表述',
      '語氣真實、唔浮誇，減少客戶 approve 時嘅爭議',
      '1 頁寫完，銷售即刻可以用嚟 pitch'
    ],
    igCaption: `【做完單靚 case，老細問「有冇 case study？」你答唔出 😐】

成果散落喺 email、會議紀錄、同你自己個腦，
銷售想用嚟 pitch 又冇現成資料。
客戶過半年都唔記得自己做過咩。
一拖再拖，成單戰績白做。

AI Agent 幫你：
✅ 1 頁案例：背景、挑戰、方案、成果、評價
✅ 散落數字整理成量化成果
✅ 語氣真實唔浮誇，易過客戶 approve
✅ 1 頁寫完，銷售直接用得

打完一單，留低一個可以再用嘅資產。

📇 拍到「客戶成功案例撰寫」呢張卡，跟住做就寫得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '有冇 case study？', description: 'Hook 大字 + 心虛表情', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '成果散落喺唔同地方', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '想寫但唔知由邊度落筆', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 一頁結構生成', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '量化成果示範', description: 'Before 做過咩 vs After 達成咩', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#案例研究', '#行銷素材', '#AI工具', '#客戶成功', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_B04.png'
  }
];
