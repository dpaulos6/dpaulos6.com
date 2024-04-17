import '@/app/globals.css'
import {
  GithubIcon,
  HTMLIcon,
  NextjsIcon,
  TailwindIcon,
  TypescriptIcon
} from '@/icons'
import Link from 'next/link'
import Image from 'next/image'
import { LinkIcon } from 'lucide-react'
import Head from 'next/head'

const projects = [
  {
    id: 1,
    name: 'Portfolio',
    link: '/',
    thumbnail: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: [
      { label: 'NextJS', icon: NextjsIcon },
      { label: 'Typescript', icon: TypescriptIcon },
      { label: 'Tailwind CSS', icon: TailwindIcon }
    ],
    github: 'https://github.com/dpaulos6/portfolio',
    url: 'https://dpaulos6.xyz/'
  }
]

export default function Page() {
  return (
    <>
      <Head>
        <title>Diogo Paulos - Projects</title>
      </Head>
      <div className="w-screen h-screen flex flex-col gap-2 items-center text-text">
        <span className="text-2xl text-center mt-32">
          This is a preview of what to expect. <br />
          Projects will be added soon!
        </span>
        <div className="flex flex-col gap-8 w-full max-w-5xl mt-12 p-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="flex items-center w-full h-full max-h-64 p-0.5 rounded-[0.9rem] overflow-hidden transition group relative"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-50 transition pointer-events-none "></div>
              <div className="flex items-center  w-full h-full gap-8 p-6 rounded-xl bg-background z-10">
                <div className="flex w-auto h-full aspect-[5/2] rounded-xl overflow-hidden">
                  <Image
                    src={
                      project.thumbnail
                        ? project.thumbnail
                        : 'https://www.sbrv.org/wp-content/uploads/2019/11/preview.png'
                    }
                    alt={project.name + ' Thumbnail'}
                    width={9999}
                    height={9999}
                    className="flex aspect-[3/2] object-cover object-center select-none"
                  />
                </div>
                <div className="w-full col-span-2 flex flex-col gap-2 py-2 pr-2 h-full">
                  <div className="flex items-center">
                    <span className="text-3xl mr-2">{project.name}</span>
                    {project.url ? (
                      <Link href={project.url}>
                        <LinkIcon className="p-2 w-10 rounded-md h-full aspect-square opacity-0 group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
                      </Link>
                    ) : null}
                    {project.github ? (
                      <Link href={project.github}>
                        <GithubIcon className="p-2 w-10 rounded-md h-full aspect-square opacity-0 group-hover:opacity-100 hover:bg-primary/15 hover:text-primary transition" />
                      </Link>
                    ) : null}
                  </div>
                  <span className="text-base leading-[1.75] overflow-ellipsis line-clamp-3 mb-2">
                    {project.description}
                  </span>
                  <div className="flex w-full gap-4 mt-auto select-none">
                    {project.technologies.map((tech, i) => (
                      <span key={i} title={tech.label}>
                        <tech.icon className="w-8 h-full aspect-square" />
                      </span>
                    ))}
                    <button className="flex ml-auto mr-4 px-4 py-2 rounded-lg hover:bg-primary/15 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:text-primary transition">
                      View more
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
