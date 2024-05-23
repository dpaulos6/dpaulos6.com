import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url as string, 'http://localhost')
  const id = searchParams.get('id')

  if (!id) {
    return new Response(JSON.stringify('An id is required'), { status: 500 })
  }

  try {
    const reviewId = parseInt(id, 10)
    if (isNaN(reviewId)) {
      throw new Error('Invalid review ID')
    }

    const { data, error } = await supabase
      .from('reviews')
      .update({ approved: true })
      .eq('id', reviewId)
      .select()

    if (error)
      return new Response(
        JSON.stringify({
          message: 'Internal server error',
          error: error.message
        }),
        { status: 500 }
      )

    return new Response(
      JSON.stringify({
        message: 'Review approved',
        review: data
      }),
      { status: 200 }
    )
  } catch (error: any) {
    console.error(error)
    return new Response(
      JSON.stringify({
        message: 'Internal server error',
        error: error.message
      }),
      { status: 500 }
    )
  }
}
