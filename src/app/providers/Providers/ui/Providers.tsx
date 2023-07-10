import { UIProvider } from '../../UIProvider';
import { AppRouter } from '../../RouterProvider';

export const Providers = () => {
  return (
    <UIProvider>
      <AppRouter />
    </UIProvider>
  );
};
