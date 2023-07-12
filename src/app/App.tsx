import { useState, useEffect } from 'react'
import supabase from '../services/supabase-api-config'
import Main from '../components/main'
import SignIn from '../components/sign-in'
import './styles/App.css';

export function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <SignIn /> : <Main />}
    </div>
  )
}