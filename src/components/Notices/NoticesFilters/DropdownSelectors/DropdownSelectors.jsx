import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DropdownSelectors.module.scss';
import { setRequestParams } from 'redux/filter/requestParamsSlice';
import AgeFilter from './AgeFilter';
import GenderFilter from './GenderFilter';
import { getRequestParams } from 'redux/filter/filterSelectors';
import useLang from 'shared/hooks/useLang';
import locale from '../locale.json';

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

  const { lang } = useLang();
  const lFilters = locale.langFilters[lang];

  const requestParams1 = useSelector(getRequestParams);

  const ageButtons = requestParams1.ageButtons;
  const genderButtons = requestParams1.genderButtons;

  useEffect(() => {
    setSelectedAges(ageButtons);
    setSelectedGenders(genderButtons);
    setSelectedAgeButtons(ageButtons);
    setSelectedGenderButtons(genderButtons);
  }, [ageButtons, genderButtons]);

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
      ageButtons: selectedAgeButtons,
      genderButtons: selectedGenderButtons,
    };

    dispatch(setRequestParams(requestParams));
  }, [
    selectedAges,
    selectedGenders,
    selectedAgeButtons,
    selectedGenderButtons,
    dispatch,
  ]);

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
        <p>{lFilters}</p>
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
      </div>
    </>
  );
};

export default DropdownSelectors;
