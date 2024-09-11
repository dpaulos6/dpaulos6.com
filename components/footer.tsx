import { ExternalLink } from 'lucide-react'
import { MailIcon } from '@/icons'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex justify-center w-full px-8 py-4">
      <div className="flex flex-wrap justify-center gap-2">
        <Link
          href="https://links.dpaulos6.com"
          className="flex gap-1 items-center rounded-lg px-3 py-1.5 hover:text-primary hover:bg-primary/10 transition"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Contacts</span>
        </Link>
        <Link
          href="mailto:dpaulos6@outlook.com"
          className="flex gap-1 items-center rounded-lg px-3 py-1.5 hover:text-primary hover:bg-primary/10 transition"
        >
          <MailIcon className="w-5 h-5" />
          <span>Email</span>
        </Link>
      </div>
    </footer>
  )
}
