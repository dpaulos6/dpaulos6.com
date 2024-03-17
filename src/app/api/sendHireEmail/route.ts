import { render } from '@react-email/render';
import { Resend } from 'resend';
import { HireMeEmail } from '@/emails/HireMeEmail'; // Importing named export

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);
const outlook = 'itzframepvp@outlook.com'

export async function POST(request: Request, res: Response) {
  const { email, title, message } = await request.json();

  const { error } = await resend.emails.send({
    from: 'dpaulos6 <onboarding@resend.dev>',
    to: outlook,
    subject: 'Your Developer Roadmap',
    html: render(HireMeEmail({ email, title, message }))
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: 'Email sent successfully' });
}
