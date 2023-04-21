import { axiosBaseQuery } from './base.query';

import { appHttp } from '../app.http.interceptor';

export const appApi = {
  askOpenAI: (messages: any) =>
    axiosBaseQuery({
      url: '/proxychat',
      method: 'POST',
      instance: appHttp,
    })({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.1,
    }),

  createJiraIssue: (summary: string, description: string, label?: string) =>
    axiosBaseQuery({
      url: '/proxyjira',
      method: 'POST',
      instance: appHttp,
    })({
      fields: {
        project: { key: 'JIR' },
        issuetype: { name: 'Story' },
        summary,
        description,
        ...(label ? { labels: [label] } : {}),
      },
    }),

  createScenario: (type: string, parentIssueKey: string, summary: string, description: string) =>
    axiosBaseQuery({
      url: '/proxychatgptwithscenario',
      method: 'POST',
      instance: appHttp,
    })({
      type,
      projectkey: 'JIR',
      parentIssueKey,
      summary,
      description,
    }),
};
