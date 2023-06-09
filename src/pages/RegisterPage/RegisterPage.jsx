import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { register } from '../../redux/auth/authOperations';
import { isUserLogin, getUserEdit } from 'redux/auth/authSelectors';
import { setRegistered } from '../../redux/auth/authSlice';

import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';

import Background from 'shared/components/Background/Background';
import RegisterForm from 'components/AuthForms/RegisterForm/RegisterForm';
import AuthTitle from 'shared/components/AuthTitle/AuthTitle';
import Spiner from 'components/Spiner/Spiner';
import GoogleIcon from 'icons/GoogleIcon';

import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const { lang } = useLang();
  const { theme } = useTheme();
  const isLogin = useSelector(isUserLogin);
  const isLoading = useSelector(getUserEdit);

  const registrationLang = locale.registration[lang];
  const alreadyHaveAccountLang = locale.alreadyHaveAccount[lang];
  const loginLang = locale.login[lang];
  const orUseLang = locale.orUse[lang];
  const googleLang = locale.google[lang];

  const dispatch = useDispatch();
  dispatch(setRegistered(false));

  const handleRegister = data => {
    dispatch(register(data)).then(() => {
      dispatch(setRegistered(true));
    });
  };

  if (isLogin) {
    return <Navigate to="/user" />;
  }

  const container =
    theme === 'light'
      ? styles.container
      : `${styles.container} + ${styles.containerDark}`;

  const redirectLink =
    theme === 'light'
      ? styles.redirectLink
      : `${styles.redirectLink} + ${styles.redirectLinkDark}`;

  return (
    <>
      <Background />

      <div className={container}>
        {!isLoading ? (
          <>
            <AuthTitle text={registrationLang} />
            <RegisterForm onSubmit={handleRegister} />
            <p className={styles.text}>{orUseLang}</p>
            <a
              href="https://patron-back.onrender.com/api/auth/google"
              className={styles.navLink}
            >
              <GoogleIcon className={styles.googleIcon} />
              {googleLang}
            </a>
            <div>
              <p className={redirectLink}>
                {alreadyHaveAccountLang}{' '}
                <NavLink to="/login" className={styles.navlink}>
                  {loginLang}
                </NavLink>
              </p>
            </div>
          </>
        ) : (
          <Spiner />
        )}
      </div>
    </>
  );
};

export default RegisterPage;
