'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname()
  const isActive = path === href

  return (
    <Link
      href={href}
      className={`flex items-center px-2 hover:text-primary transition-all ${isActive ? 'text-primary' : 'text-text'}`}
    >
      {children}
    </Link>
  )
}

export default NavLink
