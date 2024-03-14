import '@/index.css'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: 'Email must be valid!' }).min(1),
  title: z.string().min(1, { message: "Title can't be empty!" }),
  message: z.string().min(1, { message: "Message can't be empty!" })
})

export default function Hire() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      title: '',
      message: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <section id="hire_page">
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-text">
        <span className='text-4xl text-primary'>Hire me</span>
        <div className='flex flex-col text-center mb-4'>
          <span className='text-lg'>If you want to send me a job offer, please fill the fields below.</span>
          <span className='text-base text-text-placeholder'>If the project falls out of my skillset, I will not reply to it.</span>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-1/3"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="dpaulos6@outlook.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    The email that will be used to contact you.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Modern and Responsive Portfolio"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Short title that can give an idea of what the project is.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder="Hey there! I've got this idea for a killer portfolio website, and I need your expertise to bring it to life. It's gotta be sleek, responsive, you know the drill. Think you're up for the challenge? Let's make something awesome together!"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Here will be your request in detail with everything you
                    want.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="flex mx-auto" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  )
}
