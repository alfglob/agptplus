import { axiosBaseQuery } from './base.query';

import { openAIHttp } from '../openAI.http.interceptor';

//const openAIURL = process.env.REACT_APP_OPEN_AI_URL;
const openAIURL ='https://world43434.onrender.com/api/chatgpt/proxychat';
export const openAIApi = {
  askOpenAI: (messages: any) =>
    axiosBaseQuery({
      url: openAIURL,
      method: 'POST',
      instance: openAIHttp,
    })({
      model: 'gpt-3.5-turbo',
      messages,
    }),
};
