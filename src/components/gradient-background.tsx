'use client'
import { useRef, useState } from 'react'

const GradientBackground = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }
  return (
    <>
      <div className="absolute inset-0 h-screen w-screen bg-background bg-[linear-gradient(to_right,rgb(var(--background-hover))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--background-hover))_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-40 pointer-events-none">
        <div className="relative h-full w-full">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </div>
    </>
  )
}

export default GradientBackground
