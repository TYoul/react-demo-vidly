import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../Table/Table";
import Like from "../Like/Like";

export default class MoviesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          movie={movie}
          onLiked={(movie) => this.props.onLiked(movie)}
        />
      ),
    },
    {
      key: "detele",
      content: (movie) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={(e) => this.props.onDetele(movie)}
        >
          Detele
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}
