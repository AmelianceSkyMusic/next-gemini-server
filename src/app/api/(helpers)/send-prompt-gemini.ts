import { ENV } from '~constants/env';

import { GoogleGenerativeAI } from '@google/generative-ai';

export async function sendPromptGemini(prompt: string) {
	if (!ENV.GOOGLE_GEMINI_API) throw new Error('GOOGLE_GEMINI_API is missing!');

	const genAI = new GoogleGenerativeAI(ENV.GOOGLE_GEMINI_API);
	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
	const result = await model.generateContent(prompt);
	const response = await result.response;
	const text = response.text();
	return text;
}
