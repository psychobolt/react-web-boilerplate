import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './App';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const composeEnhancers = composeWithDevTools({});
const middleware = routerMiddleware(history);
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(middleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}><App /></ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
