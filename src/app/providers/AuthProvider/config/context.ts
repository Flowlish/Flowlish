import { Session, User } from '@supabase/supabase-js'
import { createContext } from 'react'

export type AuthStatus = 'authorized' | 'unauthorized' | 'loading';

export interface IAuthContext {
  session?: Session | null
  user?: User | null
  status: AuthStatus
}

export const initialState: IAuthContext = { 
  session: null, 
  user: null, 
  status: 'loading' 
}

export const AuthContext = createContext<IAuthContext>(initialState)
