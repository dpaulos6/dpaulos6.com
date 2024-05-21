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

export default function Page() {
  const [age, setAge] = useState(0)

  useEffect(() => {
    var dob = new Date(2003, 5, 17)
    var diff_ms = Date.now() - dob.getTime()
    var age_dt = new Date(diff_ms)
    setAge(Math.abs(age_dt.getUTCFullYear() - 1970))
  }, [])

  return (
    <>
      <Head>
        <title>Diogo Paulos - About Me</title>
      </Head>
      <section className="flex-1 flex flex-col pt-24 md:pt-0 md:gap-40 items-center text-text overflow-x-hidden">
        <div className="w-full h-16 pointer-events-none" />
        <div className="w-full max-w-7xl flex flex-col items-center mb-40">
          <div className="w-fit relative mb-32 group">
            <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
              Who am I?
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 -z-10 transition-all md:group-hover:opacity-0"
              area-hidden="true"
            >
              Who am I?
            </span>
            <span
              className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-sky-400 to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50"
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
                className="rounded-b-full"
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
        <div className="w-full max-w-7xl flex flex-col items-center mb-40">
          <div className="w-fit relative mb-32 group">
            <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
              Feedback!
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl  whitespace-nowrap text-neutral-200/50 -z-10 transition-all md:group-hover:opacity-0"
              area-hidden="true"
            >
              Feedback!
            </span>
            <span
              className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-sky-400 to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50"
              area-hidden="true"
            >
              Feedback!
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-16 w-full px-8 xs:px-12 sm:px-16 md:px-20">
            <div>
              <span>There is no reviews yet</span>
            </div>
            <ShinyButton>Submit yours</ShinyButton>
          </div>
        </div>
        <div className="w-full max-w-7xl flex flex-col items-center pb-20 md:pb-40 px-8 xs:px-12 sm:px-16 md:px-20 lg:px-12 xl:px-0">
          <div className="hidden md:flex w-fit relative mb-32 text-center group">
            <span className="text-5xl md:text-6xl px-48 pt-10 -mt-10 whitespace-nowrap">
              What stack do I use?
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 -z-10 transition-all group-hover:opacity-0"
              area-hidden="true"
            >
              What stack do I use?
            </span>
            <span
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-sky-400 to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50"
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
              className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 -z-10"
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
      </section>
    </>
  )
}
