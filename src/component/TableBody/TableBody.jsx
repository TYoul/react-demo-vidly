import React, { Component } from "react";
import _ from "loadsh";

export default class TableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { columns, data } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={item._id + (column.path || column.key)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  renderCell(item, column) {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  }
}
