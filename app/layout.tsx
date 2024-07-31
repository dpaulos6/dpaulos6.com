import GradientBackground from '@/components/gradient-background'
import { ThemeProvider } from '@/components/theme-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from '@/components/ui/toaster'
import AdBanner from '@/components/AdBanner'
import { Poppins } from 'next/font/google'
import { getDob } from '@/utils/dob'
import type { Metadata } from 'next'
import Head from './_head'
import './globals.css'

const font = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Diogo Paulos',
  description: `I'm Diogo Paulos, and I'm currently ${getDob('2003-05-17')} years old, living in the beauty of Portugal.`
}

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
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GradientBackground />
          <div className="min-h-screen hidden limit:flex flex-col">
            <div className="w-full flex-1 flex flex-col z-10">{children}</div>
            <AdBanner
              adClient="ca-pub-4113864436683156"
              adSlot="4113864436683156"
            />
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
