import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRequestParams } from 'redux/filter/filterSelectors';
import styles from './NoticesFilters.module.scss';

import FilterButton from 'shared/components/FilterButton/FilterButton';
import DropdownSelectors from './DropdownSelectors';
import SelectedButtons from './SelectedButton/SelectedButton';
import { setRequestParams } from 'redux/filter/requestParamsSlice';

const NoticesFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };

  const requestParams = useSelector(getRequestParams);
  const ages = requestParams.ages;
  const genders = requestParams.genders;
  const ageButtons = requestParams.ageButtons;
  const genderButtons = requestParams.genderButtons;

  const handleRemoveSelectedAge = age => {
    const updatedAges = ages.filter(val => val !== age);
    const updatedAgeButtons = ageButtons.filter(btn => btn !== age);
    dispatch(
      setRequestParams({
        ...requestParams,
        ages: updatedAges,
        ageButtons: updatedAgeButtons,
      })
    );
  };

  const handleRemoveSelectedGender = gender => {
    const updatedGenders = genders.filter(val => val !== gender);
    const updatedGenderButtons = genderButtons.filter(btn => btn !== gender);
    dispatch(
      setRequestParams({
        ...requestParams,
        genders: updatedGenders,
        genderButtons: updatedGenderButtons,
      })
    );
  };

  return (
    <div className={styles.filterButtonsWrapper}>
      <FilterButton onClick={handleFilterClick}>Filter</FilterButton>
      {isOpen && <DropdownSelectors />}
      <div className={styles.selectedButtonsWrapper}>
        <SelectedButtons
          buttons={ageButtons}
          onRemove={handleRemoveSelectedAge}
        />
        <SelectedButtons
          buttons={genderButtons}
          onRemove={handleRemoveSelectedGender}
        />
      </div>
    </div>
  );
};

export default NoticesFilters;
