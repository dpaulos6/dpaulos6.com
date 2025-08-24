import {
  AstroIcon,
  AtomIcon,
  CsharpIcon,
  DotnetIcon,
  EslintIcon,
  GithubIcon,
  GitIcon,
  IntellijIcon,
  JavaIcon,
  JavascriptIcon,
  KotlinIcon,
  LaravelIcon,
  LinearIcon,
  LucideIcon,
  NextjsIcon,
  PhpIcon,
  PnpmIcon,
  PostmanIcon,
  PrettierIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  RiderIcon,
  ShadcnIcon,
  SvelteIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  VisualStudioIcon,
  ViteIcon,
  VscodeIcon
} from '@/icons'
import type { Knowledge } from '@/interfaces'

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
      },
      {
        label: 'DOTNET',
        icon: DotnetIcon
      },
      {
        label: 'Lavarel',
        icon: LaravelIcon
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
        label: 'Java',
        icon: JavaIcon
      },
      {
        label: 'Kotlin',
        icon: KotlinIcon
      },
      {
        label: 'C#',
        icon: CsharpIcon
      },
      {
        label: 'Python',
        icon: PythonIcon
      }
    ]
  },
  {
    title: 'Tools',
    items: [
      {
        label: 'GitHub',
        icon: GithubIcon
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
      },
      {
        label: 'Linear',
        icon: LinearIcon
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
        label: 'Prisma',
        icon: PrismaIcon
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
  },
  {
    title: 'IDEs',
    items: [
      {
        label: 'VSCode',
        icon: VscodeIcon
      },
      {
        label: 'Rider',
        icon: RiderIcon
      },
      {
        label: 'IntelliJ',
        icon: IntellijIcon
      },
      {
        label: 'Visual Studio',
        icon: VisualStudioIcon
      },
      {
        label: 'Atom',
        icon: AtomIcon
      }
    ]
  }
]
