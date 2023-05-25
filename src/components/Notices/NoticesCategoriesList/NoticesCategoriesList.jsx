import { useSelector } from 'react-redux';

import useTheme from 'shared/hooks/useTheme';

import NoticeCategoryItem from '../NoticeCategoryItem';

import { isUserLogin } from 'redux/auth/authSelectors';

import styles from './NoticesCategoriesList.module.scss';

const NoticesCategoriesList = ({ notices, loadMore }) => {
  const currentUser = useSelector(isUserLogin);

  const { theme } = useTheme();

  const noticesList =
    theme === 'light'
      ? styles.noticesList
      : `${styles.noticesList} + ${styles.noticesListDark}`;

  const noticesItem = notices.map(notice => {
    return (
      <NoticeCategoryItem
        key={notice._id}
        loadMore={loadMore}
        notice={notice}
        currentUser={currentUser}
      />
    );
  });

  return <ul className={noticesList}>{noticesItem}</ul>;
};

export default NoticesCategoriesList;
