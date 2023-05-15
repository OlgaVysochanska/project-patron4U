import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000',
  params: {
    _limit: 4,
  },
});

// export const searchNews = async (q, _page = 1) => {
//   const { data } = await instance.get('/', {
//     params: {
//       q,
//       _page,
//     },
//   });
//   return data;
// };

export const getAllNews = async () => {
  const { data } = await instance.get('/api/news');
  return data;
};
