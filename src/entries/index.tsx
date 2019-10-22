import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducers } from './reducers';
import { rootMiddleWares } from './middleware';
import App from '../components/App';
import { createReduxStore } from '@redux-model/web';
import { PersistGate } from 'redux-persist/integration/react';

const store = createReduxStore({
  reducers: rootReducers,
  enhancer: compose(applyMiddleware(...rootMiddleWares)),
  onCombineReducers: (reducer) => {
    return persistReducer({
      key: 'root',
      storage,
    }, reducer);
  },
});

const persistor = persistStore(store);

ReactDom.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
