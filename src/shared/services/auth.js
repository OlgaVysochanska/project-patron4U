import instance from './instance';

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/auth/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/auth/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};


export const patchCurrent = async (token, data) => {
  try {
    setToken(token);
    const { data: result } = await instance.patch('/auth');
    return result;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post('/auth/logout');
  setToken();
  return data;
};
