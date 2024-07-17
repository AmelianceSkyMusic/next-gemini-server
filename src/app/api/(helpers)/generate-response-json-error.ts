type ErrorOptions = {
	statusText?: string;
	status?: number;
	headers?: Headers;
};

type GenerateResponseJsonError = {
	status?: number;
	statusText?: string;
	code?: string;
	data?: Record<string, unknown>;
	headers?: Headers;
};

export function generateResponseJsonError({
	status,
	statusText,
	code,
	data,
	headers,
}: GenerateResponseJsonError) {
	const errorBody = { ...data };
	if (code) errorBody.code = code;

	const errorOptions: ErrorOptions = {};
	if (status) errorOptions.status = status || 520;
	if (statusText) errorOptions.statusText = statusText || 'Sorry, something went wrong!';
	if (headers) errorOptions.headers = headers;

	return Response.json(errorBody, errorOptions);
}
