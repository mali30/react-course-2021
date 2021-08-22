import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  // since we have get the value from the props and then add it in the input in the format a = a,
  // instead we grab what we must need and use spread operator to get the rest of data
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
    //{/* using rest and spread operators to get other values and set. a = a *///}
        {...rest}
        name={name}
        autoFocus
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
