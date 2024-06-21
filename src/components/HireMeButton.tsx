import '@/app/globals.css'
import Link from 'next/link'

export default function About() {
  return (
    <div className="hidden md:flex text-text z-20 rounded-[12.5px] bg-gradient-to-r from-primary to-accent p-[2px] group select-none">
      <Link
        href="/hire"
        className="flex justify-center items-center text-lg rounded-[10px] px-4 py-1 bg-background border-background-border transition-all group-hover:bg-hire-hover focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Hire Me
      </Link>
    </div>
  )
}
