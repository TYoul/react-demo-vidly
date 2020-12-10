import React, {Component} from "react";
import {getMovies} from "../../services/fakeMovieService";
import {pagination} from "../../utils/pagination";
import MoviesTable from "../MoviesTable/MoviesTable";
import Pagination from "../Pagination/Pagination";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[],  //  总电影数据
      pageSize:4, //  分页每页展示的数据
      currentPage:1 //  当前分页，默认为1
    };
  }

  componentDidMount() {
    this.setState({movies:getMovies()})
  }

  render() {
    let {movies, pageSize, currentPage} = this.state;
    const count = movies.length;
    const pageCount = Math.ceil(count/pageSize); // 分页总数
    movies = pagination(movies,pageSize,currentPage);

    if(count===0)return <p>There are no movies in the database.</p>
    return (
      <>
        <p>Showing {count} movies in the database.</p>
        <MoviesTable
          movies={movies}
          onDetele={movie=>this.handleDetele(movie)}
          onLiked={movie=>this.handleLiked(movie)}
        />
        <Pagination
          pageCount={pageCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPage={page=>this.handlePage(page)}
        />
      </>
    )
  }

  handleDetele(movie){
    const movies = this.state.movies.filter(m=>m._id!==movie._id);
    this.setState({movies})
  }

  handleLiked(movie){
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({movies})
  }

  handlePage(page){
    this.setState({currentPage:page})
  }
}