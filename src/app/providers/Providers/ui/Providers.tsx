import { UIProvider } from '../../UIProvider';
import { AppRouter } from '../../RouterProvider';
import { AuthProvider } from '../../AuthProvider';

export const Providers = () => {
  return (
    <AuthProvider>
      <UIProvider>
        <AppRouter />
      </UIProvider>
    </AuthProvider>
  );
};
