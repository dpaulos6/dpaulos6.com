'use client'
import '@/app/globals.css'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import ShinyButton from '@/components/ShinyButton.jsx'
import Head from 'next/head'

const formSchema = z.object({
  email: z.string().email({ message: 'Email must be valid!' }).min(1),
  title: z.string().min(1, { message: "Title can't be empty!" }),
  message: z.string().min(1, { message: "Message can't be empty!" })
})

export default function Hire() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      title: '',
      message: ''
    }
  })

  function isCooldownActive() {
    const lastSubmissionTime = localStorage.getItem('lastSubmissionTime')
    if (lastSubmissionTime) {
      const currentTime = new Date().getTime()
      const timeDifference = currentTime - parseInt(lastSubmissionTime, 10)
      const oneDayInMilliseconds = 24 * 60 * 60 * 1000
      return timeDifference < oneDayInMilliseconds
    }
    return false
  }

  function setLastSubmissionTime() {
    const currentTime = new Date().getTime()
    localStorage.setItem('lastSubmissionTime', currentTime.toString())
  }

  async function onSubmit(values: any) {
    if (isCooldownActive()) {
      toast({
        description: 'You can only send an email once every 24 hours.',
        variant: 'destructive'
      })
      return
    }

    toast({
      description: 'Sending email...'
    })

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
        setLastSubmissionTime()
        toast({
          description: 'Email sent successfully!',
          variant: 'success'
        })
      } else {
        console.error('Failed to send email.')
      }
    } catch (error) {
      console.error(error)
      console.error('An unexpected error occurred.')
    }
  }

  return (
    <div id="hire_page" className="w-full pt-24 px-8">
      <div className="h-full flex flex-col gap-2 items-center justify-center text-text">
        <div className="w-fit relative mb-8 group cursor-default">
          <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
            Hire Me
          </span>
          <span
            className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl  whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all md:group-hover:opacity-0 select-none"
            area-hidden="true"
          >
            Hire Me
          </span>
          <span
            className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-primary-hover to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none"
            area-hidden="true"
          >
            Hire Me
          </span>
        </div>
        <div className="flex flex-col text-center mb-4">
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
      </div>
    </div>
  )
}
