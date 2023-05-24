import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/authSelectors';

import Spiner from 'components/Spiner/Spiner';

const PublicRoute = () => {
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
