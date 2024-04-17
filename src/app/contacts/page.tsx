import '@/app/globals.css'
import {
  InstagramIcon,
  GithubIcon,
  MailIcon,
  YoutubeIcon,
  DiscordIcon,
  LinkedinIcon
} from '@/icons'
import Link from 'next/link'
import Head from 'next/head'

const socials = [
  {
    label: 'Instagram',
    icon: InstagramIcon,
    href: 'https://www.instagram.com/dpaulos6'
  },
  {
    label: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/dpaulos6'
  },
  {
    label: 'Discord',
    icon: DiscordIcon,
    href: 'https://discord.gg/Y7ujpKmmma'
  },
  {
    label: 'GitHub',
    icon: GithubIcon,
    href: 'https://www.github.com/dpaulos6'
  },
  // {
  //   label: 'YouTube',
  //   icon: YoutubeIcon,
  //   href: 'https://www.youtube.com/@dpaulos6'
  // },
  {
    label: 'Email',
    icon: MailIcon,
    href: 'mailto:dpaulos6@outlook.com'
  }
]

export default function Page() {
  return (
    <>
      <Head>
        <title>Diogo Paulos - Contact</title>
      </Head>
      <div className="w-full h-full flex items-center justify-center text-text">
        <div className="flex flex-col gap-6 items-center justify-center max-w-7xl px-8">
          <span className="text-2xl md:text-4xl text-center">
            You can <b className="text-primary font-semibold">contact</b> me
            using the links bellow
          </span>
          <div className="flex flex-wrap md:flex-nowrap px-16 items-center justify-center gap-2 md:gap-0 w-fit mx-auto">
            {socials.map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className="w-fit flex gap-1.5 items-center py-0.5 px-1.5 md:py-1 md:px-2 rounded-lg hover:bg-primary/10 hover:text-primary transition"
              >
                <social.icon className="text-2xl md:text-3xl" />
                <span className="text-xl md:text-2xl">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
