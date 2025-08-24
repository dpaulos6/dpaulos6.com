'use client'

import GradientBackground from '@/components/gradient-background'
import { ThemeProvider } from '@/components/theme-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Poppins } from 'next/font/google'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/app/globals.css'
import Head from './_head'

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={font.className}
    >
      <Head />
      <body className="overflow-y-auto">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='relative z-10 limit:flex hidden min-h-screen flex-col'>
            <Navbar />
            {children}
            <Footer />
          </div>
          <div className='flex limit:hidden h-screen w-screen items-center justify-center'>
            <span className='flex px-4 text-center text-base text-text'>
              Your device&apos;s screen is too small to render this website.
            </span>
          </div>
          <GradientBackground />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
