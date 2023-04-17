import { axiosBaseQuery } from './base.query';

import { jiraHttp } from '../jira.http.interceptor';

export const jiraApi = {
  createJiraIssue: (summary: string, description: string, label?: string) =>
    axiosBaseQuery({
      url: '/',
      method: 'POST',
      instance: jiraHttp,
    })({
      fields: {
        project: {
          key: 'AL',
        },
        summary,
        description,
        issuetype: {
          name: '10001',
        },
        label,
      },
    }),
};
