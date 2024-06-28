import Link from 'next/link'
import Contacts from './Contacts'

export default function Footer() {
  return (
    <footer className="bg-background-menu py-6 px-8 z-10 mt-12">
      <div className="container max-w-7xl mx-auto flex flex-col-reverse gap-4 md:flex-row items-center justify-between">
        <p className="text-sm text-text-subtitle">
          dpaulos6 - All rights reserved.
        </p>
        <Contacts />
        <Link
          className="text-sm font-medium text-text-subtitle hover:text-text transition"
          href="/privacy"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
