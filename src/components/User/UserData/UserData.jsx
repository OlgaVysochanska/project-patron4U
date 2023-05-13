import styles from './UserData.module.scss';
import UserDataItem from './UserDataItem/UserDataItem';
const user = {
  name: 'Anna',
  email: 'anna00@gmail.com',
  birthday: '00.00.0000',
  phone: '+38000000000',
  city: 'Kiev',
};
const UserData = () => {
  return (
    <div className={styles.container}>
      <UserDataItem user={user} />
    </div>
  );
};

export default UserData;
