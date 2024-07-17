import { handleAppError } from '~helpers/handle-app-error';
import { generateResponseJsonError } from '~nextApi/(helpers)/generate-response-json-error';
import { generateResponseJsonSuccess } from '~nextApi/(helpers)/generate-response-json-success';
import { sendPromptGemini } from '~nextApi/(helpers)/send-prompt-gemini';

export async function POST(request: Request) {
	let geminiResp = '';
	try {
		const resp = await request.json();
		geminiResp = await sendPromptGemini(String(resp.prompt));
	} catch (error) {
		const { code, message } = handleAppError(error);

		return generateResponseJsonError({
			status: code && code > 0 ? code : 520,
			statusText: message,
		});
	}

	return generateResponseJsonSuccess(geminiResp);
}
