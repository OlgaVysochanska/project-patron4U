import { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import Button from 'components/Button/Button';
import TrashIcon from 'icons/TrashIcon';

import styles from './ModalApproveAction.module.scss';

function ModalApproveAction(props) {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal closeModal={closeModal}>
          <p className={styles.title}>Delete adverstiment?</p>
          <p className={styles.text}>
            Are you sure you want to delete “Cute dog looking for a home”? You
            can`t undo this action.
          </p>
          <div className={styles.wrapper}>
            <Button
              label="Cancel"
              className={styles.button}
              onClick={closeModal}
            ></Button>
            <Button
              label="Yes"
              className={styles.button}
              SVGComponent={TrashIcon}
              onClick={props.fn}
            ></Button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ModalApproveAction;
