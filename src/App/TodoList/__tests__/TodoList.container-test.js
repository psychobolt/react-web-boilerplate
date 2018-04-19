import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import TodoList from '../TodoList.container';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = { todoList: { items: {} } };

it('container <TodoList /> renders without crashing', () => {
  shallow(<TodoList />, { context: { store: mockStore(initialState) }});
});