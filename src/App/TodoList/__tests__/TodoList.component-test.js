import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import { mountWithIntl } from 'shared/intl-enzyme-test-helper';

import TodoList from '../TodoList.component';
import i18n from '../TodoList.i18n';
import { Routes } from '../Filter';

const middlewares = [];
const mockStore = configureStore(middlewares);
const locale = 'en';
const messages = i18n[locale];
const initialState = {
  todos: {
    0: {
      id: 0,
      text: 'Todo 1',
      completed: false,
    },
  },
};

describe('component <TodoList />', () => {
  it('renders without crashing', () => {
    const store = mockStore(initialState);
    mountWithIntl(
      <Provider store={store}>
        <MemoryRouter>
          <TodoList />
        </MemoryRouter>
      </Provider>,
      locale,
      messages,
    );
  });

  it('renders without crashing with acive path', () => {
    const store = mockStore(initialState);
    mountWithIntl(
      <Provider store={store}>
        <MemoryRouter initialEntries={[Routes.ACTIVE]}>
          <TodoList />
        </MemoryRouter>
      </Provider>,
      locale,
      messages,
    );
  });

  it('renders without crashing with invalid path', () => {
    const store = mockStore(initialState);
    mountWithIntl(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/test']}>
          <TodoList />
        </MemoryRouter>
      </Provider>,
      locale,
      messages,
    );
  });
});
