import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate   } from 'react-router-dom';

import { register } from '../../redux/auth/authOperations';
import { isUserLogin } from 'redux/auth/authSelectors';
import { setRegistered } from '../../redux/auth/authSlice';

import Background from 'shared/components/Background/Background';
import RegisterForm from 'components/AuthForms/RegisterForm/RegisterForm';
import AuthTitle from 'shared/components/AuthTitle/AuthTitle';

import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  
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

  return (
    <>
      <Background />
      <div className={styles.container}>
        <AuthTitle text="Registration" />
        <RegisterForm onSubmit={handleRegister} />
        <div>
          <p className={styles.redirectLink}>
            Already have an account?{' '}
            <NavLink to="/login" className={styles.navlink} >
              Login

            </NavLink>
            <NavLink to="/user" className={styles.navlink} >
            user

            </NavLink>{' '}
            or use{' '}
            <a
              href="https://patron-back.onrender.com/api/auth/google"
              className={styles.navlink}
            >
              Google authenticate
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
