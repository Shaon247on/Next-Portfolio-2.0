import { useState } from "react"
import { PROJECTS } from "./ProjectList"
import { motion} from 'framer-motion'
import AnimatedExternalLink from "../ui/AnimatedExternalLink"

const Project = ({ 
  project, 
  index, 
  selectedProject, 
  onMouseEnter, 
  onMouseLeave,
  isMobile 
}: {
  project: typeof PROJECTS[0]
  index: number
  selectedProject: string | null
  onMouseEnter: (slug: string) => void
  onMouseLeave: () => void
  isMobile: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    onMouseEnter(project.slug)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onMouseLeave()
  }

  return (
    <motion.div
      className="project-item group leading-none py-5 border-b first:!pt-0 last:pb-0 last:border-none border-gray-800 transition-all duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Mobile Image */}
      {selectedProject === null && isMobile && (
        <motion.div
          className="w-full mb-6 aspect-[3/2] overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
            <span className="text-4xl opacity-60">
              {index === 0 ? '🚀' : index === 1 ? '📱' : index === 2 ? '💼' : '🤖'}
            </span>
          </div>
        </motion.div>
      )}

      <div className="flex gap-2 md:gap-5">
        {/* Project Number */}
        <motion.div 
          className="font-mono text-gray-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          _{(index + 1).toString().padStart(2, '0')}.
        </motion.div>

        <div className="flex-1">
          {/* Project Title with Gradient Effect */}
          <motion.h4 
            className="text-4xl md:text-6xl flex gap-4 font-bold transition-all duration-700 bg-gradient-to-r from-blue-500 to-white from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {project.title}
            <span className="text-white">
              <AnimatedExternalLink isHovered={isHovered} />
            </span>
          </motion.h4>

          {/* Tech Stack */}
          <motion.div 
            className="mt-2 flex flex-wrap gap-3 text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.techStack.slice(0, 3).map((tech, idx, stackArr) => (
              <div className="gap-3 flex items-center" key={tech}>
                <span>{tech}</span>
                {idx !== stackArr.length - 1 && (
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-600"></span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
