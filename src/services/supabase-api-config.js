import { createClient } from '@supabase/supabase-js';

const defaultEnvConfig = {
  VITE_SUPABASE_URL: '',
  VITE_APP_ANON_KEY: ''
}

const envConfig = {...defaultEnvConfig, ...import.meta.env }

const supabaseUrl = envConfig.VITE_SUPABASE_URL;
const supabaseAnonKey = envConfig.VITE_ANON_KEY;
 
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
