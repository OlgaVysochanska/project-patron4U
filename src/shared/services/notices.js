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

export const getNoticesByCategory = async (category = 'sell', page = 1) => {
  const { data } = await instance.get(`/notices/category`, {
    params: {
      category,
      page,
    },
  });
  return data;
};
export const getNoticesBySearch = async (
  search = '',
  category = 'sell',
  gender = 'male',
  age = '3-12m,1year,2year',
  page = 1
) => {
  console.log('gender, age by API: ', gender, age);
  const { data } = await instance.get(`/notices`, {
    params: {
      search,
      category,
      sex: gender,
      age,
      page,
    },
  });
  //search=superstar&category=sell&sex=male&age=3-12m,1year,2year

  console.log('data:', data);
  return data;
};

export const getUserNotices = async (id, page = 1) => {
  const { data } = await instance.get(`/notices/current/`, {
    params: {
      id,
      page,
    },
  });
  return data;
};

export const getUserFavoriteNotices = async (id, page = 1) => {
  const { data } = await instance.get(`/notices/favorite/`, {
    params: {
      id,
      page,
    },
  });
  return data;
};
