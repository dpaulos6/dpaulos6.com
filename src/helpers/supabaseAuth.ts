import supabase from '@/helpers/supabaseClient'

let session: any = null

const authenticate = async () => {
  if (!session) {
    session = await signIn()
  }
  await setSession(session)
}

const signIn = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: process.env.SUPABASE_AUTH_EMAIL!,
      password: process.env.SUPABASE_AUTH_PASSWORD!
    })

    if (error) {
      throw new Error(error.message)
    }

    return data.session
  } catch (err) {
    console.error('Error during sign-in:', err)
    throw err
  }
}

export const setSession = async (session: any) => {
  supabase.auth.setSession(session.access_token)
}

export default authenticate
