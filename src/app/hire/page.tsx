'use client'
import '@/app/globals.css'
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

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ShinyButton from '@/components/ShinyButton.jsx'

const formSchema = z.object({
  email: z.string().email({ message: 'Email must be valid!' }).min(1),
  title: z.string().min(1, { message: "Title can't be empty!" }),
  message: z.string().min(1, { message: "Message can't be empty!" })
})

export default function Hire() {
  const theme =
    typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null

  // Use theme variable
  const themeMode = theme === 'dark' ? 'dark' : 'light'

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      title: '',
      message: ''
    }
  })

  async function onSubmit(values: any) {
    try {
      const response = await fetch('/api/sendHireEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const data = await response.json()

      if (!data.statusCode) {
        toast.success(data.message)
      } else {
        console.error('Failed to send email.')
      }
    } catch (error) {
      console.error(error)
      console.error('An unexpected error occurred.')
    }
  }

  return (
    <section id="hire_page" className="w-full pt-16 px-8">
      <div className="h-full flex flex-col gap-2 items-center justify-center text-text">
        <span className="text-4xl text-primary">Hire me</span>
        <div className="hidden sm:flex flex-col text-center mb-4">
          <span className="text-sm md:text-base xl:text-lg transition-all">
            If you want to send me a job offer, please fill the fields below.
          </span>
          <span className="text-xs md:text-sm xl:text-base text-text-subtitle transition-all">
            If the project falls out of my skill-set, I will not reply to it.
          </span>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full sm:w-[30rem] md:w-[35rem] transition-all"
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <ShinyButton className="flex mx-auto">Submit</ShinyButton>
          </form>
        </Form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          draggable={false}
          theme={themeMode}
          className="mt-20"
        />
      </div>
    </section>
  )
}
