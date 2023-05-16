import { useRef, useEffect } from 'react';

import DatePicker from 'react-datepicker';

import styles from '../AddPetForm.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

const PersonalDetail = ({
  activeTab,
  activeCategory,
  addTitle,
  petName,
  birthDate,
  breed,
  invalidAddTitle,
  invalidPetName,
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

  return (
    <>
      {activeCategory !== 0 && (
        <>
          <label
            className={[
              styles.inputContainerValid,
              invalidAddTitle ? styles['inputContainerInvalid'] : '',
            ].join(' ')}
          >
            <p className={styles.label}>Title of add</p>
            <input
              ref={inputTitleRef}
              className={[
                styles.input,
                invalidAddTitle ? styles['inputInvalid'] : '',
              ].join(' ')}
              type="text"
              name="addTitle"
              value={addTitle}
              onChange={handleChange}
              placeholder="Type title of add"
              required
            />
          </label>
          {invalidAddTitle && (
            <p className={styles.validMessage}>{invalidAddTitle}</p>
          )}
        </>
      )}
      <label
        className={[
          styles.inputContainerValid,
          invalidPetName ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <p className={styles.label}>Name pet</p>
        <input
          ref={inputNameRef}
          className={[
            styles.input,
            invalidPetName ? styles['inputInvalid'] : '',
          ].join(' ')}
          type="text"
          name="petName"
          value={petName}
          onChange={handleChange}
          placeholder="Type name pet"
          required
        />
      </label>
      {invalidPetName && (
        <p className={styles.validMessage}>{invalidPetName}</p>
      )}
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
};

export default PersonalDetail;
