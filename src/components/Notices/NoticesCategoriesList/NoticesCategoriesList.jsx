import { useState } from 'react';
import { useSelector } from 'react-redux';

import NoticeCategoryItem from '../NoticeCategoryItem';

import { isUserLogin, getFavoriteNotices } from 'redux/auth/authSelectors';

import styles from './NoticesCategoriesList.module.scss';

const NoticesCategoriesList = ({ notices, loadMore }) => {
  const [favoriteArr, setFavoriteArr] = useState([]);

  const currentUser = useSelector(isUserLogin);
  const favoriteNotices = useSelector(getFavoriteNotices);

  if (currentUser) {
    setFavoriteArr(favoriteNotices);
  }

  const noticesItem = notices.map(notice => {
    const myFavoriteNotice = favoriteArr.includes(notice._id);
    return (
      <NoticeCategoryItem
        key={notice._id}
        loadMore={loadMore}
        notice={notice}
        currentUser={currentUser}
        myFavoriteNotice={myFavoriteNotice}
      />
    );
  });

  return <ul className={styles.noticesList}>{noticesItem}</ul>;
};

export default NoticesCategoriesList;
