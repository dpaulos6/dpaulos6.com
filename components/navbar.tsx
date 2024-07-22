'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import HireMeButton from '@/components/HireMeButton'
import config from '@/config.json'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full h-fit flex justify-center px-8 py-4 z-50 select-none">
      <div className="flex w-full max-w-7xl justify-between">
        <div>
          <Link href="/" className="text-2xl group rounded-xl">
            <span className="text-text group-hover:text-primary transition duration-300">
              dpaulos
            </span>
            <span className="text-primary group-hover:text-text transition duration-300">
              6
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-6 md:gap-6">
          {config.open_to_hire && <HireMeButton />}
          <button
            className="text-text p-2 rounded-xl hover:bg-text/5 transition"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </div>
      </div>
    </nav>
  )
}
