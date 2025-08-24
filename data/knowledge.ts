import {
  AstroIcon,
  AtomIcon,
  AzureIcon,
  BetterauthIcon,
  BiomeIcon,
  CsharpIcon,
  DotnetIcon,
  GitIcon,
  GithubIcon,
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
  PrismaIcon,
  PythonIcon,
  RazorIcon,
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
        label: 'DOTNET',
        icon: DotnetIcon
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
        label: 'C#',
        icon: CsharpIcon
      },
      {
        label: 'Razor',
        icon: RazorIcon
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
        label: 'Azure',
        icon: AzureIcon
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
        label: 'Biome',
        icon: BiomeIcon
      },
      {
        label: 'BetterAuth',
        icon: BetterauthIcon
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
