import type { ElementType, SVGProps } from 'react'

export interface Contact {
  label: string
  icon: ElementType<SVGProps<SVGSVGElement>>
  href: string
}
