import Button from 'shared/components/Button/Button';

import TrashIcon from 'icons/TrashIcon';

import styles from './PetsListItem.module.scss';
import image from '../../../../Notices/pet.jpg';

const PetsListItem = ({
  id,
  petName,
  dateOfBirth,
  breed,
  comments,

  // дані з БД ⬇
  // _id,
  // name,
  // date,
  // category,
  // breed,
  // petURL,
  // comments
}) => {
  return (
    <li className={styles.petCard}>
      <div className={styles.imgThumb}>
        <img
          className={styles.avatar}
          src={image}
          alt="Pet's avatar"
          width="280"
        />
      </div>
      <div className={styles.petInfo}>
        <Button
          className={styles.deleteBtn}
          SVGComponent={() => <TrashIcon className={styles.trashIcon} />}
        />
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>Name: </span>
          {petName}
        </p>
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>Date of birth: </span>
          {dateOfBirth}
        </p>
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>Breed: </span>
          {breed}
        </p>
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>Comments: </span>
          {comments}
        </p>
      </div>
    </li>
  );
};

export default PetsListItem;
