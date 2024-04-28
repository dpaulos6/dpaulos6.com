'use client'
import {
  FolderIcon,
  HomeIcon,
  InfoIcon,
  MenuIcon,
  PhoneIcon,
  WorkIcon
} from '@/icons'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import NavLink from '@/components/NavLink'
import HireMeButton from '@/components/HireMeButton'

const items = [
  {
    label: 'Home',
    value: '#home',
    href: '/',
    icon: HomeIcon,
    mobileOnly: false
  },
  {
    label: 'About',
    value: '#about',
    href: '/about',
    icon: InfoIcon,
    mobileOnly: false
  },
  {
    label: 'Projects',
    value: '#projects',
    href: '/projects',
    icon: FolderIcon,
    mobileOnly: false
  },
  {
    label: 'Contacts',
    value: '#contacts',
    href: '/contacts',
    icon: PhoneIcon,
    mobileOnly: false
  },
  {
    label: 'Hire Me',
    value: '#hire',
    href: '/chire',
    icon: WorkIcon,
    mobileOnly: true
  }
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
          <HireMeButton />
          <div className="flex md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-center items-center w-9 h-9 text-2xl rounded-xl text-text transition-all ring-0 outline-none border border-transparent hover:text-primary data-[state=open]:text-primary">
                <MenuIcon className="w-full h-full" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background-menu rounded-lg border-background-border mr-6">
                {items.map((item, index) => (
                  <Link key={index} href={item.href} target="_self">
                    <DropdownMenuItem className="hover:!bg-background-hover px-2.5 py-1.5 !text-text text-lg rounded-md gap-2 cursor-pointer group">
                      <item.icon className="group-hover:text-primary transition" />
                      {item.label}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}
