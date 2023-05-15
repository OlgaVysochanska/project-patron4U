import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

import CrossIcon from 'icons/CrossIcon';

import styles from './Modal.module.scss';

const modalEl = document.querySelector('#modal-root');

function Modal({ closeModal, children }) {
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
        <CrossIcon className={styles.close} onClick={closeModalOnClick} />
        {children}
      </div>
    </div>,
    modalEl
  );
}

export default Modal;

// Modal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
// };
