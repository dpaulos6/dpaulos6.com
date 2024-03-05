import { useEffect, useState } from 'react'
import { DarkModeIcon } from '@/icons/DarkModeIcon'
import { LightModeIcon } from '@/icons/LightModeIcon'
import { LogoSvg } from '@/icons/LogoSvg'
import { MenuIcon } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

type ColorMode = 'light' | 'dark'

export default function Navbar() {
  const items = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Contacts', href: '/contacts' }
  ]

  const [colorMode, setColorMode] = useState<ColorMode>(
    (localStorage.getItem('theme') as ColorMode | null) ?? 'light'
  )

  function changeColorMode() {
    const newMode = colorMode === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newMode)
    setColorMode(newMode)
  }

  // UseEffect hook to update data-theme attribute of HTML element when colorMode changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode)
  }, [colorMode])

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-row justify-between xl:px-[10%] px-8 py-4 z-50">
      <div>
        <Link to="/" className="group">
          <LogoSvg className="w-10 h-fit fill-text" />
        </Link>
      </div>
      <div className="flex items-center gap-6 md:gap-10">
        <ul className="hidden md:flex flex-row gap-10 lowercase">
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                isActive ? "navbar-link text-lg active" : "navbar-link text-lg"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </ul>
        <div>
          <button
            className="flex justify-center items-center w-10 h-10 text-3xl rounded-full p-1 hover:bg-hover transition-all"
            onClick={changeColorMode}
          >
            {colorMode === 'light' ? (
              <DarkModeIcon className="text-text" />
            ) : (
              <LightModeIcon className="text-text" />
            )}
          </button>
        </div>
        <div className="flex md:hidden">
          <button className="flex justify-center items-center">
            <MenuIcon className="text-text w-10 h-10 rounded-full p-2 hover:bg-hover transition-all" />
          </button>
        </div>
      </div>
    </nav>
  )
}
