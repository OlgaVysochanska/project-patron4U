import styles from './UserData.module.scss';
import UserDataItem from './UserDataItem/UserDataItem';
import { useState, useEffect } from 'react';
import defaultAvatar from './default_avatar.svg';
import Button from '../../../shared/components/Button/Button';
import CameraIcon from 'icons/CameraIcon';
import { nanoid } from 'nanoid';
import CheckIcon from 'icons/CheckIcon';
import CrossIcon from 'icons/CrossIcon';
import { getUser } from '../../../redux/auth/authSelectors';
import { editCurrent } from '../../../redux/auth/authOperations';
import UploadWidget from '../../../shared/components/UploadWidget/UploadWidget';
import {
  useDispatch,
  useSelector,
} from '../../../../node_modules/react-redux/es/exports';
import useForm from 'shared/hooks/useForm';

import { initialState } from './initialState';

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

// let avatar = false;

const user = {
  name: 'Anna',
  email: 'anna00@gmail.com',
  birthday: '01.01.2001',
  phone: '+38000000000',
  city: 'Kiev',
  avatarURL: false,
};

const UserData = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditPhoto, setEditPhoto] = useState(false);
  // const [isActive, setActive] = useState(false);
  const [isEditing, setIsEditing] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  // const [name, setName] = useState(user.name);
  // const [email, setEmail] = useState(user.email);
  // const [birthday, setBirthday] = useState(user.birthday);
  // const [phone, setPhone] = useState(user.phone);
  // const [city, setCity] = useState(user.city);
  // const [userURL, setUserURL] = useState(user.userURL)
  const dispatch = useDispatch();

  const handleEditUser = data => {
    dispatch(editCurrent(data));
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: handleEditUser,
  });

  const { name, email, birthday, phone, city, avatarURL } =
    useSelector(getUser);
  console.log(avatarURL)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUser();
        console.log(data);

        setItems(prevItems => [...prevItems, data]);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
    // console.log(items);
  }, [activeItem]);

  // const userMap = { name, email, birthday, phone, city };

  

  // const userMap = {{items}}

  // if (!avatar) {
  //   avatar = defaultAvatar;
  // }

  const blockButtons = () => {
    setIsBlocked(true);
  };

  const unblockButtons = () => {
    setIsBlocked(false);
  };

  // const clickSave = () => {
  //   // setIsNotEditing(true);
  //   unblockButtons();
  //   console.log(state);
  // };

  // const clickEdit = id => {
  //   // onClick(!isActive);
  //   setActiveItem(id);
  // };

  // const clickActive = id => {
  //   setActiveItem(prevActiveItem => (prevActiveItem === id ? '' : id));
  // };

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

  const handleUserURL = avatarURL => {
    console.log(avatarURL)
    handleChange({
      target: {
        name: 'avatarURL',
        value: avatarURL,
      },
    });
  };

  const elements = Object.entries({name, email, birthday, phone, city}).map(
    ([key, value]) => {
      const id = nanoid();
      let type = '';
      switch (key) {
        case 'name':
          type = 'text';
          break;
        case 'email':
          type = 'email';
          break;
        case 'birthday':
          type = 'date';
          break;
        case 'phone':
          type = 'tel';
          break;
        case 'city':
          type = 'text';
          break;
        default:
          type = 'text';
          break;
      }

      return (
        // <div key={nanoid()}>
          <UserDataItem
            type={type}
            label={key.charAt(0).toUpperCase() + key.slice(1) + ':'}
            name={key}
            value={value}
            defaultValue={value}
            // isActive={isActive}
            // clickActive={clickActive}
            activeItem={activeItem === id}
            id={id}
            key={key}
            // setIsEditing={setIsEditing}
            setActiveItem={setActiveItem}
            onSubmit={handleEditUser}
            isBlocked={isBlocked}
            blockButtons={blockButtons}
            unblockButtons={unblockButtons}
            // handleClick={handleClick}
            handleSubmit={handleSubmit}
            // handleCancel={handleCancel}
          />
        // </div>
      );
    }
  );

  // console.log(elements);

  return (
    <div className={styles.container}>
      <img
      className={styles.avatar}
        src={avatarURL || defaultAvatar}
        alt="Your look"
        width={picSize}
        height={picSize}
      ></img>
      {!isEditPhoto && (
        // <>
        //   <Button
        //     onClick={onEditPhoto}
        //     type="button"
        //     className={styles.btnPhoto}
        //     label="Edit photo"
        //     SVGComponent={CameraIconTuned}
        //     // SVGComponent={UploadWidget}
        //     showLabelFirst={false}
        //   />
        //   <UploadWidget uriI={handleUserURL}>
        //     {/* <CameraIconTuned /> */}
        //     <CameraIcon
        //    stroke="#54ADFF" width="16" height="16" viewBox="0 0 22 21" />
        //   </UploadWidget>
        // </>
        <>
          {/* <Button
          onClick={onEditPhoto}
          type="button"
          className={styles.btnPhoto}
          label="Edit photo"
          SVGComponent={CameraIconTuned}
          // SVGComponent={UploadWidget}
          showLabelFirst={false}
        /> */}
          <UploadWidget uriI={handleUserURL}>
            <Button
              onClick={onEditPhoto}
              type="button"
              className={styles.btnPhoto}
              label="Edit photo"
              SVGComponent={CameraIconTuned}
              // SVGComponent={UploadWidget}
              showLabelFirst={false}
            />
          </UploadWidget>
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
      {elements}
    </div>
  );
};

export default UserData;
