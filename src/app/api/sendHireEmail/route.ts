import resend from '@/helpers/resendClient'
import { render } from '@react-email/render'
import { HireMeEmail } from '@/emails/HireMeEmail'

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

  return Response.json({ message: 'Email sent successfully' })
}
