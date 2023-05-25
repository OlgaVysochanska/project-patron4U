import React, { useState, useEffect, useCallback } from 'react';
import style from './Pagination.module.scss';
import ArrowLeftIcon from 'icons/ArrowLeftIcon';
import PropTypes from 'prop-types';
import useTheme from 'shared/hooks/useTheme';

const Pagination = ({ totalPages, onPageChange, page }) => {
  const [visiblePages, setVisiblePages] = useState([]);

  const { theme } = useTheme();

  const updateVisiblePages = useCallback(
    currentPage => {
      const totalPagesArray = Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
      const startIndex = Math.max(currentPage - 2, 1);
      const endIndex = Math.min(startIndex + 4, totalPages);
      setVisiblePages(totalPagesArray.slice(startIndex - 1, endIndex));
    },
    [totalPages]
  );

  useEffect(() => {
    updateVisiblePages(page);
  }, [page, updateVisiblePages]);

  const handlePageChange = pageNumber => {
    onPageChange(pageNumber);
    updateVisiblePages(pageNumber);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      const prevPage = page - 1;
      onPageChange(prevPage);
      updateVisiblePages(prevPage);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      onPageChange(nextPage);
      updateVisiblePages(nextPage);
    }
  };

  const container =
    theme === 'light'
      ? style.container
      : `${style.container} + ${style.containerDark}`;

  const listItem =
    theme === 'light'
      ? style.listItem
      : `${style.listItem} + ${style.listItemDark}`;

  return (
    <div className={container}>
      <ul className={style.pagination}>
        <li
          onClick={handlePrevPage}
          className={`${style.listItem} ${page === 1 ? style.disabled : ''} `}
        >
          <span
            className={
              page === 1
                ? `${style.arrowLeft} ${style.arrowLeft__disabled}`
                : style.arrowLeft
            }
          >
            <ArrowLeftIcon />
          </span>
        </li>
        {visiblePages.map(pageNumber => (
          <li
            key={pageNumber}
            className={`${style.listItem} ${
              page === pageNumber ? style.active : ''
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
        <li
          onClick={handleNextPage}
          className={`${style.listItem} ${
            page === totalPages ? style.disabled : ''
          }`}
        >
          <span
            className={
              page === totalPages
                ? `${style.arrowRight} ${style.arrowRight__disabled}`
                : style.arrowRight
            }
          >
            <ArrowLeftIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
