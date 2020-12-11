import React, {Component} from "react";

export default class ListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {genres,onGenre,selectedGenre} = this.props;
    return (
      <ul className="list-group">
        {genres.map(genre=>(
          <li
            className={selectedGenre===genre?"list-group-item active":"list-group-item"}
            key={genre.name}
            onClick={e=>onGenre(genre)}>
            {genre.name}
          </li>
        ))}
      </ul>
    )
  }
}