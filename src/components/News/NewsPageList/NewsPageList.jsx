import React from 'react';
import NewsPageListItem from '../NewsPageListItem';
import style from './NewsPageList.module.scss';
import Spiner from 'components/Spiner/Spiner';
import PropTypes from 'prop-types';

const NewsPageList = ({ items, loading }) => {
  return (
    <>
      {loading ? (
        <Spiner />
      ) : (
        <ul className={style.list}>
          {items.map(({ imgUrl, title, text, date, url, _id }) => {
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('en-GB');

            return (
              <NewsPageListItem
                key={_id}
                imgUrl={imgUrl}
                title={title}
                text={text}
                formattedDate={formattedDate}
                url={url}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NewsPageList;

NewsPageList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  loading: PropTypes.bool,
};
