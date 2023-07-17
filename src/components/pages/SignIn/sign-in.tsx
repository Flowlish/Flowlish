import { Auth } from '@supabase/auth-ui-react';
import supabase from '@/services/supabase-api-config'
import { useSearchParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const SignIn: React.FC = () => {
  const [searchParams] = useSearchParams();

  return (
    <Box minH="100vh">
      <h2>Login Page</h2>
      <br />
      <Auth 
        supabaseClient={supabase} 
        providers={['google']} 
        view="sign_in" 
        redirectTo={searchParams.get('callbackUrl') ?? '/dashboard'}
      />
    </Box>
  )
}

export default SignIn;