import useToggleModalWindow from '../../shared/hooks/useToggleModalWindow';

import Modal from 'shared/components/Modal/Modal';
import Button from '../../shared/components/Button';
import PawprintIcon from 'icons/PawprintIcon';

import styles from './ModalCongrats.module.scss';

function ModalCongrats() {
  const { isModalOpen, closeModal } = useToggleModalWindow(true);

  return (
    <>
      <Modal closeModal={closeModal}>
        <div className={styles.contentWrapper}>
          <p className={styles.title}>Congrats!</p>
          <p className={styles.text}>Youre registration is success</p>
          <div className={styles.wrapper}>
            <Button className={styles.button} closeModal={closeModal}>
              Go to profile <PawprintIcon className={styles.btnIcon} />
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalCongrats;
