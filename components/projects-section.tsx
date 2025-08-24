'use client'

import { Title } from '@/components/title'
import { Badge } from '@/components/ui/badge'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { contributions, projects } from '@/data'
import { GithubIcon } from '@/icons'
import { cn } from '@/lib/utils'
import { LinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(
    new Array(projects.length).fill(false)
  )

  function toggleProjectExpanded(index: number) {
    const expandedCopy = new Array(projects.length).fill(false)
    expandedCopy[index] = !isExpanded[index]
    setIsExpanded(expandedCopy)

    for (let i = 0; i < projects.length; i++) {
      if (i !== index && isExpanded[i]) {
        expandedCopy[i] = false
      }
    }
  }

  return (
    <div className="flex h-auto w-screen flex-col items-center gap-20 py-12 text-text">
      <div className="flex w-full flex-col items-center gap-12 pt-12">
        <Title title="Projects" />
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-2">
          <TooltipProvider delayDuration={0}>
            {projects
              .slice()
              .reverse()
              .map((project, i) => (
                <div
                  key={i}
                  className={
                    'group relative flex w-full items-center justify-center overflow-hidden rounded-[0.9rem] p-[2px] transition-all'
                  }
                >
                  <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-gradient-to-br from-primary to-accent opacity-0 transition group-hover:opacity-50" />
                  <div className="z-10 flex h-full w-full flex-col gap-4 rounded-xl bg-background-menu p-6">
                    <div className="relative flex aspect-[5/3] h-fit max-h-52 w-full basis-3/5">
                      <Image
                        src={
                          project.thumbnail ?
                            project.thumbnail
                          : 'https://www.sbrv.org/wp-content/uploads/2019/11/preview.png'
                        }
                        alt={`${project.name} Thumbnail`}
                        fill
                        className="rounded-xl border border-text/10 object-cover"
                      />
                      <Badge
                        className={cn(
                          '-translate-y-1/2 -translate-x-1/2 lg:-left-2 absolute top-0 left-1/2 z-50 w-max lowercase lg:translate-x-0',
                          project.tag.styles
                        )}
                      >
                        <span>{project.tag.label}</span>
                      </Badge>
                    </div>
                    <div className="w-full col-span-2 flex flex-col gap-2 py-2 pr-2 h-full">
                      <div className="flex items-center">
                        <span className="mr-2 text-xl md:text-2xl lg:text-3xl">
                          {project.name}
                        </span>
                        {project.url && !project.currentWebsite ?
                          <Tooltip>
                            <TooltipTrigger tabIndex={-1}>
                              <Link
                                href={project.url}
                                className=""
                                target="_blank"
                              >
                                <LinkIcon className="aspect-square h-full w-10 rounded-md p-2 transition hover:bg-primary/15 hover:text-primary lg:opacity-0 lg:group-hover:opacity-100" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Visit URL</p>
                            </TooltipContent>
                          </Tooltip>
                        : null}
                        {project.github ?
                          <Tooltip>
                            <TooltipTrigger tabIndex={-1}>
                              <Link
                                href={project.github}
                                className=""
                                target="_blank"
                              >
                                <GithubIcon className="aspect-square h-full w-10 rounded-md p-2 transition hover:bg-primary/15 hover:text-primary lg:opacity-0 lg:group-hover:opacity-100" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View on GitHub</p>
                            </TooltipContent>
                          </Tooltip>
                        : null}
                      </div>
                      <span
                        className={cn(
                          'mb-2 text-xs leading-[1.75] md:text-sm lg:text-base',
                          isExpanded[i]
                            ? 'line-clamp-none h-auto overflow-auto'
                            : 'lg:line-clamp-3 lg:overflow-ellipsis'
                        )}
                      >
                        {project.description}
                      </span>
                      <div className="mt-auto flex select-none flex-wrap gap-4">
                        {project.technologies.map((tech, j) => (
                          <Tooltip key={j}>
                            <TooltipTrigger className="flex h-fit items-center justify-center rounded-md p-1 transition hover:bg-primary/15 hover:text-primary">
                              <tech.icon className="aspect-square h-full w-6 md:w-8" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.label}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                        {project.description.length > 200 && (
                          <button
                            type="button"
                            onClick={() => toggleProjectExpanded(i)}
                            className="pointer-events-none mr-4 ml-auto hidden rounded-lg px-4 py-2 opacity-0 transition hover:bg-primary/15 hover:text-primary group-hover:pointer-events-auto group-hover:opacity-100 lg:flex"
                          >
                            {isExpanded[i] ? 'Collapse' : 'Expand'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </TooltipProvider>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-12 pt-32">
        <Title title="Contributions" />
        <div className="flex w-fit max-w-5xl flex-col items-center gap-6 p-8 md:flex-row md:flex-wrap">
          <TooltipProvider delayDuration={0}>
            {contributions.map((contribution, i) => (
              <div
                key={i}
                className="group relative flex w-fit basis-[calc(50%-0.75rem)] items-center justify-center overflow-hidden rounded-[0.9rem] p-[2px] transition-all md:w-full"
              >
                <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-gradient-to-br from-primary to-accent opacity-0 transition group-hover:opacity-50" />
                <div className="z-10 flex h-full w-full max-w-96 flex-col items-center gap-4 rounded-xl bg-background-menu p-6 md:max-w-xl md:gap-6 lg:max-w-none lg:gap-4">
                  <div className="relative flex aspect-[5/3] h-fit max-h-52 w-full basis-3/5">
                    <Image
                      src={
                        contribution.thumbnail ?
                          contribution.thumbnail
                        : 'https://www.sbrv.org/wp-content/uploads/2019/11/preview.png'
                      }
                      alt={`${contribution.name} Thumbnail`}
                      width={9999}
                      height={9999}
                      className="flex select-none rounded-xl border border-text/10 object-cover object-center"
                    />
                    <Badge className="-translate-y-1/2 -translate-x-1/2 lg:-left-2 absolute top-0 left-1/2 z-50 w-max bg-primary-hover lowercase lg:translate-x-0">
                      <span>{contribution.role}</span>
                    </Badge>
                  </div>
                  <div className="col-span-2 flex h-full w-full flex-col gap-2 py-2 pr-2">
                    <div className="flex items-center">
                      <span className="mr-2 text-xl md:text-2xl lg:text-3xl">
                        {contribution.name}
                      </span>
                      {contribution.url ?
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <Link
                              href={contribution.url}
                              target="_blank"
                            >
                              <LinkIcon className="aspect-square h-full w-10 rounded-md p-2 transition hover:bg-primary/15 hover:text-primary lg:opacity-0 lg:group-hover:opacity-100" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Visit URL</p>
                          </TooltipContent>
                        </Tooltip>
                      : null}
                      {contribution.github ?
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <Link
                              href={contribution.github}
                              target="_blank"
                            >
                              <GithubIcon className="aspect-square h-full w-10 rounded-md p-2 transition hover:bg-primary/15 hover:text-primary lg:opacity-0 lg:group-hover:opacity-100" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View on GitHub</p>
                          </TooltipContent>
                        </Tooltip>
                      : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
