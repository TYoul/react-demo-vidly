import React, {Component} from "react";

export default class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {columns} = this.props;
    return (
        <thead>
          <tr>
            {columns.map(column=>(
              <th
                key={column.path || column.key}
                style={{cursor:"pointer"}}
                onClick={e=>this.handleSort(column.path)}
              >
                {column.label || ""} {column.label && this.renderSortIcon(column)}
              </th>
            ))}
          </tr>
        </thead>
    )
  }

  handleSort(path){
    const sortColumn = {...this.props.sortColumn}
    if(sortColumn.path === path){
      sortColumn.order = (sortColumn.order === 'asc')?'desc':'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  }

  renderSortIcon(column){
    const {sortColumn} = this.props;
    if(column.path !== sortColumn.path) return <i className="fa fa-sort" aria-hidden="true"></i>;
    if(sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  }
}