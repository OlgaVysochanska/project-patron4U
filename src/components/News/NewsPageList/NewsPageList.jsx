import Spiner from 'components/Spiner/Spiner';

import NewsPageListItem from '../NewsPageListItem';
import style from './NewsPageList.module.scss';

const NewsPageList = ({ items, loading }) => {
  return (
    <>
      {loading && <Spiner />}
      <ul className={style.list}>
        {items.map(({ imgUrl, title, text, date, url, id }) => {
          const dateObj = new Date(date);
          const formattedDate = dateObj.toLocaleDateString('en-GB');

          return (
            <NewsPageListItem
              key={id}
              imgUrl={imgUrl}
              title={title}
              text={text}
              formattedDate={formattedDate}
              url={url}
            />
          );
        })}
      </ul>
    </>
  );
};

export default NewsPageList;
