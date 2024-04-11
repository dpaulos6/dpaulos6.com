'use client'
import { useEffect, useState } from 'react'
import { DarkModeIcon } from '@/icons'
import { LightModeIcon } from '@/icons'
import { MenuIcon } from '@/icons'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MonitorIcon } from '@/icons'
import NavLink from '@/components/NavLink'

type ColorMode = 'light' | 'dark'

const items = [
  { label: 'Home', value: '#home', href: '/' },
  { label: 'About', value: '#about', href: '/about' },
  { label: 'Projects', value: '#projects', href: '/projects' },
  { label: 'Contacts', value: '#contacts', href: '/contacts' }
]

export default function Navbar() {
  const [colorMode, setColorMode] = useState<ColorMode>('light')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      const initialColorMode: ColorMode =
        storedTheme === 'light' || storedTheme === 'dark'
          ? storedTheme
          : 'light'
      setColorMode(initialColorMode)
    }
  }, [])

  function changeColorMode() {
    const newMode = colorMode === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newMode)
    setColorMode(newMode)
  }

  const setLightMode = () => {
    localStorage.setItem('theme', 'light')
    setColorMode('light')
  }

  const setDarkMode = () => {
    localStorage.setItem('theme', 'dark')
    setColorMode('dark')
  }

  const setSystemMode = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const newMode = prefersDarkMode ? 'dark' : 'light'
    localStorage.setItem('theme', newMode)
    setColorMode(newMode)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode)
  }, [colorMode])

  // useEffect(() => {
  //   console.log('scroll check mounted')

  //   const handleScroll = () => {
  //     console.log('scrolled')
  //     const scroll = window.scrollY
  //     scroll > 25 ? setIsScrolled(true) : setIsScrolled(false)
  //   }

  //   window.addEventListener('scroll', () => {
  //     console.log('scroll')
  //   })

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-fit flex justify-center px-8 py-4 z-50 bg-background`}
    >
      <div className="flex w-full max-w-7xl justify-between">
        <div
          className={`${isScrolled ? 'absolute top-8 left-8' : ''} transition-all duration-300`}
        >
          <Link href="/" className="text-2xl group">
            <span className="text-text group-hover:text-primary transition duration-300">
              dpaulos
            </span>
            <span className="text-primary group-hover:text-text transition duration-300">
              6
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-6 md:gap-6">
          <NavLink items={items} />
          <div className="hidden">
            <div className="flex md:hidden">
              <button
                className="flex justify-center items-center w-10 h-10 text-3xl rounded-xl p-1 text-text border border-transparent hover:bg-hover hover:border-background-border transition-all"
                onClick={changeColorMode}
              >
                {colorMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              </button>
            </div>
            <div className="hidden md:flex">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center w-10 h-10 text-3xl rounded-xl text-text transition-all ring-0 outline-none border border-transparent hover:text-primary data-[state=open]:text-primary">
                  {colorMode !== 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background-menu rounded-lg border-background-border">
                  <DropdownMenuItem
                    className="hover:!bg-background-hover !text-text text-md rounded-md gap-2 cursor-pointer group"
                    onClick={setLightMode}
                  >
                    <LightModeIcon className="group-hover:text-primary transition" />
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:!bg-background-hover !text-text text-md rounded-md gap-2 cursor-pointer group"
                    onClick={setDarkMode}
                  >
                    <DarkModeIcon className="group-hover:text-primary transition" />
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="hover:!bg-background-hover !text-text text-md rounded-md gap-2 cursor-pointer group"
                    onClick={setSystemMode}
                  >
                    <MonitorIcon className="group-hover:text-primary transition" />
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex md:hidden">
            <button className="flex justify-center items-center">
              <MenuIcon className="text-text w-10 h-10 rounded-xl p-2 border border-transparent hover:bg-hover hover:border-background-border transition-all" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
