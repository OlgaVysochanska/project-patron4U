import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelectors';
import useLang from 'shared/hooks/useLang';
import locale from './locale.json';
import style from './NoticesCategoriesNav.module.scss';
import { nanoid } from 'nanoid';

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
  const { lang } = useLang();
  const sell = locale.sell[lang];
  const lostFound = locale.lostFound[lang];
  const inGoodHands = locale.inGoodHands[lang];
  const favorite = locale.favorite[lang];
  const own = locale.own[lang];
  const btns = [
    {
      id: nanoid(),
      text: sell,
      link: '/notices/sell',
    },
    {
      id: nanoid(),
      text: lostFound,
      link: '/notices/lost-found',
    },
    {
      id: nanoid(),
      text: inGoodHands,
      link: '/notices/for-free',
    },
  ];

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
            <li key="favorite">
              <NavLink
                to="/notices/favorite"
                className={getClassName}
                onClick={onClickFavorite}
              >
                {favorite}
              </NavLink>
            </li>
            <li key="own">
              <NavLink
                to="/notices/own"
                className={getClassName}
                onClick={onClickOwn}
              >
                {own}
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default NoticesCategoriesNav;
