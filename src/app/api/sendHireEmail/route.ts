import { render } from '@react-email/render'
import { Resend } from 'resend'
import { HireMeEmail } from '@/emails/HireMeEmail'
import { createClient } from 'redis'

const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: 18531
  }
})

const resend = new Resend(process.env.RESEND_API)
const outlook = 'itzframepvp@outlook.com'

export async function POST(request: Request, res: Response) {
  const { email, title, message } = await request.json()

  const { error } = await resend.emails.send({
    from: 'Website <hire@dpaulos6.xyz>',
    to: outlook,
    subject: title,
    html: render(HireMeEmail({ email, title, message }))
  })

  if (error) {
    return Response.json(error)
  }

  // Implement Redis and store IP address to prevent email spamming
  // await client
  //   .on('error', (err) => console.log('Redis Client Error: ', err))
  //   .connect()

  return Response.json({ message: 'Email sent successfully' })
}
