import React, { Component } from 'react';
import ButtonDone from '../Buttons/button-done.js';

class Table extends Component {

  renderData = () => {
    return this.props.dataSource.map(item => {
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
        <tr>
          <th>
            Task
          </th>
          <th>
            Action
          </th>
        </tr>
        { this.renderData() }
      </table>
    );
  }
}

export default Table;
