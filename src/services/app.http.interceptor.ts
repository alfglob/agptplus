import axios from 'axios';

const BASE_URL = 'https://world43434.onrender.com/api/chatgpt/';

export const appHttp = axios.create({});
appHttp.interceptors.request.use(
  async (config: any) => {
    // Added for development to stop waiting for a reply, it needs to be in development mode and have mock=true in local storage.
    if (
      // process.env.NODE_ENV === 'development' && // Disabled for render in prod
      localStorage.getItem('mock') === 'true' &&
      config.url === '/proxychat'
    ) {
      // eslint-disable-next-line no-param-reassign
      config.adapter = (conf: any) =>
        new Promise((resolve) => {
          const res = {
            data: {
              id: (Math.random() + 1).toString(36).substring(7),
              choices: [{ message: { content: config.data.messages.pop().content } }],
            },
            status: 200,
            statusText: 'OK',
            headers: { 'content-type': 'text/plain; charset=utf-8' },
            config: conf,
            request: {},
          };

          resolve(res);
        });
    }
    return {
      ...config,
      baseURL: BASE_URL,
      headers: {
        ...config.headers,
        accept: 'application/json',
      },
    };
  },
  (error) => Promise.reject(error),
);
