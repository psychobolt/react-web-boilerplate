import { combineReducers } from 'redux';

import appReducers from './App/App.reducers';
import { frameworkReducers } from './Framework';

export default combineReducers({
  ...appReducers,
  ...frameworkReducers,
});
