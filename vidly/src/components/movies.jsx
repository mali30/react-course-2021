import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "../components/moviesTable";
import { Link } from "react-router-dom";
import SearchBox from "../components/searchBox";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: null,
    searchQuery: "",
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  // this is when you fetch data from your backend
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres,
    });
  }

  onDelete = (movie) => {
    const updatedMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies: updatedMovies,
    });
  };

  onLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleGenreSelect = (genre) => {
    this.setState({
      // bug when looking you select all genres and then click on another page, no movies display
      // to fix this set currentPage to 1 since we limit the number of movies we display per page and we are trying
      // to look at a page with no movies
      selectedGenre: genre,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedGenre: null,
      // default to page 1 since if they search and we only 1 page of data then
      // they are on page 3 they will not see it.
      currentPage: 1,
    });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    let filteredMovies = allMovies;
    if (searchQuery)
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    
    else if (selectedGenre && selectedGenre._id)
      filteredMovies = allMovies.filter(m => m.genre._id === selectedGenre._id)

    // // filter, sort, paginate
    // const filteredMovies =
    //   selectedGenre && selectedGenre._id
    //     ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
    //     : allMovies;

    // sorting by the column clicked and in asc order
    const sortedArray = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedArray, currentPage, pageSize);

    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      genres,
    } = this.state;
    if (count === 0) {
      return <h2>No movies in stock</h2>;
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col">
            <div>
              <Link
                className="btn btn-primary"
                style={{ marginBottom: 20 }}
                to="/movies/new"
              >
                New Movie
              </Link>
            </div>
            <h2>Showing {totalCount} movies in stock</h2>
            <SearchBox
              value={this.state.searchQuery}
              onChange={this.handleSearch}
            />
            <MoviesTable
              movies={movies}
              onLike={this.onLike}
              onDelete={this.onDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              itemCount={totalCount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
