import { Auth } from '@supabase/auth-ui-react';
import {Navigate} from 'react-router-dom';
import supabase from '../services/supabase-api-config'
import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'

const SignIn: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null)
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

  }, [])

  if (session) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <h2>Login Page</h2>
      <br />
      <Auth supabaseClient={supabase} providers={['google']} view="sign_in"/>
    </div>
  )
}

export default SignIn;