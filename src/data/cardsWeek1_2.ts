import { CardData } from '../types/card';

export const cardsWeek1_2: CardData[] = [
  {
    id: 'card-01',
    cardNumber: '01',
    week: '第1週',
    weekNumber: 1,
    category: '日常文檔',
    chineseTitle: '長文件摘要',
    englishTitle: 'Doc Summarisation',
    scenarioSummary: '收到20頁行業報告或合約，需在5分鐘內掌握重點。',
    promptShort: '輸入：將以下報告摘要為5個重點，每點不超過30字；再逐點展開解釋。[上傳PDF]',
    benefits: ['5分鐘掌握重點', '壓縮為5個要點', '3分鐘完成閱讀'],
    articleNumber: 11,
    articleTitle: '【20 頁合同，5 分鐘內要掌握重點】長文件一鍵摘要',
    hook: '「老細一句『summarize 份合同』，你望住 20 頁 PDF 發呆。」',
    painPoints: '收到 20 頁行業報告或合約，老細要你 5 分鐘內掌握重點 —— 但你逐頁逐頁讀，讀完已經用咗成個鐘。更慘係份文件明明講緊重要嘅嘢，你一時三刻消化唔到：開會時老細問咩，你都答唔到點。想拎住幾句重點去開會，最後連份文件都睇唔曬。',
    aiHelp: [
      '上傳 20 頁報告／合約 → 摘要成 5 個重點，每點唔超過 30 字',
      '想知細節就逐點展開解釋，唔使再翻原文',
      '5 分鐘掌握重點，開會前就講得出邊幾件事最緊要',
      '3 分鐘完成閱讀，老細即場追問都答得出'
    ],
    igCaption: `【老細一句話：「summarize 份合同。」你望住 20 頁 PDF 發呆 😵‍💫】

逐頁讀完已經用咗成個鐘，
仲係唔夠時間消化重點。
開會時老細問咩，你都答唔到點 —— 個樣仲衰過扮工。

AI Agent 幫你：
✅ 上傳 20 頁 → 摘要成 5 個重點（每點 30 字內）
✅ 逐點展開解釋，追問都答得出
✅ 5 分鐘掌握重點，開會前有底
✅ 3 分鐘讀完，唔使翻足 20 頁

20 頁變成 5 個重點，半個鐘變成 5 分鐘。

📇 拍到「長文件摘要」呢張卡，跟住做就有底氣。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '20 頁合同，5 分鐘內要掌握重點', description: 'Hook 大字 + 慌失失 icon', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '逐頁讀 20 頁文件', description: '「成個鐘過去，重點都唔記得」', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '開會答唔到老細問題嘅尷尬表情', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent prompt 流程', description: '上傳 PDF → 摘要 5 個重點 → 逐點展開', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'Before vs After 對比', description: 'Before（20 頁迷霧）vs After（5 個重點、3 分鐘讀完）', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '「拍到邊張卡，就跟住做」', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#合同摘要', '#AI工具', '#白領自救', '#閱讀效率', '#職場打工人'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_01.png'
  },
  {
    id: 'card-02',
    cardNumber: '02',
    week: '第1週',
    weekNumber: 1,
    category: '商務溝通',
    chineseTitle: '會議紀錄整理',
    englishTitle: 'Meeting Agenda & Minutes',
    scenarioSummary: '需要製作會議議程，並整理會議紀錄。',
    promptShort: '輸入：製作30分鐘「[主題]」會議議程，列出[角色]及各議題時間與預期成果；再按出席者、議題、討論要點、決議、行動項目（負責人及期限）整理[貼上筆記]。',
    benefits: ['議程安排有系統', '議題時間清晰分配', '決議行動明確可跟進'],
    articleNumber: 42,
    articleTitle: '【開完兩個鐘會，冇人知邊個做】會議紀錄一頁成形',
    hook: '「開完兩個鐘會，你只記得『下次再傾』—— 咦，咁即係邊個做？」',
    painPoints: '香港開會文化：冇 agenda 就開，開完冇 minutes。你夾硬記住幾個 point，返到座位先發現漏咗老細講嘅死線。寫 minutes 又要兩日後先交，交上去同事話「我當日唔係咁講」。最慘係決議冇寫負責人 —— 到下星期開會，大家一齊問「上次嗰件事做完未」，然後又開多次會。',
    aiHelp: [
      '開會前先出 30 分鐘議程：角色、各議題時間分配、預期成果，唔會開到唔知幾時完',
      '會後貼上筆記，按出席者、議題、討論要點、決議、行動項目整理',
      '每項行動自動標負責人 + 期限，唔會再「冇人認頭」',
      '30 分鐘會出 1 頁 minutes，當日就 send 得出去'
    ],
    igCaption: `【開完兩個鐘會，冇人知邊個做 🤯】

冇 agenda 就開，
開完冇 minutes，
你只記得「下次再傾」。
下星期開會，大家一齊問「上次嗰件事做完未」。

AI Agent 幫你：
✅ 開會前出議程（角色 + 議題時間 + 預期成果）
✅ 會後貼筆記 → 出席者 / 議題 / 決議 / 行動項目
✅ 每項行動標負責人 + 期限
✅ 1 頁 minutes，當日 send 得出去

由「開完就算」變成「開完有跟進」。

📇 拍到「會議紀錄整理」呢張卡，跟住做就唔會漏。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '開完兩個鐘會，冇人知邊個做', description: 'Hook 大字', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '冇 agenda 嘅會議現場', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '兩日後先交 minutes', description: '同事話「我唔係咁講」', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步', description: '出 agenda → 貼筆記 → 出行動項目', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'minutes 示範', description: '決議 / 負責人 / 期限一格格睇清', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#會議紀錄', '#開會', '#AI工具', '#職場自救', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_02.png'
  },
  {
    id: 'card-03',
    cardNumber: '03',
    week: '第1週',
    weekNumber: 1,
    category: '日常文檔',
    chineseTitle: '文件格式轉換',
    englishTitle: 'File Format Change',
    scenarioSummary: '收到PDF或圖片檔，沒有原始檔案但需要編輯。',
    promptShort: '輸入：將以下PDF轉換為.docx格式，保留原始排版及表格結構。[上傳PDF]',
    benefits: ['免用額外轉換工具', '保留原始排版表格', '取得可編輯Word檔'],
    articleNumber: 12,
    articleTitle: '【PDF 要改但冇原始檔】一鍵轉成可編輯 Word',
    hook: '「收到份 PDF 要改兩個字，但對方冇畀原始檔 —— 你點改？」',
    painPoints: '香港做 admin、採購、營運，成日收到 PDF 或圖片檔 —— 合同、報價單、表格，對方一句「你改幾個位再 send 返」。但手上只有 PDF，字打唔到、表格複製唔到，想改就要由頭重新打一份。上網搵免費轉換網站？搞完排版散晒、表格走位，仲要將公司文件上傳去唔知邊度。明明只改兩個字，最後用咗半個鐘，仲要人手再執一次格式。',
    aiHelp: [
      '貼上 PDF／圖片，直接轉成可編輯 .docx，唔使另裝轉換工具',
      '保留原本排版同表格結構，唔會變成一堆走位文字',
      '交出可編輯 Word 檔，對方可以直接改，唔使再來回',
      '掃描質素差、表格跨頁嘅位會標示出嚟，提你人手覆核一次'
    ],
    igCaption: `【收到份 PDF 要改兩個字，但冇原始檔 —— 你點改？📄】

字打唔到、表格複製唔到，
想改就要由頭重新打一份。
上網搵免費轉換工具，
排版散晒、表格走位，仲要上傳公司文件。

AI Agent 幫你：
✅ 貼上 PDF / 圖片 → 出可編輯 .docx
✅ 保留原本排版 + 表格結構
✅ 免用額外轉換工具，唔使上傳去第三方網站
✅ 標示掃描模糊 / 跨頁表格位，提你覆核

由「重新打一份」變成「直接改返」。

📇 拍到「文件格式轉換」呢張卡，跟住做就改得順。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '要改兩個字，但冇原始檔', description: 'Hook 大字 + 冒汗表情', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '對住 PDF 打唔到字、表格複製唔到', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '重新打一份 / 上網搵免費轉換工具嘅麻煩', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步流程', description: '貼 PDF → 轉 .docx → 保留排版', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'Before vs After 對比', description: 'Before（走位亂碼） vs After（排版表格原封不動）', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '「拍到邊張卡，就跟住做」', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#PDF轉Word', '#文件格式轉換', '#AI工具', '#行政日常', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_03.png'
  },
  {
    id: 'card-04',
    cardNumber: '04',
    week: '第1週',
    weekNumber: 1,
    category: '商務溝通',
    chineseTitle: '提案書製作與企劃摘要',
    englishTitle: 'Proposal Creation',
    scenarioSummary: '提案格式不一，需為高層提供快速判斷摘要。',
    promptShort: '輸入：製作 2 頁客戶提案書 .docx，含公司簡介、問題分析、方案、報價範圍、時間表；另摘要核心提案、投資回報、風險、3 個假設及建議決定。',
    benefits: ['格式簡潔一致', '兩分鐘掌握重點', '支援管理層決策'],
    articleNumber: 43,
    articleTitle: '【同一份 proposal 改咗三版，老細只問即係幾錢】提案書一頁摘要',
    hook: '「同一份 proposal 改咗三個版本 —— 老細最後只問：『即係幾錢、幾時得？』」',
    painPoints: '提案永遠係東拼西湊：上次嘅 template、同事嘅段落、新加嘅報價表。每個部門格式都唔同，老細睇兩頁就開始唔專心，因為第一頁都未講到重點。你想加個 executive summary，但唔知點寫先叫「高層睇得明」。最後 proposal send 出去，客戶反問你「即係同上一份有咩分別」—— 你自己都要翻返去睇。',
    aiHelp: [
      '出 2 頁客戶提案書 .docx：公司簡介、問題分析、方案、報價範圍、時間表',
      '另出一頁企劃摘要：核心提案、投資回報、風險、3 個假設、建議決定',
      '格式統一，唔會每個部門一個樣',
      '高層 2 分鐘睇完就知要唔要批，唔使逐頁問你'
    ],
    igCaption: `【同一份 proposal 改咗三版，老細只問「即係幾錢？」📄】

東拼西湊：上次 template、同事段落、新報價表。
每個部門格式都唔同，
老細睇兩頁就走神。
客戶反問「同上一份有咩分別」—— 你自己都要翻返去睇。

AI Agent 幫你：
✅ 2 頁提案書（簡介 / 問題 / 方案 / 報價 / 時間表）
✅ 1 頁企劃摘要（回報 / 風險 / 假設 / 建議決定）
✅ 格式統一，唔會部門各一套
✅ 高層 2 分鐘睇完就知批唔批

由「你睇下啦」變成「一頁睇晒重點」。

📇 拍到「提案書製作與企劃摘要」呢張卡，跟住做就交得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '老細只問：即係幾錢、幾時得？', description: 'Hook 大字', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '東拼西湊嘅提案書', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '老細睇兩頁走神 / 客戶反問分別', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 出提案書 + 企劃摘要', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '企劃摘要示範', description: '回報 / 風險 / 假設 / 建議', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#提案書', '#企劃', '#商業寫作', '#AI工具', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_04.png'
  },
  {
    id: 'card-05',
    cardNumber: '05',
    week: '第1週',
    weekNumber: 1,
    category: '商務溝通',
    chineseTitle: '簡報投影片製作',
    englishTitle: 'PPT Creation',
    scenarioSummary: '為提案簡報準備投影片。',
    promptShort: '輸入：製作 6 頁簡報：標題、問題、方案、時間表、成果、下一步；每頁 3 至 5 個重點，字數精簡。',
    benefits: ['結構清晰', '重點一目了然', '只需微調即可使用'],
    articleNumber: 44,
    articleTitle: '【聽日要個 deck，你開住空白頁】6 頁簡報即刻出',
    hook: '「老細話『聽日要個 deck』，你開住 PowerPoint 由空白頁開始。」',
    painPoints: '做 deck 最痛苦係由零開始：唔知要幾頁、唔知先講問題定先講方案、唔知老細想睇邊個角度。上網搵 template，靚但唔啱內容；自己砌，一頁塞十行字，老細睇兩秒就叫你「精簡啲」。搞到凌晨出咗幾十頁，但上台時冇人記得你想講咩 —— 因為重點從來冇出現過。',
    aiHelp: [
      '一句輸入 → 6 頁結構（標題／問題／方案／時間表／成果／下一步）',
      '每頁 3–5 個重點，字數精簡，唔會一頁塞爆',
      '附 speaker notes，上台唔會斷片',
      '出嚟已經結構清晰、重點一目了然，只需微調即可使用'
    ],
    igCaption: `【老細話「聽日要個 deck」，你開住空白頁 🫠】

唔知要幾頁、
唔知先講問題定先講方案。
砌到凌晨出咗幾十頁，
上台時冇人記得你想講咩。

AI Agent 幫你：
✅ 6 頁結構（標題 / 問題 / 方案 / 時間表 / 成果 / 下一步）
✅ 每頁 3–5 個重點，字數精簡
✅ 附 speaker notes，上台唔斷片
✅ 結構清晰、重點突出，只需微調就交得

由空白頁變成一個講得清嘅 deck。

📇 拍到「簡報投影片製作」呢張卡，跟住做就有稿。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '聽日要個 deck', description: 'Hook 大字 + 空白頁畫面', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '唔知幾頁、唔知點排次序', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '一頁塞十行，老細叫「精簡啲」', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 出 6 頁結構', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'Before vs After 對比', description: 'Before（幾十頁亂） vs After（6 頁清）', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#簡報', '#PPT技巧', '#presentation', '#AI工具', '#職場求生'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_05.png'
  },
  {
    id: 'card-06',
    cardNumber: '06',
    week: '第1週',
    weekNumber: 1,
    category: '日常文檔',
    chineseTitle: '文件校對與潤飾',
    englishTitle: 'Document Fine-tune',
    scenarioSummary: '校對重要文件，及早發現盲點。',
    promptShort: '輸入：檢查錯別字、文法、邏輯矛盾及語氣一致性，列出問題與修改建議，再提供完整修訂版本。',
    benefits: ['降低出錯風險', '列出問題及建議', '提供完整修訂版本'],
    articleNumber: 13,
    articleTitle: '【Send 咗錯字 Email 畀全公司】文件校對救命神器',
    hook: '「Send 咗封『把』寫成『吧』嘅 email 畀全公司，想搵個窿捐埋去。」',
    painPoints: '香港寫 email 守則：快、準、有禮。但趕住 send 嘅時候，proofread 自己嘅嘢永遠睇唔到盲點——你腦入面已經知道自己想寫咩，所以睇唔到錯字。最慘係 send 咗畀全公司先發現「把」寫成「吧」，或者個名串錯咗。老細一句「細心啲」，你個心就沉咗。覆水難收，只能怪自己「點解唔 check 多一次」。',
    aiHelp: [
      '一貼落去，自動捉錯別字、文法、語氣不一致',
      '標示「send 後會好尷尬」嘅低級錯誤',
      '捉埋邏輯矛盾 —— 前後數字、時序、立場有冇打架',
      '給修訂版，send 前過一次就放心'
    ],
    igCaption: `【Send 咗封「把」寫成「吧」嘅 email 畀全公司，我真係想辭職 💀】

趕住 send，proofread 咗三次，
點知老細 reply：「『把』字寫錯咗。」
全公司都睇到，個面紅到可以煎蛋。

AI Agent 幫你：
✅ 捉錯別字 + 文法 + 邏輯矛盾 + 語氣唔一致
✅ 列出問題 + 修改建議
✅ 提供完整修訂版本
✅ Send 前過一次，放心 send

覆水難收嘅事，以後唔會再發生。

📇 拍到「文件校對與潤飾」呢張卡，跟住做就唔使出醜。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '錯字 email 截圖風 + 死亡表情', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '「Proofread 咗三次都睇唔到」嘅盲點解釋', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: 'Send 完先發現錯字嘅絕望', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 標示問題', description: '錯字 / 邏輯 / 語氣 + 附修訂版本', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '「執到寶」情緒 —— 放心 send', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#Email禮儀', '#AI工具', '#錯字地獄', '#職場自救', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_06.png'
  },
  {
    id: 'card-07',
    cardNumber: '07',
    week: '第1週',
    weekNumber: 1,
    category: '日常文檔',
    chineseTitle: '履歷表優化',
    englishTitle: 'Resume Polish',
    scenarioSummary: '重新包裝履歷表，突顯核心競爭力。',
    promptShort: '輸入：重新撰寫及優化履歷表，突出3項量化成就，按目標職位排序經歷，優化技能關鍵字；語氣專業不浮誇，附修改前後對比。[貼上現有履歷]',
    benefits: ['突出量化核心成就', '配合目標職位排序', '優化技能關鍵字'],
    articleNumber: 14,
    articleTitle: '【LinkedIn 份 CV 三年冇 Update】履歷表優化神器',
    hook: '「LinkedIn 嗰份 CV 三年冇 update，仲寫緊『精通 Office』。」',
    painPoints: '香港打工仔跳槽頻密，但份 CV 永遠係上次搵工時寫嘅。新技能、新項目、新成就全部冇寫上去。最尷係仲寫緊「精通 Microsoft Office」——2026 年啦大哥。想 update，但唔知點突出自己，唔知邊項寫前邊、邊項寫後邊，結果一拖再拖，獵頭搵都唔敢 send。份 CV 唔靚，連面試機會都冇。',
    aiHelp: [
      '貼上舊 CV，自動重新排版同突出 3 項量化成就',
      '將「做過咩」變成「達成咗咩」——加數據、加 impact',
      '按目標職位重新排序經歷、調整技能關鍵字，過到 ATS 篩選',
      '生成中英雙版本，LinkedIn + 求職信一次搞掂'
    ],
    igCaption: `【份 CV 三年冇 update，仲寫緊「精通 Office」😂】

2026 年啦，精通 Office 係基本嘢，唔係賣點。
新技能、新項目、新成就 —— 全部冇寫。
獵頭搵你，你 send 唔出手，個樣仲衰過扮工。

AI Agent 幫你：
✅ 自動排版 + 突出量化成就
✅ 「做過咩」→「達成咗咩」
✅ 按目標職位排序經歷 + 調關鍵字
✅ 中英雙版本一次搞掂

份 CV 靚咗，搵工自信啲。

📇 拍到「履歷表優化」呢張卡，跟住做就靚晒。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '舊 CV 截圖風 + 「精通 Office」大字', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '三年冇 update 嘅尷尬', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '唔知點突出自己', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent Before vs After 對比', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '量化成就自動生成示範', description: '', type: 'outcome' },
      { slideNumber: 6, label: '畫面', title: '中英雙版本展示', description: '', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#搵工', '#CV優化', '#LinkedIn', '#AI工具', '#轉工'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_07.png'
  },
  {
    id: 'card-08',
    cardNumber: '08',
    week: '第2週',
    weekNumber: 2,
    category: '商務溝通',
    chineseTitle: '多語翻譯與本地化',
    englishTitle: 'Translation & Localisation',
    scenarioSummary: '將文件翻譯成其他語言並符合當地用語習慣。',
    promptShort: '輸入：將以下文件翻譯為[目標語言]，並本地化貨幣、日期格式及商業用語，符合目標市場慣例。[貼上文件]',
    benefits: ['符合目標市場慣例', '統一貨幣日期格式', '附上本地化注意事項'],
    articleNumber: 45,
    articleTitle: '【翻譯完客戶問「點解寫美金」】多語翻譯一鍵本地化',
    hook: '「份文件翻譯完，客戶回一句：『點解你哋寫美金？』」',
    painPoints: '出外國客文件，唔止要譯得準，仲要入鄉隨俗 —— 貨幣、日期格式、稱謂、商業用語，樣樣都唔同。用免費翻譯工具出嚟嘅版本，句式硬到似機械人，客戶睇得出你冇認真對過。改完一輪，你仍然唔肯定當地人會唔會覺得你失禮，最後只能加一句「如有問題請指正」，自己都覺得唔專業。',
    aiHelp: [
      '貼上文件 → 譯成目標語言，用詞符合當地習慣',
      '本地化貨幣同日期格式，唔會再出現「點解寫美金」',
      '商業用語改成目標市場慣例，唔會硬到似機械人',
      '附本地化注意事項（稱謂、忌諱、付款慣例）畀你 send 前 check'
    ],
    igCaption: `【份文件翻譯完，客戶回一句：「點解你哋寫美金？」🌏】

譯得準唔夠，
貨幣、日期、稱謂、商業用語 —— 樣樣都要入鄉隨俗。
免費工具出嚟嘅版本硬到似機械人，
客戶睇得出你冇認真對過。

AI Agent 幫你：
✅ 譯成目標語言，符合當地用語習慣
✅ 統一貨幣同日期格式
✅ 商業用語符合目標市場慣例
✅ 附本地化注意事項，send 前 check

一份外語文件，睇得出你有準備。

📇 拍到「多語翻譯與本地化」呢張卡，跟住做就唔失禮。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '點解你哋寫美金？', description: 'Hook 大字', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '機械式翻譯嘅生硬版本', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '貨幣 / 日期 / 稱謂全部唔對', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent prompt 流程', description: '貼文件 → 翻譯 → 本地化貨幣 / 日期 / 用語', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'Before vs After 對比', description: 'Before（美金、月日倒轉）vs After（符合當地慣例）', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#翻譯', '#本地化', '#外貿', '#AI工具', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_08.png'
  },
  {
    id: 'card-09',
    cardNumber: '09',
    week: '第2週',
    weekNumber: 2,
    category: '日常文檔',
    chineseTitle: '培訓材料製作',
    englishTitle: 'Training Materials Prep',
    scenarioSummary: '需要為新工具或流程製作內部培訓材料。',
    promptShort: '輸入：[主題]；製作適合初學者的培訓材料，包含學習目標、核心概念、3個實作練習、常見問題及評估小測。',
    benefits: ['新人可自行學習', '內容可即時使用', '涵蓋練習與評估'],
    articleNumber: 26,
    articleTitle: '【老細叫你自己整份新人 Training】培訓材料一鍵成形',
    hook: '「老細話『你整個新人 training』，你連 learning objective 都唔知係咩。」',
    painPoints: '要帶新人、推新系統、推新流程，就要出培訓材料。但大部分人冇教材設計經驗 —— 唔知 learning objective 要點寫、唔知要唔要練習、唔知點衡量新人學識未。整咗成日，新人睇完依然問「即係我實際要做咩？」。最後你唯有坐低逐個慢慢講，時間成本全部自己食。',
    aiHelp: [
      '輸入主題，自動生成學習目標 + 核心概念',
      '附 3 個實作練習 + 常見問題，適合初學者，新人可以自己上手',
      '加評估小測，知道新人邊度未明',
      '材料即時可用：直接發畀新人，唔使再改'
    ],
    igCaption: `【老細話「你整個新人 training」，你連 learning objective 係咩都唔知 😵】

冇 template、冇教材，
整咗成日，新人睇完依然問：
「即係我實際要做咩？」
最後你唯有坐低逐個慢慢講。

AI Agent 幫你：
✅ 學習目標 + 核心概念
✅ 3 個實作練習 + 常見問題
✅ 評估小測，知佢哋邊度未明
✅ 材料即時可用，直接發畀新人

一份材料，新人自己睇得明。

📇 拍到「培訓材料製作」呢張卡，跟住做就唔使由零開始。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '你整個新人 training', description: 'Hook 大字 + 迷惘表情', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '對住空白文件，唔知點開始', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '整完新人依然唔識做', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成結構', description: '目標 → 概念 → 練習 → 小測', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '一份完整培訓材料預覽', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#培訓', '#新人上手', '#AI工具', '#帶人日常', '#返工日常'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_09.png'
  },
  {
    id: 'card-10',
    cardNumber: '10',
    week: '第2週',
    weekNumber: 2,
    category: '客戶服務',
    chineseTitle: '客戶背景調查及會前準備',
    englishTitle: 'Client Prep',
    scenarioSummary: '快速了解客戶背景，準備會議要點。',
    promptShort: '輸入：公司名稱；調查成立年份、業務範圍、規模、近期新聞、主要決策、可能需求及3個洽談切入點，整理成1至2頁簡報；資料未能找到請標示「待確認」。',
    benefits: ['快速掌握客戶背景', '整理完整會議要點', '識別需求切入點'],
    articleNumber: 15,
    articleTitle: '【見客前兩個鐘先發現】客戶背景速查一鍵整合',
    hook: '「見客前兩個鐘先發現：你連對方做緊咩生意都唔知。」',
    painPoints: '香港做 B2B 銷售、BD、客戶管理，見客前要準備會議要點：對方公司業務、規模、近期新聞、主要決策同可能需求。但成日臨急臨忙先收到通知，兩個鐘內要由零開始做 research。Google 完一輪都係官網廢話：成立年份、規模、近期新聞散落喺十幾個網頁，自己逐個搵都唔知邊個準。最後會議要點寫唔出，見客時講唔到重點，個樣好唔專業。',
    aiHelp: [
      '輸入公司名，自動整合成立年份、業務範圍、規模、近期新聞',
      '整理主要決策同可能需求，搵唔到嘅標示「待確認」',
      '生成 3 個洽談切入點，見面即用得著',
      '整理成 1–2 頁簡報，見客前 print 出嚟傍身'
    ],
    igCaption: `【見客前兩個鐘，你先發現自己連對方做咩都唔知 😰】

收到 meeting invite，以為有時間準備，
點知一開會議紀錄：「下禮拜二見新客。」
Google 咗一輪，搵到嘅都係官網廢話。
見客時講唔出重點，個樣好唔專業。

AI Agent 幫你：
✅ 輸入公司名 → 整合成立年份 / 業務 / 規模 / 新聞
✅ 整理主要決策 + 可能需求
✅ 生成 3 個洽談切入點，見面即用得著
✅ 整理成 1–2 頁會議簡報，print 出嚟傍身

由慌失失變成有備而來。

📇 拍到「客戶背景調查及會前準備」呢張卡，跟住做就唔使驚。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '見客前兩個鐘先發現', description: 'Hook 大字 + 慌失失 icon', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '收到 meeting invite 嘅驚慌', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: 'Google 咗一輪都係廢話', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 一鍵生成背景報告', description: '', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '成立年份 / 規模 / 主要決策 + 切入點', description: '', type: 'outcome' },
      { slideNumber: 6, label: '畫面', title: '1 頁簡報 print-ready', description: '', type: 'outcome' },
      { slideNumber: 7, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#見客', '#B2B銷售', '#客戶管理', '#AI工具', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_10.png'
  },
  {
    id: 'card-11',
    cardNumber: '11',
    week: '第2週',
    weekNumber: 2,
    category: '商務溝通',
    chineseTitle: '跨部門溝通草擬',
    englishTitle: 'Cross-Department Draft',
    scenarioSummary: '草擬清晰、合作性的跨部門電郵。',
    promptShort: '輸入：草擬一封關於[主題]的跨部門電郵，說明背景、影響、需對方配合事項及截止日期，語氣合作，不宜過於指令式。',
    benefits: ['背景與影響清楚', '明確列出配合事項', '減少來回追問'],
    articleNumber: 16,
    articleTitle: '【催 IT 部做嘢寫到好似求佢哋】跨部門求救信自動生成',
    hook: '「要催 IT 部做嘢，寫 email 寫到好似求佢哋咁。」',
    painPoints: '跨部門 email 最難寫，因為要同時做到幾件事：講清背景、講明影響、列出要對方配合嘅事項同截止日期，但語氣又要合作、唔可以似落命令。催 IT 做 system，驚佢覺得你煩；搵 Finance 批預算，寫得太硬又怕得罪人。改咗十幾次都未敢 send，最後變成「唔該晒、麻煩晒、多謝晒」三部曲 —— 背景同死線冇講，嘢依然未做。',
    aiHelp: [
      '輸入主題 + 對方部門 → 即出跨部門電郵草稿',
      '講清背景同影響：點解要對方幫手、唔做會有咩後果',
      '明確列出需對方配合事項同截止日期，唔會寫成客套三部曲',
      '語氣合作、唔指令式，減少來回追問'
    ],
    igCaption: `【催 IT 部做嘢，寫到好似求佢哋咁 🙏】

「唔該晒幫手整一個……」
「如果方便嘅話……」
寫完自己都覺得卑微，但嘢仲係未做。

AI Agent 幫你：
✅ 主題 + 對象 → 即出跨部門電郵草稿
✅ 講清背景同影響（點解要對方幫手）
✅ 需配合事項 + 截止日期寫得明
✅ 語氣合作唔指令式，減少來回追問

催人做嘢都可以催得有格調。

📇 拍到「跨部門溝通草擬」呢張卡，跟住做就唔使求。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '卑微 email 截圖風 + 求人手勢', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '改咗十幾次都未敢 send', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '唔該晒三部曲', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent prompt 流程', description: '主題 + 對象 → 背景 / 影響 / 配合事項 / 死線', type: 'process' },
      { slideNumber: 5, label: '畫面', title: 'Before vs After 對比', description: 'Before（客套三部曲）vs After（講清配合事項同死線）', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#跨部門溝通', '#email技巧', '#AI工具', '#職場求生', '#大公司'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_11.png'
  },
  {
    id: 'card-12',
    cardNumber: '12',
    week: '第2週',
    weekNumber: 2,
    category: '日常文檔',
    chineseTitle: '內部通告草擬',
    englishTitle: 'Memo Draft',
    scenarioSummary: '撰寫公司新政策或活動公佈。',
    promptShort: '輸入：草擬一份內部通告，內容為[新政策／活動]；包括背景、具體變化、影響範圍、生效日期及查詢途徑。語氣正面但不浮誇。',
    benefits: ['通告得體清晰', '員工容易理解', '減少不必要焦慮'],
    articleNumber: 41,
    articleTitle: '【公司推新政策，你要出通告但又怕引起恐慌】內部通告一頁搞定',
    hook: '「公司出新政策，你要出通告 —— 但你知同事第一反應一定係『係咪要炒人？』」',
    painPoints: 'HR、admin、部門主管都做過同一件事：幫公司出通告。最難唔係寫，係要同時做到「講清楚、唔引起恐慌、唔會被人扭曲」。寫得太硬，同事話你冇人情味；寫得太軟，又講唔清生效日期同影響範圍。改完五版，最後同事仍然只記得「聽講有嘢變」。',
    aiHelp: [
      '按背景、具體變化、影響範圍、生效日期、查詢途徑生成完整通告',
      '語氣正面但唔浮誇，唔會寫到似推銷信',
      '補上「同事最想知」嘅位（關唔關我事、幾時開始、有問搵邊個）',
      '結構清楚、員工容易理解，減少不必要焦慮'
    ],
    igCaption: `【公司出新政策，你要出通告 —— 同事第一反應：「係咪要炒人？」😨】

寫得太硬，話你冇人情味；
寫得太軟，又講唔清生效日期同影響範圍。
改完五版，同事仍然只記得「聽講有嘢變」。

AI Agent 幫你：
✅ 背景 / 變化 / 影響 / 生效日 / 查詢途徑，一次寫齊
✅ 語氣正面但不浮誇
✅ 補上同事最想知嘅三條問題
✅ 減少不必要焦慮

一份通告，講清楚又唔會引起恐慌。

📇 拍到「內部通告草擬」呢張卡，跟住做就得體。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '通告文件 + 同事議論氣泡', description: '「係咪要炒人？」', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '寫通告嘅兩難（太硬／太軟）', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '改五版之後同事仍然誤解', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 生成結構', description: '背景 → 變化 → 影響 → 生效 → 查詢', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '通告示範 + 常見問題段落', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#HR', '#內部溝通', '#通告', '#AI工具', '#職場攻略'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_12.png'
  },
  {
    id: 'card-13',
    cardNumber: '13',
    week: '第2週',
    weekNumber: 2,
    category: '商務溝通',
    chineseTitle: '演講稿撰寫',
    englishTitle: 'Speech Prep',
    scenarioSummary: '需要撰寫一份10分鐘演講稿，涵蓋核心論點及行動呼籲。',
    promptShort: '輸入：主題、聽眾描述；草擬10分鐘演講稿，包含開場、3個核心論點、實例及結尾行動呼籲，語氣自信但不自大。',
    benefits: ['結構清晰完整', '開場更有力', '結尾行動明確'],
    articleNumber: 17,
    articleTitle: '【老細突然叫你上台講兩句】演講稿 10 分鐘急救',
    hook: '「老細突然叫你上台講兩句，你腦入面一片空白。」',
    painPoints: '香港 office 型活動多：team building、年會、產品發佈、客戶 presentation。最怕老細突然一句「你上台講兩句」，你連主題都未定好。自己諗嘅 speech，又驚太悶、太長、或者講錯重點。講完落台，同事面都係面，你唔知佢哋覺得好定唔好。上台講嘢係香港白領嘅噩夢，尤其是 sudden call。',
    aiHelp: [
      '輸入主題 + audience，生成結構完整嘅演講稿（開場 → 3 個核心論點 → 實例 → 結尾）',
      '開場一句就抓實注意力，結尾收一個明確行動呼籲',
      '開場一句就抓實注意力，唔使諗點破冰',
      '結尾收一個明確行動呼籲，語氣自信但唔自大'
    ],
    igCaption: `【老細突然叫你上台講兩句，你腦入面一片空白 😶】

Team building、年會、產品發佈 ——
最怕老細一句「你講兩句」。
講完落台，同事個樣你睇唔明。

AI Agent 幫你：
✅ 主題 + 聽眾描述 → 10 分鐘演講稿
✅ 開場 → 3 個核心論點 → 實例 → 結尾
✅ 開場一句抓住注意力
✅ 結尾有明確行動呼籲

由「講咩好」變成「講得掂」。

📇 拍到「演講稿撰寫」呢張卡，跟住做就唔使驚。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '老細 sudden call 畫面 + 驚慌表情', description: '', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '上台腦一片空白', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '講完唔知好唔好嘅尷尬', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent prompt 流程', description: '主題 + 聽眾 → 開場 → 3 論點 → 實例 → 呼籲', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '講稿結構示範', description: '結構清晰、開場有力、結尾明確', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#演講', '#presentation', '#AI工具', '#年會', '#職場求生'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_13.png'
  },
  {
    id: 'card-14',
    cardNumber: '14',
    week: '第2週',
    weekNumber: 2,
    category: '商業策略',
    chineseTitle: '市場競爭情報分析',
    englishTitle: 'Competitor Analysis',
    scenarioSummary: '快速掌握競爭對手定位、策略及行業趨勢。',
    promptShort: '輸入：研究3個主要競爭對手：[列出對手]；比較產品定位、價格範圍、分銷渠道及近期推廣活動；標示「待確認」資料，並加入行業趨勢分析。',
    benefits: ['掌握對手定位策略', '追蹤每週行業動態', '分析行業發展趨勢'],
    articleNumber: 46,
    articleTitle: '【老細問「對手出咗咩新招」】競爭情報一頁整合',
    hook: '「老細問『對手出咗咩新招？』你只知道佢哋上個月出咗個 ad。」',
    painPoints: '競爭情報通常靠「聽返嚟」—— 同事食飯講、客戶隨口提、LinkedIn 見到個 post。零散、冇系統、仲要過時。到真正要交分析，你只講得出「對手好似減咗價」，老細追問「減幾多？打邊個 segment？」你就啞咗。其實資料網上大部分都搵到，只係冇人有時間逐間整理同核實。',
    aiHelp: [
      '輸入 3 個對手，比較產品定位、價格範圍、分銷渠道、近期推廣活動',
      '標示搵唔到或未確認嘅資料，唔會幫你估',
      '加上行業趨勢分析 —— 睇到方向，唔止睇到對手',
      '每週跑一次，變成固定情報流程，唔使臨急抱佛腳'
    ],
    igCaption: `【老細問「對手出咗咩新招？」你只知佢哋出咗個 ad 👀】

情報靠「聽返嚟」：
同事食飯講、客戶隨口提，
零散、冇系統、仲要過時。
老細追問「減幾多？打邊個 segment？」—— 你啞咗。

AI Agent 幫你：
✅ 3 個對手 x 定位 / 價格 / 渠道 / 推廣
✅ 搵唔到嘅資料標示「待確認」，唔會估
✅ 加行業趨勢分析
✅ 每週跑一次，變成固定流程

由「聽講佢哋減價」變成有根據嘅情報。

📇 拍到「市場競爭情報分析」呢張卡，跟住做就答得出。
👉 Link in bio 睇 AI 拍拍機`,
    carouselSlides: [
      { slideNumber: 1, label: '封面', title: '對手出咗咩新招？', description: 'Hook 大字', type: 'cover' },
      { slideNumber: 2, label: '畫面', title: '情報散落喺飯局／客戶／LinkedIn', description: '', type: 'pain' },
      { slideNumber: 3, label: '畫面', title: '老細追問細節答唔到', description: '', type: 'pain' },
      { slideNumber: 4, label: '畫面', title: 'AI Agent 三步', description: '列對手 → 比較 → 加趨勢', type: 'process' },
      { slideNumber: 5, label: '畫面', title: '對比表示範', description: '', type: 'outcome' },
      { slideNumber: 6, label: 'CTA', title: 'AI 拍拍機 + 情境卡展示', description: '', type: 'cta' }
    ],
    hashtags: ['#香港職場', '#市場分析', '#競爭情報', '#策略', '#AI工具', '#Marketing'],
    imageFileName: '20260818_gunmetal_silver_whiteoutline_card_14.png'
  }
];
