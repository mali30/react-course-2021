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

  render() {
    const validate = () => {
      // joi terminates as soon as it finds and error so we disble it
      const options = { abortEarly: false };
      const { error } = Joi.validate(this.state.account, this.schema, options);

      if (!error) return null;
      const errors = {};
      // mapping array into object
      for (let item of error.details) errors[item.path[0]] = item.message;
      return errors;
    };

    const handleSubmit = (event) => {
      // prevents default behavrior
      event.preventDefault();

      const errors = validate();
      this.setState({
        errors: errors || {},
      });
      if (errors) return;
    };

    const validateProperty = ({ name, value }) => {
      // dynamically get name property
      // we dont want to abort early since it would be bad user experience
      // if they a bunch of invalid fields. one at a time
      const obj = { [name]: value };
      const schema = { [name]: this.schema[name] };
      const { error } = Joi.validate(obj, schema);

      return error ? error.details[0].message : null;
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
          <button disabled={validate()} className="btn btn-primary">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
