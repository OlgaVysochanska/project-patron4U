import Button from 'shared/components/Button/Button';
import LogoutIcon from 'icons/LogoutIcon';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/authOperations';
import styles from './Logout.module.scss';

const LogoutIconTuned = () => {
  return <LogoutIcon width="16" height="16" viewBox="0 0 21 21" />;
};

const Logout = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={onLogout}
      type="button"
      className={styles.btnLog}
      label="Log Out"
      SVGComponent={LogoutIconTuned}
      showLabelFirst={false}
    />
  );
};

export default Logout;
