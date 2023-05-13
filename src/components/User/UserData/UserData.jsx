import styles from './UserData.module.scss';
import UserDataItem from './UserDataItem/UserDataItem';
import useForm from 'shared/hooks/useForm';
import { useState } from 'react';
import { ToggleButtonPhoto } from 'shared/components/ToggleButtonPhoto/ToggleButtonPhoto';
import defaultAvatar from './default_avatar.svg';

const picSize = '182px';

let avatar = false;

const user = {
  name: 'Anna',
  email: 'anna00@gmail.com',
  birthday: '00.00.0000',
  phone: '+38000000000',
  city: 'Kiev',
};
const UserData = ({ onClick }) => {
  const [isActive, setActive] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday);
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.city);

const userMap = { name, email, birthday, phone, city}

  if (!avatar) {
    avatar = defaultAvatar;
  }

  const clickToglle = () => {
    setActive(!isActive);
    onClick(!isActive);
  };

const elements = userMap.map

  return (
    <div className={styles.container}>
      <img src={avatar} alt="Your look" width={picSize} height={picSize}></img>
      <ToggleButtonPhoto>Edit photo</ToggleButtonPhoto>
      <form>
        <UserDataItem
        label={name.charAt(0)}
          name={name}
          clickToglle={clickToglle}
          isActive={isActive}
        />
      </form>
      <button>Log Out</button>
    </div>
  );
};

export default UserData;
