import { useState, useRef, useEffect } from 'react';
import styles from './NoticesFilters.module.scss';

const DropdownSelectors = () => {
  const [isOpenAge, setisOpenAge] = useState(false);
  const [isOpenGender, setisOpenGender] = useState(false);
  const [listHeight, setListHeight] = useState(0);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);

  const listRefAge = useRef(null);
  const listRefGender = useRef(null);

  const ages = [
    { value: '3-12 m', label: '3-12 m' },
    { value: '1 year', label: '1 year' },
    { value: '2 year', label: '2 year' },
  ];
  const genders = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
  ];

  const handleOptionSelect = (value, type) => {
    // Обробка вибору опції
    if (type === 'age') {
      if (selectedAges.includes(value)) {
        setSelectedAges(selectedAges.filter(val => val !== value));
      } else {
        setSelectedAges([...selectedAges, value]);
      }
    } else if (type === 'gender') {
      if (selectedGenders.includes(value)) {
        setSelectedGenders(selectedGenders.filter(val => val !== value));
      } else {
        setSelectedGenders([...selectedGenders, value]);
      }
    }
  };

  const handleToggleAge = () => {
    setisOpenAge(!isOpenAge);
  };

  const handleToggleGender = () => {
    setisOpenGender(!isOpenGender);
  };

  const handleSendRequest = () => {
    // Відправка запиту на бекенд з обраними параметрами
    const requestParams = {
      ages: selectedAges,
      genders: selectedGenders,
    };
    console.log('Sending request:', requestParams);
    // Виконати логіку відправки запиту на бекенд тут
  };

  useEffect(() => {
    if (listRefAge.current) {
      setListHeight(listRefAge.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (isOpenAge && listRefGender.current) {
      listRefGender.current.style.marginTop = `${listHeight}px`;
    } else {
      listRefGender.current.style.marginTop = '0';
    }
  }, [isOpenAge, listHeight]);

  return (
    <div>
      <div className={styles.dropdownContainer} ref={listRefAge}>
        <button onClick={handleToggleAge}>By age</button>
        {isOpenAge && (
          <ul className={styles.dropdown}>
            {ages.map(option => (
              <li key={option.value}>
                <label>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedAges.includes(option.value)}
                    onChange={() => handleOptionSelect(option.value, 'age')}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={styles.dropdownContainer}
        ref={listRefGender}
        style={{ marginTop: isOpenAge && `${listHeight}px` }}
      >
        <button onClick={handleToggleGender}>By gender</button>
        {isOpenGender && (
          <ul className={styles.dropdown}>
            {genders.map(option => (
              <li key={option.value}>
                <label>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedGenders.includes(option.value)}
                    onChange={() => handleOptionSelect(option.value, 'gender')}
                  />
                  {option.label}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleSendRequest}>Send Request</button>
    </div>
  );
};

export default DropdownSelectors;
