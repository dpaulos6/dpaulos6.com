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
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-fit flex justify-center px-8 py-4 z-50 bg-background`}
    >
      <div className="flex w-full max-w-7xl justify-between">
        <div>
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
