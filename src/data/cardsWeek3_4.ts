import { CardData } from '../types/card';

export const cardsWeek3_4: CardData[] = [
  {
    id: 'card-15',
    cardNumber: '15',
    week: '第3週',
    weekNumber: 3,
    category: '日常文檔',
    chineseTitle: '來源核察',
    englishTitle: 'Fact Check',
    scenarioSummary: '需要查找原始來源並評估說法可靠性。',
    promptShort: '輸入：貼上說法，查找原始來源並評估可靠性；找不到可靠來源，明確標示「未經證實」。',
    benefits: ['追溯事實來源', '評估來源可靠性', '標示未經證實說法'],
    articleNumber: 22,
    articleTitle: '【老細問「呢個數字邊度嚟？」】來源核察一鍵追溯',
    hook: '「老細問『呢個數字邊度嚟？』你個心即刻涼咗一半。」',
    painPoints: '寫 proposal、report、deck，引用嘅市場數字、統計、新聞，好多時都係「聽返嚟」或者上次同事留低嘅。老細一句「呢個數據邊度嚟？可靠嗎？」你就啞咗。上網搵返 original source，逐個網站翻，搵到嘅可能只係二手轉載，原文根本冇講過。最後只能偷偷刪走條數，或者改口講「大約」。交報告最怕嘅唔係寫得唔靚，係企唔穩。',
    aiHelp: [
      '貼上說法，自動追溯原始來源',
      '評估來源可靠性（官方數據 / 一手文件 / 二手轉載）',
      '搵唔到可靠來源，明確標示「未經證實」，唔會幫你作數',
      '列出待補資料清單，交報告前自己補齊'
    ],
    igCaption: `【老細問「呢個數字邊度嚟？」，你個心即刻涼咗 🥶】

條數係上次個 report 抄落嚟，
又或者係同事口頭講過。
Google 一輪，全部都係二手轉載，
原文根本冇講過。

AI Agent 幫你：
✅ 追溯原始來源
✅ 評估來源可靠性
✅ 搵唔到 → 標示「未經證實」
✅ 列出待補資料清單

交報告前核一次，唔使靠估。

📇 拍到「來源核察」呢張卡，跟住做就企得穩。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '呢個數字邊度嚟？', description: 'Hook 大字 + 心涼表情', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '數字源頭不明、同事口頭講過', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: 'Google 一輪，全部二手轉載', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 追溯流程', description: '貼說法 → 找原文 → 評可靠性', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '可靠 vs「未經證實」標示對比', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#factcheck', '#報告寫作', '#AI工具', '#職場自救', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_15.png'
  },
  {
    id: 'card-16',
    cardNumber: '16',
    week: '第3週',
    weekNumber: 3,
    category: '財務預算',
    chineseTitle: '比較供應商報價表',
    englishTitle: 'Quotation Comparison',
    scenarioSummary: '需要比較不同格式的供應商報價表。',
    promptShort: '輸入：比較供應商報價表，列出單價、數量、運費、稅項、交付期、付款條款、保養期、有效期；推薦選項並列出風險及追問問題。',
    benefits: ['總成本一目了然', '條款清晰可比較', '推薦選項及早識別風險'],
    articleNumber: 23,
    articleTitle: '【三份報價表，格式唔同貨幣唔同】供應商比較一鍵搞掂',
    hook: '「三間公司報價，一間包運費，一間要 prepay，你點揀？」',
    painPoints: '做採購、行政、營運，成日要收幾間供應商報價。麻煩係：每間格式唔一樣 —— 一間寫總價、一間寫單價 x 數量、一間唔包運費、一間 30 日數期、一間要 prepay。你想比較，就要自己開個 Excel 逐項抄，抄完仲要對到期日、對付款狀態。遺漏一張帳單，下個月就會出現逾期罰款或者重複付款 —— 而冇人會記得係你有冇收過。',
    aiHelp: [
      '唔同格式報價貼落去，統一成同一張比較表',
      '列明單價、數量、運費、稅項、交付期、付款條款、保養期、報價有效期',
      '算出總成本，唔係淨係睇面價平唔平',
      '推薦選項，及早識別風險，並列出要向供應商追問嘅問題'
    ],
    igCaption: `【三間報價，一間包運費一間要 prepay，你點揀？🤔】

每間格式唔一樣，
一間寫總價、一間寫單價 x 數量。
手動抄落 Excel，抄完仲驚睇漏條款。
老細問「點解揀呢間」，你只能講「感覺佢平啲」。

AI Agent 幫你：
✅ 統一成同一張比較表
✅ 列明運費、稅項、交期、付款條款、保養
✅ 算出總成本，唔淨係睇面價
✅ 推薦選項 + 風險 + 追問清單

由「感覺平啲」變成「有根據推薦」。

📇 拍到「比較供應商報價表」呢張卡，跟住做就唔使估。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '三份唔同格式報價單散喺枱面', description: '+ 頭痛 icon', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '格式／貨幣／條款全部唔同', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '手動抄落 Excel 嘅痛苦', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 一鍵統一比較表', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '總成本對比', description: '面價 vs 埋單價', type: 'outcome' },
      { slideNumber: 6, label: '畫面', title: '推薦 + 風險 + 追問問題清單', description: '', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#採購', '#報價比較', '#AI工具', '#成本控制', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_16.png'
  },
  {
    id: 'card-17',
    cardNumber: '17',
    week: '第3週',
    weekNumber: 3,
    category: '財務預算',
    chineseTitle: '製作損益表',
    englishTitle: 'Create P&L View',
    scenarioSummary: '用Excel製作損益表模型，不用由零開始。',
    promptShort: '輸入：製作12個月損益表Excel模型，包含收入假設、成本類別、毛利及淨利；加入假設頁和公式，修改假設即可即時查看影響。',
    benefits: ['12個月損益清晰呈現', '假設與公式完整', '修改假設即時更新數字'],
    articleNumber: 18,
    articleTitle: '【老細問「單價加 5% 會點？」】損益表模型即出',
    hook: '「老細突然問『單價加 5% 會點？』你仲喺度由零砌個 Excel 模型。」',
    painPoints: '香港做營運、銷售、管理，老細隨時要睇損益 —— 「呢個月賺幾多？」「成本升一成頂唔頂得住？」「單價加 5% 影響幾大？」。你手上有一堆收入同成本數字，但冇模型：由零砌公式、開 sheet、拉足 12 個月，砌到一半已經兩個鐘。想答假設性問題，唯有再開一個 Excel 手動改，改完又唔記得改咗邊個數 —— 答得慢，仲講唔清影響。',
    aiHelp: [
      '講清收入同成本假設，即出 12 個月損益表模型（收入、成本類別、毛利、淨利）',
      '附獨立假設頁同公式，唔使由零砌 Excel',
      '改一個假設（單價 +5%、成本 +10%）即時睇到對毛利淨利嘅影響',
      '12 個月損益清晰呈現，收入、成本、毛利、淨利一頁睇晒'
    ],
    igCaption: `【老細突然問「單價加 5% 會點？」你仲喺度由零砌 Excel 🧮】

由零砌公式、開 sheet、拉足 12 個月，
砌到一半已經兩個鐘。
老細再追一句假設性問題 ——
你又開多一個 Excel 手動改。

AI Agent 幫你：
✅ 講清收入 / 成本假設 → 即出 12 個月損益表模型
✅ 假設頁 + 公式完整，唔使由零砌
✅ 改一個假設，數字即時更新
✅ 12 個月損益清晰，老細問即場答

由「等我砌個 Excel」變成「我即刻試畀你睇」。

📇 拍到「製作損益表」呢張卡，跟住做就有模型在手。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '老細問「單價加 5% 會點？」', description: '+ 未砌完嘅 Excel', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '由零砌公式、拉足 12 個月，兩個鐘過去', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '老細追問假設，你又要開多個 Excel 手動改', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步', description: '講假設 → 出模型 → 加假設頁', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '改一個假設，毛利 / 淨利即時變', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#損益表', '#Excel模型', '#財務分析', '#AI工具', '#數據分析'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_17.png'
  },
  {
    id: 'card-18',
    cardNumber: '18',
    week: '第3週',
    weekNumber: 3,
    category: '數據分析',
    chineseTitle: '數據趨勢分析',
    englishTitle: 'Data & Trend Analysis',
    scenarioSummary: '從銷售或營運數據找出趨勢及異常。',
    promptShort: '輸入：分析以下數據，找出3大趨勢、2個異常數據點及1個可行動建議，並為每項發現附簡短解釋。[上傳Excel或貼上數據]',
    benefits: ['掌握三大數據趨勢', '提示兩個異常數據點', '提出可行動建議'],
    articleNumber: 47,
    articleTitle: '【老細話「睇下啲數」，你唔知睇邊行】數據趨勢一頁講清',
    hook: '「老細話『睇下啲數』，你開住個 Excel，唔知自己應該睇邊行。」',
    painPoints: '數據擺喺度，但唔知由邊度睇起。拉 pivot、畫 chart，圖整得幾靚都好，講唔出「咁即係點」。最緊要嘅異常數字往往藏喺細節 —— 某個產品上個月突然跌三成，你冇發現，到下個月老細自己睇到，問你「點解你冇提過？」。做分析唔係做圖，係要講得出結論同行動。',
    aiHelp: [
      '一貼數據，自動找出 3 大趨勢',
      '標示 2 個異常數據點，突然跌或者突然升嘅位一個都唔漏',
      '每項發現附簡短解釋，唔會丟一堆數字畀你自己諗',
      '最後給 1 個可行動建議 —— 分析完即做得'
    ],
    igCaption: `【老細話「睇下啲數」，你唔知自己應該睇邊行 📉】

拉 pivot、畫 chart，
圖整得靚，但講唔出「咁即係點」。
某個產品突然跌三成你都冇發現 ——
到下個月老細自己睇到，問你「點解冇提過？」

AI Agent 幫你：
✅ 自動找出 3 大趨勢
✅ 標示 2 個異常數據點
✅ 每項附簡短解釋
✅ 最後給 1 個可行動建議

由「一堆圖」變成「一個結論」。

📇 拍到「數據趨勢分析」呢張卡，跟住做就講得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '睇下啲數', description: 'Hook 大字 + 迷茫表情', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: 'chart 靚但講唔出結論', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '異常數字藏在細節、老細自己發現', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步', description: '貼數據 → 3 趨勢 → 2 異常', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '趨勢 + 異常標示示範', description: '', type: 'outcome' },
      { slideNumber: 6, label: '畫面', title: '可行動建議段落', description: '', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#數據分析', '#趨勢分析', '#Excel', '#AI工具', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_18.png'
  },
  {
    id: 'card-19',
    cardNumber: '19',
    week: '第3週',
    weekNumber: 3,
    category: '數據分析',
    chineseTitle: 'KPI 儀表板與報告',
    englishTitle: 'KPI Dashboard',
    scenarioSummary: '需要製作KPI儀表板及月度報告。',
    promptShort: '輸入：製作HTML KPI儀表板，顯示3至5個KPI、圖表及綠黃紅提示；再按數據整理月報，列出目標、實際值、達成率、月比及原因分析，最後作整體評估。[貼上數據]',
    benefits: ['目標實際值清晰', '達成率一目了然', '掌握原因及整體表現'],
    articleNumber: 31,
    articleTitle: '【老細要 dashboard，你手上只有十個 Excel】KPI 儀表板一頁睇晒',
    hook: '「老細話『整個 dashboard 嚟睇』，你手上只有十個散開嘅 Excel。」',
    painPoints: '月報月月都要交，但你手上嘅數據散落喺十個 Excel、幾個系統、同事 email 附件。要砌 KPI，就要手動 copy 埋一齊、拉 chart、再截圖落 PPT。最慘係老細睇完只問一句：「即係達唔達標？」你交咗一堆圖，但講唔清目標同實際差幾遠、點解會差、下個月點算。做咗成日，等於冇做分析。',
    aiHelp: [
      '貼上數據，直接生成 HTML KPI 儀表板（3–5 個指標 + 圖表 + 綠黃紅提示）',
      '月報自動列明目標、實際值、達成率、月比，唔使自己逐格對',
      '加上原因分析：邊個 KPI 跌、可能係咩事',
      '最後出整體評估，老細問「即係點」你答得出口'
    ],
    igCaption: `【老細話「整個 dashboard 嚟睇」，你手上只有十個散開嘅 Excel 📊】

手動 copy 埋一齊、拉 chart、截圖落 PPT，
做咗成日。
老細睇完只問一句：「即係達唔達標？」
你答唔到 —— 因為你只係砌圖，冇做分析。

AI Agent 幫你：
✅ 生成 HTML KPI 儀表板（綠黃紅提示）
✅ 月報列明目標 / 實際 / 達成率 / 月比
✅ 加上原因分析
✅ 最後出整體評估

一堆圖，變成一個答得到問題嘅 dashboard。

📇 拍到「KPI 儀表板與報告」呢張卡，跟住做就交得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '整個 dashboard 嚟睇', description: 'Hook 大字 + 十個 Excel 圖示', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '數據散落喺 Excel／系統／email 附件', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '手動拉 chart、截圖落 PPT 嘅痛苦', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: '老細問「即係達唔達標」嘅尷尬', description: '', type: 'pain' },
      { slideNumber: 5, label: '畫面', title: 'AI Agent 三步', description: '貼數據 → 出儀表板 → 寫月報', type: 'process' },
      { slideNumber: 6, label: '畫面', title: 'Before vs After 對比', description: 'Before（一堆圖） vs After（目標／實際／達成率／原因一頁睇晒）', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '「拍到邊張卡，就跟住做」', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#KPI', '#數據分析', '#月度報告', '#AI工具', '#中層管理'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_19.png'
  },
  {
    id: 'card-20',
    cardNumber: '20',
    week: '第3週',
    weekNumber: 3,
    category: '數據分析',
    chineseTitle: '問卷結果分析',
    englishTitle: 'Survey Result Analysis',
    scenarioSummary: '快速整理問卷或反饋表，轉化為可行動的洞察報告。',
    promptShort: '輸入：使用表格加摘要分析問卷結果，統計每題回應分佈，找出3個最重要發現，提出2個改善建議。[上傳或貼上數據]',
    benefits: ['統計回應分佈', '找出三項重要發現', '提出兩項改善建議'],
    articleNumber: 21,
    articleTitle: '【收咗 300 份問卷，老細：做個 summary 嚟睇】問卷結果一鍵變洞察',
    hook: '「老細話『份問卷做個 summary』，你望住個 Excel 唔知由邊度開始。」',
    painPoints: '香港白領成日要處理問卷同反饋 —— 客戶滿意度、員工 survey、活動後回饋、產品調研。收返嚟嘅數據散落喺 Google Form、Excel、紙本，開住個 pivot table 都唔知睇咩。最慘係老細要嘅唔係一堆數字，係「咁即係點？跟住要改咩？」—— 但你交上去只有百分比，答唔到後面兩條問題，個 summary 等於冇做。',
    aiHelp: [
      '表格 + 摘要統計每題回應分佈，唔使自己拉 pivot',
      '自動找出 3 個最重要發現（唔係最靚嘅數字，係最需要行動嘅位）',
      '提出 2 個具體改善建議，扣返業務場景',
      '每項發現引用返原文回答，老細質疑都有得撐'
    ],
    igCaption: `【收咗 300 份問卷，老細一句「做個 summary 嚟睇」😵‍💫】

拉咗個 pivot table，
交上去只有一堆百分比。
老細問：「咁即係點？要改咩？」
你答唔到 —— 因為你只做咗統計，冇做分析。

AI Agent 幫你：
✅ 統計每題回應分佈
✅ 找出 3 個最重要發現
✅ 提出 2 個改善建議
✅ 每項發現引用原文佐證

由「一堆數字」變成「一份有結論嘅報告」。

📇 拍到「問卷結果分析」呢張卡，跟住做就交得出貨。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '收咗 300 份問卷，老細：做個 summary', description: 'Hook 大字 + 眼花 icon', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '三份數據源散落喺 Form / Excel / 紙本', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '拉 pivot 拉到眼花，交上去只有百分比', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: '老細問「咁即係點」嘅尷尬', description: '', type: 'pain' },
      { slideNumber: 5, label: '畫面', title: 'AI Agent 三步流程', description: '貼數據 → 3 個發現 → 2 個建議', type: 'process' },
      { slideNumber: 6, label: '畫面', title: 'Before vs After 對比', description: 'Before（一堆百分比） vs After（有結論嘅一頁報告）', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '「拍到邊張卡，就跟住做」', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#問卷分析', '#數據分析', '#AI工具', '#白領自救', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_20.png'
  },
  {
    id: 'card-21',
    cardNumber: '21',
    week: '第3週',
    weekNumber: 3,
    category: '項目管理',
    chineseTitle: '項目章程撰寫',
    englishTitle: 'Project Charter',
    scenarioSummary: '新項目啟動，需提交項目章程供管理層審批。',
    promptShort: '輸入：撰寫項目章程，包含目標、範圍、里程碑、資源、時間表、風險、成功指標、發起人及權限；讓管理層5分鐘內理解。',
    benefits: ['目標範圍清晰', '管理層快速判斷', '支援項目批准'],
    articleNumber: 19,
    articleTitle: '【老細話「開個新項目」，你連章程都未寫過】項目章程 30 分鐘急救',
    hook: '「老細話『開個新項目』，你連項目章程係咩都未搞清楚。」',
    painPoints: '香港做項目管理、產品經理、甚至普通 team lead，成日要開新項目。老細一句「做個 project」，你要寫章程——定目標、定範圍、定 stakeholder、定 timeline。但好多時自己冇寫過，唔知點開始，上網搵 template 又唔知邊個啱。搞完個章程用咗成日，老細仲要改十幾次。其實章程就係一個框架，有結構就寫得快。',
    aiHelp: [
      '輸入項目背景 + 目標，自動生成章程框架',
      '填滿目標、範圍、里程碑、資源、時間表、風險、成功指標、發起人及權限',
      '按公司慣用格式調整（table / paragraph / 簡報）',
      '生成 1 頁精簡版，管理層 5 分鐘睇完就知批唔批'
    ],
    igCaption: `【老細話「開個新項目」，你連章程係咩都未搞清楚 😵】

要定目標、定範圍、定 stakeholder、定 timeline……
上網搵 template，唔知邊個啱。
搞完用咗成日，老細仲要改十幾次。

AI Agent 幫你：
✅ 輸入背景 + 目標 → 自動生成章程
✅ 目標 / 範圍 / 里程碑 / 資源 / 時間表
✅ 風險 + 成功指標 + 發起人及權限
✅ 按公司格式調整，出 1 頁精簡版畀管理層

由唔知點開始變成有成章在手。

📇 拍到「項目章程撰寫」呢張卡，跟住做就唔使慌。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '老細「開個 project」畫面 + 驚慌', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '對住空白文件唔知點開始', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '搵 template 搵到頭暈', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 自動生成章程', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '完整框架展示', description: '目標 / 範圍 / 里程碑 / 成功指標', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#項目管理', '#項目章程', '#AI工具', '#PM', '#職場求生'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_21.png'
  },
  {
    id: 'card-22',
    cardNumber: '22',
    week: '第4週',
    weekNumber: 4,
    category: '項目管理',
    chineseTitle: '風險評估矩陣',
    englishTitle: 'Risk Matrix',
    scenarioSummary: '項目有多個風險，需要系統化評估及排列優先級。',
    promptShort: '輸入：根據項目描述建立風險評估矩陣，列出風險描述、發生機率、影響程度、風險等級、緩解措施及負責人。',
    benefits: ['系統化評估風險', '清晰排列處理優先級', '明確緩解措施及負責人'],
    articleNumber: 29,
    articleTitle: '【項目做到一半爆鑊】風險矩陣 30 分鐘補齊',
    hook: '「項目開到一半爆鑊，同事先問：『當初有冇 risk assessment？』」',
    painPoints: '香港開項目，開頭大家都衝 timeline，冇人認真坐低講風險。出事之後，全部人轉頭問你「點解冇預計到？」。冇矩陣就冇優先級 —— 你只能靠感覺決定先救邊樣，結果救錯位、delay，補唔返。老細問「有咩風險？」你只能夠即場亂講幾個，自己都知唔夠說服力。',
    aiHelp: [
      '根據項目描述建立風險矩陣：機率、影響、風險等級',
      '系統化排列處理優先級，唔再靠感覺',
      '明確緩解措施 + 負責人，唔會出現「冇人跟」',
      '開會前 5 分鐘出稿，會上直接討論'
    ],
    igCaption: `【項目做到一半爆鑊，同事先問「當初有冇 risk assessment？」💥】

開頭大家只顧衝 timeline，
冇人坐低講風險。
冇矩陣就冇優先級 ——
只能靠感覺救火，救錯位就補唔返。

AI Agent 幫你：
✅ 建立風險矩陣（機率 x 影響 x 等級）
✅ 排出處理優先級
✅ 明確緩解措施 + 負責人
✅ 開會前 5 分鐘出稿

由事後補鑊變成事前有數。

📇 拍到「風險評估矩陣」呢張卡，跟住做就有準備。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '混亂嘅項目現場 + 爆炸 icon', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '同事問「有冇 risk assessment」嘅尷尬', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '靠感覺救火、救錯位', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成風險矩陣', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '矩陣表示範', description: '風險 / 機率 / 影響 / 等級 / 措施 / 負責人', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#項目管理', '#風險管理', '#AI工具', '#PM', '#職場求生'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_22.png'
  },
  {
    id: 'card-23',
    cardNumber: '23',
    week: '第4週',
    weekNumber: 4,
    category: '日常文檔',
    chineseTitle: '工作流程文檔化',
    englishTitle: 'Workflow Documentation',
    scenarioSummary: '將可重複流程整理成文檔，方便他人接手。',
    promptShort: '輸入：整理一份標準作業程序（SOP）：列出每步操作、所需工具、注意事項及常見錯誤。[描述流程]',
    benefits: ['流程清晰易跟從', '交接更加順暢', '新人可按步執行'],
    articleNumber: 40,
    articleTitle: '【你請兩日假，全組冇人知你點做嘢】工作流程一頁寫成 SOP',
    hook: '「你請兩日假，返嚟發現全組等你 —— 冇人知你平日點做。」',
    painPoints: '每個 office 都有幾個人「識做但冇寫低」。你一請假、一轉工，流程就斷。同事打嚟問你「個 file 放邊」「要唔要通知客」，你人在外地都要覆。想寫 SOP 又唔知由邊開始：太簡略冇用，太詳細又變手冊冇人睇。結果永遠靠口耳相傳，新人上手要三個月。',
    aiHelp: [
      '你口述流程，自動整理成標準作業程序（每步操作、所需工具、注意事項）',
      '列出常見錯誤同處理方法，新人踩少啲坑',
      '按步驟分節，可以自己睇、自己跟',
      '交接、請假、帶新人時直接發出去，唔使逐個講一次'
    ],
    igCaption: `【你請兩日假，全組等你返嚟 —— 冇人知你平日點做 😩】

同事打嚟問「個 file 放邊」、
「要唔要通知客」，
你人在外地都要覆電話。
想寫 SOP 又唔知點開始 ——
太簡略冇用，太詳細冇人睇。

AI Agent 幫你：
✅ 口述流程 → 自動整理成 SOP
✅ 每步操作 + 所需工具 + 注意事項
✅ 列出常見錯誤，新人踩少啲坑
✅ 交接、請假、帶新人直接發出去

你終於可以真正放假。

📇 拍到「工作流程文檔化」呢張卡，跟住做就寫得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '沙灘背景 + 手機響不停', description: '請假被追問', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '全組等你返嚟嘅畫面', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '口耳相傳、新人上手要三個月', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成 SOP 結構', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'SOP 示範', description: '步驟 / 工具 / 注意 / 常見錯誤', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#SOP', '#流程優化', '#交接', '#AI工具', '#帶新人'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_23.png'
  },
  {
    id: 'card-24',
    cardNumber: '24',
    week: '第4週',
    weekNumber: 4,
    category: '項目管理',
    chineseTitle: '項目進度摘要',
    englishTitle: 'Project Status Report',
    scenarioSummary: '需要為主管提供清晰的項目進度摘要。',
    promptShort: '輸入：製作一頁項目進度摘要，列出完成百分比、已達成里程碑、進行中任務、阻塞點及下週重點。[貼上項目狀態]',
    benefits: ['一頁掌握項目全局', '清晰呈現阻塞事項', '聚焦下週工作重點'],
    articleNumber: 48,
    articleTitle: '【老細問「個 project 做到邊？」你答「進行中」】進度摘要一頁交貨',
    hook: '「老細問『個 project 做到邊？』你答『進行中』—— 佢個樣即刻變。」',
    painPoints: '每週都要報進度，但你手上係一堆 task list、幾個 group chat、自己隨手寫嘅筆記。要講到「完成幾多 %、邊個位卡住、下週做咩」，就要開幾個視窗對一次。講得太簡略，老細覺得你冇進度；講得太多，佢又冇心機聽。最慘係阻塞點冇寫出來 —— 到爆鑊時你先講「其實卡咗兩個禮拜」。',
    aiHelp: [
      '貼上項目狀態，出一頁進度摘要（完成 %、里程碑、進行中、阻塞點、下週重點）',
      '阻塞點自動突出，唔會靜靜埋喺段落入面',
      '每週格式一致，老細一眼睇到變化',
      '5 分鐘寫完，唔使開五個視窗對數'
    ],
    igCaption: `【老細問「個 project 做到邊？」你答「進行中」😐】

手上係一堆 task list、幾個 group chat、
同自己隨手寫嘅筆記。
阻塞點冇寫出來 ——
到爆鑊你先講「其實卡咗兩個禮拜」。

AI Agent 幫你：
✅ 一頁摘要（完成 % / 里程碑 / 進行中 / 阻塞 / 下週重點）
✅ 阻塞點自動突出
✅ 每週格式一致，一眼睇到變化
✅ 5 分鐘寫完

由「進行中」變成「做到邊、卡喺邊、下週做咩」。

📇 拍到「項目進度摘要」呢張卡，跟住做就報得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '進行中', description: 'Hook 大字 + 老細個樣變咗', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '進度散落喺 task list / group chat / 筆記', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '阻塞點冇報，兩星期後爆鑊', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成一頁摘要', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '摘要示範', description: '% / 里程碑 / 阻塞 / 下週', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#項目管理', '#進度報告', '#PM', '#AI工具', '#職場求生'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_24.png'
  },
  {
    id: 'card-25',
    cardNumber: '25',
    week: '第4週',
    weekNumber: 4,
    category: '項目管理',
    chineseTitle: '資源分配建議',
    englishTitle: 'Resources Planning',
    scenarioSummary: '在人手有限下，為各項目作出最佳資源分配。',
    promptShort: '輸入：各項目的優先級及所需技能，建議資源分配方案，兼顧優先級、技能匹配及工作量平衡。',
    benefits: ['合理分配資源', '清晰匹配技能', '平衡工作量'],
    articleNumber: 32,
    articleTitle: '【三個項目，一隊人，老細問你邊個排先】資源分配一頁講清',
    hook: '「三個項目，一隊人，老細問你『邊個排先』——你心裡面只知人人都爆鐘。」',
    painPoints: '香港團隊永遠人手不足。三個項目同時開，個個老細都話自己嗰個最急。你憑感覺派人，結果係識做嘅做到死，唔識做嘅學唔到；做完檢討先發現排錯優先級。老細問「點解咁排」，你只能講「因為 deadline 近」。冇一套講得出理由嘅分配邏輯，你連爭資源都爭唔到。',
    aiHelp: [
      '輸入各項目優先級同所需技能，出資源分配建議',
      '按技能匹配排人，唔會再「亂派」',
      '計埋工作量平衡，避免有人爆鐘有人晾住',
      '附分配理由，開會爭資源時有得講'
    ],
    igCaption: `【三個項目，一隊人，老細問「邊個排先」😮‍💨】

個個老細都話自己嗰個最急，
你憑感覺派人 ——
識做嘅做到死，唔識做嘅學唔到。
「點解咁排？」你只答到「因為 deadline 近」。

AI Agent 幫你：
✅ 按項目優先級出分配方案
✅ 技能匹配，唔會亂派
✅ 平衡工作量，唔使爆鐘
✅ 附理由，爭資源有得講

由「憑感覺」變成「有得解釋」。

📇 拍到「資源分配建議」呢張卡，跟住做就排得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '三個項目 + 一隊人 + 混亂箭頭', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '人人都話自己最急', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '憑感覺派人的後果', description: '爆鐘／學唔到', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 分配流程', description: '優先級 → 技能 → 工作量', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '分配表示範', description: '項目 / 人手 / 工時 / 理由', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#項目管理', '#資源分配', '#AI工具', '#PM', '#團隊管理'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_25.png'
  },
  {
    id: 'card-26',
    cardNumber: '26',
    week: '第4週',
    weekNumber: 4,
    category: '項目管理',
    chineseTitle: '跨部門協作計劃',
    englishTitle: 'Cross-Department Co-op',
    scenarioSummary: '制定跨部門協作計劃，清晰界定各部門角色',
    promptShort: '輸入：[項目]；製作跨部門協作計劃，列明各部門角色、責任範圍、交付物、時間節點及溝通渠道，並以 RACI 矩陣呈現。',
    benefits: ['角色責任清晰', '交付時間明確', '協作溝通有序'],
    articleNumber: 33,
    articleTitle: '【項目開咗一個月，仲有人以為係你負責】跨部門協作計劃',
    hook: '「項目開咗一個月，仲有人以為『嗰 part 係你搞』。」',
    painPoints: '跨部門項目最恐怖嘅係「以為有人做」。Marketing 以為 IT 出 data、IT 以為 Marketing 定 spec、Finance 等緊你交 forecast。冇 RACI，冇交付日期，出事時大家一齊指住你。你想寫清楚，但每個部門嘅角度都唔同，寫得唔夠細又會漏，寫得太細又變成長篇小說冇人睇。',
    aiHelp: [
      '按項目出跨部門協作計劃：角色、責任範圍、交付物、時間節點、溝通渠道',
      '以 RACI 矩陣呈現，邊個負責、邊個被通知一眼睇清',
      '標示交付物同時間節點，唔會再「以為有人做」',
      '溝通渠道寫明（email / 週會 / group），減少來回追問'
    ],
    igCaption: `【項目開咗一個月，仲有人以為「嗰 part 係你搞」😐】

Marketing 以為 IT 出 data，
IT 以為 Marketing 定 spec，
出事時全部人一齊指住你。

AI Agent 幫你：
✅ 列出各部門角色 + 責任範圍
✅ 交付物 + 時間節點寫清楚
✅ RACI 矩陣呈現（邊個負責、邊個被通知）
✅ 溝通渠道寫明，減少來回追問

開會嗰陣，唔使再吵「邊個做」。

📇 拍到「跨部門協作計劃」呢張卡，跟住做就唔會甩轆。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '四部門圖示 + 互相指嘅箭頭', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '「以為有人做」實錄', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '出事時互相指責嘅會議', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成協作計劃', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'RACI 矩陣示範', description: 'R／A／C／I 一格格睇清', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#跨部門', '#項目管理', '#RACI', '#AI工具', '#溝通技巧'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_26.png'
  },
  {
    id: 'card-27',
    cardNumber: '27',
    week: '第4週',
    weekNumber: 4,
    category: '客戶服務',
    chineseTitle: '客戶查詢分類與回覆草擬',
    englishTitle: 'Reply to Client Enquiry',
    scenarioSummary: '將客戶查詢分類並逐類草擬專業回覆。',
    promptShort: '輸入：將客戶查詢分類為報價、技術支援、投訴或一般查詢，統計各類數量，並為每類草擬專業回覆模板。',
    benefits: ['自動分類查詢', '提供回覆模板', '減少手動處理時間'],
    articleNumber: 49,
    articleTitle: '【inbox 幾十封未讀，一半係客問「點解未回我」】客戶查詢一鍵分類回覆',
    hook: '「收工前打開 inbox：幾十封未讀，一半係客問『點解未回我』。」',
    painPoints: '客戶查詢永遠混在一起：報價、技術問題、投訴、仲有隨口問一句嘅。你逐封開、逐封諗點答，答完報價嘅又收到投訴嘅，心情由專業變成崩潰。最耗時間係重複 —— 同一個技術問題答過十次，第十一次都要由零開始打字。回得慢，客戶就覺得你唔重視佢，然後去搵第二間。',
    aiHelp: [
      '自動分類：報價 / 技術支援 / 投訴 / 一般查詢，順手統計各類數量',
      '每類草擬專業回覆模板，改幾個字就用得',
      '常見問題沉澱成 template，下次唔使由零開始打',
      '投訴類自動標記，唔會混埋喺一般查詢入面等足三日'
    ],
    igCaption: `【收工前打開 inbox：幾十封未讀，一半係客問「點解未回我」📩】

報價、技術問題、投訴、隨口問一句 —— 全部混在一起。
同一個技術問題答過十次，
第十一次都要由零開始打。
回得慢，客戶就去搵第二間。

AI Agent 幫你：
✅ 自動分類：報價 / 技術支援 / 投訴 / 一般查詢
✅ 統計各類數量，睇到痛點集中喺邊
✅ 逐類草擬專業回覆模板
✅ 常見問題變 template，重複嘢唔使再做

由「逐封諗」變成「分類 + 套模板」。

📇 拍到「客戶查詢分類與回覆草擬」呢張卡，跟住做就回得切。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '爆滿 inbox + 崩潰表情', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '四種查詢混在一起', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '同一個問題答第十次', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 分類流程', description: '報價 / 支援 / 投訴 / 一般', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '回覆模板示範', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#客戶服務', '#email技巧', '#CS', '#AI工具', '#職場自救'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_27.png'
  },
  {
    id: 'card-28',
    cardNumber: '28',
    week: '第4週',
    weekNumber: 4,
    category: '客戶服務',
    chineseTitle: '銷售話術草擬',
    englishTitle: 'Sales Pitch',
    scenarioSummary: '為不同客戶類型準備針對性銷售話術。',
    promptShort: '輸入：為[產品／服務]草擬3個版本，針對價格敏感、品質優先、關係導向客戶；每版包括開場、賣點、異議處理及結尾。語氣自然。',
    benefits: ['按客戶類型定制', '涵蓋賣點與異議', '銷售人員即時使用'],
    articleNumber: 27,
    articleTitle: '【新產品出咗，唔知點開口 Sell】三套銷售話術即刻有',
    hook: '「同一套話術 sell 晒所有客，結果個個都話『貴』。」',
    painPoints: '做 sales、BD、客戶經理，最怕公司出咗新產品／新服務，你唔知點開口。對唔同客要有唔同切入點 —— 價格敏感客要講慳幾多，品質優先客要講規格同穩定性，關係導向客要講信任同售後。但現實係你只有一套講法，講兩句就俾人問「點解咁貴？」，你即場兜唔到，單就飛咗。',
    aiHelp: [
      '為同一個產品草擬 3 個版本，分別針對價格敏感、品質優先、關係導向客戶',
      '每版包含開場、賣點、異議處理、結尾，唔使你自己砌',
      '預備常見異議對答（貴、同對手比、再考慮下）',
      '語氣自然，唔會似背稿'
    ],
    igCaption: `【同一套話術 sell 晒所有客，結果個個都話「貴」😮‍💨】

價格敏感客要聽慳幾多，
品質優先客要聽規格，
關係導向客要聽售後 ——
你只有一套講法，講兩句就被反問到啞。

AI Agent 幫你：
✅ 3 個版本，針對唔同客型
✅ 每版有開場、賣點、異議處理、結尾
✅ 預備常見異議對答
✅ 語氣自然，唔似背稿

下次見客，開口就有底。

📇 拍到「銷售話術草擬」呢張卡，跟住做就 sell 得順。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '唔知點開口 sell', description: 'Hook 大字 + 冒汗表情', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '同一套話術撞板實錄', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '被問「點解咁貴」答唔到', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 一次過出 3 個版本', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '三種客型 x 三套話術對比', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#銷售技巧', '#BD', '#AI工具', '#見客', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_28.png'
  }
];
