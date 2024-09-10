import {
  AstroIcon,
  CsharpIcon,
  EslintIcon,
  GitIcon,
  JavascriptIcon,
  KotlinIcon,
  LucideIcon,
  NextjsIcon,
  PhpIcon,
  PnpmIcon,
  PostmanIcon,
  PrettierIcon,
  ReactIcon,
  ShadcnIcon,
  SvelteIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  ViteIcon,
  VscodeIcon
} from '@/icons'
import { Knowledge } from '@/interfaces'

export const knowledge: Knowledge[] = [
  {
    title: 'Frameworks',
    items: [
      {
        label: 'NextJS',
        icon: NextjsIcon
      },
      {
        label: 'React',
        icon: ReactIcon
      },
      {
        label: 'Astro',
        icon: AstroIcon
      },
      {
        label: 'Vite',
        icon: ViteIcon
      },
      {
        label: 'Svelte',
        icon: SvelteIcon
      }
    ]
  },
  {
    title: 'Languages',
    items: [
      {
        label: 'Typescript',
        icon: TypescriptIcon
      },
      {
        label: 'Javascript',
        icon: JavascriptIcon
      },
      {
        label: 'Php',
        icon: PhpIcon
      },
      {
        label: 'Kotlin',
        icon: KotlinIcon
      },
      {
        label: 'C#',
        icon: CsharpIcon
      }
    ]
  },
  {
    title: 'Tools',
    items: [
      {
        label: 'VSCode',
        icon: VscodeIcon
      },
      {
        label: 'Git',
        icon: GitIcon
      },
      {
        label: 'Postman',
        icon: PostmanIcon
      },
      {
        label: 'Vercel',
        icon: VercelIcon
      },
      {
        label: 'Pnpm',
        icon: PnpmIcon
      }
    ]
  },
  {
    title: 'Libraries',
    items: [
      {
        label: 'Tailwind',
        icon: TailwindIcon
      },
      {
        label: 'Shadcn',
        icon: ShadcnIcon
      },
      {
        label: 'Lucide',
        icon: LucideIcon
      },
      {
        label: 'Prettier',
        icon: PrettierIcon
      },
      {
        label: 'Eslint',
        icon: EslintIcon
      }
    ]
  }
]
