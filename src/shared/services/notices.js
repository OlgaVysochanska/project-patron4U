import instance from './instance';

export const getAllNotices = async () => {
  const { data } = await instance.get('/notices');
  return data;
};

export const addNotice = async data => {
  const { data: result } = await instance.post('/notices', data);
  return result;
};

export const deleteNotice = async id => {
  const { data } = await instance.delete(`/notices/${id}`);
  return data;
};
