import Button from 'components/Button/Button';
import FemaleIcon from 'icons/FemaleIcon';
import MaleIcon from 'icons/MaleIcon';
import PlusIcon from 'icons/PlusIcon';

import styles from '../AddPetForm.module.scss';

const gender = [
  { gender: 'Female', svg: <FemaleIcon stroke="#F43F5E" /> },
  { gender: 'Male', svg: <MaleIcon stroke="#54ADFF" /> },
];

const MoreInfo = ({
  activeCategory,
  activeGender,
  location,
  price,
  comments,
  invalidSex,
  invalidLocation,
  invalidPrice,
  invalidComments,
  handleGenderChange,
  handleChange,
}) => {
  const genderEl = gender.map((item, index) => (
    <Button
      label={item.gender}
      key={index}
      onClick={() => handleGenderChange(index)}
      SVGComponent={() => item.svg}
      className={activeGender === index ? styles.genderAct : styles.gender}
      showLabelFirst={false}
    />
  ));

  return (
    <>
      {activeCategory !== 0 && (
        <>
          <p className={styles.label}>The sex</p>
          <div
            className={[
              styles.genderContainerValid,
              invalidSex ? styles['genderContainerInvalid'] : '',
            ].join(' ')}
          >
            {genderEl}
          </div>
          {invalidSex && <p className={styles.validMessage}>{invalidSex}</p>}
        </>
      )}
      <label
        className={[
          styles['addPhotoContainer'],
          activeCategory !== 0 ? styles['addPhotoNotOwnContainer'] : '',
        ].join(' ')}
      >
        <p className={styles.label}>Add photo</p>
        <Button
          SVGComponent={() => (
            <PlusIcon
              stroke="#54ADFF"
              width="48"
              height="48"
              viewBox="4 4 16 16"
              className={styles.addPhotoIcon}
            />
          )}
          className={[
            styles['addPhotoButton'],
            activeCategory !== 0 ? styles['addPhotoNotOwnButton'] : '',
          ].join(' ')}
        />
      </label>
      {activeCategory === 1 && (
        <>
          <>
            <label
              className={[
                styles.inputContainerValid,
                invalidLocation ? styles['inputContainerInvalid'] : '',
              ].join(' ')}
            >
              <p className={styles.label}>Location</p>
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
            {invalidPrice && (
              <p className={styles.validMessage}>{invalidPrice}</p>
            )}
          </>
        </>
      )}
      {(activeCategory === 2 || activeCategory === 3) && (
        <>
          {' '}
          <label
            className={[
              styles.inputContainerValid,
              invalidLocation ? styles['inputContainerInvalid'] : '',
            ].join(' ')}
          >
            <p className={styles.label}>Location</p>
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
      )}
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
    </>
  );
};

export default MoreInfo;
