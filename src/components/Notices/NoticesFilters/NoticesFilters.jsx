import { useState } from 'react';
import styles from './NoticesFilters.module.scss';

import FilterButton from 'shared/components/FilterButton/FilterButton';
import DropdownSelectors from './DropdownSelectors';

const NoticesFilters = (selectedAgeButtons, selectedGenderButtons) => {
  console.log('selectedGenderButtons:', selectedGenderButtons);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filterButton}>
      <FilterButton onClick={handleFilterClick}>Filter</FilterButton>
      {isOpen ||
      selectedAgeButtons.length > 0 ||
      selectedGenderButtons.length > 0 ? (
        <DropdownSelectors />
      ) : null}
    </div>
  );
};

export default NoticesFilters;
