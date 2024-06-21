'use client'
import '@/app/globals.css'
import {
  AstroIcon,
  CsharpIcon,
  EslintIcon,
  GitIcon,
  JavascriptIcon,
  KotlinIcon,
  LucideIcon,
  NextjsIcon,
  PhpIcon,
  PnpmIcon,
  PostmanIcon,
  PrettierIcon,
  ReactIcon,
  ShadcnIcon,
  SvelteIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  ViteIcon,
  VscodeIcon
} from '@/icons'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ShinyButton from '@/components/ShinyButton'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useToast } from '@/components/ui/use-toast'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { AlertTriangle, RefreshCwIcon } from 'lucide-react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

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

export default function Page() {
  const { toast } = useToast()
  const [age, setAge] = useState(0)
  const [reviews, setReviews] = useState<Review[]>([])
  const approvedReviews = reviews.filter((review) => review.approved)
  const [forceRefresh, setForceRefresh] = useState(0)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/getReviews')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }
    fetchReviews()
  }, [forceRefresh])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      message: ''
    }
  })

  useEffect(() => {
    const dobString = '2003-05-17'
    const dobMilliseconds = Date.parse(dobString)
    const currentMilliseconds = Date.now()
    const ageMilliseconds = currentMilliseconds - dobMilliseconds
    const ageYears = new Date(ageMilliseconds).getUTCFullYear() - 1970
    setAge(ageYears)
  }, [])

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

  return (
    <>
      <Head>
        <title>Diogo Paulos - Contacts</title>
      </Head>
      <main className="flex-1 flex flex-col gap-20 xl:gap-40 items-center text-text overflow-x-hidden">
        <div className="w-full h-16 pointer-events-none" />
        <div className="w-full max-w-7xl flex flex-col items-center mb-40">
          <div className="w-fit relative mb-32 group">
            <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
              Who am I?
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all md:group-hover:opacity-0 select-none"
              area-hidden="true"
            >
              Who am I?
            </span>
            <span
              className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-sky-400 to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none"
              area-hidden="true"
            >
              Who am I?
            </span>
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-16 w-full px-8 xs:px-12 sm:px-16 md:px-20">
            <div className="flex items-center w-2/3 relative">
              <Image
                src="/dpaulos6_nobg.png"
                alt="Diogo Paulos"
                width={9999}
                height={9999}
                className="rounded-b-full select-none"
                priority
              />
            </div>
            <div className="flex flex-col gap-6 lg:w-2/3 justify-center text-xl md:text-2xl text-start leading-relaxed relative">
              <span>
                I&apos;m Diogo Paulos, currently {age} years old and living in
                the beauty of{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-sky-400/60 to-60%">
                  Portugal
                </span>
                .
              </span>
              <span>
                One thing that I love is coding . I&apos;m{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-sky-400/60 to-60%">
                  passionate
                </span>{' '}
                about exploring different programming languages and frameworks
                and I&apos;m always eager to{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-sky-400/60 to-60%">
                  learn
                </span>{' '}
                something new. Right now, I&apos;m fully immersed in mastering
                modern web development technologies, so I can take my projects
                to the{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-sky-400/60 to-60%">
                  next level
                </span>
                .
              </span>
              <span>
                Aside from work, I{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-sky-400/60 to-60%">
                  enjoy
                </span>{' '}
                various hobbies, such as cooking , playing video games,
                producing music, taking and editing photos, among others.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl flex flex-col items-center mb-40 px-8">
          <div className="w-fit relative mb-16 group">
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
              className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-sky-400 to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none"
              area-hidden="true"
            >
              Feedback!
            </span>
          </div>
          <span className="max-w-7xl w-full text-center mb-16 text-xl px-8">
            If you have submitted a review and would like to update or remove
            it,{' '}
            <Link href="/contacts" className="text-primary">
              contact me
            </Link>
            !
          </span>
          <button
            className="flex gap-2 items-center ml-auto mb-4 px-4 py-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg select-none"
            onClick={() => setForceRefresh((prev) => prev + 1)}
          >
            <RefreshCwIcon className="w-4 h-auto" />
            Force refresh
          </button>
          <div className="flex flex-col items-center justify-center gap-16 w-full">
            {approvedReviews.length > 0 ? (
              <ResponsiveMasonry
                className="masonry"
                columnsCountBreakPoints={{ 350: 1, 756: 2, 1024: 3 }}
              >
                <Masonry gutter="1.5rem">
                  {approvedReviews.map((review) => (
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
            ) : (
              <span className="text-lg text-neutral-500">
                There are no reviews yet.
              </span>
            )}
            <Dialog>
              <DialogTrigger>
                <ShinyButton>Submit yours</ShinyButton>
              </DialogTrigger>
              <DialogContent className="w-[90vw] sm:w-full text-text">
                <DialogHeader>
                  <span className="text-2xl">Submit your review</span>
                </DialogHeader>
                <div className="flex gap-3 items-center mt-2 -mb-2 p-3 border border-red-300 bg-red-200 dark:border-red-600 dark:bg-red-400 rounded-md text-text">
                  <AlertTriangle className="min-w-16 h-auto text-red-500" />
                  <span>
                    Sensitive information will be collected. See{' '}
                    <Link
                      href="/privacy"
                      className="text-blue-500 hover:underline"
                    >
                      privacy policy
                    </Link>{' '}
                    before continuing!
                  </span>
                </div>
                <div className="flex gap-3 items-center mb-2 p-3 border border-neutral-300 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-400 rounded-md text-text">
                  <span>
                    Before being public, all the reviews are scanned for
                    inappropriate content.
                  </span>
                </div>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 w-full transition-all"
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
                              rows={10}
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
        <div className="w-full max-w-7xl flex flex-col items-center mb-16 px-8 xs:px-12 sm:px-16 md:px-20 lg:px-12 xl:px-0">
          <div className="hidden md:flex w-fit relative mb-32 text-center group">
            <span className="text-5xl md:text-6xl px-48 pt-10 -mt-10 whitespace-nowrap">
              What stack do I use?
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all group-hover:opacity-0 select-none"
              area-hidden="true"
            >
              What stack do I use?
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-sky-400 to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none"
              area-hidden="true"
            >
              What stack do I use?
            </span>
          </div>
          <div className="flex md:hidden w-fit relative mb-32 text-center">
            <span className="text-5xl md:text-6xl whitespace-nowrap">
              What stack?
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 select-none"
              area-hidden="true"
            >
              What stack?
            </span>
          </div>
          <div className="flex flex-wrap gap-y-8 lg:gap-0 lg:flex-nowrap lg:flex-row items-center justify-center lg:justify-between w-full">
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Frameworks</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <NextjsIcon className="w-7 h-7 aspect-square" />
                  NextJS
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <ReactIcon className="w-7 h-7 aspect-square" />
                  React
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <AstroIcon className="w-7 h-7 aspect-square" />
                  Astro
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <ViteIcon className="w-7 h-7 aspect-square" />
                  Vite
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <SvelteIcon className="w-7 h-7 aspect-square" />
                  Svelte
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Languages</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <TypescriptIcon className="w-7 h-7 aspect-square" />
                  Typescript
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <JavascriptIcon className="w-7 h-7 aspect-square" />
                  Javascript
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <PhpIcon className="w-7 h-7 aspect-square" />
                  Php
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <KotlinIcon className="w-7 h-7 aspect-square" />
                  Kotlin
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <CsharpIcon className="w-7 h-7 aspect-square" />
                  C#
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Tools</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <VscodeIcon className="w-7 h-7 aspect-square" />
                  VSCode
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <GitIcon className="w-7 h-7 aspect-square" />
                  Git
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <PostmanIcon className="w-7 h-7 aspect-square" />
                  Postman
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <VercelIcon className="w-7 h-7 aspect-square" />
                  Vercel
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <PnpmIcon className="w-7 h-7 aspect-square" />
                  Pnpm
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Libraries</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <TailwindIcon className="w-7 h-7 aspect-square" />
                  Tailwind
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <ShadcnIcon className="w-7 h-7 aspect-square" />
                  Shadcn
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <LucideIcon className="w-7 h-7 aspect-square" />
                  Lucide
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <PrettierIcon className="w-7 h-7 aspect-square" />
                  Prettier
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                  <EslintIcon className="w-7 h-7 aspect-square" />
                  Eslint
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
