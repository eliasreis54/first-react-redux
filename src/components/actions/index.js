const addTask = task => ({
  type: 'TODO_ADD',
  payload: task,
});

const removeTask = task => ({
  type: 'TODO_REMOVE',
  payload: task
});

export { addTask, removeTask };
