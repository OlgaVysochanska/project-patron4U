import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from 'redux/auth/authOperations';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());

    console.log('current', dispatch(current()));
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
