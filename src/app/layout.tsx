import type { Metadata } from 'next'
import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Navbar from '@/components/navbar'
import BackgroundAudio from '@/components/BackgroundAudio'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  title: 'dpaulos6',
  description: "dpaulos6' Personal Portfolio"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>dpaulos6</title>
      </head>
      <body>
        <div className="hidden limit:flex">
          <BackgroundBeams />
          <Navbar />
          <div className='z-10'>{children}</div>
          <BackgroundAudio />
        </div>
        <div className="w-screen h-screen flex justify-center items-center limit:hidden">
          <span className="flex text-text text-base text-center px-4">
            Your device&apos;s screen is too small to render this website.
          </span>
        </div>
        <ThemeSwitcher />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
