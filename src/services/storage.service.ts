const StorageService = () => {
  const USER_ID_TOKEN = 'AlexGPT_USER_ID_TOKEN';
  const USER_REFRESH_TOKEN = 'AlexGPT_REFRESH_TOKEN';
  const clearTokens = () => {
    localStorage.removeItem(USER_REFRESH_TOKEN);
    localStorage.removeItem(USER_ID_TOKEN);
  };

  return {
    set refreshToken(token: string) {
      if (token) {
        localStorage.setItem(USER_REFRESH_TOKEN, token);
      }
    },
    get refreshToken() {
      return localStorage.getItem(USER_REFRESH_TOKEN) || '';
    },
    set idToken(token: string) {
      if (token) {
        localStorage.setItem(USER_ID_TOKEN, token);
      }
    },
    get idToken() {
      return localStorage.getItem(USER_ID_TOKEN) || '';
    },
    clearTokens,
  };
};

export const storage = StorageService();
