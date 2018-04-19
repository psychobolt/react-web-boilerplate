import { createSelector } from 'reselect';

import { Filters } from './Filter';

const getTodos = state => Object.values(state.todoList.items);

const getFilter = (state, props) => props.activeFilter;

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case Filters.COMPLETED:
        return todos.filter(todo => todo.completed);
      case Filters.ACTIVE:
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
);
