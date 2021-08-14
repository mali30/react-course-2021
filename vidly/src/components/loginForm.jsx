import React, { Component } from "react";
import Input from "./common/input";

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
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={handleChange}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={handleChange}
          />
          <button className="btn btn-primary">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
