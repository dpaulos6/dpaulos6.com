import type { Metadata } from 'next'
import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Navbar from '@/components/navbar'
import BackgroundAudio from '@/components/BackgroundAudio'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GradientBackground from '@/components/gradient-background'
import Background from '@/components/someone-background'

import { Poppins } from 'next/font/google'

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
      <head>
        <title>Diogo Paulos</title>

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#40A2E3" />
        <meta name="msapplication-TileColor" content="#40A2E3" />

        <meta
          name="google-site-verification"
          content="GIEMYYdVuBC-MWItd08APF11prO3MTs2ko1Ifu2jINU"
        />

        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://dpaulos6.xyz/" />
        <meta property="og:site_name" content="Diogo Paulos' Portfolio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Diogo Paulos",
              "url": "https://dpaulos6.xyz",
              "image": "https://www.dpaulos6.xyz/_next/image?url=%2Fdpaulos6_nobg.png&w=3840&q=75",
              "sameAs": [
                "https://www.linkedin.com/in/dpaulos6/",
                "https://discord.com/invite/Y7ujpKmmma",
                "https://github.com/dpaulos6",
                "https://www.instagram.com/dpaulos6"
              ],
              "jobTitle": "Frontend Developer Intern",
              "worksFor": {
                "@type": "Organization",
                "name": "Bomsite"
              }
            }
            `
          }}
        ></script>

        <script
          defer
          data-domain="dpaulos6.xyz"
          src="https://stats.wouldyoubot.gg/js/script.js"
        ></script>
      </head>
      <body>
        <GradientBackground />
        <div className="min-h-screen hidden limit:flex select-none">
          <Navbar />
          <div className="w-full flex z-10">{children}</div>
          {/* <BackgroundAudio /> */}
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
