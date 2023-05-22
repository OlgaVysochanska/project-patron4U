import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelectors';

import style from './NoticesCategoriesNav.module.scss';
import { nanoid } from 'nanoid';

const btns = [
  {
    id: nanoid(),
    text: 'sell',
    link: '/notices/sell',
  },
  {
    id: nanoid(),
    text: 'lost/found',
    link: '/notices/lost-found',
  },
  {
    id: nanoid(),
    text: 'in good hands',
    link: '/notices/for-free',
  },
];

const getClassName = ({ isActive }) => {
  const className = isActive
    ? `${style.navLink} ${style.active}`
    : style.navLink;
  return className;
};

const NoticesCategoriesNav = ({
  onClickFavorite,
  onClickOwn,
  onClearnData,
}) => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={style.wrapper}>
      <ul className={style.navList}>
        {btns.map(btn => (
          <li key={btn.id}>
            <NavLink
              to={btn.link}
              className={getClassName}
              onClick={onClearnData}
            >
              {btn.text}
            </NavLink>
          </li>
        ))}
        {isLogin && (
          <>
            <li key="own">
              <NavLink
                to="/notices/own"
                className={getClassName}
                onClick={onClickOwn}
              >
                My ads
              </NavLink>
            </li>
            <li key="favorite">
              <NavLink
                to="/notices/favorite"
                className={getClassName}
                onClick={onClickFavorite}
              >
                Favorite ads
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
