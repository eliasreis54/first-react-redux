import React, { Component } from 'react';
import ButtonConfirm from '../Buttons/button-confirm.js';
import Input from '../Inputs/Input.js';
import Table from '../table/index.js';
import { store } from '../store.js';
import { addTask, removeTask } from '../actions/index';

import './index.css';
class App extends Component {
  state = {
    task: '',
    tasks: [],
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        task: '',
        tasks: store.getState().todoListReducer.tasks,
      })
    });
  };

  handleTask = event => this.setState({ task: event.target.value });

  handleClickAdd = task => store.dispatch(addTask(this.state.task));

  handleDone = task => store.dispatch(removeTask(this.state.task));

  render() {
    return(
      <div className='content-div'>
        <div>
          <Input value={this.state.task} handleChange={this.handleTask} />
          <ButtonConfirm onClick={this.handleClickAdd} />
        </div>
        <div> 
          <Table dataSource={this.state.tasks} handleDone={this.handleDone} />
        </div>
      </div>
    );
  }
}

export default App;
