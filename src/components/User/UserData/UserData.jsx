import useLang from 'shared/hooks/useLang';
// import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';
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
import {
  useDispatch,
  useSelector,
} from '../../../../node_modules/react-redux/es/exports';
import { initialState } from './initialState';
import Logout from '../Logout/Logout';
import Spiner from 'components/Spiner/Spiner';
import useTheme from 'shared/hooks/useTheme';
import NotiflixMessage from 'shared/components/NotiflixMessage/NotiflixMessage';


const CameraIconTuned = () => {
  return <CameraIcon width="16" height="16" viewBox="0 0 22 21" />;
};


const picSize = '182px';

const UserData = () => {
  const { lang } = useLang();
  // const {theme} = useTheme()

  const [isBlocked, setIsBlocked] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [avatarUpdated, setAvatarUpdated] = useState(false);
  const [isValidValue, setIsValidValue] = useState(true)

  const dispatch = useDispatch();

  let { name, email, birthday, phone, city, avatarURL } = useSelector(getUser);

  let [testAvatar, setTestAvatar] = useState(avatarURL);
  const nameLang = locale.name[lang];
  const emailLang = locale.email[lang];
  // const validEmailLang = locale.validEmail[lang]
  const birthdayLang = locale.birthday[lang];
  const phoneLang = locale.phone[lang];
  const cityLang = locale.city[lang];
  const mInfoLang = locale.mInfoLang[lang];
  const btnUWLang = locale.btnUWLang[lang];
  const avaAltLang = locale.avaAltLang[lang];

  const inputNameLang = locale.inputName[lang];
  const inputEmailLang = locale.inputEmail[lang];
  const inputBirthdayLang = locale.inputBirthday[lang];
  const inputPhoneLang = locale.inputPhone[lang];
  const inputCytiLang = locale.inputCyti[lang];
  // const infoMessageLang = locale.infoMessage[lang];
  
  // const loginLang = locale.login[lang];

  useEffect(() => {
    setAvatarUpdated(false);
  }, [name, email, birthday, phone, city, avatarURL, isSubmiting]);

  const handleEditUser = async data => {
    if(!isValidValue) {  NotiflixMessage({ type: 'info', data: "invalid value " })} else
    {setIsSubmiting(true);
    try {
      await dispatch(editCurrent(data));
    } finally {
      setIsSubmiting(false);
    }}
    setAvatarUpdated(true);
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
    setTestAvatar(avatarURL);
  };

  const { theme } = useTheme();

  const container =
    theme === 'light'
      ? styles.container
      : `${styles.container} + ${styles.containerDark}`;

  const elements = Object.entries({ name, email, birthday, phone, city }).map(
    ([key, value]) => {
      const id = nanoid();
      let type = '';
      let pattern = '';
      let placeholder = '';
      let label = '';
      switch (key) {
        case 'name':
          type = 'text';
          pattern = '^[A-Za-zА-Яа-яЁёs]+$';
          label = nameLang;
          placeholder = inputNameLang;
          break;
        case 'email':
          type = 'text';
          pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$';
          label = emailLang;
          placeholder = inputEmailLang;

          break;
        case 'birthday':
          type = 'date';
          label = birthdayLang;          placeholder = inputBirthdayLang;

          break;
        case 'phone':
          type = 'text';
          pattern = '/^(\\+)?\\d{1,}$/';
          label = phoneLang;
          placeholder = inputPhoneLang;

          break;
        case 'city':
          type = 'text';
          // pattern = '^[A-Za-zА-Яа-яЁёs-]+$';
          label = cityLang;
          placeholder = inputCytiLang;

          break;
        default:
          type = 'text';
          break;
      }

      return (
        <UserDataItem
          type={type}
          // label={key.charAt(0).toUpperCase() + key.slice(1) + ':'}
          label={label}
          name={key}
          // value={value}
          defaultValue={value}
          id={id}
          key={key}
          handleEditUser={handleEditUser}
          isBlocked={isBlocked}
          blockButtons={blockButtons}
          unblockButtons={unblockButtons}
          handleSubmit={handleSubmit}
          pattern={pattern}
          placeholder={placeholder}
 setIsValidValue = {setIsValidValue}

        />
      );
    }
  );

  return (
    <div>
      <h2 className={`${styles.title} ${theme === 'dark' && styles.titleDark}`}>
        {mInfoLang}
      </h2>
      <div className={container}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={`${testAvatar || defaultAvatar}?${Date.now()}`}
            alt={avaAltLang}
            width={picSize}
            height={picSize}
            key={avatarUpdated ? avatarURL : 'default'}
          ></img>
          <UploadWidget
            uriI={handleUserURL}
            btnType="button"
            btnClassName={styles.btnPhoto}
            btnLabel={btnUWLang}
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
