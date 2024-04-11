'use client'
import '@/app/globals.css'
import {
  AstroIcon,
  CplusplusIcon,
  CsharpIcon,
  EslintIcon,
  GitIcon,
  GoIcon,
  JavaIcon,
  JavascriptIcon,
  KotlinIcon,
  LucideIcon,
  NextjsIcon,
  PhpIcon,
  PnpmIcon,
  PostmanIcon,
  PrettierIcon,
  PythonIcon,
  ReactIcon,
  RustIcon,
  ShadcnIcon,
  SupabaseIcon,
  SvelteIcon,
  SwiftIcon,
  TailwindIcon,
  TypescriptIcon,
  ViteIcon,
  VscodeIcon
} from '@/icons'
import { EllipsisIcon } from 'lucide-react'
import Image from 'next/image'
import Head from "next/head";
import { useEffect, useState } from 'react'

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
    <section className="w-screen h-auto flex flex-col gap-40 items-center text-text">
      <div className="w-full h-16 pointer-events-none" />
      <div className="w-full max-w-7xl flex flex-col items-center mb-40">
        <div className="w-fit relative mb-32">
          <span className="text-6xl">Who am I?</span>
          <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-8xl whitespace-nowrap text-neutral-200/50 -z-10">
            Who am I?
          </span>
        </div>
        <div className="flex gap-16 w-full">
          <div className="flex items-center w-1/3 relative">
            <Image
              src="/dpaulos6_nobg.png"
              alt="Diogo Paulos"
              width={9999}
              height={9999}
              className="rounded-b-full"
              priority
            />
          </div>
          <div className="flex flex-col gap-6 w-2/3 justify-center text-2xl text-start leading-relaxed relative">
            <span>
              I&apos;m Diogo Paulos, and I&apos;m currently {age} years old,
              living in the beauty of Portugal.
            </span>
            <span>
              One thing that I love is coding. I&apos;m passionate about
              exploring different programming languages and frameworks and
              I&apos;m always eager to learn something new. Right now, I&apos;m
              fully immersed in mastering modern web development technologies,
              so I can take my projects to the next level.
            </span>
            <span>
              Aside from work, I enjoy various hobbies, such as cooking, playing
              video games, producing music, taking and editing photos, among
              others.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl flex flex-col items-center pb-40">
        <div className="w-fit relative mb-32">
          <span className="text-6xl">What stack do I use?</span>
          <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-8xl whitespace-nowrap text-neutral-200/50 -z-10">
            What stack do I use?
          </span>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-6">
            <span className="text-3xl">Frameworks</span>
            <div className="flex flex-col">
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <NextjsIcon className="w-7 h-7 aspect-square" />
                NextJS
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <ReactIcon className="w-7 h-7 aspect-square" />
                React
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <AstroIcon className="w-7 h-7 aspect-square" />
                Astro
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <ViteIcon className="w-7 h-7 aspect-square" />
                Vite
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <SvelteIcon className="w-7 h-7 aspect-square" />
                Svelte
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-3xl">Languages</span>
            <div className="flex flex-col">
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <TypescriptIcon className="w-7 h-7 aspect-square" />
                Typescript
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <JavascriptIcon className="w-7 h-7 aspect-square" />
                Javascript
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <PhpIcon className="w-7 h-7 aspect-square" />
                Php
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <KotlinIcon className="w-7 h-7 aspect-square" />
                Kotlin
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <CsharpIcon className="w-7 h-7 aspect-square" />
                C#
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-3xl">Tools</span>
            <div className="flex flex-col">
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <VscodeIcon className="w-7 h-7 aspect-square" />
                VSCode
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <GitIcon className="w-7 h-7 aspect-square" />
                Git
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <PostmanIcon className="w-7 h-7 aspect-square" />
                Postman
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <PrettierIcon className="w-7 h-7 aspect-square" />
                Prettier
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <PnpmIcon className="w-7 h-7 aspect-square" />
                Pnpm
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-3xl">Libraries</span>
            <div className="flex flex-col">
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <TailwindIcon className="w-7 h-7 aspect-square" />
                Tailwind
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <ShadcnIcon className="w-7 h-7 aspect-square" />
                Shadcn
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <LucideIcon className="w-7 h-7 aspect-square" />
                Lucide
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
                <PrettierIcon className="w-7 h-7 aspect-square" />
                Prettier
              </span>
              <span className="w-fit flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition">
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
