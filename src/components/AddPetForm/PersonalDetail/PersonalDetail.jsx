import useLang from 'shared/hooks/useLang';
// import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';

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
  const {lang} = useLang()
  // const {theme} = useTheme()

  const inputNameRef = useRef(null);
  const inputTitleRef = useRef(null);
  const currentDate = new Date();

  const Title_of_addLang = locale.Title_of_add[lang];
  const Name_petLang = locale.Name_pet[lang];
  // const validEmailLang = locale.validEmail[lang]
  const Date_of_birthLang = locale.Date_of_birth[lang];
  const BreedLang = locale.Breed[lang]
  // const cityLang = locale.city[lang]
  // const mInfoLang = locale.mInfoLang[lang];
  // const btnUWLang = locale.btnUWLang[lang];
  // const avaAltLang = locale.avaAltLang[lang]

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
        <p className={styles.label}>{Title_of_addLang}</p>
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
        <p className={styles.label}>{Name_petLang}</p>
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
        <p className={styles.label}>{Date_of_birthLang}</p>
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
        <p className={styles.label}> {BreedLang}</p>
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
