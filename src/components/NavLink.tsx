'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRef, useState } from 'react'

interface NavLinkProps {
  items: {
    label: string
    value: string
    href: string
  }[]
}

function NavLink({ items }: NavLinkProps) {
  const path = usePathname()

  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null)
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(
    null
  )
  const [highlightedTab, setHighlightedTab] = useState<string | null>(null)

  const highlightRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const repositionHighlight = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: { label: string; href: string; value: string }
  ) => {
    const target = e.currentTarget
    setTabBoundingBox(target.getBoundingClientRect())

    if (wrapperRef.current) {
      setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect())
    }
    setHighlightedTab(tab.value)
  }

  const resetHighlight = () => setHighlightedTab(null)

  const highlightStyles: React.CSSProperties = {}

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.opacity = highlightedTab ? 1 : 0
    highlightStyles.width = `${tabBoundingBox.width}px`
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`
  }

  return (
    <div
      className="hidden md:flex relative gap-8"
      ref={wrapperRef}
      onMouseLeave={resetHighlight}
    >
      <div
        className="bg-primary absolute -bottom-1 left-0 rounded-full w-0 h-1 transition-all duration-300"
        ref={highlightRef}
        style={highlightStyles}
      ></div>
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          title={item.label}
          className={`flex items-center text-xl lowercase transition-all ${path === item.href ? 'text-primary' : 'text-text'} relative`}
          onMouseOver={(ev: any) => repositionHighlight(ev, item)}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default NavLink
