import React, { Component } from 'react';
import ButtonConfirm from '../Buttons/button-confirm.js';
import Input from '../Inputs/Input.js';
import Table from '../table/container.js';

import './index.css';
class App extends Component {
  state = {
    task: ''
  }

  handleTask = event => this.setState({ task: event.target.value });

  handleClickAdd = task => {
    this.props.add(this.state.task);
    this.setState({ task: '' });
  }
  handleDone = task => this.props.remove(task);

  render() {
    return(
      <div className='content-div'>
        <div>
          <Input value={this.state.task} handleChange={this.handleTask} />
          <ButtonConfirm onClick={this.handleClickAdd} />
        </div>
        <div> 
          <Table handleDone={this.handleDone} />
        </div>
      </div>
    );
  }
}

export default App;
