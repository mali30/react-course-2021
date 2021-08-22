import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import Form from "./common/form";

class LogInForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: { username: "", password: "" },
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call server
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
