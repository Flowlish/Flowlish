import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../../../App';
import SignIn from '../../../../../components/sign-in';
import DashBoard from '../../../../../components/dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/dashboard',
    element: <DashBoard />,
  },
]);
