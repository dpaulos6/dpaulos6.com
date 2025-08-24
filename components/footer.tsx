import { ExternalLink } from 'lucide-react'
import { MailIcon } from '@/icons'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='flex w-full justify-center px-8 py-4'>
      <div className="flex flex-wrap justify-center gap-2">
        <Link
          href="https://links.dpaulos6.com"
          className='flex items-center gap-1 rounded-lg px-3 py-1.5 transition hover:bg-primary/10 hover:text-primary'
        >
          <ExternalLink className='h-5 w-5' />
          <span>Contacts</span>
        </Link>
        <Link
          href="mailto:dpaulos6@outlook.com"
          className='flex items-center gap-1 rounded-lg px-3 py-1.5 transition hover:bg-primary/10 hover:text-primary'
        >
          <MailIcon className='h-5 w-5' />
          <span>Email</span>
        </Link>
      </div>
    </footer>
  )
}
