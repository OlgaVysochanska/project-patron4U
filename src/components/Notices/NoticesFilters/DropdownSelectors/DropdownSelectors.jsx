import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './DropdownSelectors.module.scss';
import { setRequestParams } from 'redux/filter/requestParamsSlice';
import SelectedButtons from '../SelectedButton';
import AgeFilter from './AgeFilter';
import GenderFilter from './GenderFilter';

const DropdownSelectors = () => {
  const [isOpenAge, setisOpenAge] = useState(false);
  const [isOpenGender, setisOpenGender] = useState(false);
  const [listHeight, setListHeight] = useState(0);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedAgeButtons, setSelectedAgeButtons] = useState([]);
  const [selectedGenderButtons, setSelectedGenderButtons] = useState([]);

  const listRefAge = useRef(null);
  const listRefGender = useRef(null);

  const handleOptionSelect = (value, type) => {
    // Обробка вибору опції
    if (type === 'age') {
      if (selectedAges.includes(value)) {
        setSelectedAges(selectedAges.filter(val => val !== value));
        setSelectedAgeButtons(selectedAgeButtons.filter(btn => btn !== value));
      } else {
        setSelectedAges([...selectedAges, value]);
        setSelectedAgeButtons([...selectedAgeButtons, value]);
      }
    } else if (type === 'gender') {
      if (selectedGenders.includes(value)) {
        setSelectedGenders(selectedGenders.filter(val => val !== value));
        setSelectedGenderButtons(
          selectedGenderButtons.filter(btn => btn !== value)
        );
      } else {
        setSelectedGenders([...selectedGenders, value]);
        setSelectedGenderButtons([...selectedGenderButtons, value]);
      }
    }
  };

  const handleRemoveSelectedAge = age => {
    setSelectedAges(selectedAges.filter(val => val !== age));
    setSelectedAgeButtons(selectedAgeButtons.filter(btn => btn !== age));
  };

  const handleRemoveSelectedGender = gender => {
    setSelectedGenders(selectedGenders.filter(val => val !== gender));
    setSelectedGenderButtons(
      selectedGenderButtons.filter(btn => btn !== gender)
    );
  };

  const handleToggleAge = () => {
    setisOpenAge(!isOpenAge);
  };

  const handleToggleGender = () => {
    setisOpenGender(!isOpenGender);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const requestParams = {
      ages: selectedAges,
      genders: selectedGenders,
    };
    console.log('Sending request:', requestParams);
    dispatch(setRequestParams(requestParams));
  }, [selectedAges, selectedGenders, dispatch]);

  useEffect(() => {
    if (listRefAge.current) {
      setListHeight(listRefAge.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (isOpenAge && listRefGender.current) {
      listRefGender.current.style.marginTop = `0`;
      const dropdownContainer = listRefGender.current.closest(
        `.${styles.dropdownContainer}`
      );
      if (dropdownContainer) {
        dropdownContainer.style.height = 'auto';
      }
    } else {
      listRefGender.current.style.marginTop = '0';
      const dropdownContainer = listRefGender.current.closest(
        `.${styles.dropdownContainer}`
      );
      if (dropdownContainer) {
        dropdownContainer.style.height = 'auto';
      }
    }
  }, [isOpenAge, listHeight]);

  return (
    <>
      <div className={styles.dropdownContainer}>
        <p>Filters</p>
        <AgeFilter
          isOpen={isOpenAge}
          selectedAges={selectedAges}
          handleOptionSelect={handleOptionSelect}
          handleToggle={handleToggleAge}
          listRef={listRefAge}
        />
        <GenderFilter
          isOpen={isOpenGender}
          selectedGenders={selectedGenders}
          handleOptionSelect={handleOptionSelect}
          handleToggle={handleToggleGender}
          listRef={listRefGender}
          marginTop={isOpenAge && `${listHeight}px`}
        />
        {/* <button className={styles.temporaryButton} onClick={handleSendRequest}>
          Send Request
        </button> */}
      </div>
      {(selectedAgeButtons.length > 0 || selectedGenderButtons.length > 0) && (
        <div className={styles.selectedWrapper}>
          <SelectedButtons
            buttons={selectedAgeButtons}
            onRemove={handleRemoveSelectedAge}
          />
          <SelectedButtons
            buttons={selectedGenderButtons}
            onRemove={handleRemoveSelectedGender}
          />
        </div>
      )}
    </>
  );
};

export default DropdownSelectors;
