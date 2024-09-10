import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon
} from '@/icons'
import { Contact } from '@/interfaces'

export const contacts: Contact[] = [
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
  {
    label: 'Email',
    icon: MailIcon,
    href: 'mailto:dpaulos6@outlook.com'
  }
]
