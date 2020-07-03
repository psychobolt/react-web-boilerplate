import { createSelector } from 'reselect';

import { Filters } from './Filter';

const getTodos = state => Object.values(state.todos);

export const getVisibleTodos = createSelector(
  getTodos,
  (_, filter) => filter,
  (todos, filter) => {
    switch (filter) {
      case Filters.COMPLETED:
        return todos.filter(todo => todo.completed);
      case Filters.ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  },
);
