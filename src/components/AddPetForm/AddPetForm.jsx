import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';

import useForm from 'shared/hooks/useForm';

import { fetchAddNotice } from '../../redux/notices/noticesOperations';
import {
  getLoadingNotices,
  getNoticesError,
} from '../../redux/notices/noticesSelecors';

import ChooseOption from './ChooseOption/ChooseOption';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import MoreInfo from './MoreInfo/MoreInfo';
import Button from 'shared/components/Button/Button';
import ArrowLeftIcon from 'icons/ArrowLeftIcon';
import PawprintIcon from 'icons/PawprintIcon';
import Spiner from 'components/Spiner/Spiner';
import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';
import validateRulers from 'shared/helpers/validation/validateRulers';

import {
  gender,
  categories,
  tabs,
  initialState,
} from './InitialData/InitialData';

import styles from './AddPetForm.module.scss';

const AddPetForm = ({ onSubmit }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeGender, setActiveGender] = useState(null);

  const { state, setState, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const [invalidname, setInvalidname] = useState('');
  const [invalidPetBreed, setInvalidBreed] = useState('');
  const [invalidtitle, setInvalidtitle] = useState('');
  const [invalidBirthDate, setInvalidBirthDate] = useState('');
  const [invalidSex, setInvalidSex] = useState('');
  const [invalidComments, setInvalidComments] = useState('');
  const [invalidLocation, setInvalidLocation] = useState('');
  const [invalidPrice, setInvalidPrice] = useState('');
  const [invalidpetURL, setInvalidpetURL] = useState('');

  const {
    category,
    title,
    name,
    birthDate,
    breed,
    sex,
    petURL,
    comments,
    location,
    price,
  } = state;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loading = useSelector(getLoadingNotices);
  const error = useSelector(getNoticesError);

  const validateData = () => {
    let formData = [];

    if (activeTab === 0) {
      formData = [{ name: 'category', value: category }];
    }

    if (activeTab === 1) {
      switch (activeCategory) {
        case 0:
          formData = [
            { name: 'name', value: name },
            { name: 'breed', value: breed },
            { name: 'birthDate', value: birthDate },
          ];
          break;
        case 1:
        case 2:
        case 3:
          formData = [
            { name: 'name', value: name },
            { name: 'breed', value: breed },
            { name: 'birthDate', value: birthDate },
            { name: 'title', value: title },
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
            { name: 'petURL', value: petURL },
          ];
          break;
        case 1:
          formData = [
            { name: 'comments', value: comments },
            { name: 'sex', value: sex },
            { name: 'location', value: location },
            { name: 'price', value: price },
            { name: 'petURL', value: petURL },
          ];
          break;
        case 2:
        case 3:
          formData = [
            { name: 'comments', value: comments },
            { name: 'sex', value: sex },
            { name: 'location', value: location },
            { name: 'petURL', value: petURL },
          ];
          break;
        default:
          break;
      }
    }

    const validatedData = validateRulers(formData);
    //console.log(validatedData);

    const errorMessages = validatedData.reduce(
      (errors, { name, message, isValid }) => {
        if (!isValid) {
          errors[name] = message;
        }
        return errors;
      },
      {}
    );

    setInvalidname(errorMessages.name || '');
    setInvalidBreed(errorMessages.breed || '');
    setInvalidtitle(errorMessages.title || '');
    setInvalidBirthDate(errorMessages.birthDate || '');
    setInvalidSex(errorMessages.sex || '');
    setInvalidComments(errorMessages.comments || '');
    setInvalidLocation(errorMessages.location || '');
    setInvalidPrice(errorMessages.price || '');
    setInvalidpetURL(errorMessages.petURL || '');

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

  const handleDataFetch = async () => {
    try {
      const date = format(birthDate, 'dd.MM.yyyy');
      const invalidObjects = validateData();
      if (!invalidObjects.length) {
        if (activeCategory !== 0) {
          await dispatch(
            fetchAddNotice({
              title,
              name,
              date,
              breed,
              location,
              petURL,
              sex,
              comments,
              price,
              category,
            })
          );
        } else {
          //тут додамо петсів
        }
      }
    } catch (error) {
      NotiflixMessage({ type: 'info', data: error.message });
    }
  };

  const handleFormTabNvigationDone = () => {
    handleDataFetch();

    if (error) {
      NotiflixMessage({ type: 'info', data: error.message });
      return;
    }
    if (activeCategory !== 0) {
      navigate('/notices/sell');
    } else {
      navigate('/user');
    }
    setState(initialState);
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
        title={title}
        name={name}
        breed={breed}
        birthDate={birthDate}
        invalidname={invalidname}
        invalidtitle={invalidtitle}
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
      petURL={petURL}
      invalidSex={invalidSex}
      invalidPrice={invalidPrice}
      invalidLocation={invalidLocation}
      invalidComments={invalidComments}
      invalidpetURL={invalidpetURL}
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
    <div className={[styles.addPetFormContainer].join(' ')}>
      <form
        onSubmit={handleSubmit}
        className={[
          styles.addPetForm,
          activeCategory !== 0 && activeTab === 2
            ? styles['addPetFormNotOwn']
            : '',
        ].join(' ')}
      >
        {titleEl(activeCategory)}
        <div className={styles.tabButtonsContainer}>{formTabsEl}</div>

        <div className={styles.formTabContainer}>{activeTabData.content}</div>
        {loading && <Spiner />}
      </form>
    </div>
  );
};

export default AddPetForm;
