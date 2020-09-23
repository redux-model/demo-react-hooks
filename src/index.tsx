import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createReduxStore, PersistGate } from '@redux-model/react';
import { createLogger } from 'redux-logger';
import { summaryModel } from './models/SummaryModel';

const store = createReduxStore({
  middleware: [
    createLogger({
      collapsed: true,
      diff: true,
      duration: true,
    }),
  ],
  persist: {
    version: '0.0.2',
    key: 'demo-react-hooks',
    storage: 'local',
    allowlist: {
      summaryModel,
    },
  },
  compose: 'redux-devtools',
});

ReactDom.render(
  <Provider store={store}>
    <PersistGate>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
