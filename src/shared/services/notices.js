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

export const getNoticesByCategory = async (category = 'sell', _page = 1) => {
  const { data } = await instance.get(`/notices/category`, {
    params: {
      category,
      _page,
    },
  });
  return data;
};
export const getNoticesBySearch = async (
  search = '',
  _page = 1,
  category,
  gender
) => {
  const { data } = await instance.get(`/notices/title?title=${search}`, {
    params: {
      search,
      category,
      sex: gender,
      _page,
    },
  });
  return data;
};

export const getUserNotices = async (id, _page = 1) => {
  const { data } = await instance.get(`/notices/current/`, {
    params: {
      id,
      _page,
    },
  });
  return data;
};

export const getUserFavoriteNotices = async (id, _page = 1) => {
  const { data } = await instance.get(`/notices/favorite/`, {
    params: {
      id,
      _page,
    },
  });
  return data;
};
