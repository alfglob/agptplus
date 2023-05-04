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

interface UserList {
  users: JiraUser[];
  total: number;
  header: string;
}

interface GroupList {
  groups: JiraGroup[];
  total: number;
  header: string;
}

interface SearchResult {
  users: UserList;
  groups: GroupList;
}

export interface SpaceData {
  id: number;
  key: string;
  name: string;
}

interface SpaceResults {
  results: SpaceData[];
}

interface PageData {
  id: number;
  title: string;
  status: string;
  body: { storage: { value: string } };
  parentId: number;
  spaceId: number;
}

export const connectApi = {
  findUsersAndGroups: async (query: string) =>
    new Promise<SearchResult>((resolve, reject) => {
      window.AP.request(`/rest/api/3/groupuserpicker?query=${query}`, {
        success: (text: string) => {
          resolve(JSON.parse(text) as SearchResult);
        },
        error: (xhr: any, status: number, error: any) => {
          reject(error);
        },
      });
    }),
  getSpaceData: async () =>
    new Promise<SpaceResults>((resolve, reject) => {
      window.AP.request('/api/v2/spaces', {
        success: (text: string) => {
          resolve(JSON.parse(text) as SpaceResults);
        },
        error: (xhr: any, status: number, error: any) => {
          reject(error);
        },
      });
    }),

  createPage: async (spaceId: number, title: string, body: string, parentId?: number) =>
    new Promise<PageData>((resolve, reject) => {
      window.AP.request({
        url: '/api/v2/pages',
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({
          spaceId,
          status: 'current',
          title,
          body: {
            representation: 'storage',
            value: body,
          },
          ...(parentId ? { parentId } : {}),
        }),
        success: (text: string) => {
          resolve(JSON.parse(text) as PageData);
        },
        error: (xhr: any, status: number, error: any) => {
          reject(error);
        },
      });
    }),
};
