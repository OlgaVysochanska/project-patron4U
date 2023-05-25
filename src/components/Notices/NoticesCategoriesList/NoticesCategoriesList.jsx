// import { useState } from 'react';
import { useSelector } from 'react-redux';
import useTheme from 'shared/hooks/useTheme';
import NoticeCategoryItem from '../NoticeCategoryItem';

import { isUserLogin } from 'redux/auth/authSelectors';

import styles from './NoticesCategoriesList.module.scss';

const NoticesCategoriesList = ({ notices, loadMore }) => {
  // const [favoriteArr, setFavoriteArr] = useState([]);

  const currentUser = useSelector(isUserLogin);
  // const favoriteNotices = useSelector(getFavoriteNotices);

  // if (currentUser) {
  //   setFavoriteArr(favoriteNotices);
  // }
  const { theme } = useTheme();

  const noticesList =
    theme === 'light'
      ? styles.noticesList
      : `${styles.noticesList} + ${styles.noticesListDark}`;

  if (notices.length === 0) {
    return <p>Приходьте завтра!</p>;
  }
  const noticesItem = notices.map(notice => {
    // const myFavoriteNotice = favoriteArr.includes(notice._id);
    return (
      <NoticeCategoryItem
        key={notice._id}
        loadMore={loadMore}
        notice={notice}
        currentUser={currentUser}
        // myFavoriteNotice={myFavoriteNotice}
      />
    );
  });

  return <ul className={noticesList}>{noticesItem}</ul>;
};

export default NoticesCategoriesList;
