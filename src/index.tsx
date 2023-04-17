import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';

import { theme } from './theme';
import { ConfigurePromptPage } from './pages/ConfigurePromptPage';
import './assets/style/main.scss';
// import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
		<ConfigurePromptPage />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
