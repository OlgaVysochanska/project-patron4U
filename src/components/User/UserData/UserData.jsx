import styles from './UserData.module.scss';
import UserDataItem from './UserDataItem/UserDataItem';
import useForm from 'shared/hooks/useForm';
import { useState } from 'react';
import { ToggleButtonPhoto } from 'shared/components/ToggleButtonPhoto/ToggleButtonPhoto';
import defaultAvatar from './default_avatar.svg';
import Button from 'components/Button/Button';
import LogoutIcon from 'icons/LogoutIcon';
// import {nanoid} from 'nanoid'

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
  const [activeItem, setActiveItem] = useState('');
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [birthday, setBirthday] = useState(user.birthday);
  const [phone, setPhone] = useState(user.phone);
  const [city, setCity] = useState(user.city);

  const userMap = { name, email, birthday, phone, city };

  if (!avatar) {
    avatar = defaultAvatar;
  }

  const clickToglle = id => {
    onClick(!isActive);

    console.log(activeItem);
  };
  const clickActive = id => {
    !isActive ? setActiveItem(id) : setActiveItem(false);
  };

  console.log(userMap);
  const elements = Object.entries(userMap).map(([key, value]) => {
    console.log(key);
    return (
      <form>
        <UserDataItem
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          name={key}
          value={value}
          clickToglle={clickToglle}
          isActive={isActive}
          clickActive={clickActive}
          activeItem={activeItem}
          // id={nanoid()}
        />
      </form>
    );
  });
  console.log(elements);

  return (
    <div className={styles.container}>
      <img src={avatar} alt="Your look" width={picSize} height={picSize}></img>
      <ToggleButtonPhoto>Edit photo</ToggleButtonPhoto>
      <form>
        {elements}
        {/* <UserDataItem
          label={name.charAt(0).toUpperCase() + name.slice(1)}
          name={userMap[0]}
          value={name}
          clickToglle={clickToglle}
          isActive={isActive}
        /> */}
      </form>
      <Button label="Log Out" LogoutIcon />
    </div>
  );
};

export default UserData;
