import { createClient } from '@/utils/supabase/server'

export async function getReviews() {
  // await authenticate()
  const supabase = createClient()

  let { data: reviews, error } = await supabase
    .from('reviews')
    .select('id, name, content, approved')
    .eq('approved', true)

  if (error) {
    throw new Error(error.message)
  }

  return reviews
}
