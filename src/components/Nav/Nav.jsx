import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/news">
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/notices">
            Find pet
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/friends">
            Our friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
