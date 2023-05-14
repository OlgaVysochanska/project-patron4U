import { useState } from 'react';
import Modal from 'shared/components/Modal/Modal';
import Button from 'components/Button/Button';
import PawprintIcon from 'icons/PawprintIcon';

import styles from './ModalCongrats.module.scss';

function ModalCongrats() {
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
          <p className={styles.title}>Congrats!</p>
          <p className={styles.text}>Youre registration is success</p>
          <div className={styles.wrapper}>
            <Button
              label="Go to profile"
              className={styles.button}
              SVGComponent={PawprintIcon}
              closeModal={closeModal}
            ></Button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ModalCongrats;
