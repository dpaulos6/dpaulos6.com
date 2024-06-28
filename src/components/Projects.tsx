'use client'
import '@/app/globals.css'
import {
  GithubIcon,
  NextjsIcon,
  ResendIcon,
  ShadcnIcon,
  TailwindIcon,
  TypescriptIcon
} from '@/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { Ellipsis, LinkIcon } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    name: 'Portfolio',
    link: '/',
    thumbnail: '/thumbnail.png',
    description:
      'This website is an attempt to describe who I am as a person, using a color palette that I enjoy. All of the content included and design of the website is as much unique as my creativity allows, trying to reflect my style and vibe.',
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon },
      { label: 'Shadcn UI', icon: ShadcnIcon },
      { label: 'Resend', icon: ResendIcon }
    ],
    github: 'https://github.com/dpaulos6/portfolio',
    url: 'https://dpaulos6.xyz/',
    tag: {
      styles: 'border-transparent bg-primary-hover text-primary-foreground',
      label: 'active portfolio'
    },
    currentWebsite: true
  },
  {
    name: 'Slotbot Website',
    link: '/',
    thumbnail: 'https://i.imgur.com/mckEczF.png',
    description:
      'This is the new and modern website for SlotBot, an innovative Discord bot designed for economic simulation and competitive PvP gameplay across multiple servers. The website serves as a central hub for SlotBot users and server administrators, providing a seamless experience for accessing bot features and settings.',
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon },
      { label: 'Among others', icon: Ellipsis }
    ],
    github: '',
    url: '',
    tag: {
      styles:
        'border-transparent bg-yellow-300 dark:bg-yellow-500 text-primary-foreground',
      label: 'under development'
    }
  }
]

