import PropTypes from 'prop-types';
import useLang from 'shared/hooks/useLang';
import locale from './locale.json';
import style from './NewsPageListItem.module.scss';

const NewsPageListItem = ({ imgUrl, title, text, formattedDate, url }) => {
  const { lang } = useLang();
  const btn = locale.btn[lang];
  return (
    <li className={style.listItem}>
      <div className={style.container}>
        <img className={style.image} src={imgUrl} alt="" />
        <div className={style.contentWrapper}>
          <p className={style.title}>{title}</p>
          <p className={style.text}>{text}</p>
        </div>
        <div className={style.wrapper}>
          <p className={style.date}>{formattedDate}</p>
          <a target="blank" className={style.link} href={url}>
            {btn}
          </a>
        </div>
      </div>
    </li>
  );
};

export default NewsPageListItem;

NewsPageListItem.propTypes = {
  formattedDate: PropTypes.string.isRequired,
};
