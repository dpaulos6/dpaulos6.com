import {
  InstagramIcon,
  GithubIcon,
  MailIcon,
  DiscordIcon,
  LinkedinIcon
} from '@/icons'
import Link from 'next/link'
import '@/app/globals.css'

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
    href: 'https://discordapp.com/users/256154963602964480'
  },
  {
    label: 'GitHub',
    icon: GithubIcon,
    href: 'https://www.github.com/dpaulos6'
  },
  {
    label: 'Email',
    icon: MailIcon,
    href: 'mailto:dpaulos6@outlook.com'
  }
]

export default function Contacts() {
  return (
    <div className="flex flex-wrap gap-1 md:flex-nowrap px-8 items-center justify-center w-fit mx-auto">
      {socials.map((social, i) => (
        <Link
          key={i}
          href={social.href}
          target="_blank"
          className="w-fit flex gap-1.5 items-center p-1.5 rounded-xl hover:bg-primary/10 hover:text-primary transition select-none"
        >
          <social.icon className="text-2xl md:text-3xl" />
          <span className="text-xl md:text-2xl sr-only">{social.label}</span>
        </Link>
      ))}
    </div>
  )
}
