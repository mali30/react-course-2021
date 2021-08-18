import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LogInForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: { username: "", password: "" },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);

    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
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
