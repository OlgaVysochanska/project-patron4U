import Title from 'shared/components/Title/Title';
import OurFriendsList from '../../components/Friends/OurFriendsList';
import scss from './OurFriendsPage.module.scss';

const OurFriendsPage = () => {
  return (
    <div className={scss.container}>
      <Title>Friends Page</Title>
      <OurFriendsList />
    </div>
  );
};

export default OurFriendsPage;
