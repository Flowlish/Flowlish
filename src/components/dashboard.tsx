import supabase from '../services/supabase-api-config'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const DashBoard: React.FC = () => {
  const history = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: {session} } = await supabase.auth.getSession();
      if (!session) {
        history('/signin');
      }
    };

    getSession();
  }, [history]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    history('/signin');
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome!</p>
      <button onClick={() => handleSignOut()}>Sign Out</button>
    </div>
  )
}

export default DashBoard;