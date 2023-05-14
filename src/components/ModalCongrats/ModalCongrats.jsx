import { useState } from 'react';
import ModalApprovAction from 'shared/components/ModalApproveAction/ModalApprovAction';
import Button from 'shared/components/Button/Button';
import CrossSmallIcon from 'icons/CrossSmallIcon';

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
        <ModalApprovAction closeModal={closeModal}>
          <p className={styles.title}>Congrats!</p>
          <p className={styles.text}>Youre registration is success</p>
          <Button
            label="Go to profile"
            className={styles.button}
            SVGComponent={CrossSmallIcon}
          ></Button>
        </ModalApprovAction>
      )}
    </>
  );
}

export default ModalCongrats;
