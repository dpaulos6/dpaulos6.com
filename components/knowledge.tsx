import { ElementType, ReactElement, ReactNode, SVGProps } from 'react'
import { cn } from '@/lib/utils'
import React from 'react'

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
        'flex flex-wrap gap-8 lg:gap-16 items-start justify-center w-full',
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
        'flex flex-col justify-between items-center lg:items-start lg:justify-start gap-6 basis-full sm:basis-1/2 lg:basis-auto',
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
    <span className={cn('text-3xl text-center', className)}>{children}</span>
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
  return <div className={cn('w-fit flex flex-col', className)}>{children}</div>
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
        'w-full flex items-center gap-4 text-2xl px-4 py-2 rounded-lg hover:bg-background-hover/40 transition cursor-default',
        className
      )}
    >
      <Icon className="w-7 h-7 aspect-square text-foreground" />
      {label}
    </span>
  )
}
KnowledgeListItem.displayName = 'KnowledgeListItem'
