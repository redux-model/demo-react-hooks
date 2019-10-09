import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';

export const rootMiddleWares: Middleware[] = [
    createLogger({
      collapsed: true,
      diff: true,
      duration: true,
    })
];
