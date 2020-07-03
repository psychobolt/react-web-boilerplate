import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import Routes from './routes';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = composeWithDevTools({ trace: true });
const store = createStore(
  reducer,
  composeEnhancers(),
);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    store.replaceReducer(require('./reducer').default); // eslint-disable-line global-require
  });
}

ReactDOM.render(
  <Provider store={store}><Routes /></Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
