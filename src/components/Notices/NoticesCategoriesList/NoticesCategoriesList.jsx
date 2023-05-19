import NoticeCategoryItem from '../NoticeCategoryItem';

import styles from './NoticesCategoriesList.module.scss';

const NoticesCategoriesList = ({ notices, loadMore }) => {
  const noticesItem = notices.map(notice => (
    <NoticeCategoryItem key={notice._id} loadMore={loadMore} notice={notice} />
  ));

  return <ul className={styles.noticesList}>{noticesItem}</ul>;
};

export default NoticesCategoriesList;
