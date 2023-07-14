import { createClient, SupabaseClient } from '@supabase/supabase-js';

interface EnvConfig {
  VITE_SUPABASE_URL: string;
  VITE_ANON_KEY: string;
}

const defaultEnvConfig: EnvConfig = {
  VITE_SUPABASE_URL: '',
  VITE_ANON_KEY: '',
};

const envConfig: EnvConfig = {
  ...defaultEnvConfig,
  ...import.meta.env,
};

const supabaseUrl: string = envConfig.VITE_SUPABASE_URL;
const supabaseAnonKey: string = envConfig.VITE_ANON_KEY;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;