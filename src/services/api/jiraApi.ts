import { axiosBaseQuery } from './base.query';

import { jiraHttp } from '../jira.http.interceptor';

const API_BASE_URL = process.env.REACT_APP_JIRA_BASE_URL;

export const jiraApi = {
  createJiraIssue: (summary: string, description: string, label?: string) =>
    axiosBaseQuery({
      url: API_BASE_URL,
      method: 'POST',
      instance: jiraHttp,
    })({
      fields: {
        project: { key: 'JIR' },
        issuetype: { name: 'Story' },
        summary,
        description,
        ...(label ? { labels: [label] } : {}),
      },
    }),
};
