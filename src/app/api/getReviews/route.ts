import supabase from '@/helpers/supabaseClient'
import authenticate from '@/helpers/supabaseAuth'

export const revalidate = 0;

export async function GET(request: Request, res: Response) {
  try {
    await authenticate()

    let { data: reviews, error } = await supabase
      .from('reviews')
      .select('id, name, content, approved')
      .eq('approved', true)
      // .order('name')

    if (error) {
      return new Response(JSON.stringify(error), { status: 500 })
    }

    return new Response(JSON.stringify(reviews), { status: 200 })
  } catch (err) {
    console.error('Error processing request:', err)
    return new Response('Internal Server Error', { status: 500 })
  }
}
