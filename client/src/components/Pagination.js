import React from 'react'
import { Link } from 'react-router-dom';

function Pagination({ totalItem, itemPerPage, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li className="page-item" key={number}>
            <Link to="/visitors" onClick={() => paginate(number)} className="page-link">{number}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
