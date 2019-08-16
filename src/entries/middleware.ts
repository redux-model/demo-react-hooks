import { Middleware } from 'redux';
import { createRequestMiddleware, HttpError, Model } from '@redux-model/web';
import { createLogger } from 'redux-logger';

const apiMiddleware = createRequestMiddleware({
  id: Model.middlewareName,
  baseUrl: 'https://registry.npm.taobao.org',
  getHeaders: () => {
    return {
      Accept: 'application/json',
    };
  },
  onFail: (error: HttpError<{ error: string, reason: string }>, transform) => {
    if (error.response.data && error.response.data.reason) {
      transform.errorMessage = error.response.data.reason;
    }
  },
  onShowSuccess: (successText) => {
    console.info(successText);
    alert(successText);
  },
  onShowError: (errorText) => {
    console.error(errorText);
    alert(errorText);
  },
});

export const rootMiddleWares: Middleware[] = [apiMiddleware, createLogger({
  collapsed: true,
  diff: true,
  duration: true,
})];
