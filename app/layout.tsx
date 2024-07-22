import './globals.css'
import Metadata from 'next'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GradientBackground from '@/components/gradient-background'
import { Poppins } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import Head from './_head'
import { getDob } from '@/utils/dob'

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
