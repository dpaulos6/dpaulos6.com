import { ElementType, SVGProps } from 'react'

export interface Project {
  name: string
  thumbnail: string
  description: string
  technologies: TechnologiesList[]
  github?: string
  url?: string
  tag: Tag
  currentWebsite?: boolean
}

interface TechnologiesList {
  label: string
  icon: ElementType<SVGProps<SVGSVGElement>>
}

interface Tag {
  styles: string
  label: string
}

export interface Contribution {
  name: string
  url: string
  github: string
  thumbnail: string
  description: string
  role: string
}
