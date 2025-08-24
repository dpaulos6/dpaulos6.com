import { cn } from '@/lib/utils'

interface CustomTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  className?: string
}

export function Title({ title, className, ...props }: CustomTitleProps) {
  return (
    <div
      className={cn('group relative w-fit cursor-default', className)}
      {...props}
    >
      <span className='whitespace-nowrap px-24 pt-8 text-5xl md:text-6xl'>
        {title}
      </span>
      <span
        className='-translate-y-1/2 -translate-x-1/2 -z-10 absolute top-0 left-1/2 select-none whitespace-nowrap text-7xl text-neutral-200/50 transition-all md:text-8xl md:group-hover:opacity-0 dark:text-neutral-600/50'
        area-hidden="true"
      >
        {title}
      </span>
      <span
        className='-translate-y-1/2 -translate-x-1/2 -z-10 absolute top-0 left-1/2 hidden select-none whitespace-nowrap bg-gradient-to-r from-primary-hover to-primary bg-clip-text text-7xl text-transparent opacity-0 transition-all group-hover:opacity-50 md:flex md:text-8xl'
        area-hidden="true"
      >
        {title}
      </span>
    </div>
  )
}
