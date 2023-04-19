import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { APP_ROUTES } from './config/routes';

import { ConfigurePromptPage } from './pages/ConfigurePromptPage';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route index path={APP_ROUTES.CONFIGURE_PROMPT} element={<ConfigurePromptPage />} />),
);
