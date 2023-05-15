import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

export const searchNews = async (search, page = 1) => {
  console.log(search);
  const { data } = await instance.get(`?${search}&${page}`);
  return data;
};

export const getAllNews = async (page = 1) => {
  const { data } = await instance.get('/api/news', {
    params: {
      page,
    },
  });
  return data;
};
