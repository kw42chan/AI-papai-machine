// Card OCR through OpenRouter. Kept free of Express so it can also back a Vercel function.

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL = 'google/gemini-2.5-flash';

const PROMPT = `You are an expert OCR and document analysis engine for Chinese & English cards.
Examine this card image carefully and extract all text and structured fields.
The card has a dark purple background with gold circuit lines and an AI robot mascot.
Extract:
1. cardNumber: Card number as string (e.g., "01", "02", "21", "40", "B01")
2. week: Week number if present (e.g. "第1週", "第3週")
3. chineseTitle: Prominent Chinese title (e.g., "項目章程撰寫", "長文件摘要")
4. englishTitle: English title right above or near the Chinese title (e.g., "Project Charter", "Doc Summarisation")
5. scenario: Scenario/situation text under the title
6. expectedOutcomes: Array of bullet points under 預期成果
7. promptText: Operation prompt text inside the speech bubble after 輸入：
8. branding: Brand/footer text (e.g., "Rare Purple Strategy")
9. rawOcrText: All detected raw text lines

Return only valid JSON, with no markdown fences and no commentary, matching this schema:
{
  "cardNumber": "string",
  "week": "string",
  "chineseTitle": "string",
  "englishTitle": "string",
  "scenario": "string",
  "expectedOutcomes": ["string"],
  "promptText": "string",
  "branding": "string",
  "rawOcrText": "string"
}`;

export class OcrError extends Error {
  constructor(
    message: string,
    public status = 500
  ) {
    super(message);
  }
}

/** Models sometimes wrap JSON in ```json fences or add a sentence around it. */
export function parseModelJson(text: string): Record<string, unknown> {
  const trimmed = text.trim();
  const candidates = [trimmed];
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fenced) candidates.push(fenced[1].trim());
  const first = trimmed.indexOf('{');
  const last = trimmed.lastIndexOf('}');
  if (first !== -1 && last > first) candidates.push(trimmed.slice(first, last + 1));

  for (const c of candidates) {
    try {
      const value = JSON.parse(c);
      if (value && typeof value === 'object' && !Array.isArray(value)) return value;
    } catch {
      // try the next candidate
    }
  }
  return { rawOcrText: text };
}

export async function runCardOcr(imageBase64: string, mimeType = 'image/png') {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new OcrError('OPENROUTER_API_KEY is not set. Add it to .env and restart the server.');
  }
  const model = process.env.OPENROUTER_MODEL || DEFAULT_MODEL;

  const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z0-9.+-]+;base64,/, '');
  const dataUrl = `data:${mimeType};base64,${cleanBase64}`;

  const requestBody = JSON.stringify({
    model,
    temperature: 0,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: PROMPT },
          { type: 'image_url', image_url: { url: dataUrl } },
        ],
      },
    ],
  });

  // Node's fetch gives up connecting after 10 s, which a slow network can hit; retry those.
  let res: Response | undefined;
  let lastError = '';
  for (let attempt = 1; attempt <= 3 && !res; attempt++) {
    try {
      res = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'X-Title': 'AI Papai Machine',
        },
        body: requestBody,
        signal: AbortSignal.timeout(120_000),
      });
    } catch (err: any) {
      const cause = err.cause?.code || err.cause?.message;
      lastError = `${err.message}${cause ? ` (${cause})` : ''}`;
    }
  }
  if (!res) throw new OcrError(`Could not reach OpenRouter after 3 tries: ${lastError}`, 502);

  const body: any = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = body?.error?.message || `HTTP ${res.status}`;
    if (res.status === 401) throw new OcrError(`OpenRouter rejected the API key (${detail}).`, 502);
    if (res.status === 402) throw new OcrError(`OpenRouter account has no credit for model ${model}.`, 502);
    throw new OcrError(`OpenRouter error for model ${model}: ${detail}`, 502);
  }

  const content = body?.choices?.[0]?.message?.content;
  const text = Array.isArray(content)
    ? content.map((p: any) => (typeof p === 'string' ? p : p?.text ?? '')).join('')
    : content;
  if (typeof text !== 'string' || !text.trim()) {
    throw new OcrError(`Model ${model} returned no text. Pick a model that accepts images.`, 502);
  }
  return parseModelJson(text);
}
