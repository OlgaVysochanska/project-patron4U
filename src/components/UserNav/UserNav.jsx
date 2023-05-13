import { NavLink } from 'react-router-dom';
import UserAvatarIcon from './UserAvatarIcon/UserAvatarIcon';
import UserDefaultIcon from 'icons/UserDefaultIcon';
import styles from './UserNav.module.scss';

export default function UserNav({ isMobile, style }) {
  const userName = 'Test User'; // change to useSelector
  const userAvatar = null; // change to useSelector

  return (
    <div className={styles.container} style={style}>
      <NavLink className={styles.link} to="/user">
        {userAvatar ? (
          <UserAvatarIcon src={userAvatar} />
        ) : (
          <UserDefaultIcon style={{ marginRight: 12 }} />
        )}
        {!isMobile && <p className={styles.text}>{userName}</p>}
      </NavLink>
    </div>
  );
}
