import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch  } from 'react-redux';

import useForm from 'shared/hooks/useForm';

import { fetchAddNotice } from '../../redux/notices/noticesOperations';

import ChooseOption from './ChooseOption/ChooseOption';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import MoreInfo from './MoreInfo/MoreInfo';
import Button from 'shared/components/Button/Button';
import ArrowLeftIcon from 'icons/ArrowLeftIcon';
import PawprintIcon from 'icons/PawprintIcon';
import validateRulers from 'shared/helpers/validation/validateRulers';

import { gender, categories, tabs } from './InitialData/InitialData';

import styles from './AddPetForm.module.scss';

const initialState = {
  category: 'my pet',
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

  const { state, handleChange, handleSubmit } = useForm({
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
  const [invalidPhotoUrl, setInvalidPhotoUrl] = useState('');

  const {
    category,
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

  const dispatch = useDispatch();
  //const loading = useSelector(selectLoadingContacts);

  const validateData = () => {
    let formData = [];
    
    if (activeTab === 0) {
          formData = [
            { name: 'category', value: category },
          ];
      }

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
        case 2:
        case 3:  
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
          formData = [
            { name: 'comments', value: comments },
            { name: 'photoUrl', value: photoUrl },
          ];
          break;
        case 1:
          formData = [
            { name: 'comments', value: comments },
            { name: 'sex', value: sex },
            { name: 'location', value: location },
            { name: 'price', value: price },
            { name: 'photoUrl', value: photoUrl },
          ];
          break;
        case 2:
        case 3:
          formData = [
            { name: 'comments', value: comments },
            { name: 'sex', value: sex },
            { name: 'location', value: location },
            { name: 'photoUrl', value: photoUrl },
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
    setInvalidPhotoUrl(errorMessages.photoUrl || '');

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
    handleChange({
      target: {
        name: 'category',
        value: categories[index].id,
      },
    });
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

  const handleAddNotice = data => {
    const name = data.petName;
    const date = data.birthDate;
    dispatch(fetchAddNotice({ name, date }));
  };

  const handleFormTabNvigationDone = () => {
    const invalidObjects = validateData();
    if (invalidObjects){handleAddNotice({petName,
      birthDate,})}
    console.log(state);
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
      type="button"
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
      type="button"
    />
  );

  const nextBtnEl = (
    <Button
      label="Next"
      SVGComponent={() => <PawprintIcon fill="#FEF9F9" />}
      onClick={handleFormTabNvigationNext}
      className={styles.navigationButtonNext}
      type="button"
    />
  );

  const doneBtnEl = (
    <Button
      label="Done"
      SVGComponent={() => <PawprintIcon fill="#FEF9F9" />}
      className={styles.navigationButtonNext}
      onClick={handleFormTabNvigationDone}
      type="button"
    />
  );

  const cancelBtnEl = (
    <Button
      label="Cancel"
      showLabelFirst={false}
      SVGComponent={() => <ArrowLeftIcon stroke="#54ADFF" />}
      onClick={handleFormTabNvigationCancel}
      className={styles.navigationButtonPrev}
      type="button"
    />
  );

  const categoriesEl = (
    <ChooseOption
    activeCategory={activeCategory}
    handleCategoryChange={handleCategoryChange}
    />
  );

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
      activeTab={activeTab}
      location={location}
      price={price}
      comments={comments}
      photoUrl={photoUrl}
      invalidSex={invalidSex}
      invalidPrice={invalidPrice}
      invalidLocation={invalidLocation}
      invalidComments={invalidComments}
      invalidPhotoUrl={invalidPhotoUrl}
      handleChange={handleChange}
      handleGenderChange={handleGenderChange}
    />
  );

  const tabData = [
    {
      tab: 0,
      content: (
        <>
          {categoriesEl}
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
    <div  className={[
      styles.addPetFormContainer,
    ].join(' ')} >
      <form onSubmit={handleSubmit} className={[
      styles.addPetForm,
      (activeCategory !==0 && activeTab===2) ? styles['addPetFormNotOwn'] : '',
    ].join(' ')} >
        {titleEl(activeCategory)}
        <div className={styles.tabButtonsContainer}>{formTabsEl}</div>

        <div className={styles.formTabContainer}>{activeTabData.content}</div>
      </form>
    </div>
  );
};

export default AddPetForm;



  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllNotices());
  // }, [dispatch]);

  // const allNotices = useSelector(getAllNotices);
  // console.log(allNotices);