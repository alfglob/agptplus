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
      headers: {
        ai_key: localStorage.getItem('AI_KEY') ?? sessionStorage.getItem('AI_KEY'),
        ai_type: localStorage.getItem('API_TYPE') ?? sessionStorage.getItem('API_TYPE'),
      },
    })({ messages, prompt, studio }),

  createJiraIssue: (summary: string, description: string, label?: string) =>
    axiosBaseQuery({
      url: '/jira/issue',
      method: 'POST',
      instance: getApiClient(),
    })({
      project: 'JIR',
      issuetype: 'Story',
      summary,
      description,
      ...(label ? { labels: [label] } : {}),
    }),

  createScenario: (type: string, parent: string, summary: string, description: string) =>
    axiosBaseQuery({
      url: '/jira/scenario',
      method: 'POST',
      instance: getApiClient(),
      headers: {
        ai_key: localStorage.getItem('AI_KEY') ?? sessionStorage.getItem('AI_KEY'),
        ai_type: localStorage.getItem('API_TYPE') ?? sessionStorage.getItem('API_TYPE'),
      },
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

  getStats: async (before: number, after: number) =>
    axiosBaseQuery({
      url: `/metrics/stats?before=${before}&after=${after}`,
      method: 'GET',
      instance: getApiClient(),
    })(),
  getHistory: async (before: number, after: number, page: number = 1, per_page: number = 10) =>
    axiosBaseQuery({
      url: `/metrics/history?before=${before}&after=${after}&page=${page}&per_page=${per_page}`,
      method: 'GET',
      instance: getApiClient(),
    })(),
  getChat: async (id: string) =>
    axiosBaseQuery({
      url: `/metrics/chats/${id}`,
      method: 'GET',
      instance: getApiClient(),
    })(),
  setChatStoryPoints: async (id: string, value: number) =>
    axiosBaseQuery({
      url: `/metrics/chats/${id}/storyPoints?value=${value}`,
      method: 'PATCH',
      instance: getApiClient(),
    })(),
};
