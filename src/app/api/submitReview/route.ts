import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcrypt'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
)

export async function POST(request: Request, res: Response) {
  try {
    const body = await request.json()

    const { name, message, ip } = body

    const salt = bcrypt.genSaltSync(10)
    const hashedIp = bcrypt.hashSync(ip, salt)

    let { data: getIp, error: getErr } = await supabase
      .from('reviews')
      .select('ip')

    if (getIp && getIp.length > 0) {
      const existingIp = getIp.map((entry) => {
        if (bcrypt.compareSync(entry.ip, hashedIp)) return true
      })
      if (existingIp) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'You have already submitted a review.'
          }),
          { status: 400 }
        )
      }
    }

    if (getErr) {
      return new Response(JSON.stringify(getErr), { status: 500 })
    }

    const { data, error } = await supabase
      .from('reviews')
      .insert([{ name: name, content: message, ip: hashedIp }])
      .select()

    if (error) {
      return new Response(JSON.stringify(error), { status: 500 })
    }

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    console.error('Error processing request:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
