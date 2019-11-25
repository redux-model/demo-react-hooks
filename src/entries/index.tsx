import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import HotReact from 'webpack-genius/hot/react';
import { applyMiddleware, compose } from 'redux';
import { rootReducers } from './reducers';
import { rootMiddleWares } from './middleware';
import App from '../components/App';
import { createReduxStore, PersistGate } from '@redux-model/web';

const store = createReduxStore({
  reducers: rootReducers,
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
      <HotReact>
        <App />
      </HotReact>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
