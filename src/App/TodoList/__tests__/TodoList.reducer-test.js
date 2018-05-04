import { todosReducer } from '../TodoList.reducers';
import * as initialState from '../TodoList.state';
import { addTodo } from '../Form';
import { toggleComplete } from '../Item';

describe('Todos reducer', () => {
  it('should return the initial state', () => {
    expect(todosReducer(undefined, {})).toEqual(initialState.todos);
  });

  it('should handle ADD_TODO', () => {
    const action = addTodo('todo');
    expect(todosReducer(undefined, action)).toEqual({
      [action.payload.id]: {
        ...action.payload,
        completed: false
      }
    });
  });

  it('should handle TOGGLE_COMPLETE', () => {
    const id = '0';
    const state = {
      [id]: {
        id,
        text: 'todo',
        completed: false
      }
    };
    const action = toggleComplete(id, true);
    expect(todosReducer(state, action)).toEqual({
      [id]: {
        ...state[id],
        completed: true
      }
    });
  });
});
