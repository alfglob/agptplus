import axios, { AxiosInstance } from 'axios';

let appHttp: AxiosInstance = axios.create({
  baseURL: 'https://agpt-be.onrender.com/',
});

export async function initAppClient() {
  const token = window.AP?.context ? await window.AP.context.getToken() : null;
  appHttp = axios.create({
    baseURL: 'https://agpt-be.onrender.com/',
    headers: {
      ...(token ? { Authorization: `JWT ${token}` } : {}),
    },
  });

  appHttp.interceptors.request.use(
    async (config: any) => {
      // Added for development to stop waiting for a reply, it needs to be in development mode and have mock=true in local storage.
      if (
        // process.env.NODE_ENV === 'development' && // Disabled for render in prod
        localStorage.getItem('mock') === 'true' &&
        config.url === '/ext/chat'
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
        baseURL: 'https://agpt-be.onrender.com/',
        headers: {
          ...config.headers,
          accept: 'application/json',
        },
      };
    },
    (error) => Promise.reject(error),
  );
}

export function getApiClient() {
  return appHttp;
}
