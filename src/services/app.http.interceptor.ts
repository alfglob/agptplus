import axios from 'axios';

const BASE_URL = 'https://world43434.onrender.com/api/chatgpt/';

export const appHttp = axios.create({});
appHttp.interceptors.request.use(
  async (config: any) => ({
    ...config,
    baseURL: BASE_URL,
    headers: {
      ...config.headers,
      accept: 'application/json',
    },
  }),
  (error) => Promise.reject(error),
);
