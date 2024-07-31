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
import { CornerLeftDown } from 'lucide-react'
import { getDob } from '@/utils/dob'
import Image from 'next/image'
import '@/app/globals.css'

export default function Page() {
  const age = getDob('2003-05-17')

  return (
    <>
      <div className="flex-1 flex flex-col gap-20 xl:gap-40 items-center text-text overflow-x-hidden pt-32">
        <div className="w-full max-w-7xl flex flex-col items-center mb-40">
          <div className="w-fit relative mb-32 group cursor-default">
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
              className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-primary-hover to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none"
              area-hidden="true"
            >
              Who am I?
            </span>
          </div>
          <div className="flex flex-col items-center lg:flex-row gap-16 w-full px-8 xs:px-12 sm:px-16 md:px-20">
            <div className="flex items-center w-2/3 relative">
              <div className="absolute -top-12 left-1/2 translate-x-1/3 flex items-center gap-2 z-10">
                <CornerLeftDown className="w-5 sm:w-6 md:w-7 h-auto aspect-square" />
                <div className="flex flex-col items-center -space-y-1 sm:-space-y-2 whitespace-nowrap">
                  <span className="text-sm sm:text-base md:text-lg">
                    Full-stack
                  </span>
                  <span className="text-xs sm:text-sm md:text-base">
                    Developer
                  </span>
                </div>
              </div>
              <Image
                src="/dpaulos6_nobg.png"
                alt="Diogo Paulos"
                width={9999}
                height={9999}
                className="w-full rounded-b-full select-none"
                priority
              />
            </div>
            <div className="flex flex-col gap-6 lg:w-2/3 justify-center text-xl md:text-2xl text-start leading-relaxed relative">
              <span>
                I&apos;m Diogo Paulos, currently {age} years old and living in
                the beauty of{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
                  Portugal
                </span>
                .
              </span>
              <span>
                One thing that I love is coding . I&apos;m{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
                  passionate
                </span>{' '}
                about exploring different programming languages and frameworks
                and I&apos;m always eager to{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
                  learn
                </span>{' '}
                something new. Right now, I&apos;m fully immersed in mastering
                modern web development technologies, so I can take my projects
                to the{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
                  next level
                </span>
                .
              </span>
              <span>
                Aside from work, I{' '}
                <span className="bg-gradient-to-b from-transparent from-60% to-primary/60 to-60%">
                  enjoy
                </span>{' '}
                various hobbies, such as cooking , playing video games,
                producing music, taking and editing photos, among others.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl flex flex-col items-center mb-16 px-8 xs:px-12 sm:px-16 md:px-20 lg:px-12 xl:px-0">
          <div className="w-fit relative mb-24 group cursor-default">
            <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
              Knowledge
            </span>
            <span
              className="absolute top-4 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl  whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all md:group-hover:opacity-0 select-none h-32"
              area-hidden="true"
            >
              Knowledge
            </span>
            <span
              className="hidden md:flex absolute top-4 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-primary-hover to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none h-32"
              area-hidden="true"
            >
              Knowledge
            </span>
          </div>
          <div className="flex flex-wrap gap-y-8 lg:gap-0 lg:flex-nowrap lg:flex-row items-center justify-center lg:justify-between w-full">
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Frameworks</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <NextjsIcon className="w-7 h-7 aspect-square" />
                  NextJS
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <ReactIcon className="w-7 h-7 aspect-square" />
                  React
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <AstroIcon className="w-7 h-7 aspect-square" />
                  Astro
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <ViteIcon className="w-7 h-7 aspect-square" />
                  Vite
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <SvelteIcon className="w-7 h-7 aspect-square" />
                  Svelte
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Languages</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <TypescriptIcon className="w-7 h-7 aspect-square" />
                  Typescript
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <JavascriptIcon className="w-7 h-7 aspect-square" />
                  Javascript
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <PhpIcon className="w-7 h-7 aspect-square" />
                  Php
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <KotlinIcon className="w-7 h-7 aspect-square" />
                  Kotlin
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <CsharpIcon className="w-7 h-7 aspect-square" />
                  C#
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Tools</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <VscodeIcon className="w-7 h-7 aspect-square" />
                  VSCode
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <GitIcon className="w-7 h-7 aspect-square" />
                  Git
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <PostmanIcon className="w-7 h-7 aspect-square" />
                  Postman
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <VercelIcon className="w-7 h-7 aspect-square" />
                  Vercel
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <PnpmIcon className="w-7 h-7 aspect-square" />
                  Pnpm
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto">
              <span className="text-3xl">Libraries</span>
              <div className="w-fit flex flex-col">
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <TailwindIcon className="w-7 h-7 aspect-square" />
                  Tailwind
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <ShadcnIcon className="w-7 h-7 aspect-square" />
                  Shadcn
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <LucideIcon className="w-7 h-7 aspect-square" />
                  Lucide
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <PrettierIcon className="w-7 h-7 aspect-square" />
                  Prettier
                </span>
                <span className="w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default">
                  <EslintIcon className="w-7 h-7 aspect-square" />
                  Eslint
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
