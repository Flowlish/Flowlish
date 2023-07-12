import { apiService } from "../services/supabase-api";

export default function Main() {
  return (
    <div>
      <div>Welcome page!</div>
      <div>You Logged in!</div>
      <button onClick={() => apiService.signOut()}>Sign out</button>
    </div>
  )
}