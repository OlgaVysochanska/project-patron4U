import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import Button from '../Button';

import CrossSmallIcon from 'icons/CrossSmallIcon';

import styles from './ModalApproveAction.module.scss';

const modalEl = document.querySelector('#modal-root');

function ModalApproveAction({ closeModal, children, fn, icon }) {
  const closeModalOnClick = useCallback(
    ({ key, target, currentTarget }) => {
      if (key === 'Escape' || target === currentTarget) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModalOnClick);

    return () => document.removeEventListener('keydown', closeModalOnClick);
  }, [closeModalOnClick]);

  return createPortal(
    <div className={styles.backdrop} onClick={closeModalOnClick}>
      <div className={styles.modal}>
        <Button className={styles.closeBtn} onClick={closeModal}>
          <CrossSmallIcon className={styles.closeIcon} />
        </Button>
        {children}
        <div className={styles.wrapper}>
          <Button
            label="Cancel"
            className={styles.button}
            onClick={closeModal}
          ></Button>
          <Button
            label="Yes"
            className={styles.button}
            SVGComponent={icon}
            onClick={fn}
          ></Button>
        </div>
      </div>
    </div>,
    modalEl
  );
}

export default ModalApproveAction;
