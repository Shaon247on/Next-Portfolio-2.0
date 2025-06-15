
import { motion } from 'framer-motion'

const AnimatedExternalLink = ({ isHovered }: { isHovered: boolean }) => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 2,
      opacity: 1
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          variants={pathVariants}
          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          transition={{ duration: 0.5 }}
        />
        <motion.path
          variants={pathVariants}
          d="M10 14 21 3"
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.path
          variants={pathVariants}
          d="M15 3h6v6"
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </svg>
    </motion.div>
  )
}

export default AnimatedExternalLink;