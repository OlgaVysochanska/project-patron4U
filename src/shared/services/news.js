import axios from 'axios';
// import instance from './instance';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const searchNews = async (search, page = 1) => {
  // console.log(search);
  const { data } = await instance.get(
    `/news/search?search=${search}&page=${page}`
  );
  return data;
};

export const getAllNews = async (page = 1) => {
  const { data } = await instance.get('/news', {
    params: {
      page,
    },
  });
  return data;
};
