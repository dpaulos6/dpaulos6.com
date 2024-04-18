import { render } from '@react-email/render'
import { Resend } from 'resend'
import { HireMeEmail } from '@/emails/HireMeEmail'

const resend = new Resend(process.env.RESEND_API)
const outlook = 'itzframepvp@outlook.com'

export async function POST(request: Request, res: Response) {
  const { email, title, message } = await request.json()

  const { error } = await resend.emails.send({
    from: 'Website <hire@resend.dev>',
    to: outlook,
    subject: 'Job Request: ' + title,
    html: render(HireMeEmail({ email, title, message }))
  })

  if (error) {
    return Response.json(error)
  }

  return Response.json({ message: 'Email sent successfully' })
}
