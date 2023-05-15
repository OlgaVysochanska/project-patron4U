import style from './NewsPageListItem.module.scss';

const NewsPageListItem = ({ items }) => {
  return items.map(({ imgUrl, title, text, date, url, id }) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-GB');
    return (
      <li key={id} className={style.listItem}>
        <div className={style.container}>
          <img className={style.image} src={imgUrl} alt="" />
          <div className={style.contentWrapper}>
            <p className={style.title}>{title}</p>
            <p className={style.text}>{text}</p>
          </div>
          <div className={style.wrapper}>
            <p className={style.date}>{formattedDate}</p>
            <a target="blank" className={style.link} href={url}>
              Read more
            </a>
          </div>
        </div>
      </li>
    );
  });
};

export default NewsPageListItem;
