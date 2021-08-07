import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";

class App extends Component {
  render() {
    return (
      <main className="container">
        {/* <Movies /> */}
        <Switch>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/"exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
