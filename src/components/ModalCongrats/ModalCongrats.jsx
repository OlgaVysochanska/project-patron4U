import {useEffect, useRef } from 'react';
import Modal from 'shared/components/Modal/Modal';
import Button from '../../shared/components/Button';
import PawprintIcon from 'icons/PawprintIcon';

import styles from './ModalCongrats.module.scss';

function ModalCongrats({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


  return (
    <>
      <Modal ref={modalRef} closeModal={onClose}>
        <div className={styles.contentWrapper}>
          <p className={styles.title}>Congrats!</p>
          <p className={styles.text}>Youre registration is success</p>
          <div className={styles.wrapper}>
            <Button className={styles.button} onClick={onClose}>
              Go to profile <PawprintIcon className={styles.btnIcon}/>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalCongrats;
