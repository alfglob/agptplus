import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { App } from './App';
import { APP_ROUTES } from './config/routes';
import { ConfigurePromptPage } from './pages/ConfigurePromptPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={APP_ROUTES.ROOT} element={<App />}>
      <Route index path={APP_ROUTES.CONFIGURE_PROMPT} element={<ConfigurePromptPage />} />
    </Route>,
  ),
);
