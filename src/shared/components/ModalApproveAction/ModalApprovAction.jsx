import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import useLang from 'shared/hooks/useLang';

import Button from '../Button';

import CrossSmallIcon from 'icons/CrossSmallIcon';

import locale from './locale.json';

import styles from './ModalApproveAction.module.scss';

const modalEl = document.querySelector('#modal-root');

function ModalApproveAction({ closeModal, children, fn, icon }) {
  const { lang } = useLang();

  const cancel = locale.cancel[lang];
  const yes = locale.yes[lang];

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
        <div className={styles.btnWrapper}>
          <Button
            label={cancel}
            className={styles.button}
            onClick={closeModal}
          ></Button>
          <Button
            label={yes}
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
