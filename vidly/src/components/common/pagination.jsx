import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  
    const pageCount = Math.ceil(itemCount / pageSize);
  // edge case for when the pageSize is equal to number of movies, we don't display pagination
  if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
            <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;
