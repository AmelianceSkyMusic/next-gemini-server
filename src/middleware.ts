import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	if (request.nextUrl.pathname.startsWith('/api')) {
		const nextGeminiServerKey = request.headers.get('Next-Gemini-Server-Key') ?? '';
		if (!nextGeminiServerKey || nextGeminiServerKey !== process.env.NEXT_GEMINI_SERVER_KEY) {
			return Response.json(
				{ success: false, message: 'Missing Next-Gemini-Server-Key' },
				{ status: 401 },
			);
		}
	}
}
