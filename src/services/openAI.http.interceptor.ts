import axios from 'axios';

export const openAIHttp = axios.create({});
openAIHttp.interceptors.request.use(
  async (config: any) => ({
    ...config,
    headers: {
      ...config.headers,
      accept: 'application/json',
    },
  }),
  (error) => Promise.reject(error),
);
