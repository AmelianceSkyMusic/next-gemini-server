import { ReturnError, returnError } from '~/shared/_asm/scripts/return-error';
import { APP } from '~constants/app';

export type HandleAppError = ReturnError;

export function handleAppError(error: unknown, code?: number): ReturnError {
	return returnError(error, code, APP.name, 1, 1);
}
