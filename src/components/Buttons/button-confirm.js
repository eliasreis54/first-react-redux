import React, { Component } from 'react';
import './confirm.css';

class ButtonConfirm extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Adicionar
      </button>
    );
  }
}

export default ButtonConfirm;
