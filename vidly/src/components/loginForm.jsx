import React, { Component } from "react";

class LogInForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  render() {
    const handleSubmit = (event) => {
      // prevents default behavrior
      event.preventDefault();

      console.log("Submited");
    };

    const handleChange = (event) => {
      const { currentTarget: input } = event;
      const account = { ...this.state.account };
      account[input.name] = event.currentTarget.value;
      this.setState({
        account,
      });
    };

    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            {/* values comes from state */}
            <input
              value={account.username}
              onChange={handleChange}
              autoFocus
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="text"
              value={account.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
