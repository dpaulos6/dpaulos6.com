'use client'
import '@/app/globals.css'
import {
  AstroIcon,
  GithubIcon,
  HTMLIcon,
  MongoDBIcon,
  NextAuthIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  ResendIcon,
  ShadcnIcon,
  TailwindIcon,
  TypescriptIcon,
  VueIcon
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
import Head from 'next/head'
import { useState } from 'react'

const projects = [
  {
    id: 1,
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
      styles: 'border-transparent bg-sky-300 text-primary-foreground',
      label: 'active portfolio'
    },
    currentWebsite: true
  },
  {
    id: 1,
    name: 'Slotbot Website',
    link: '/',
    thumbnail: 'https://i.imgur.com/mckEczF.png',
    description:
      'This is the new and modern website for SlotBot, an innovative Discord bot designed for economic simulation and competitive PvP gameplay across multiple servers. The website serves as a central hub for SlotBot users and server administrators, providing a seamless experience for accessing bot features and settings.',
    technologies: [
      { label: 'Astro', icon: AstroIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon },
      { label: 'Soon will add the rest', icon: Ellipsis }
    ],
    github: '',
    url: '',
    tag: {
      styles: 'border-transparent bg-yellow-300 text-primary-foreground',
      label: 'under development'
    }
  }
]

// const contributions = [
//   {
//     id: 1,
//     name: 'nizzyabi',
//     url: 'https://www.nizzyabi.com/',
//     github: 'https://github.com/NizarAbiZaher/platform',
//     thumbnail: '',
//     description: ''
//   }
// ]

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(
    Array(projects.length).fill(false)
  )

  function toggleExpanded(index: number) {
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
    <>
      <Head>
        <title>Diogo Paulos - Projects</title>
      </Head>
      <div className="w-screen h-screen flex flex-col gap-2 items-center text-text">
        <span className="text-5xl md:text-6xl text-center mt-32">Projects</span>
        <div className="flex flex-col gap-8 w-full max-w-5xl mt-12 p-8">
          {projects
            .slice()
            .reverse()
            .map((project, i) => (
              <div
                key={i}
                className={`flex items-center w-full p-[2px] rounded-[0.9rem] overflow-hidden transition-all group relative`}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 transition pointer-events-none "></div>
                <div className="flex items-center  w-full h-full gap-8 p-6 rounded-xl bg-background z-10">
                  <div className="flex w-3/5 h-fit aspect-[5/3] relative">
                    <Image
                      src={
                        project.thumbnail
                          ? project.thumbnail
                          : 'https://www.sbrv.org/wp-content/uploads/2019/11/preview.png'
                      }
                      alt={project.name + ' Thumbnail'}
                      width={9999}
                      height={9999}
                      className="flex object-cover object-center select-none rounded-xl border border-neutral-200/60"
                    />
                    <Badge
                      className={`z-50 absolute top-0 -translate-y-1/2 -left-2 lowercase ${project.tag.styles}`}
                    >
                      <span>{project.tag.label}</span>
                    </Badge>
                  </div>
                  <div className="w-full col-span-2 flex flex-col gap-2 py-2 pr-2 h-full">
                    <div className="flex items-center">
                      <span className="text-3xl mr-2">{project.name}</span>
                      {project.currentWebsite ? (
                        <span className="text-neutral-400 text-sm mt-auto mb-1.5 mr-2">
                          this website
                        </span>
                      ) : null}
                      {project.url && !project.currentWebsite ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link href={project.url} target="_blank">
                                <LinkIcon className="p-2 w-10 rounded-md h-full aspect-square opacity-0 group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
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
                            <TooltipTrigger>
                              <Link href={project.github} target="_blank">
                                <GithubIcon className="p-2 w-10 rounded-md h-full aspect-square opacity-0 group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
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
                      className={`${isExpanded[i] ? 'h-auto line-clamp-none overflow-auto' : 'overflow-ellipsis line-clamp-3'} text-base leading-[1.75] mb-2`}
                    >
                      {project.description}
                    </span>
                    <div className="flex w-full gap-4 mt-auto select-none">
                      {project.technologies.map((tech, i) => (
                        <TooltipProvider key={i}>
                          <Tooltip>
                            <TooltipTrigger>
                              <tech.icon className="w-8 h-full aspect-square" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.label}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                      <button
                        onClick={() => toggleExpanded(i)}
                        className="flex ml-auto mr-4 px-4 py-2 rounded-lg hover:bg-primary/15 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:text-primary transition"
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
    </>
  )
}
