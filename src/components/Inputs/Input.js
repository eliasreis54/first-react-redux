import React, { Component } from 'react';
import './index.css';

class Input extends Component {
  render() {
    return (
      <input value={this.props.value} onChange={this.props.handleChange} />
    );
  }
}

export default Input;
