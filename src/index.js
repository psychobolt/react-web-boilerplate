import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import Routes from './routes';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  reducer,
  composeEnhancers(),
);

ReactDOM.render(
  <Provider store={store}><Routes /></Provider>, 
  document.getElementById('root')
);
registerServiceWorker();