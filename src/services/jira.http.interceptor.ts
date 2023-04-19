import axios from 'axios';

export const jiraHttp = axios.create({});

jiraHttp.interceptors.request.use(
  async (config: any) => ({
    ...config,
    headers: {
      ...config.headers,
      accept: 'application/json',
    },
  }),
  (error) => Promise.reject(error),
);
