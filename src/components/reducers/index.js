import { combineReducers } from 'redux';

const INITIAL_STATE = {
  tasks: [],
};

const todoListReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { tasks } = state;
  console.log(tasks, payload);
  switch(type){
    case 'TODO_ADD':
      return { ...state, tasks: [...tasks, payload]};
    case 'TODO_REMOVE':
      return { ...state, tasks: tasks.filter(task => task !== payload) };
    default:
      return state
  }
}

export default combineReducers({todoListReducer});
