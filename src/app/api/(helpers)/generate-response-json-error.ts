type ErrorOptions = {
	statusText?: string;
	status?: number;
};

type GenerateResponseJsonError = {
	status?: number;
	statusText?: string;
	code?: string;
	data?: Record<string, unknown>;
};

export function generateResponseJsonError({
	status,
	statusText,
	code,
	data,
}: GenerateResponseJsonError) {
	const errorBody = { ...data };
	if (code) errorBody.code = code;

	const errorOptions: ErrorOptions = {};
	if (status) errorOptions.status = 520;
	if (statusText) errorOptions.statusText = 'Sorry, something went wrong!';

	return Response.json(errorBody, errorOptions);
}
