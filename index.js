import {isAxiosError} from 'axios';

/**
*
* @param {import('axios').AxiosError} error
* @param {number} code
*
* @returns {boolean}
*/
export function isErrorCodeEqual(error, code) {
	return isAxiosError(error) && error?.response?.data?.error?.code === code;
}
