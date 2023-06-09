import { useDispatch, useSelector } from 'react-redux';
//імпортуємо компонент для переадресації користувача після успішної реєстрації
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth/authOperations';
import { isUserLogin, getUserEdit } from 'redux/auth/authSelectors';

import { NavLink } from 'react-router-dom';

import useLang from 'shared/hooks/useLang';
import useTheme from 'shared/hooks/useTheme';
import locale from './locale.json';

import Background from 'shared/components/Background/Background';
import LoginForm from 'components/AuthForms/LoginForm/LoginForm';
import AuthTitle from 'shared/components/AuthTitle/AuthTitle';
import Spiner from 'components/Spiner/Spiner';
import GoogleIcon from 'icons/GoogleIcon';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const { lang } = useLang();
  const { theme } = useTheme();
  const isLogin = useSelector(isUserLogin);
  const isLoading = useSelector(getUserEdit);
  const dispatch = useDispatch();

  const loginLang = locale.login[lang];
  const dontHaveAccountLang = locale.dontHaveAccount[lang];
  const registerLang = locale.register[lang];
  const orUseLang = locale.orUse[lang];
  const googleLang = locale.google[lang];

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
    //Необхідно буде вказати замість "/" іншу сторінку на котру треба буде перекидувати користувача
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
            <AuthTitle text={loginLang} />
            <LoginForm onSubmit={handleLogin} />
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
                {dontHaveAccountLang}{' '}
                <NavLink to="/Register" className={styles.navlink}>
                  {registerLang}
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

export default LoginPage;
