import '@/app/globals.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <Head>
        <title>Diogo Paulos - Projects</title>
      </Head>
      <div className="w-full h-full flex flex-col gap-2 items-center justify-center text-text">
        <span className="text-5xl">This is still being built</span>
        <span className="text-lg">
          You can join my{' '}
          <Link
            href="https://discord.gg/Y7ujpKmmma"
            target="_blank"
            className="text-primary"
          >
            discord
          </Link>{' '}
          if you wanna see its progress
        </span>
      </div>
    </>
  )
}
