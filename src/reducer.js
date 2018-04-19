import { combineReducers } from 'redux';

import { appReducers } from './App';
import { frameworkReducers } from './Framework';

export default combineReducers({
  ...appReducers,
  ...frameworkReducers
});
