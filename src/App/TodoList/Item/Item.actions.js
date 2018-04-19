export const Actions = {
  TOGGLE_COMPLETE: 'toggleComplete'
};

export const toggleComplete = (id, completed) => ({
  type: Actions.TOGGLE_COMPLETE,
  payload: {
    id,
    completed
  }
});