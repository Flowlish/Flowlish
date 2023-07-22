import { ReactNode } from 'react';
import { useState, useEffect } from 'react'
import { AuthContext, IAuthContext, initialState } from '../config/context'
import supabase from '@/services/supabase-api-config'
import { useNavigate } from 'react-router-dom';

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<IAuthContext>(initialState)

  useEffect(() => {
    setSession({
      session: null,
      user: null,
      status: 'loading'
    })
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      const status = session?.access_token ? 'authorized' : 'unauthorized';
      setSession({
        session,
        user: session?.user,
        status
      })
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      const status = session?.access_token ? 'authorized' : 'unauthorized';
      setSession({
        session, 
        user: session?.user,
        status
      })
    })

  }, [])

  return (
    <AuthContext.Provider value={session}>
      {children}
    </AuthContext.Provider>
  )
}