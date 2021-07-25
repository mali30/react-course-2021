import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from './common/like'

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteMovie = (movie) => {
    const updatedMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({
      movies: updatedMovies,
    });
  };


  changeColorOnClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] }
    movies[index].liked = !movies[index].liked;
    this.setState({
      movies
    })
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <h2>No movies in stock</h2>;
    }
    return (
      <div>
        <h2>Showing {count} movies in stock</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                    <Like onClick={() => this.changeColorOnClick(movie)} liked={movie.liked} />
                  </td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
