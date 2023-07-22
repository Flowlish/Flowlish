import { AuthContext } from '@/app/providers/AuthProvider/config/context';
import { useContext } from 'react';

export function useSession() {
  return useContext(AuthContext);
}