import React, {Component} from "react";
import _ from 'loadsh'
import {getMovies} from "../../services/fakeMovieService";
import {getGenres} from "../../services/fakeGenreService";
import {pagination} from "../../utils/pagination";
import MoviesTable from "../MoviesTable/MoviesTable";
import Pagination from "../Pagination/Pagination";
import ListGroup from "../ListGroup/ListGroup";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies:[],  //  总电影数据
      genres:[],  //  list-group筛选数据
      pageSize:4, //  分页每页展示的数据
      currentPage:1, //  当前分页，默认为1
      selectedGenre:{},
      sortColumn:{}
    };
  }

  componentDidMount() {
    this.setState({movies:getMovies(),genres:[{name:"All Genre"},...getGenres()]})
  }

  render() {
    const { movies: allMovies,genres, currentPage, selectedGenre,sortColumn} = this.state;
    const count = allMovies.length;
    const {movies,pageCount} = this.getPageData();

    if(count===0)return <p>There are no movies in the database.</p>
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={genres}
            onGenre={genre=>this.handleGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onDetele={movie=>this.handleDetele(movie)}
            onLiked={movie=>this.handleLiked(movie)}
            onSort={sortColumn=>this.handleSort(sortColumn)}
          />
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            onPage={page=>this.handlePage(page)}
          />
        </div>
      </div>
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

  handleGenre(genre){
    this.setState({selectedGenre: genre,currentPage:1})
  }

  handleSort(sortColumn){
    this.setState({sortColumn})
  }

  getPageData(){
    let {movies, pageSize, currentPage, selectedGenre,sortColumn} = this.state;
    const filter = selectedGenre && selectedGenre._id
      ? movies.filter(m=>m.genre._id === selectedGenre._id)
      : movies;
    const sorted = _.orderBy(filter,[sortColumn.path],[sortColumn.order])
    const count = sorted.length;
    const pageCount = Math.ceil(count/pageSize); // 分页总数
    movies = pagination(sorted,pageSize,currentPage);
    return {filter,movies,pageCount}
  }
}