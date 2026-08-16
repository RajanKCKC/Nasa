import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const fallbackAuth = {
  getSession: async () => ({ data: { session: null } }),
  onAuthStateChange: () => ({
    data: { subscription: { unsubscribe: () => {} } }
  }),
  signInWithPassword: async () => ({
    error: { message: 'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.' }
  }),
  signUp: async () => ({
    error: { message: 'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.' }
  }),
  signOut: async () => ({ error: null })
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.')
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : { auth: fallbackAuth }