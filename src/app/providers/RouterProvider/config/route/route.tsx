import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
import SignIn from '@/components/pages/SignIn/sign-in';
import DashBoard from '@/components/pages/Dashboard/dashboard';
import NotFound from '@/components/pages/NotFound/not-found';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard/',
        element: <DashBoard />,
      },
      {
        path: 'dashboard/',
        element: <DashBoard />,
      },
    ]
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
