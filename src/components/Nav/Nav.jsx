import { NavLink } from 'react-router-dom';
import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';
import styles from './Nav.module.scss';

export default function Nav({ onClick }) {
  const { lang } = useLang();
  const { theme } = useTheme();

  const news = locale.news[lang];
  const findPets = locale.findPets[lang];
  const ourFriends = locale.friends[lang];

  const link =
    theme === 'light' ? styles.link : `${styles.link} + ${styles.linkDark}`;

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={link} to="/news">
            {news}
          </NavLink>
        </li>

        <li className={styles.item} onClick={onClick}>
          <NavLink className={link} to="/notices/sell">
            {findPets}
          </NavLink>
        </li>
        <li className={styles.item} onClick={onClick}>
          <NavLink className={link} to="/friends">
            {ourFriends}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
