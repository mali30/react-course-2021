import React from "react";
import { getGenres } from "../services/fakeGenreService";
import { func } from "prop-types";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;
  return (
    <ul class="list-group">
      {items.map((item) => (
        <li key={item[valueProperty]} class="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
