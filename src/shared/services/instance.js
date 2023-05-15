import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://patron-back.onrender.com/api',
});

export default instance;
