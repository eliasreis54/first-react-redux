import React, { Component } from 'react';
import ButtonDone from '../Buttons/button-done.js';

class Table extends Component {

  renderData = () => {
    return this.props.tasks.map(item => {
      return (
        <tr key={item}>
          <th>
            { item }
          </th>
          <th>
            <ButtonDone handleClick={() => this.props.handleDone(item)} />
          </th>
        </tr>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>
              Task
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          { this.renderData() }
        </tbody>
      </table>
    );
  }
}

export default Table;
