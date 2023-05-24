import styles from './UserData.module.scss';
import UserDataItem from './UserDataItem/UserDataItem';
import { useState } from 'react';
import defaultAvatar from './default_avatar.svg';
// import Button from '../../../shared/components/Button/Button';
import CameraIcon from 'icons/CameraIcon';
import { nanoid } from 'nanoid';
// import CheckIcon from 'icons/CheckIcon';
// import CrossIcon from 'icons/CrossIcon';
import { getUser } from '../../../redux/auth/authSelectors';
import { editCurrent } from '../../../redux/auth/authOperations';
import UploadWidget from '../../../shared/components/UploadWidget/UploadWidget';
import {
  useDispatch,
  useSelector,
} from '../../../../node_modules/react-redux/es/exports';
import useForm from 'shared/hooks/useForm';

import { initialState } from './initialState';
import Logout from '../Logout/Logout';

const CameraIconTuned = () => {
  return <CameraIcon width="16" height="16" viewBox="0 0 22 21" />;
};

// const CheckIconTuned = () => {
//   return <CheckIcon width="16" height="16" viewBox="0 0 22 21" />;
// };

// const CrossIconTuned = () => {
//   return <CrossIcon width="16" height="16" viewBox="0 0 22 21" />;
// };

const picSize = '182px';

// const user = {
//   name: 'Anna',
//   email: 'anna00@gmail.com',
//   birthday: '01.01.2001',
//   phone: '+38000000000',
//   city: 'Kiev',
//   avatarURL: false,
// };

const UserData = () => {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [isEditPhoto, setEditPhoto] = useState(false);
  // const [isEditing, setIsEditing] = useState(true);
  const [isBlocked, setIsBlocked] = useState(false);
  // const [activeItem, setActiveItem] = useState('');

  const dispatch = useDispatch();

  const handleEditUser = data => {
    dispatch(editCurrent(data));
    console.log(data);
  };

  const {
    // state,
    handleChange,
    handleSubmit,
  } = useForm({
    initialState,
    onSubmit: handleEditUser,
  });

  const { name, email, birthday, phone, city, avatarURL } =
    useSelector(getUser);

  const blockButtons = () => {
    setIsBlocked(true);
  };

  const unblockButtons = () => {
    setIsBlocked(false);
  };

  // const onEditPhoto = () => {
  //   setEditPhoto(true);
  // };

  // const onSavePhoto = () => {
  //   setEditPhoto(false);
  // };

  // const onCancel = () => {
  //   setEditPhoto(false);
  // };

  const handleUserURL = avatarURL => {
    console.log(avatarURL);
const obj = {avatarURL: `${avatarURL}`}
console.log(obj)
handleEditUser(obj)
    // handleChange({
    //   target: {
    //     name: 'avatarURL',
    //     value: avatarURL,
    //   },
    // });
  };

  const elements = Object.entries({ name, email, birthday, phone, city }).map(
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
        <UserDataItem
          type={type}
          label={key.charAt(0).toUpperCase() + key.slice(1) + ':'}
          name={key}
          value={value}
          defaultValue={value}
          // activeItem={activeItem === id}
          id={id}
          key={key}
          handleEditUser={handleEditUser}
          isBlocked={isBlocked}
          blockButtons={blockButtons}
          unblockButtons={unblockButtons}
          handleSubmit={handleSubmit}
        />
      );
    }
  );

  // console.log(elements);

  return (
    <div>
      <h2 className={styles.title}>My information:</h2>
      <div className={styles.container}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={avatarURL || defaultAvatar}
            alt="Your look"
            width={picSize}
            height={picSize}
          ></img>
          <UploadWidget uriI={handleUserURL}>
            {/* UploadWidget це button, не можна класти бтн в бтн (треба придумати
             щось інше, поки вставила пшку, щоб не било помилку) */}
            {/* <Button
              // onClick={onEditPhoto}
              type="button"
              className={styles.btnPhoto}
              label="Edit photo"
              SVGComponent={CameraIconTuned}
              showLabelFirst={false}
            /> */}
            <p className={styles.btnPhoto}>
              <CameraIconTuned />
              Edit photo
            </p>
          </UploadWidget>
        </div>
        <div className={styles.inputWrapper}>
          {elements} <Logout />
        </div>
      </div>
    </div>
  );
};

export default UserData;
