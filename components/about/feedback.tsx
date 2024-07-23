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
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import useSWR from 'swr'
import { fetcher } from '@/utils/swr'

interface Review {
  id: number
  name: string
  content: string
  approved: boolean
}

const formSchema = z.object({
  name: z.string().min(1, { message: "Name can't be empty!" }),
  message: z.string().min(1, { message: "Message can't be empty!" })
})

export default function Feedback() {
  const { data: reviews, error, isLoading } = useSWR('/api/getReviews', fetcher)

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
    <div className="w-full max-w-7xl flex flex-col items-center mb-32 px-8">
      <div className="w-fit relative mb-16 group cursor-default">
        <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
          Feedback!
        </span>
        <span
          className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl  whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all md:group-hover:opacity-0 select-none"
          area-hidden="true"
        >
          Feedback!
        </span>
        <span
          className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-primary-hover to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none"
          area-hidden="true"
        >
          Feedback!
        </span>
      </div>
      <span className="max-w-7xl w-full text-center mb-16 text-xl px-8">
        If you have submitted a review and would like to update or remove it,{' '}
        <Link href="/contacts" className="text-primary">
          contact me
        </Link>
        !
      </span>
      <div className="flex flex-col items-center justify-center w-full">
        {reviews ? (
          <ResponsiveMasonry
            className="masonry"
            columnsCountBreakPoints={{ 350: 1, 756: 2, 1024: 3 }}
          >
            <Masonry gutter="1.5rem">
              {reviews.map((review: Review) => (
                <div
                  key={review.id}
                  className="rounded-lg border bg-background-menu border-background-border p-6 shadow-sm"
                >
                  <span className="text-lg font-medium leading-relaxed">
                    &quot;{review.content}&quot;
                  </span>
                  <div className="mt-4 flex items-center space-x-3">
                    <span className="font-medium">{review.name}</span>
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        ) : isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="h-5 w-5 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
            <div className="h-5 w-5 animate-bounce rounded-full bg-primary [animation-delay:-0.13s]"></div>
            <div className="h-5 w-5 animate-bounce rounded-full bg-primary"></div>
          </div>
        ) : error ? (
          <span className="text-lg text-red-400">Something went wrong.</span>
        ) : (
          <span className="text-lg text-neutral-500">
            There are no reviews yet.
          </span>
        )}
        <Dialog>
          <DialogTrigger className="mt-12" tabIndex={-1}>
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
                Before being public, all the reviews are scanned for
                inappropriate content.
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
      </div>
    </div>
  )
}
