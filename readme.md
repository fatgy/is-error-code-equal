# is-error-code-equal

> Check error code from api.

## Install

```sh
npm install @fatgy/is-error-code-equal
```

## Usage

ex. api response
```json
{
	status: {
		code: 401,
		message: 'Can not process entity'
	},
	error: {
		code: 10000,
		message: 'Can not process entity',
		errors: []
	}
}

```

```js
import {isErrorCodeEqual} from '@fatgy/is-error-code-equal';

isErrorCodeEqual(error, 10000);
//=> true

isErrorCodeEqual(error, 10001);
//=> false
```

## API

### isErrorCodeEqual(error, code)

#### error

Type: `AxiosError`

#### code

Type: `number`
