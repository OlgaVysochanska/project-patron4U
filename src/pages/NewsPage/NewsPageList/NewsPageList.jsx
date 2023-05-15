import Spiner from 'components/Spiner/Spiner';

import NewsPageListItem from '../NewsPageListItem/NewsPageListItem';
import style from './NewsPageList.module.scss';

const NewsPageList = ({ items, loading }) => {
  return (
    <ul className={style.list}>
      {loading ? <Spiner /> : <NewsPageListItem items={items} />}
    </ul>
  );
};

export default NewsPageList;
