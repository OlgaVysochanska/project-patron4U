import { useSelector, useDispatch } from 'react-redux';

import UserData from 'components/User/UserData/UserData';
import PetsData from 'components/User/PetsData/PetsData';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';

import { selectIsRegistered } from '../../redux/auth/authSelectors';
import { setRegistered } from '../../redux/auth/authSlice';

import styles from './UserPage.module.scss';

const UserPage = () => {
  const isRegistered = useSelector(selectIsRegistered);

  const dispatch = useDispatch();

  const handleClose = e => {
    dispatch(setRegistered(false));
  };

  return (
    <>
      <div className={styles.pageWrapper}>
        <UserData />
        <PetsData />
      </div>

      {isRegistered && <ModalCongrats onClose={handleClose} />}
    </>
  );
};

export default UserPage;
