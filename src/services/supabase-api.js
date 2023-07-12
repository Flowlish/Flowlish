import supabase from "./supabase-api-config";

class ApiService {
  #supabase = null;
  
  constructor(){
    this.#supabase = supabase;
  }
  
  signIn = async ({ email, password }) => {
    const { data, error } = await this.#supabase.auth.signInWithPassword({ email, password })

    if (error){
      throw new Error('Sorry, but login failed. Please check again');
    }

    return data;
  }

  signOut = async () => {
    this.#supabase.auth.signOut()
  }

  getInstance = () => {
    return this.#supabase;
  }
}

export const apiService = new ApiService();
