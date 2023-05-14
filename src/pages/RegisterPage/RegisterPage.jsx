import { useDispatch, useSelector } from 'react-redux';
//імпортуємо компонент для переадресації користувача після успішної реєстрації
import { Navigate } from 'react-router-dom';

import { register } from '../../redux/auth/authOperations';
import { isUserLogin } from 'redux/auth/authSelectors';

import { NavLink } from 'react-router-dom';
import RegisterForm from 'components/AuthForms/RegisterForm/RegisterForm';
import AuthTitle from 'shared/components/AuthTitle/AuthTitle';

import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleRegister = data => {
    dispatch(register(data));
  };

  if (isLogin) {
    return <Navigate to="/" />;
    //Необхідно буде вказати замість "/" іншу сторінку на котру треба буде перекидувати користувача
  }

  return (
    <div className={styles.container}>
      <AuthTitle text="Registration" />
      <RegisterForm onSubmit={handleRegister} />
      <div>
        <p className={styles.redirectLink}>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
