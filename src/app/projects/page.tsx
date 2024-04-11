import '@/app/globals.css'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-2 items-center justify-center text-text overflow-hidden">
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
