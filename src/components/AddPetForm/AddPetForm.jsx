import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useForm from 'shared/hooks/useForm';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import MoreInfo from './MoreInfo/MoreInfo';

import Button from 'shared/components/Button/Button';
import ArrowLeftIcon from 'icons/ArrowLeftIcon';
import PawprintIcon from 'icons/PawprintIcon';
import validateRulers from 'shared/helpers/validation/validateRulers';

import { gender, categories, tabs } from './InitialData/InitialData';

import styles from './AddPetForm.module.scss';

const initialState = {
  petName: '',
  birthDate: null,
  breed: '',
  sex: '',
  photoUrl: '',
  comments: '',
  addTitle: '',
  location: '',
  price: '',
};

const AddPetForm = ({ onSubmit }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeGender, setActiveGender] = useState(null);

  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const [invalidPetName, setInvalidPetName] = useState('');
  const [invalidPetBreed, setInvalidBreed] = useState('');
  const [invalidAddTitle, setInvalidAddTitle] = useState('');
  const [invalidBirthDate, setInvalidBirthDate] = useState('');
  const [invalidSex, setInvalidSex] = useState('');
  const [invalidComments, setInvalidComments] = useState('');
  const [invalidLocation, setInvalidLocation] = useState('');
  const [invalidPrice, setInvalidPrice] = useState('');

  const {
    addTitle,
    petName,
    birthDate,
    breed,
    sex,
    photoUrl,
    comments,
    location,
    price,
  } = state;

  const navigate = useNavigate();

  const validateData = () => {
    let formData = [];
    if (activeTab === 1) {
      switch (activeCategory) {
        case 0:
          formData = [
            { name: 'petName', value: petName },
            { name: 'breed', value: breed },
            { name: 'birthDate', value: birthDate },
          ];
          break;
        case 1:
          formData = [
            { name: 'petName', value: petName },
            { name: 'breed', value: breed },
            { name: 'birthDate', value: birthDate },
            { name: 'addTitle', value: addTitle },
          ];
          break;
        default:
          break;
      }
    }

    if (activeTab === 2) {
      switch (activeCategory) {
        case 0:
          formData = [{ name: 'comments', value: comments }];
          break;
        case 1:
          formData = [
            { name: 'comments', value: comments },
            { name: 'sex', value: sex },
            { name: 'location', value: location },
            { name: 'price', value: price },
          ];
          break;
        case 2:
        case 3:
          formData = [
            { name: 'comments', value: comments },
            { name: 'sex', value: sex },
            { name: 'location', value: location },
          ];
          break;
        default:
          break;
      }
    }

    const validatedData = validateRulers(formData);
    console.log(validatedData);

    const errorMessages = validatedData.reduce(
      (errors, { name, message, isValid }) => {
        if (!isValid) {
          errors[name] = message;
        }
        return errors;
      },
      {}
    );

    setInvalidPetName(errorMessages.petName || '');
    setInvalidBreed(errorMessages.breed || '');
    setInvalidAddTitle(errorMessages.addTitle || '');
    setInvalidBirthDate(errorMessages.birthDate || '');
    setInvalidSex(errorMessages.sex || '');
    setInvalidComments(errorMessages.comments || '');
    setInvalidLocation(errorMessages.location || '');
    setInvalidPrice(errorMessages.price || '');

    return validatedData.filter(obj => obj.isValid === false);
  };

  const handleGenderChange = index => {
    setActiveGender(index);
    handleChange({
      target: {
        name: 'sex',
        value: gender[index].gender,
      },
    });
  };

  const handleCategoryChange = index => {
    setActiveCategory(index);
  };

  const handleFormTabNvigationCancel = () => {
    //navigate('/notices/sell');
    navigate(-1);
  };

  const handleFormTabNvigationNext = () => {
    const invalidObjects = validateData();
    if (!invalidObjects.length) {
      setActiveTab(activeTab => activeTab + 1);
    }
  };

  const handleFormTabNvigationPrev = () => {
    setActiveTab(activeTab => activeTab - 1);
  };

  const handleFormTabNvigationDone = () => {
    const invalidObjects = validateData();
  };

  const formTabsEl = tabs.map((item, index) => (
    <Button
      label={item}
      key={index}
      className={[
        styles.formTab,
        activeTab < index ? styles['formTab'] : '',
        activeTab === index ? styles['formTabAct'] : '',
        activeTab > index ? styles['formTabValid'] : '',
      ].join(' ')}
    />
  ));

  const titleEl = () => {
    switch (activeCategory) {
      case 0:
        return <h2>Add pet</h2>;
      case 1:
        return <h2>Add pet for sale</h2>;
      case 2:
        return <h2>Add lost pet</h2>;
      case 3:
        return <h2>Add in good hands pet</h2>;
      default:
        return <h2>Add pet</h2>;
    }
  };

  const backBtnEl = (
    <Button
      label="Back"
      showLabelFirst={false}
      SVGComponent={() => <ArrowLeftIcon stroke="#54ADFF" />}
      onClick={handleFormTabNvigationPrev}
      className={styles.navigationButtonPrev}
    />
  );

  const nextBtnEl = (
    <Button
      label="Next"
      SVGComponent={() => <PawprintIcon fill="#FEF9F9" />}
      onClick={handleFormTabNvigationNext}
      className={styles.navigationButtonNext}
    />
  );

  const doneBtnEl = (
    <Button
      label="Done"
      SVGComponent={() => <PawprintIcon fill="#FEF9F9" />}
      className={styles.navigationButtonNext}
      onClick={handleFormTabNvigationDone}
    />
  );

  const cancelBtnEl = (
    <Button
      label="Cancel"
      showLabelFirst={false}
      SVGComponent={() => <ArrowLeftIcon stroke="#54ADFF" />}
      onClick={handleFormTabNvigationCancel}
      className={styles.navigationButtonPrev}
    />
  );

  const categoriesEl = categories.map((item, index) => (
    <Button
      label={item}
      key={index}
      onClick={() => handleCategoryChange(index)}
      className={
        activeCategory === index ? styles.categoryAct : styles.category
      }
    />
  ));

  const personDetailEl = (
    <>
      <PersonalDetail
        activeTab={activeTab}
        activeCategory={activeCategory}
        addTitle={addTitle}
        petName={petName}
        breed={breed}
        birthDate={birthDate}
        invalidPetName={invalidPetName}
        invalidAddTitle={invalidAddTitle}
        invalidBirthDate={invalidBirthDate}
        invalidPetBreed={invalidPetBreed}
        handleChange={handleChange}
      />
    </>
  );

  const moreInfoEl = (
    <MoreInfo
      activeCategory={activeCategory}
      activeGender={activeGender}
      location={location}
      price={price}
      comments={comments}
      invalidSex={invalidSex}
      invalidPrice={invalidPrice}
      invalidLocation={invalidLocation}
      invalidComments={invalidComments}
      handleChange={handleChange}
      handleGenderChange={handleGenderChange}
    />
  );

  const tabData = [
    {
      tab: 0,
      content: (
        <>
          <div className={styles.categoryContainer}>{categoriesEl}</div>
          <div className={styles.navigationButtonsContainer}>
            {cancelBtnEl}
            {nextBtnEl}
          </div>
        </>
      ),
    },
    {
      tab: 1,
      content: (
        <>
          <div
            className={[
              styles['personDetailContainer'],
              activeCategory !== 0 ? styles['personDetailNotOwnContainer'] : '',
            ].join(' ')}
          >
            {personDetailEl}
          </div>
          <div className={styles.navigationButtonsContainer}>
            {backBtnEl}
            {nextBtnEl}
          </div>
        </>
      ),
    },
    {
      tab: 2,
      content: (
        <>
          <div
            className={[
              styles['moreInfoContainer'],
              activeCategory !== 0 ? styles['moreInfoNotOwnContainer'] : '',
            ].join(' ')}
          >
            {moreInfoEl}
          </div>
          <div className={styles.navigationButtonsContainer}>
            {backBtnEl}
            {doneBtnEl}
          </div>
        </>
      ),
    },
  ];

  const activeTabData = tabData.find(data => data.tab === activeTab);

  return (
    <div className={styles.addPetFormContainer}>
      <form onSubmit={handleSubmit} className={styles.addPetForm}>
        {titleEl(activeCategory)}
        <div className={styles.tabButtonsContainer}>{formTabsEl}</div>

        <div className={styles.formTabContainer}>{activeTabData.content}</div>
      </form>
    </div>
  );
};

export default AddPetForm;
