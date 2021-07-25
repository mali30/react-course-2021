import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  // edge case for when the pageSize is equal to number of movies, we don't display pagination
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
