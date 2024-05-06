import { motion } from 'framer-motion'

const ShinyButton = ({ children, className }) => {
  const buttonVariants = {
    initial: { '--x': '100%' },
    animate: { '--x': '-100%' }
  }

  return (
    <motion.button
      initial="initial"
      animate="animate"
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        type: 'spring',
        stiffness: 20,
        damping: 20,
        mass: 2
      }}
      variants={buttonVariants}
      className={`px-10 py-2 rounded-md relative bg-background-menu ${className}`}
    >
      {children}
      <span className="block absolute inset-0 rounded-md p-0.5 linear-overlay" />
    </motion.button>
  )
}

export default ShinyButton
