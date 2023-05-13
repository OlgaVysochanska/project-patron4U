import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

import CrossSmallIcon from 'icons/CrossSmallIcon';

import styles from './ModalApprovAction.module.scss';

const modalEl = document.querySelector('#modal-root');

function ModalApprovAction({ closeModal, children }) {
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
    <div className={styles.overlay} onClick={closeModalOnClick}>
      <div className={styles.modal}>
        <CrossSmallIcon className={styles.close} />
        {children}
      </div>
    </div>,
    modalEl
  );
}

export default ModalApprovAction;

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
// };
