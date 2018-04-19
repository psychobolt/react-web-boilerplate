import { hot } from 'react-hot-loader';

import App from './App.component';
import { reducer } from './TodoList';


export const appReducers = {
  todoList: reducer
};

export default hot(module)(App);