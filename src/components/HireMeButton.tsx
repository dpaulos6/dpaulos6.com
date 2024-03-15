import '@/app/globals.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-text z-20 hover:-translate-y-2 transition duration-500 rounded-2xl bg-gradient-to-r from-primary to-accent p-1 group select-none">
      <Link
        href="/hire"
        className="flex justify-center items-center text-2xl rounded-xl px-4 py-2 bg-background border-background-border transition-all group-hover:bg-hire-hover"
      >
        Hire Me
      </Link>
    </div>
  )
}
