import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { getAuth } from 'redux/auth/authSelectors';
import { googleAuth } from 'redux/auth/authOperations';

import Spiner from 'components/Spiner/Spiner';

const TempAuthPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const dispatch = useDispatch();

  if (code) {
    dispatch(googleAuth(code));
  }

  const { isLogin } = useSelector(getAuth);

  if (!isLogin && code) {
    return <Spiner />;
  }

  if (isLogin) {
    return <Navigate to="/user" />;
  }
};

export default TempAuthPage;
