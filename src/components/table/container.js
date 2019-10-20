import { connect } from 'react-redux';

import Table from './index.js';

const mapStateToProps = state => {
  return {
    tasks: state.todoListReducer.tasks,
  }
};

export default connect(mapStateToProps, null)(Table);
