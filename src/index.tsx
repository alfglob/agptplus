import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { ApiClientInit } from './components/common/Loading/ApiClientInit';
import { router } from './router';
import { initAppClient } from './services/app.http.interceptor';
import { store } from './store';

import { theme } from './theme';
import './assets/style/main.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

declare global {
  interface Window {
    AP: any;
    atl_token: () => string;
  }
}

initAppClient();

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ApiClientInit>
          <RouterProvider router={router} />
        </ApiClientInit>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
