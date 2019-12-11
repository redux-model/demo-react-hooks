import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, Middleware } from 'redux';
import App from './components/App';
import { createReduxStore, PersistGate } from '@redux-model/web';
import { createLogger } from 'redux-logger';
import { summaryModel } from './models/SummaryModel';

const rootMiddleWares: Middleware[] = [
  createLogger({
    collapsed: true,
    diff: true,
    duration: true,
  }),
];

const store = createReduxStore({
  reducers: {
    ...summaryModel.register(),
  },
  enhancer: compose(applyMiddleware(...rootMiddleWares)),
  persist: {
    version: '0.0.1',
    key: 'demo-react-hooks',
    storage: localStorage,
  },
});

ReactDom.render(
  <Provider store={store}>
    <PersistGate>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
