import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelectors';

import style from './NoticesCategoriesNav.module.scss';
import { nanoid } from 'nanoid';

const btns = [
  {
    id: nanoid(),
    text: 'sell',
    link: '/sell',
  },
  {
    id: nanoid(),
    text: 'lost/found',
    link: '/lost-found',
  },
  {
    id: nanoid(),
    text: 'in good hands',
    link: '/for-free',
  },
  {
    id: nanoid(),
    text: 'favorite ads',
    link: '/favorite',
    private: true,
  },
  {
    id: nanoid(),
    text: 'my ads',
    link: '/own',
    private: true,
  },
];

const NoticesCategoriesNav = () => {
  const isLogin = useSelector(isUserLogin);
  // const {category} = useParams();
  //  const dispatch = useDispatch();
  //  const onCategoryClick = () => {
  //   dispatch(fetchNoticesByCategory(category));
  // };

  const filteredBtns = !isLogin ? btns.filter(btn => !btn.private) : btns;
  const navBtns = filteredBtns.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={'/notices' + link} className={style.btn}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={style.wrapper}>{navBtns}</ul>;
};

export default NoticesCategoriesNav;
