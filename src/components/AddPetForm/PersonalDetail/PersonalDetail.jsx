import { useRef, useEffect } from 'react';

import DatePicker from 'react-datepicker';

import styles from '../AddPetForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

const PersonalDetail = ({
  activeTab,
  activeCategory,
  title,
  name,
  birthDate,
  breed,
  invalidtitle,
  invalidname,
  invalidBirthDate,
  invalidPetBreed,
  handleChange,
}) => {
  const inputNameRef = useRef(null);
  const inputTitleRef = useRef(null);
  const currentDate = new Date();

  useEffect(() => {
    if (activeTab === 1) {
      inputTitleRef.current
        ? inputTitleRef.current.focus()
        : inputNameRef.current.focus();
    }
  }, [activeTab]);

  const handleDateChange = birthDate => {
    handleChange({
      target: {
        name: 'birthDate',
        value: birthDate,
      },
    });
  };

  const titleEl = (
    <>
      <label
        className={[
          styles.inputContainerValid,
          invalidtitle ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <p className={styles.label}>Title of add</p>
        <input
          ref={inputTitleRef}
          className={[
            styles.input,
            invalidtitle ? styles['inputInvalid'] : '',
          ].join(' ')}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Type title of add"
          required
        />
      </label>
      {invalidtitle && <p className={styles.validMessage}>{invalidtitle}</p>}
    </>
  );

  const nameEl = (
    <>
      <label
        className={[
          styles.inputContainerValid,
          invalidname ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <p className={styles.label}>Name pet</p>
        <input
          ref={inputNameRef}
          className={[
            styles.input,
            invalidname ? styles['inputInvalid'] : '',
          ].join(' ')}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Type name pet"
          required
        />
      </label>
      {invalidname && <p className={styles.validMessage}>{invalidname}</p>}
    </>
  );

  const dateBirthEl = (
    <>
      <label
        className={[
          styles.inputContainerValid,
          invalidBirthDate ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <p className={styles.label}>Date of birth</p>
        <DatePicker
          selected={birthDate}
          onChange={handleDateChange}
          placeholderText="Type date of birth"
          showYearDropdown
          scrollableYearDropdown
          className={[
            styles.input,
            styles.datepicker,
            invalidBirthDate ? styles['inputInvalid'] : '',
          ].join(' ')}
          dateFormat="dd.MM.yyyy"
          shouldCloseOnSelect={true}
          maxDate={currentDate}
          yearDropdownItemNumber={100}
        />
      </label>
      {invalidBirthDate && (
        <p className={styles.validMessage}>{invalidBirthDate}</p>
      )}
    </>
  );

  const breedEl = (
    <>
      <label
        className={[
          styles.inputContainerValid,
          invalidPetBreed ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <p className={styles.label}> Breed</p>
        <input
          className={[
            styles.input,
            invalidPetBreed ? styles['inputInvalid'] : '',
          ].join(' ')}
          type="text"
          name="breed"
          value={breed}
          onChange={handleChange}
          placeholder="Type breed"
          required
        />
      </label>
      {invalidPetBreed && (
        <p className={styles.validMessage}>{invalidPetBreed}</p>
      )}
    </>
  );

  const commonContent = (
    <>
      {titleEl}
      {nameEl}
      {dateBirthEl}
      {breedEl}
    </>
  );

  const categoryData = [
    {
      category: 0,
      content: (
        <>
          {nameEl}
          {dateBirthEl}
          {breedEl}
        </>
      ),
    },
    {
      category: 1,
      content: <>{commonContent}</>,
    },
    {
      category: 2,
      content: <>{commonContent}</>,
    },
    {
      category: 3,
      content: <>{commonContent}</>,
    },
  ];

  const activeCategoryData = categoryData.find(
    data => data.category === activeCategory
  );

  return <div>{activeCategoryData.content}</div>;
};

export default PersonalDetail;
