import { createClient } from './server'
const supabase = createClient()

export async function checkUserSession() {
  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (user) {
    return true
  } else {
    return false
  }
}

export async function getUser() {
  const loggedIn = await checkUserSession()
  if (!loggedIn) return

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (user) {
    return user
  }
}
