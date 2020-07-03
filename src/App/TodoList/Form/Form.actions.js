import Hashids from 'hashids';

const idGen = new Hashids('form_actions');

export const Actions = {
  ADD_TODO: 'addTodo',
};

export const addTodo = text => ({
  type: Actions.ADD_TODO,
  payload: {
    id: idGen.encode(Date.now()),
    text,
  },
});
