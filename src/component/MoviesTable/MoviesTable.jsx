import React, {Component} from "react";
import Like from "../Like/Like";

export default class MoviesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {movies,onDetele,onLiked} = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th/>
            <th/>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie=>(
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  movie={movie}
                  liked={movie.liked}
                  onLiked={onLiked}
                />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={e=>onDetele(movie)}
                >
                  Detele
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}