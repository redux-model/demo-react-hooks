import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Middleware } from 'redux';
import App from './components/App';
import { createReduxStore, PersistGate } from '@redux-model/react';
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
  middleware: rootMiddleWares,
  persist: {
    version: '0.0.2',
    key: 'demo-react-hooks',
    storage: 'local',
    allowlist: {
      summaryModel,
    },
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
