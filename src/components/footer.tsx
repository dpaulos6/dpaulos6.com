import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-8 z-10 mt-12">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <p className="hidden xs:block text-sm text-gray-500">
          dpaulos6 - All rights reserved.
        </p>
        <p className="block xs:hidden text-sm text-gray-500">dpaulos6</p>
        <Link
          className="text-sm font-medium text-gray-500 hover:text-gray-900"
          href="/privacy"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
