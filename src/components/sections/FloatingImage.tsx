"use client"
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react';
import { PROJECTS } from './ProjectList';

const FloatingImage = ({ 
  selectedProject, 
  mousePosition,
  containerRef 
}: {
  selectedProject: string | null
  mousePosition: { x: number; y: number }
  containerRef: React.RefObject<HTMLDivElement>
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

   useEffect(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const containerWidth = rect.width
    const containerHeight = rect.height
    
    // Base position: right side of the container
    const baseX = containerWidth - 400 // Position from right edge
    const baseY = containerHeight / 2 - 200 // Center vertically
    
    // Calculate mouse influence (much more subtle)
    const mouseInfluenceX = (mousePosition.x - rect.left - containerWidth / 2) * 0.05 // 5% influence
    const mouseInfluenceY = (mousePosition.y - rect.top - containerHeight / 2) * 0.05 // 5% influence
    
    x.set(baseX + mouseInfluenceX)
    y.set(baseY + mouseInfluenceY)
  }, [mousePosition, x, y])

  if (!selectedProject) return null

  return (
    <motion.div
      className="absolute top-0 left-0 z-10 pointer-events-none w-[300px] xl:w-[350px] aspect-[3/4] overflow-hidden rounded-lg shadow-2xl"
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {PROJECTS.map((project) => (
          selectedProject === project.slug && (
            <motion.div
              key={project.slug}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Placeholder for project image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-60">
                    {project.slug.includes('ecommerce') ? '🚀' : 
                     project.slug.includes('task') ? '📱' : 
                     project.slug.includes('restaurant') ? '💼' : '🤖'}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                </div>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default FloatingImage;