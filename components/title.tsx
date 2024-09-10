import { cn } from '@/lib/utils'

interface CustomTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  className?: string
}

export function Title({ title, className, ...props }: CustomTitleProps) {
  return (
    <div
      className={cn('w-fit relative group cursor-default', className)}
      {...props}
    >
      <span className="text-5xl md:text-6xl px-24 pt-8 whitespace-nowrap">
        {title}
      </span>
      <span
        className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap text-neutral-200/50 dark:text-neutral-600/50 -z-10 transition-all md:group-hover:opacity-0 select-none"
        area-hidden="true"
      >
        {title}
      </span>
      <span
        className="hidden md:flex absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl md:text-8xl whitespace-nowrap -z-10 bg-gradient-to-r text-transparent from-primary-hover to-primary bg-clip-text transition-all opacity-0 group-hover:opacity-50 select-none"
        area-hidden="true"
      >
        {title}
      </span>
    </div>
  )
}
