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
      className={`flex text-text items-center px-2 h-[40px] rounded-xl border border-transparent hover:bg-hover hover:border-background-border transition-all ${isActive ? 'font-bold' : ''}`}
    >
      {children}
    </Link>
  )
}

export default NavLink
