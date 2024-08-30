'use client'

import GradientBackground from '@/components/gradient-background'
import { ThemeProvider } from '@/components/theme-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Preloader } from '@/components/preloader'
import { Toaster } from '@/components/ui/toaster'
import { use, useEffect, useState } from 'react'
import { Poppins } from 'next/font/google'
import { set } from 'react-hook-form'
import { getDob } from '@/utils/dob'
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Head from './_head'
import './globals.css'

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// export const metadata: Metadata = {
//   title: 'Diogo Paulos',
//   description: `I'm Diogo Paulos, and I'm currently ${getDob('2003-05-17')} years old, living in the beauty of Portugal.`
// }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [active, setActive] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setActive(false)
    }
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  })

  return (
    <html
      lang="en"
      className={font.className}
    >
      <Head />
      <body className={cn(active ? 'overflow-hidden' : 'overflow-y-auto')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {active && <Preloader />}
          <GradientBackground />
          <div className="min-h-screen hidden limit:flex flex-col">
            <div className="w-full flex-1 flex flex-col z-10">{children}</div>
            <Toaster />
          </div>
          <div className="w-screen h-screen flex justify-center items-center limit:hidden">
            <span className="flex text-text text-base text-center px-4">
              Your device&apos;s screen is too small to render this website.
            </span>
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
