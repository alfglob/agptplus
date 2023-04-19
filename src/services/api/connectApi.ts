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
};
