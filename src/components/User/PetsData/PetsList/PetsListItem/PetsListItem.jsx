import Button from 'shared/components/Button/Button';

import TrashIcon from 'icons/TrashIcon';

import styles from './PetsListItem.module.scss';
import image from '../../../../Notices/pet.jpg';

const {
  petCard,
  deleteBtn,
  trashIcon,
  imgThumb,
  avatar,
  petInfo,
  infoTitle,
  infoDesc,
} = styles;

const PetsListItem = ({
  id,
  petName,
  dateOfBirth,
  breed,
  comments,
  //   image,
}) => {
  return (
    <li className={petCard}>
      <div className={imgThumb}>
        <img className={avatar} src={image} alt="Pet's avatar" width="280" />
      </div>
      <div className={petInfo}>
        <Button
          className={deleteBtn}
          SVGComponent={() => <TrashIcon className={trashIcon} />}
        />
        <p className={infoDesc}>
          <span className={infoTitle}>Name: </span>
          {petName}
        </p>
        <p className={infoDesc}>
          <span className={infoTitle}>Date of birth: </span>
          {dateOfBirth}
        </p>
        <p className={infoDesc}>
          <span className={infoTitle}>Breed: </span>
          {breed}
        </p>
        <p className={infoDesc}>
          <span className={infoTitle}>Comments: </span>
          {comments}
        </p>
      </div>
    </li>
  );
};

export default PetsListItem;
