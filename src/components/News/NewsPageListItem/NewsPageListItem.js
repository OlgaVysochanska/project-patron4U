import PropTypes from 'prop-types';
import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';
import style from './NewsPageListItem.module.scss';

const NewsPageListItem = ({ imgUrl, title, text, formattedDate, url }) => {
  const { lang } = useLang();
  const { theme } = useTheme();
  const btn = locale.btn[lang];

  const container =
    theme === 'light'
      ? style.container
      : `${style.container} + ${style.containerDark}`;

  const titleStyle =
    theme === 'light' ? style.title : `${style.title} + ${style.titleDark}`;

  const textStyle =
    theme === 'light' ? style.text : `${style.text} + ${style.textDark}`;

  const dateStyle =
    theme === 'light' ? style.date : `${style.date} + ${style.dateDark}`;
  return (
    <li className={style.listItem}>
      <div className={container}>
        <img className={style.image} src={imgUrl} alt="" />
        <div className={style.contentWrapper}>
          <p className={titleStyle}>{title}</p>
          <p className={textStyle}>{text}</p>
        </div>
        <div className={style.wrapper}>
          <p className={dateStyle}>{formattedDate}</p>
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
