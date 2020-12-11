import React, {Component} from "react";
import _ from 'loadsh'

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {pageCount,onPage,currentPage} = this.props;
    const pages = _.range(1, pageCount + 1); // [1,...,pageCount]
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(page=>(
            <li className={currentPage===page?"page-item active":"page-item"} key={page}>
              <a className="page-link"
                 href="/#"
                 onClick={e=>onPage(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}