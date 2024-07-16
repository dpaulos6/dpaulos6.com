'use client'
import { AlertTriangle, Link } from 'lucide-react'
import { Form, useForm } from 'react-hook-form'
import ShinyButton from '../ShinyButton'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from '../ui/dialog'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from '../ui/use-toast'
import { useState, useEffect } from 'react'

const formSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty!" }),
  message: z.string().min(1, { message: "Message can't be empty!" })
})

export default function SubmitReview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: ''
    }
  })

  async function onSubmit(values: any) {
    toast({
      description: 'Preparing your review...'
    })

    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json')
      const ipData = await ipResponse.json()
      const clientIp = ipData.ip

      const submissionData = { ...values, ip: clientIp }

      const response = await fetch('/api/submitReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
      })

      switch (response.status) {
        case 200:
          toast({
            description: 'Review submitted successfully!',
            variant: 'success'
          })
          break
        case 400:
          toast({
            description: 'You already submitted a review.',
            variant: 'destructive'
          })
          break
        default:
          toast({
            description: 'Your review could not be submitted.',
            variant: 'destructive'
          })
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error)
      toast({
        description: 'An unexpected error occurred. Please try again later.',
        variant: 'destructive'
      })
    }
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const checkScreenSize = () => {
    if (window.innerWidth < 640) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  useEffect(() => {
    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return (
    <Dialog>
      <DialogTrigger tabIndex={-1}>
        <ShinyButton>Submit yours</ShinyButton>
      </DialogTrigger>
      <DialogContent className="w-[90vw] sm:w-full text-text">
        <DialogHeader>
          <span className="text-2xl">Submit your review</span>
        </DialogHeader>
        <div className="flex gap-3 items-center mt-2 -mb-2 p-1.5 sm:p-3 border border-red-300 bg-red-200 dark:border-red-600 dark:bg-red-400 rounded-md text-text">
          <AlertTriangle className="w-24 sm:min-w-16 h-auto text-red-500" />
          <span className="text-sm sm:text-base">
            Sensitive information will be collected. See{' '}
            <Link href="/privacy" className="text-blue-500 hover:underline">
              privacy policy
            </Link>{' '}
            before continuing!
          </span>
        </div>
        <div className="flex gap-3 items-center mb-2 p-1.5 sm:p-3 border border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-400 rounded-md text-text">
          <span className="text-sm sm:text-base">
            Before being public, all the reviews are scanned for inappropriate
            content.
          </span>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 md:space-y-8 w-full transition-all"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Your name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel className="text-base">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={isSmallScreen ? 6 : 10}
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo eget magna."
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
      </DialogContent>
    </Dialog>
  )
}
