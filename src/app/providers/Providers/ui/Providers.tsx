import { UIProvider } from '../../UIProvider';
import { AppRouter } from '../../RouterProvider';
import { AuthProvider } from '../../AuthProvider';
import { StoreProvider } from '../../StoreProvider';

export const Providers = () => {
  return (
    <AuthProvider>
      <StoreProvider>
        <UIProvider>
          <AppRouter />
        </UIProvider>
      </StoreProvider>
    </AuthProvider>
  );
};
