import initialState from './TodoList.state';
import { Actions as FormActions } from './Form';
import { Actions as ItemActions } from './Item';

export const todosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case FormActions.ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          text,
          completed: false,
        },
      };
    }
    case ItemActions.TOGGLE_COMPLETE: {
      const { id, completed } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          completed,
        },
      };
    }
    default: return state;
  }
};

export default {
  todos: todosReducer,
};
