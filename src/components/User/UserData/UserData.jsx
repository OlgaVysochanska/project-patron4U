import styles from './UserData.module.scss';
import UserDataItem from './UserDataItem/UserDataItem';
import useForm from 'shared/hooks/useForm';
import { useState } from 'react';
// import { ToggleButtonPhoto } from 'shared/components/ToggleButtonPhoto/ToggleButtonPhoto';
import defaultAvatar from './default_avatar.svg';
import Button from '../../../shared/components/Button/Button';
import CameraIcon from 'icons/CameraIcon';
import { nanoid } from 'nanoid';
import CheckIcon from 'icons/CheckIcon';
import CrossIcon from 'icons/CrossIcon';

import UploadWidget from '../../../shared/components/UploadWidget/UploadWidget';

const CameraIconTuned = () => {
  return <CameraIcon width="16" height="16" viewBox="0 0 22 21" />;
};

const CheckIconTuned = () => {
  return <CheckIcon width="16" height="16" viewBox="0 0 22 21" />;
};

const CrossIconTuned = () => {
  return <CrossIcon width="16" height="16" viewBox="0 0 22 21" />;
};

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
  const [isEditPhoto, setEditPhoto] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
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

  const clickEdit = id => {
    // onClick(!isActive);
    setActiveItem(id);
    setIsEditing(true);
    console.log(activeItem);
    console.log(isEditing)
  };

  const clickActive = id => {
    !isActive ? setActiveItem(id) : setActiveItem(false);
  };

  // console.log(userMap);

  const onEditPhoto = () => {
    setEditPhoto(true);
  };

  const onSavePhoto = () => {
    setEditPhoto(false);
  };

  const onCancel = () => {
    setEditPhoto(false);
  };

  const elements = Object.entries(userMap).map(([key, value]) => {
    console.log(key);
    const id = nanoid();
    return (
      <div key={nanoid()}>
        <UserDataItem
          label={key.charAt(0).toUpperCase() + key.slice(1) + ':'}
          name={key}
          value={value}
          clickEdit={clickEdit}
          isActive={isActive}
          clickActive={clickActive}
          activeItem={activeItem}
          id={id}
          key={key}
          setIsEditing={setIsEditing}
          setActiveItem={setActiveItem}
        />
      </div>
    );
  });

  console.log(elements);

  return (
    <div className={styles.container}>
      <img src={avatar} alt="Your look" width={picSize} height={picSize}></img>
      {!isEditPhoto && (
        <>
          <Button
            onClick={onEditPhoto}
            type="button"
            className={styles.btnPhoto}
            label="Edit photo"
            SVGComponent={CameraIconTuned}
            // SVGComponent={UploadWidget}
            showLabelFirst={false}
          />
        </>
      )}
      <div className={styles.div}>
        {isEditPhoto && (
          <Button
            onClick={onSavePhoto}
            type="button"
            className={styles.btnPhoto}
            label="Confirm"
            SVGComponent={CheckIconTuned}
            showLabelFirst={false}
          />
        )}
        {isEditPhoto && (
          <Button
            onClick={onCancel}
            type="button"
            className={styles.btnPhoto}
            label="Cancel"
            SVGComponent={CrossIconTuned}
            showLabelFirst={false}
          />
        )}
      </div>

      {/* <div>{UploadWidget}</div> */}

      {/* <ToggleButtonPhoto>Edit photo</ToggleButtonPhoto> */}

      {elements}
    </div>
  );
};

export default UserData;
