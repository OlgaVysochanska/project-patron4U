import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAuth } from 'redux/auth/authSelectors';
import { googleAuth } from 'redux/auth/authOperations';

import Spiner from 'components/Spiner/Spiner';

const PublicRoute = () => {
  const { code } = useParams();
  console.log('code', code);
  localStorage.setItem('token', JSON.stringify(code));
  const dispatch = useDispatch();

  if (code) {
    dispatch(googleAuth(code));
  }

  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Spiner />;
  }

  if (isLogin) {
    return <Navigate to="/user" />;
  }
  return <Outlet />;
};

export default PublicRoute;
