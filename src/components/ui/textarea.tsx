import * as React from 'react'
import { cn } from '@/lib/utils'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
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
        <textarea
          className={cn(
            'flex min-h-[80px] resize-none w-full rounded-md text-text bg-background-menu px-3 py-2 text-sm placeholder:text-text-placeholder focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition',
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
