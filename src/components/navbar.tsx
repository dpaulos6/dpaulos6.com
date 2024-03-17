'use client'
import { useEffect, useState } from 'react'
import { DarkModeIcon } from '@//icons/DarkModeIcon'
import { LightModeIcon } from '@//icons/LightModeIcon'
import { LogoSvg } from '@//icons/LogoSvg'
import { MenuIcon } from '@//icons/MenuIcon'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MonitorIcon } from '@//icons/MonitorIcon'
import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'

type ColorMode = 'light' | 'dark'

export default function Navbar() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Contacts', href: '/contacts' }
  ]

  const [colorMode, setColorMode] = useState<ColorMode>('light')

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

  return (
    <nav className="fixed top-0 left-0 w-full h-fit flex flex-row justify-between xl:px-[10%] px-8 py-2 z-50 select-none">
      <div>
        <Link href="/" className="text-2xl group">
          <span className="text-text group-hover:text-primary transition duration-300">dpaulos</span>
          <span className="text-primary group-hover:text-text transition duration-300">6</span>
        </Link>
      </div>
      <div className="flex items-center gap-6 md:gap-6">
        <ul className="hidden md:flex flex-row gap-6 lowercase">
          {items.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </ul>
        <div>
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
                {colorMode !== "light" ? <DarkModeIcon /> : <LightModeIcon />}
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
    </nav>
  )
}
