import { useDispatch } from 'react-redux';

import Button from 'shared/components/Button/Button';
import TrashIcon from 'icons/TrashIcon';

import { fetchDeletePet } from 'redux/pets/petsOperations';

import styles from './PetsListItem.module.scss';

const PetsListItem = ({ _id, name, date, breed, petURL, comments }) => {
  const dispatch = useDispatch();

  const handleDeletePet = id => {
    dispatch(fetchDeletePet(id));
  };

  return (
    <li className={styles.petCard}>
      <div className={styles.imgThumb}>
        <img
          className={styles.avatar}
          src={petURL}
          alt="Pet's avatar"
          width="280"
        />
      </div>
      <div className={styles.petInfo}>
        <Button
          onClick={() => handleDeletePet(_id)}
          className={styles.deleteBtn}
          SVGComponent={() => <TrashIcon className={styles.trashIcon} />}
        />
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>Name: </span>
          {name}
        </p>
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>Date of birth: </span>
          {date}
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
