import type { ElementType, ReactNode, SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function Knowledge({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex w-full flex-wrap items-start justify-center gap-8 lg:gap-16',
        className
      )}
    >
      {children}
    </div>
  )
}
Knowledge.displayName = 'Knowledge'

export function KnowledgeItem({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex basis-full flex-col items-center justify-between gap-6 sm:basis-1/2 lg:basis-auto lg:items-start lg:justify-start',
        className
      )}
    >
      {children}
    </div>
  )
}
KnowledgeItem.displayName = 'KnowledgeItem'

export function KnowledgeTitle({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn('text-center text-3xl', className)}>{children}</span>
  )
}
KnowledgeTitle.displayName = 'KnowledgeTitle'

export function KnowledgeList({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn('flex w-fit flex-col', className)}>{children}</div>
}
KnowledgeList.displayName = 'KnowledgeList'

export function KnowledgeListItem({
  label,
  icon: Icon,
  className
}: {
  label: string
  icon: ElementType<SVGProps<SVGSVGElement>>
  className?: string
}) {
  return (
    <span
      className={cn(
        'flex w-full cursor-default items-center gap-4 rounded-lg px-4 py-2 text-2xl transition hover:bg-background-hover/40',
        className
      )}
    >
      <Icon className='aspect-square h-7 w-7 text-foreground' />
      {label}
    </span>
  )
}
KnowledgeListItem.displayName = 'KnowledgeListItem'
