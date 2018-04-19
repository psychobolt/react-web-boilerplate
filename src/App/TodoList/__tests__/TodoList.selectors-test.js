import { getVisibleTodos } from '../TodoList.selectors';
import { Filters } from '../Filter';

describe('TodoList selectors', () => {
  describe('should get todos', () => {
    const state = {
      todoList: {
        items: {
          '0': {
            id: '0',
            text: 'todo1',
            completed: false
          },
          '1': {
            id: '1',
            text: 'todo2',
            completed: true
          }
        }
      }
    };

    it('that are active', () => {
      expect(getVisibleTodos(state, { activeFilter: Filters.ACTIVE }))
        .toEqual([state.todoList.items[0]]);
    });

    it('that are completed', () => {
        expect(getVisibleTodos(state, { activeFilter: Filters.COMPLETED }))
          .toEqual([state.todoList.items[1]]);
      });
  });
});