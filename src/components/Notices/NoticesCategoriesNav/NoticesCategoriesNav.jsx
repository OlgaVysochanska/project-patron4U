import { NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/authSelectors';

import style from './NoticesCategoriesNav.module.scss';
import { nanoid } from 'nanoid';

const navBtn = [
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
    link: '/fo-free',
  },

];

const navAuthBtn = [{
  id: nanoid(),
  text: 'favorite ads',
  link: '/favorite',
},
{
  id: nanoid(),
  text: 'my ads',
  link: '/own',
},
]
const NoticesCategoriesNav = () => {
const isLogin = useSelector(isUserLogin);
const btn = navBtn.map(({id, text, link}) => <li key={id}>
<NavLink to={'/notices' + link} className={style.btn}>
  {text}
</NavLink></li>);

const authBtn = navAuthBtn.map(({id, text, link}) => <li key={id}>
  <NavLink to={'/notices'+ link} className ={style.btn}>
    {text}
  </NavLink>
</li>);

  return (
    <ul className={style.wrapper}>
    {btn} 
    {isLogin && {authBtn}}
     
      {/* <NavLink to="favorite" className={style.btn}>
      favorite ads
      </NavLink>
      <NavLink to="own" className={style.btn}>
      my ads
      </NavLink> */}
    
    </ul>

  );
};

export default NoticesCategoriesNav;
