import React, { Component } from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholde="Search Me"
      value={value}
      onChange={(input) => onChange(input.currentTarget.value)}
    />
  );
};

export default SearchBox;
