import { useState, useEffect } from 'react'
import { DarkModeIcon } from '@/icons/DarkModeIcon'
import { LightModeIcon } from '@/icons/LightModeIcon'
import { LogoSvg } from '@/icons/LogoSvg'
import { MenuIcon } from 'lucide-react'

export default function Navbar() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Contacts', href: '/contacts' }
  ]

  const [activeUrl, setActiveUrl] = useState(window.location.pathname)

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveUrl(window.location.pathname)
    }

    window.addEventListener('popstate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  const [colorMode, setColorMode] = useState('light')

  function changeColorMode() {
    const body = document.body
    if (colorMode === 'light') {
      body.className = 'dark'
      setColorMode('dark')
    } else {
      body.className = 'light'
      setColorMode('light')
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row justify-between xl:px-[10%] px-8 py-4 z-50">
      <div>
        <a href="/" className="group">
          <LogoSvg className="w-10 h-fit fill-text" />
        </a>
      </div>
      <div className="flex items-center gap-6 md:gap-10">
        <ul className="hidden md:flex flex-row gap-10 lowercase">
          {items.map((item, index) => (
            <li
              key={index}
              className={`navbar-link text-lg ${activeUrl == item.href ? 'active' : ''}`}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div>
          {colorMode === 'light' ? (
            <button
              className="flex justify-center items-center w-10 h-10 text-3xl rounded-full p-1 hover:bg-hover transition-all"
              onClick={changeColorMode}
            >
              <DarkModeIcon className="text-text" />
            </button>
          ) : (
            <button
              className="flex justify-center items-center w-10 h-10 text-3xl rounded-full p-1 hover:bg-hover transition-all"
              onClick={changeColorMode}
            >
              <LightModeIcon className="text-text" />
            </button>
          )}
        </div>
        <div className='flex md:hidden'>
          <button className="flex justify-center items-center">
            <MenuIcon className='text-text w-10 h-10 rounded-full p-2 hover:bg-hover transition-all'/>
          </button>
        </div>
      </div>
    </nav>
  )
}
