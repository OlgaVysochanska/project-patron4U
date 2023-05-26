import { useDispatch } from 'react-redux';

import useTheme from 'shared/hooks/useTheme';
import useLang from 'shared/hooks/useLang';
import useToggleModalWindow from 'shared/hooks/useToggleModalWindow';

import Button from 'shared/components/Button/Button';
import LogoutIcon from 'icons/LogoutIcon';
import ModalApproveAction from 'shared/components/ModalApproveAction/ModalApprovAction';

import { logout } from '../../../redux/auth/authOperations';

import locale from './locale.json';

import styles from './Logout.module.scss';

const Logout = () => {
  const { isModalOpen, openModal, closeModal } = useToggleModalWindow();

  const dispatch = useDispatch();

  const { theme } = useTheme();
  const { lang } = useLang();

  const logBtn = locale.logOut[lang];
  const modalTitle = locale.modalTitle[lang];

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={styles.logoutContainer}>
        <Button
          onClick={() => openModal()}
          type="button"
          className={`${styles.btnLog} ${
            theme === 'dark' && styles.btnLogDark
          }`}
          SVGComponent={() => <LogoutIcon className={styles.btnIcon} />}
          showLabelFirst={false}
        />
        <p className={styles.btnLabel}>{logBtn}</p>
      </div>
      {isModalOpen && (
        <ModalApproveAction
          fn={() => onLogout()}
          closeModal={closeModal}
          icon={() => <LogoutIcon className={styles.modalIcon} />}
        >
          <h3 className={styles.modalTitle}>{modalTitle}</h3>
        </ModalApproveAction>
      )}
    </>
  );
};

export default Logout;
