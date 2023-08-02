import type {AxiosError} from 'axios';

export function isErrorCodeEqual(error: AxiosError<any, any>, code: number): boolean;
