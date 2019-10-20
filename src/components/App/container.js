import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { addTask, removeTask } from '../actions/index';

import App from './index.js';

const mapStateToProps = state => {
  return {
    tasks: state.todoListReducer.tasks,
  }
}

const mapDispatchToProps = dispatch => ({
  add: bindActionCreators(addTask, dispatch),
  remove: bindActionCreators(removeTask, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
