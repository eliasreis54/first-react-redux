import React, { Component } from 'react';

class ButtonConfirm extends Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>
        Done
      </button>
    );
  }
}

export default ButtonConfirm;