const contributions = [
  {
    name: 'Nizzy Starter',
    url: 'https://www.nizzystarter.com/',
    github: 'https://github.com/NizarAbiZaher/nizzy-starter',
    thumbnail: '/thumbnails/nizzystarter.png',
    description:
      'Nizzy Starter is an open-source SaaS Starter Kit with bare minimum configuration, ready to go.',
    role: 'Styling and documentation'
  },
  {
    name: 'nizzyabi',
    url: 'https://www.nizzyabi.com/',
    github: 'https://github.com/NizarAbiZaher/platform',
    thumbnail: '/thumbnails/nizzyabi.png',
    description:
      'Nizzyabi.com is a Programming Course Platform for self-taught developers who want to improve their web development skills.',
    role: 'Styling and documentation'
  },
  {
    name: 'Would You Bot',
    url: 'https://wouldyoubot.gg/',
    github: 'https://github.com/Would-You-Bot/website',
    thumbnail: 'https://i.imgur.com/BsWSxze.png',
    description:
      'Play fun and entertaining games with Would You, featuring user polls and customization. Play Would You Rather, Never Have I Ever, Higher or Lower, and What Would You Do!',
    role: 'Web Developer'
  }
]

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(
    Array(projects.length).fill(false)
  )

  function toggleProjectExpanded(index: number) {
    const expandedCopy = Array(projects.length).fill(false)
    expandedCopy[index] = !isExpanded[index]
    setIsExpanded(expandedCopy)

    for (let i = 0; i < projects.length; i++) {
      if (i !== index && isExpanded[i]) {
        expandedCopy[i] = false
      }
    }
  }

  return (
    <div className="w-screen h-auto flex flex-col gap-20 items-center text-text py-32">
      <div className="flex flex-col items-center gap-12 pt-12">
        <div className="w-fit relative group cursor-default">
          <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
            Projects
          </span>
          <span
            className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all md:group-hover:opacity-0"
            area-hidden="true"
          >
            Projects
          </span>
          <span
            className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-primary-hover to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50"
            area-hidden="true"
          >
            Projects
          </span>
        </div>
        <div className="flex flex-col items-center gap-6 w-full max-w-5xl p-8">
          {projects
            .slice()
            .reverse()
            .map((project, i) => (
              <div
                key={i}
                className={`flex justify-center items-center w-fit lg:w-full p-[2px] rounded-[0.9rem] overflow-hidden transition-all group relative`}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 transition pointer-events-none "></div>
                <div className="flex flex-col max-w-96 md:max-w-xl lg:max-w-none lg:flex-row items-center w-full h-full gap-4 md:gap-6 lg:gap-8 p-6 rounded-xl bg-background-menu z-10">
                  <div className="flex basis-3/5 w-full h-fit aspect-[5/3] relative">
                    <Image
                      src={
                        project.thumbnail
                          ? project.thumbnail
                          : 'https://www.sbrv.org/wp-content/uploads/2019/11/preview.png'
                      }
                      alt={project.name + ' Thumbnail'}
                      width={9999}
                      height={9999}
                      className="flex object-cover object-center select-none rounded-xl border border-text/10"
                    />
                    <Badge
                      className={`z-50 w-max absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:-left-2 lg:translate-x-0 lowercase ${project.tag.styles}`}
                    >
                      <span>{project.tag.label}</span>
                    </Badge>
                  </div>
                  <div className="w-full col-span-2 flex flex-col gap-2 py-2 pr-2 h-full">
                    <div className="flex items-center">
                      <span className="text-xl md:text-2xl lg:text-3xl mr-2">
                        {project.name}
                      </span>
                      {project.url && !project.currentWebsite ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger tabIndex={-1}>
                              <Link
                                href={project.url}
                                className=""
                                target="_blank"
                              >
                                <LinkIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Visit URL</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : null}
                      {project.github ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger tabIndex={-1}>
                              <Link
                                href={project.github}
                                className=""
                                target="_blank"
                              >
                                <GithubIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View on GitHub</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : null}
                    </div>
                    <span
                      className={`${isExpanded[i] ? 'h-auto line-clamp-none overflow-auto' : 'lg:overflow-ellipsis lg:line-clamp-3'} text-xs md:text-sm lg:text-base leading-[1.75] mb-2`}
                    >
                      {project.description}
                    </span>
                    <div className="flex flex-wrap w-full gap-4 mt-auto select-none">
                      {project.technologies.map((tech, i) => (
                        <TooltipProvider key={i}>
                          <Tooltip>
                            <TooltipTrigger className="h-fit rounded-md ">
                              <tech.icon className="w-6 md:w-8 h-full aspect-square" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.label}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                      <button
                        onClick={() => toggleProjectExpanded(i)}
                        className="hidden lg:flex ml-auto mr-4 px-4 py-2 rounded-lg hover:bg-primary/15 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:text-primary transition "
                      >
                        {isExpanded[i] ? 'Collapse' : 'Expand'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 pt-12">
        <div className="w-fit relative group cursor-default">
          <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
            Contributions
          </span>
          <span
            className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all md:group-hover:opacity-0"
            area-hidden="true"
          >
            Contributions
          </span>
          <span
            className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-primary-hover to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50"
            area-hidden="true"
          >
            Contributions
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-6 w-full max-w-5xl p-8">
          {contributions.map((contribution, i) => (
            <div
              key={i}
              className={`flex justify-center items-center w-fit md:w-full basis-[calc(50%-0.75rem)] p-[2px] rounded-[0.9rem] overflow-hidden transition-all group relative`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 transition pointer-events-none "></div>
              <div className="flex flex-col max-w-96 md:max-w-xl lg:max-w-none items-center w-full h-full gap-4 md:gap-6 lg:gap-4 p-6 rounded-xl bg-background-menu z-10">
                <div className="flex basis-3/5 w-full h-fit aspect-[5/3] relative">
                  <Image
                    src={
                      contribution.thumbnail
                        ? contribution.thumbnail
                        : 'https://www.sbrv.org/wp-content/uploads/2019/11/preview.png'
                    }
                    alt={contribution.name + ' Thumbnail'}
                    width={9999}
                    height={9999}
                    className="flex object-cover object-center select-none rounded-xl border border-text/10"
                  />
                  <Badge
                    className={`z-50 w-max absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:-left-2 lg:translate-x-0 lowercase bg-primary-hover`}
                  >
                    <span>{contribution.role}</span>
                  </Badge>
                </div>
                <div className="w-full col-span-2 flex flex-col gap-2 py-2 pr-2 h-full">
                  <div className="flex items-center">
                    <span className="text-xl md:text-2xl lg:text-3xl mr-2">
                      {contribution.name}
                    </span>
                    {contribution.url ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <Link href={contribution.url} target="_blank">
                              <LinkIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Visit URL</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : null}
                    {contribution.github ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <Link href={contribution.github} target="_blank">
                              <GithubIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View on GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
