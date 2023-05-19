import instance from './instance';

export const getAllNotices = async (
  search = '',
  category = 'sell',
  _page = 1
) => {
  const { data } = await instance.get('/notices/category', {
    params: {
      search,
      category,
      _page,
    },
  });
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

export const searchNotice = async (q, _page = 1) => {
  const { data } = await instance.get('/notices', {
    params: {
      q,
      _page,
    },
  });
  return data;
};

export const getNoticeByCategory = async category => {
  const { data } = await instance.get(`/notices/${category}`);
  return data;
};
