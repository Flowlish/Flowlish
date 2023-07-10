import { RouterProvider } from 'react-router-dom';
import { router } from '../../config/route/route';

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};
