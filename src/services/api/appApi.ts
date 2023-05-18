import { axiosBaseQuery } from './base.query';

import { getApiClient } from '../app.http.interceptor';

export interface JiraUser {
  accountId: string;
  accountType: string;
  name: string;
  key: string;
  html: string;
  displayName: string;
  avatarUrl: string;
}

export interface JiraGroup {
  name: string;
  html: string;
  groupId: string;
}

export interface SpaceData {
  id: number;
  key: string;
  name: string;
}

export const appApi = {
  askOpenAI: (messages: any, prompt: string, studio?: string) =>
    axiosBaseQuery({
      url: '/ext/chat',
      method: 'POST',
      instance: getApiClient(),
    })({ messages, prompt, studio }),

  createJiraIssue: (summary: string, description: string, label?: string) =>
    axiosBaseQuery({
      url: '/jira/issue',
      method: 'POST',
      instance: getApiClient(),
    })({
      fields: {
        project: 'JIR',
        issuetype: 'Story',
        summary,
        description,
        ...(label ? { labels: [label] } : {}),
      },
    }),

  createScenario: (type: string, parent: string, summary: string, description: string) =>
    axiosBaseQuery({
      url: '/jira/scenario',
      method: 'POST',
      instance: getApiClient(),
    })({
      type,
      project: 'JIR',
      parent,
      summary,
      description,
    }),

  findUsersAndGroups: async (query: string) =>
    axiosBaseQuery({
      url: `/jira/search?s=${query}`,
      method: 'GET',
      instance: getApiClient(),
    })(),
  getSpaceData: async () =>
    axiosBaseQuery({
      url: '/confluence/spaces',
      method: 'GET',
      instance: getApiClient(),
    })(),

  createPage: async (spaceId: number, title: string, body: string, parentId?: number) =>
    axiosBaseQuery({
      url: '/confluence/page',
      method: 'POST',
      instance: getApiClient(),
    })({
      spaceId,
      title,
      body,
      ...(parentId ? { parentId } : {}),
    }),
};
