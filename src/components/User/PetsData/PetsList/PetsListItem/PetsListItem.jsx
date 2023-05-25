import { useDispatch } from 'react-redux';

import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';
import useLang from 'shared/hooks/useLang';

import Button from 'shared/components/Button/Button';
import TrashIcon from 'icons/TrashIcon';
import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApprovAction';
import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';

import { fetchDeletePet } from 'redux/pets/petsOperations';
import { current } from 'redux/auth/authOperations';

import locale from './locale.json';

import styles from './PetsListItem.module.scss';

const PetsListItem = ({ id, name, date, breed, petURL, comments }) => {
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();
  const { lang } = useLang();

  const petName = locale.name[lang];
  const petDate = locale.date[lang];
  const petBreed = locale.breed[lang];
  const petComments = locale.comments[lang];
  const modalTitle = locale.modalTitle[lang];
  const modalText1 = locale.modalText1[lang];
  const modalText2 = locale.modalText2[lang];

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
          <span className={styles.infoTitle}>{petName}</span>
          {name}
        </p>
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>{petDate}</span>
          {date}
        </p>
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>{petBreed}</span>
          {breed}
        </p>
        <p className={styles.infoDesc}>
          <span className={styles.infoTitle}>{petComments}</span>
          {comments}
        </p>
      </div>
      {isModalOpen && (
        <ModalApproveAction
          fn={() => handleDeletePet(id)}
          closeModal={closeModal}
          icon={() => <TrashIcon className={styles.modalIcon} />}
        >
          <h3 className={styles.modalTitle}>{modalTitle}</h3>
          <p className={styles.modalText}>
            {modalText1}
            <span className={styles.modalTextSpan}> “{name}”</span>? <br />
            {modalText2}
          </p>
        </ModalApproveAction>
      )}
    </li>
  );
};

export default PetsListItem;
