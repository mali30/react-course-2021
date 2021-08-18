import React, { Component } from "react";
import Input from "./common/input";

class LogInForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: { username: "", password: "" },
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const handleSubmit = (event) => {
      // prevents default behavrior
      event.preventDefault();

      const errors = this.validate();
      this.setState({
        errors: errors || {},
      });
      if (errors) return;
    };

    const validateProperty = ({ name, value }) => {
      if (name === "username") {
        if (value.trim() === "") return "Username is required";
      }

      if (name === "password") {
        if (value.trim() === "") return "Password is required";
      }
    };

    const handleChange = ({ currentTarget: input }) => {
      const errors = { ...this.state.errors };
      const errorMessage = validateProperty(input);
      if (errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];

      const account = { ...this.state.account };
      account[input.name] = input.value;
      this.setState({
        account,
        errors,
      });
    };

    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
