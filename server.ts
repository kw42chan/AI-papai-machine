import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '25mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Gemini OCR endpoint
app.post('/api/ocr', async (req, res) => {
  try {
    const { imageBase64, mimeType = 'image/png' } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: 'imageBase64 is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please ensure it is set.'
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Clean base64 string if it contains data URI header
    const cleanBase64 = imageBase64.replace(/^data:image\/[a-zA-Z]+;base64,/, '');

    const prompt = `You are an expert OCR and document analysis engine for Chinese & English cards.
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

Return pure valid JSON matching this schema:
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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            {
              inlineData: {
                mimeType,
                data: cleanBase64,
              },
            },
            {
              text: prompt,
            },
          ],
        },
      ],
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '{}';
    let parsedResult;
    try {
      parsedResult = JSON.parse(text);
    } catch {
      parsedResult = { rawOcrText: text };
    }

    return res.json({ success: true, data: parsedResult });
  } catch (error: any) {
    console.error('OCR Error:', error);
    return res.status(500).json({
      error: error.message || 'Failed to perform OCR on image',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
