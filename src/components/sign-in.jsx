import { apiService } from '../services/supabase-api'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function SignIn() {
  return (
    <Auth
      supabaseClient={apiService.getInstance()}
      appearance={{ theme: ThemeSupa }}
      providers={["google"]}
    />
  )
}
