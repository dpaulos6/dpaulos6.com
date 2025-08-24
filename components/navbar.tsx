'use client'

import { Download, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { DPLogo } from '@/icons/dp'
import Link from 'next/link'

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className='z-50 flex h-fit w-full select-none justify-center p-8 '>
      <div className='flex w-full max-w-7xl items-center justify-between'>
        <Link
          href="/"
          className='group rounded-xl text-2xl'
        >
          <DPLogo className='logo-hover h-auto w-10 md:w-12' />
        </Link>
        <div className="flex gap-2">
          <a
            href="/downloads/dpaulos6cv.pdf"
            className='flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-xl p-2 text-text transition hover:bg-text/5 hover:text-primary md:h-12'
            download
          >
            <Download className='h-7 w-7' />
            <span className='hidden text-lg md:block'>Download CV</span>
            <span className="text-lg md:hidden">CV</span>
          </a>
          <button
            className='flex h-10 w-10 items-center justify-center rounded-xl p-2 text-text transition hover:bg-text/5 hover:text-primary md:h-12 md:w-12'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              <Moon className='h-7 w-7' />
            ) : (
              <Sun className='h-7 w-7' />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
