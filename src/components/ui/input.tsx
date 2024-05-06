'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 300
    const [visible, setVisible] = React.useState(false)

    let mouseX = useMotionValue(0)
    let mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
              rgb(var(--primary)),
              transparent 100%
            )
          `
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] !bg-background-border rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full bg-background-menu border-none text-text shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
