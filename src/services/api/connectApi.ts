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

export const connectApi = {
  findUsersAndGroups: async (query: string) =>
    axiosBaseQuery({
      url: `https://agpt.lcx06.me/confluence/search?s=${query}`,
      method: 'GET',
      instance: getApiClient(),
    })(),
  getSpaceData: async () =>
    axiosBaseQuery({
      url: 'https://agpt.lcx06.me/confluence/spaces',
      method: 'GET',
      instance: getApiClient(),
    })(),

  createPage: async (spaceId: number, title: string, body: string, parentId?: number) =>
    axiosBaseQuery({
      url: 'https://agpt.lcx06.me/confluence/page',
      method: 'POST',
      instance: getApiClient(),
    })({
      spaceId,
      title,
      body,
      ...(parentId ? { parentId } : {}),
    }),
};
