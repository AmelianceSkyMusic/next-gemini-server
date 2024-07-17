export function generateResponseJsonSuccess(data?: unknown, headers?: Headers) {
	return Response.json(data || {}, { status: 200, statusText: 'ok', headers });
}
