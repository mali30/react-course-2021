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

// adding default props so we can clean up current props 
ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup;
