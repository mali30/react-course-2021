import React, { Component } from "react";
import { useHistory } from "react-router-dom";

import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRental: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(5).label("Rate"),
  };

  doSubmit = () => {
    saveMovie(this.state.data);
    console.log("Submitted");
    this.props.history.push("/movies");
  };

  // maps movie object from backend to movie object to display
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre_id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  componentDidMount() {
    // get the movies genres from genre service
    const genres = getGenres();

    // set the state
    this.setState({ genres });

    // get id from route
    const movieId = this.props.match.params.id;
    // dont want to populate form with existing movie so we return
    if (movieId === "new") return;
  
    // get the movie with the id
    const movie = getMovie(movieId);
    console.log('movie', movie);
    // using replace instead of push since we don't want the user to go back to a movie
    // that does not exist
    // if (!movie) return this.props.history.replace("/not-found");

    this.setState({
      data: this.mapToViewModel(movie),
    });
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
