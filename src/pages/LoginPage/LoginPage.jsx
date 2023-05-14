import { useDispatch, useSelector } from 'react-redux';
//імпортуємо компонент для переадресації користувача після успішної реєстрації
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth/authOperations';
import { isUserLogin } from 'redux/auth/authSelectors';

import { NavLink } from 'react-router-dom';
import LoginForm from 'components/AuthForms/LoginForm/LoginForm';
import AuthTitle from 'shared/components/AuthTitle/AuthTitle';

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
    //Необхідно буде вказати замість "/" іншу сторінку на котру треба буде перекидувати користувача
  }

  return (
    <div className={styles.container}>
      <AuthTitle text="Login" />
      <LoginForm onSubmit={handleLogin} />
      <div>
        <p className={styles.redirectLink}>
          Don't have an account?{' '}
          <NavLink to="/Register" className={styles.navlink}>
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
