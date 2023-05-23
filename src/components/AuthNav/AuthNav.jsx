import { NavLink } from 'react-router-dom';
import useLang from 'shared/hooks/useLang';
import locale from './locale.json';
import PawprintIcon from 'icons/PawprintIcon';
import styles from './AuthNav.module.scss';

export default function AuthNav({ onClick }) {
  const { lang } = useLang();

  const registerLang = locale.registration[lang];
  const loginLang = locale.login[lang];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={`${styles.link} ${styles.login}`} to="/login">
            {loginLang}
            <PawprintIcon className={styles.icon} />
          </NavLink>
        </li>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={styles.link} to="/register">
            {registerLang}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
