import { useDispatch } from 'react-redux';

import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

import Button from 'shared/components/Button/Button';
import TrashIcon from 'icons/TrashIcon';
import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApprovAction';
import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';

import { fetchDeletePet } from 'redux/pets/petsOperations';
import { current } from 'redux/auth/authOperations';

import styles from './PetsListItem.module.scss';

const PetsListItem = ({ id, name, date, breed, petURL, comments }) => {
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const dispatch = useDispatch();

  const handleDeletePet = async id => {
    try {
      await dispatch(fetchDeletePet(id));
      dispatch(current());
    } catch (error) {
      NotiflixMessage({ type: 'info', data: error.message });
    }
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
          onClick={() => openModal()}
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
      {isModalOpen && (
        <ModalApproveAction
          fn={() => handleDeletePet(id)}
          closeModal={closeModal}
          icon={() => <TrashIcon className={styles.modalIcon} />}
        >
          <h3 className={styles.modalTitle}>Delete your pet?</h3>
          <p className={styles.modalText}>
            Are you sure you want to delete
            <span className={styles.modalTextSpan}> “{name}”</span>? <br /> You
            can't undo this action.
          </p>
        </ModalApproveAction>
      )}
    </li>
  );
};

export default PetsListItem;
