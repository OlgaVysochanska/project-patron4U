import UploadWidget from 'shared/components/UploadWidget/UploadWidget';
import Button from 'shared/components/Button';
import PlusIcon from 'icons/PlusIcon';

import styles from '../AddPetForm.module.scss';

import { gender } from '../InitialData/InitialData';
import defaultImage from '../../../images/defaultUploadImg.png';

const MoreInfo = ({
  activeCategory,
  activeGender,
  activeTab,
  location,
  price,
  comments,
  petURL,
  invalidSex,
  invalidLocation,
  invalidPrice,
  invalidComments,
  invalidpetURL,
  handleGenderChange,
  handleChange,
}) => {

  const handlepetURL = petURL => {
    handleChange({
      target: {
        name: 'petURL',
        value: petURL,
      },
    });
  };

  const genderEl = gender.map((item, index) => (
    <Button
      label={item.gender}
      key={index}
      onClick={() => handleGenderChange(index)}
      SVGComponent={() => item.svg} 
      className={[
        activeGender === index ? styles.genderAct : styles.gender,
       (activeTab === 2 && activeCategory !==0) ? styles['genderRow'] : '',
      ].join(' ')}
      showLabelFirst={false}
      type="button"
    />
  ));

  const genderGroupEl = (
    <>
      <p className={styles.label}>The sex</p>
      <div
        className={[
          styles.genderContainerValid,
          invalidSex ? styles['genderContainerInvalid'] : '',
          (activeTab===2 && activeCategory!==0) ? styles['genderContainerRow'] : '',
        ].join(' ')}
      >
        {genderEl}
      </div>
      {invalidSex && <p className={styles.validMessage}>{invalidSex}</p>}
    </>
  );

  const addPhotoEl = (
    <>
      {' '}
      <div
        className={[
          styles['addPhotoContainer'],
          activeCategory !== 0 ? styles['addPhotoNotOwnContainer'] : '',
        ].join(' ')}
      >
        <div
          className={[
            styles['loadPhotoGroup'],
            activeCategory !== 0 ? styles['loadPhotoGroupOwnContainer'] : '',
          ].join(' ')}
        >
          <p className={styles.label}>Add photo</p>
          <div className={styles.photoContainer}>
            <img src={petURL ? petURL : defaultImage} alt="" />
            <UploadWidget uriI={handlepetURL}>
              <PlusIcon
                stroke="#54ADFF"
                width="48"
                height="48"
                viewBox="4 4 16 16"
                className={styles.addPhotoIcon}
              />
            </UploadWidget>
          </div>
        </div>
        {invalidpetURL && (
          <p className={styles.validMessage}>{invalidpetURL}</p>
        )}
      </div>
    </>
  );

  const locationEl = (
    <>
      <label
        className={[
          styles.inputContainerValid,
          invalidLocation ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <span className={styles.label}>Location</span>
        <input
          className={[
            styles.input,
            invalidLocation ? styles['inputInvalid'] : '',
          ].join(' ')}
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
          placeholder="location"
          required
        />
      </label>
      {invalidLocation && (
        <p className={styles.validMessage}>{invalidLocation}</p>
      )}
    </>
  );

  const priceEl = (
    <>
      <label
        className={[
          styles.inputContainerValid,
          invalidPrice ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <p className={styles.label}>Price</p>
        <input
          className={[
            styles.input,
            invalidPrice ? styles['inputInvalid'] : '',
          ].join(' ')}
          type="text"
          name="price"
          value={price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
      </label>
      {invalidPrice && <p className={styles.validMessage}>{invalidPrice}</p>}
    </>
  );

  const commentsEl = (
    <>
      <label
        className={[
          styles.inputContainerValid,
          invalidComments ? styles['inputContainerInvalid'] : '',
        ].join(' ')}
      >
        <p className={styles.label}>Comments</p>
        <textarea
          className={[
            styles.textarea,
            invalidComments ? styles['textareaInvalid'] : '',
          ].join(' ')}
          type="text"
          name="comments"
          value={comments}
          onChange={handleChange}
          placeholder="Comments"
          required
          rows={4}
        />
      </label>
      {invalidComments && (
        <p className={styles.validMessage}>{invalidComments}</p>
      )}
    </>
  );

  const categoryData = [
    {
      category: 0,
      content: (
        <>
          {addPhotoEl}
          {commentsEl}
        </>
      ),
    },
    {
      category: 1,
      content: (
        <>
          <div className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiter'] : '',
            ].join(' ')}>
            <div className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiterColum1'] : '',
            ].join(' ')}>
              {genderGroupEl}
              {addPhotoEl}
            </div>
            <div className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiterColum2'] : '',
            ].join(' ')}>
              {locationEl}
              {priceEl}
              {commentsEl}
            </div>
          </div>
        </>
      ),
    },
    {
      category: 2,
      content: (
        <>
          <div
            className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiter'] : '',
            ].join(' ')}
          >
           <div className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiterColum1'] : '',
            ].join(' ')}>
              {genderGroupEl}
              {addPhotoEl}
            </div>
            <div className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiterColum2'] : '',
            ].join(' ')}>
              {locationEl}
              {commentsEl}
            </div>
          </div>
        </>
      ),
    },
    {
      category: 3,
      content: (
        <>
          <div
            className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiter'] : '',
            ].join(' ')}
          >
           <div className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiterColum1'] : '',
            ].join(' ')}>
              {genderGroupEl}
              {addPhotoEl}
            </div>
            <div className={[
              activeCategory !== 0 ? styles['moreInfoSubContaiterColum2'] : '',
            ].join(' ')}>
              {locationEl}
              {commentsEl}
            </div>
          </div>
        </>
      ),
    },
  ];

  const activeCategoryData = categoryData.find(
    data => data.category === activeCategory
  );

  return <div>{activeCategoryData.content}</div>;
};

export default MoreInfo;