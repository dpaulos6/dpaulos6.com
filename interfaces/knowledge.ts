import { ElementType, SVGProps } from 'react'

export interface Knowledge {
  title: string
  items: KnowledgeItem[]
}

interface KnowledgeItem {
  label: string
  icon: ElementType<SVGProps<SVGSVGElement>>
}
