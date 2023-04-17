import axios from 'axios';

// const API_BASE_URL = process.env.REACT_APP_JIRA_BASE_URL;

export const jiraHttp = axios.create({
  baseURL: 'https://world43434.onrender.com/api/chatgpt/proxyjira',
});

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
