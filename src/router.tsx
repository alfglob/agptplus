import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { APP_ROUTES } from './config/routes';

import { ConfluencePage } from './pages/ConfluencePage';
import { JiraPage } from './pages/JiraPage';

console.log('Current Route: ', window.location.pathname);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path={APP_ROUTES.JIRA} element={<JiraPage />} />
      <Route index path={APP_ROUTES.CONFLUENCE} element={<ConfluencePage />} />
    </>,
  ),
);
