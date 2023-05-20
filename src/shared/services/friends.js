import instance from './instance';

export const getFriends = async () => {
  const { data } = await instance.get('/friends');
  return data;
};
