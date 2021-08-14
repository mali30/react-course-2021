import React, { Component } from "react";

class LogInForm extends Component {
  render() {
    const handleSubmit = (event) => {
      // prevents default behavrior
      event.preventDefault();

      console.log("Submited");
    };
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input autoFocus id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
