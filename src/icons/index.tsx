import { InstagramIcon } from './InstagramIcon'
import { DarkModeIcon } from './DarkModeIcon'
import { LightModeIcon } from './LightModeIcon'
import { LogoSvg } from './LogoSvg'
import { MenuIcon } from './MenuIcon'
import { MonitorIcon } from './MonitorIcon'
import { MutedIcon } from './MutedIcon'
import { OptionsIcon } from './OptionsIcon'
import { PauseIcon } from './PauseIcon'
import { PlayIcon } from './PlayIcon'
import { VolumeIcon } from './VolumeIcon'
import { GithubIcon } from './GithubIcon'
import { MailIcon } from './MailIcon'
import { YoutubeIcon } from './YoutubeIcon'
import { DiscordIcon } from './DiscordIcon'
import { LinkedinIcon } from './LinkedinIcon'

export {
  InstagramIcon,
  DarkModeIcon,
  LightModeIcon,
  LogoSvg,
  MenuIcon,
  MonitorIcon,
  MutedIcon,
  OptionsIcon,
  PauseIcon,
  PlayIcon,
  VolumeIcon,
  GithubIcon,
  MailIcon,
  YoutubeIcon,
  DiscordIcon,
  LinkedinIcon
}

export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7 10l5 5l5-5"
      ></path>
    </svg>
  )
}

export function WorkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
      ></path>
    </svg>
  )
}
