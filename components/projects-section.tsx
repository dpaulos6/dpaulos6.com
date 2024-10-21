'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { projects, contributions } from '@/data'
import { Badge } from '@/components/ui/badge'
import { Title } from '@/components/title'
import { LinkIcon } from 'lucide-react'
import { GithubIcon } from '@/icons'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function ProjectsSection() {
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
    <div className="w-screen h-auto flex flex-col gap-20 items-center text-text py-12">
      <div className="flex flex-col items-center gap-12 pt-12 w-full">
        <Title title="Projects" />
        <div className="flex flex-col items-center gap-6 w-full max-w-5xl p-8">
          <TooltipProvider delayDuration={0}>
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
                          project.thumbnail ?
                            project.thumbnail
                          : 'https://www.sbrv.org/wp-content/uploads/2019/11/preview.png'
                        }
                        alt={project.name + ' Thumbnail'}
                        width={9999}
                        height={9999}
                        className="flex object-cover object-center select-none rounded-xl border border-text/10"
                      />
                      <Badge
                        className={cn(
                          'z-50 w-max absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:-left-2 lg:translate-x-0 lowercase',
                          project.tag.styles
                        )}
                      >
                        <span>{project.tag.label}</span>
                      </Badge>
                    </div>
                    <div className="w-full col-span-2 flex flex-col gap-2 py-2 pr-2 h-full">
                      <div className="flex items-center">
                        <span className="text-xl md:text-2xl lg:text-3xl mr-2">
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
                                <LinkIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
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
                                <GithubIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View on GitHub</p>
                            </TooltipContent>
                          </Tooltip>
                        : null}
                      </div>
                      <span
                        className={`${isExpanded[i] ? 'h-auto line-clamp-none overflow-auto' : 'lg:overflow-ellipsis lg:line-clamp-3'} text-xs md:text-sm lg:text-base leading-[1.75] mb-2`}
                      >
                        {project.description}
                      </span>
                      <div className="flex flex-wrap w-full gap-4 mt-auto select-none ">
                        {project.technologies.map((tech, i) => (
                          <Tooltip key={i}>
                            <TooltipTrigger className="h-fit rounded-md ">
                              <tech.icon className="w-6 md:w-8 h-full aspect-square" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{tech.label}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                        {project.description.length > 200 && (
                          <button
                            onClick={() => toggleProjectExpanded(i)}
                            className="hidden lg:flex ml-auto mr-4 px-4 py-2 rounded-lg hover:bg-primary/15 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:text-primary transition"
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
      <div className="flex flex-col items-center gap-12 pt-32 w-full">
        <Title title="Contributions" />
        <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-6 w-fit max-w-5xl p-8">
          <TooltipProvider delayDuration={0}>
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
                        contribution.thumbnail ?
                          contribution.thumbnail
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
                      {contribution.url ?
                        <Tooltip>
                          <TooltipTrigger tabIndex={-1}>
                            <Link
                              href={contribution.url}
                              target="_blank"
                            >
                              <LinkIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
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
                              <GithubIcon className="p-2 w-10 rounded-md h-full aspect-square lg:opacity-0 lg:group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
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
