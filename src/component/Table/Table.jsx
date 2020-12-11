import React, {Component} from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {columns,data,onSort,sortColumn} = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        <TableBody
          columns={columns}
          data={data}
        />
      </table>
    )
  }
}