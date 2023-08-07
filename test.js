import test from 'ava';
import {AxiosError} from 'axios';
import {isErrorCodeEqual} from './index.js';

test('return true when match error code', t => {
	const request = {path: '/foo'};
	const response = {
		status: 401,
		data: {
			status: {
				code: 401,
				message: 'Not process entity',
			},
			error: {
				code: 10_000,
				message: 'Not process entity',
			},
		},
	};
	const error = new AxiosError('Not process entity', 'ESOMTHING', {foo: 'bar'}, request, response);

	t.true(isErrorCodeEqual(error, 10_000));
});

test('return false when match error code', t => {
	const request = {path: '/foo'};
	const response = {
		status: 401,
		data: {
			status: {
				code: 401,
				message: 'Not process entity',
			},
			error: {
				code: 10_000,
				message: 'Not process entity',
			},
		},
	};
	const error = new AxiosError('Not process entity', 'ESOMTHING', {foo: 'bar'}, request, response);

	t.false(isErrorCodeEqual(error, 10_001));
});

test('return false when error is not AxiosError', t => {
	const error = new Error('Custom error');

	t.false(isErrorCodeEqual(error, 10_000));
});
