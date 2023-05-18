import NoticeCategoryItem from '../NoticeCategoryItem';

import styles from './NoticesCategoriesList.module.scss';

const { noticesListContainer, noticesList } = styles;

const NoticesCategoriesList = ({ notices, loadMore }) => {
  const noticesItem = notices.map(notice => (
    <NoticeCategoryItem key={notice._id} loadMore={loadMore} notice={notice} />
  ));

  return (
    <div className={noticesListContainer}>
      <ul className={noticesList}>{noticesItem}</ul>
    </div>
  );
};

export default NoticesCategoriesList;
