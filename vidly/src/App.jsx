import React, { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter as Router } from "react-router-dom";

import Movies from "./components/movies";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Navbar from "../src/components/common/navbar";
import "./App.css";
import MovieForm from "./components/movieForm";
import LogInForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Router>
          <Switch>
            <Route path="/movies/new" component={MovieForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LogInForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
         </Router>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
