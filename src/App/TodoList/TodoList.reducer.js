import initialState from './TodoList.state';
import { Actions as FormActions } from './Form';
import { Actions as ItemActions } from './Item';

export default (state = initialState, action) => {
  switch (action.type) {
    case FormActions.ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            id,
            text,
            completed: false,
          }
        }
      };
    }
    case ItemActions.TOGGLE_COMPLETE: {
      const { id, completed } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...state.items[id],
            completed
          }
        }
      };
    }
    default: return state;
  }
};