'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DPLogo } from '@/icons/dp'
import Link from 'next/link'

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full h-fit flex justify-center p-8 z-50 select-none">
      <div className="flex w-full max-w-7xl justify-between items-center">
        <Link
          href="/"
          className="text-2xl group rounded-xl"
        >
          <DPLogo className="logo-hover w-12 h-auto" />
        </Link>
        <button
          className="w-12 h-12 flex items-center justify-center text-text p-2 rounded-xl hover:bg-text/5 hover:text-primary transition"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ?
            <Moon className="w-7 h-7" />
          : <Sun className="w-7 h-7" />}
        </button>
      </div>
    </nav>
  )
}
