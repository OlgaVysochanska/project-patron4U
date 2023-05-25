import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/auth/authSelectors';
import UserAvatarIcon from './UserAvatarIcon/UserAvatarIcon';
import UserDefaultIcon from 'icons/UserDefaultIcon';
import styles from './UserNav.module.scss';

export default function UserNav({ isMobile, style, onClick }) {
  const user = useSelector(getUser);
  // console.log(user.avatarURL);

  return (
    <div className={styles.container} style={style}>
      <NavLink className={styles.link} onClick={onClick} to="/user">
        {user.avatarURL ? (
          <UserAvatarIcon src={user.avatarURL} />
        ) : (
          <UserDefaultIcon style={{ marginRight: 12 }} />
        )}
        {!isMobile && (
          <p className={styles.text}>{user.name ? user.name : user.email}</p>
        )}
      </NavLink>
    </div>
  );
}
