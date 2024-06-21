import type { Metadata } from 'next'
import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GradientBackground from '@/components/gradient-background'

import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/footer'
import Head from './_head'

const font = Poppins({ subsets: ['latin'], weight: '400' })

function age() {
  var dob = new Date(2003, 5, 17)
  var diff_ms = Date.now() - dob.getTime()
  var age_dt = new Date(diff_ms)
  return Math.abs(age_dt.getUTCFullYear() - 1970)
}

export const metadata: Metadata = {
  title: 'Diogo Paulos',
  description: `I'm Diogo Paulos, and I'm currently ${age()} years old, living in the beauty of Portugal.`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={font.className}>
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GradientBackground />
          <div className="min-h-screen hidden limit:flex flex-col">
            <Navbar />
            <div className="w-full flex-1 flex z-10">{children}</div>
            <Toaster />
            <Footer />
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
