import { motion } from 'framer-motion'

interface props {
  children: React.ReactNode
  className?: string
}

const ShinyButton = ({ children, className }: props) => {
  return (
    <motion.button
      initial={{ '--x': '100%' }}
      animate={{ '--x': '-100%' }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        // repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2
      }}
      className={`px-10 py-2 rounded-md relative bg-background-menu ${className}`}
    >
      {children}
      <span className="block absolute inset-0 rounded-md p-0.5 linear-overlay" />
    </motion.button>
  )
}

export default ShinyButton
