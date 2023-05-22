import Title from '../../shared/components/Title';
import News from '../../components/News';
import useLang from 'shared/hooks/useLang';
import locale from './locale.json';
import style from './NewsPage.module.scss';

const NewsPage = () => {
  const { lang } = useLang();
  const title = locale.title[lang];

  return (
    <div className={style.container}>
      <Title>{title}</Title>
      <News />
    </div>
  );
};

export default NewsPage;
