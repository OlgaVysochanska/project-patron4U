import React, { useState } from 'react';
import style from './Pagination.module.scss';
import ArrowLeftIcon from 'icons/ArrowLeftIcon';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([1, 2, 3, 4, 5]);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);

    if (visiblePages.indexOf(pageNumber) === -1) {
      let newVisiblePages = [...visiblePages];
      newVisiblePages.pop();
      newVisiblePages.unshift(pageNumber - 2);
      setVisiblePages(newVisiblePages);
    }

    onPageChange(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);

      if (visiblePages.indexOf(currentPage - 1) === -1) {
        let newVisiblePages = [...visiblePages];
        newVisiblePages.pop();
        newVisiblePages.unshift(currentPage - 1);
        setVisiblePages(newVisiblePages);
      }

      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);

      if (visiblePages.indexOf(currentPage + 1) === -1) {
        let newVisiblePages = [...visiblePages];
        newVisiblePages.shift();
        newVisiblePages.push(currentPage + 1);
        setVisiblePages(newVisiblePages);
      }

      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={style.container}>
      <ul className={style.pagination}>
        <li
          onClick={handlePrevPage}
          className={currentPage === 1 ? 'disabled' : ''}
        >
          <span className={style.arrowLeft}>
            <ArrowLeftIcon />
          </span>
        </li>
        {visiblePages.map(page => (
          <li
            key={page}
            // className={currentPage === page ? 'active' : 'disabled'}
            className={
              currentPage === page ? `${style.btn} ${style.active}` : style.btn
            }
            onClick={() => handlePageChange(page)}
          >
            {page}
          </li>
        ))}
        <li
          onClick={handleNextPage}
          className={currentPage === totalPages ? 'disabled' : ''}
        >
          <span className={style.arrowRight}>
            <ArrowLeftIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
