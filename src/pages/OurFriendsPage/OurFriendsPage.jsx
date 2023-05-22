import Title from 'shared/components/Title/Title';
import OurFriendsList from '../../components/Friends/OurFriendsList';
import useLang from 'shared/hooks/useLang';
import locale from './locale.json';
import scss from './OurFriendsPage.module.scss';

const OurFriendsPage = () => {
  const { lang } = useLang();
  const title = locale.title[lang];
  return (
    <div className={scss.container}>
      <Title>{title}</Title>
      <OurFriendsList />
    </div>
  );
};

export default OurFriendsPage;
