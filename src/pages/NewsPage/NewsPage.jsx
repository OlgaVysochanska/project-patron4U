import Title from '../../shared/components/Title';
import News from '../../components/News';
import style from './NewsPage.module.scss';

const NewsPage = () => {
  return (
    <div className={style.container}>
      <Title>News</Title>
      <News />
    </div>
  );
};

export default NewsPage;
