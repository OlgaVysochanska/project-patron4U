import styles from './UserData.module.scss';
import UserDataItem from './UserDataItem/UserDataItem';
import { useEffect, useState } from 'react';
import defaultAvatar from './default_avatar.svg';
import CameraIcon from 'icons/CameraIcon';
import { nanoid } from 'nanoid';
// import CheckIcon from 'icons/CheckIcon';
// import CrossIcon from 'icons/CrossIcon';
import { getUser } from '../../../redux/auth/authSelectors';
import { editCurrent } from '../../../redux/auth/authOperations';
import UploadWidget from '../../../shared/components/UploadWidget/UploadWidget';
import useForm from 'shared/hooks/useForm';
import { useDispatch,useSelector } from '../../../../node_modules/react-redux/es/exports';
import { initialState } from './initialState';
import Logout from '../Logout/Logout';
import Spiner from 'components/Spiner/Spiner';
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

const UserData = () => {

  const [isBlocked, setIsBlocked] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [avatarUpdated, setAvatarUpdated] = useState(false)

  
  const dispatch = useDispatch();

  let { name, email, birthday, phone, city, avatarURL } =
  useSelector(getUser);

let [testAvatar, setTestAvatar ] = useState(avatarURL)

  useEffect(()=> {
    setAvatarUpdated(false)
  }, [name, email, birthday,phone,city ,avatarURL, isSubmiting])

  const handleEditUser = async data => {
    setIsSubmiting(true);
    try {
      await dispatch(editCurrent(data));
    } finally {
      setIsSubmiting(false);   
    }
    setAvatarUpdated(true)
  };

  const {
    // state,
    // handleChange,
    handleSubmit,
  } = useForm({
    initialState,
    onSubmit: handleEditUser,
  });


  
  const blockButtons = () => {
    setIsBlocked(true);
  };

  const unblockButtons = () => {
    setIsBlocked(false);
  };

  const handleUserURL = avatarURL => {
    const obj = { avatarURL: `${avatarURL}` };
    handleEditUser(obj);
    setTestAvatar(avatarURL)
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

  return (
    <div>
      <h2 className={styles.title}>My information:</h2>
      <div className={styles.container}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={`${testAvatar || defaultAvatar}?${Date.now()}`}
            alt="Your look"
            width={picSize}
            height={picSize}
            key={avatarUpdated ? avatarURL : 'default'}
          ></img>
          <UploadWidget
            uriI={handleUserURL}
            btnType="button"
            btnClassName={styles.btnPhoto}
            btnLabel="Edit photo"
            btnSVGComponent={CameraIconTuned}
            btnShowLabelFirst={false}
          ></UploadWidget>
        </div>
        <div className={styles.inputWrapper}>
          {elements} <Logout />
        </div>
      </div>
      {isSubmiting && <Spiner />}
    </div>
  );
};

export default UserData;
