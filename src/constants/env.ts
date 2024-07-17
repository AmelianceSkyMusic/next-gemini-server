export const MODE = process.env.MODE || 'prod';

export const ENV = {
	GOOGLE_GEMINI_API:
		(MODE === 'dev' ? process.env.DEV__GOOGLE_GEMINI_API : process.env.GOOGLE_GEMINI_API) ||
		process.env.GOOGLE_GEMINI_API,
};
