// import authenticate from '@/helpers/supabaseAuth'
// import supabase from '@/helpers/supabaseClient'
// import { render } from '@react-email/render'
// import resend from '@/helpers/resendClient'
// import NewReview from '@/emails/NewReview'
// import bcrypt from 'bcrypt'

// const outlook = 'itzframepvp@outlook.com'

// export async function POST(request: Request, res: Response) {
//   try {
//     await authenticate()

//     const body = await request.json()

//     const { name, message, ip } = body

//     const salt = bcrypt.genSaltSync(10)
//     const hashedIp = bcrypt.hashSync(ip, salt)

//     let { data: getIp, error: getErr } = await supabase
//       .from('reviews')
//       .select('ip')

//     if (getIp && getIp.length > 0) {
//       const existingIp = getIp.some((entry) => bcrypt.compareSync(ip, entry.ip))
//       if (existingIp) {
//         return new Response(
//           JSON.stringify({
//             success: false,
//             error: 'You have already submitted a review.'
//           }),
//           { status: 400 }
//         )
//       }
//     }

//     if (getErr) {
//       return new Response(JSON.stringify(getErr), { status: 500 })
//     }

//     const { data: insertData, error: insertError } = await supabase
//       .from('reviews')
//       .insert([{ name: name, content: message, ip: hashedIp }])
//       .select()

//     if (insertError) {
//       return new Response(JSON.stringify(insertError), { status: 500 })
//     }

//     const id: number = insertData?.[0]?.id

//     const { error: emailError } = await resend.emails.send({
//       from: 'Website <reviews@dpaulos6.com>',
//       to: outlook,
//       subject: 'New review submission',
//       html: render(NewReview({ name, message, id }))
//     })

//     if (emailError) {
//       return new Response(JSON.stringify(emailError), { status: 500 })
//     }

//     return new Response(JSON.stringify(insertData), { status: 200 })
//   } catch (error) {
//     console.error('Error processing request:', error)
//     return new Response('Internal Server Error', { status: 500 })
//   }
// }
