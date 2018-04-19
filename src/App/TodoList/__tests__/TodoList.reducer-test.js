import reducer from '../TodoList.reducer';
import initialState from '../TodoList.state';
import { addTodo } from '../Form';
import { toggleComplete } from '../Item';

describe('TodoList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TODO', () => {
    const action = addTodo('todo');
    expect(reducer(undefined, action)).toEqual({
      items: {
        [action.payload.id]: {
          ...action.payload,
          completed: false
        }
      }
    });
  });

  it('should handle TOGGLE_COMPLETE', () => {
    const id = '0';
    const state = {
      items: {
        [id]: {
          id,
          text: 'todo',
          completed: false
        }
      }
    };
    const action = toggleComplete(id, true);
    expect(reducer(state, action)).toEqual({
      items: {
        [id]: {
          ...state.items[id],
          completed: true
        }
      }
    });
  });
});
