import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://azktgkimeldnhwihpkze.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6a3Rna2ltZWxkbmh3aWhwa3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjE4NTEsImV4cCI6MjA2MTQzNzg1MX0.BFwjocv5o2cvkBlvlaGSvx_r4-F40E4PK0N4Jze6fJY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    console.error('Error during sign-up:', error.message)
  } else {
    console.log('User signed up successfully:', data.user)
  }

  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error('Error during sign-out:', error.message)
  } else {
    console.log('User signed out successfully')
  }
}
