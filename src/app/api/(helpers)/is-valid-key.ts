export function isValidateKey(request: Request): boolean {
	const apiKey = request.headers.get('Next-Gemini-Server-Key');
	return apiKey === process.env.NEXT_GEMINI_SERVER_KEY;
}
