import { NavLink } from 'react-router-dom';
import PawprintIcon from 'icons/PawprintIcon';
import styles from './AuthNav.module.scss';

export default function AuthNav(onClick) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            className={`${styles.link} ${styles.login}`}
            to="/login"
            onClick={onClick}
          >
            Log IN
            <PawprintIcon className={styles.icon} />
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/register" onClick={onClick}>
            Registration
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
