import { NavLink } from 'react-router-dom';
import useLang from 'shared/hooks/useLang';
import locale from './locale.json';
import styles from './Nav.module.scss';


export default function Nav(onClick) {
  const { lang } = useLang();

  const news = locale.news[lang];
  const findPets = locale.findPets[lang];
  const ourFriends = locale.friends[lang];

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/news" onClick={onClick}>
            {news}
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/notices/sell" onClick={onClick}>
            {findPets}
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/friends" onClick={onClick}>
            {ourFriends}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
