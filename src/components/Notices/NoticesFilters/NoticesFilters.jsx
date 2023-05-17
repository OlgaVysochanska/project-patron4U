import { useState, useEffect } from 'react';
import styles from './NoticesFilters.module.scss';
import PropTypes from 'prop-types';
import FilterButton from '../../../shared/components/FilterButton/FilterButton';
import DropdownSelectors from './DropdownSelectors';

const NoticesFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filterButton}>
      <FilterButton onClick={handleFilterClick}>Filter</FilterButton>
      {isOpen && <DropdownSelectors></DropdownSelectors>}
    </div>
  );
};

export default NoticesFilters;
