import React, { Component } from "react";

class LogInForm extends Component {
  state = {
    account: {
      userName: "",
      passWord: "",
    },
  };

  render() {
    const handleSubmit = (event) => {
      // prevents default behavrior
      event.preventDefault();

      console.log("Submited");
    };

    const handleChange = (event) => {
      const account = { ...this.state.account };
      account.userName = event.currentTarget.value;
      this.setState({
        account,
      });
    };

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            {/* values comes from state */}
            <input
              value={this.state.account.userName}
              onChange={handleChange}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
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
