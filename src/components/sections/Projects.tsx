'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'MongoDB', 'NextAuth'],
    image: '/api/placeholder/600/400',
    githubUrl: '#',
    liveUrl: '#',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'PostgreSQL', 'Redux'],
    image: '/api/placeholder/600/400',
    githubUrl: '#',
    liveUrl: '#',
    category: 'Web App'
  },
  {
    id: 3,
    title: 'Restaurant Booking System',
    description: 'A comprehensive restaurant reservation system with table management and customer portal.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Shadcn/ui', 'Zod'],
    image: '/api/placeholder/600/400',
    githubUrl: '#',
    liveUrl: '#',
    category: 'SAAS'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }
  
  return (
    <section id="projects" className="py-20 lg:py-32" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Project List */}
            <motion.div variants={itemVariants} className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="project-card p-8 cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onMouseMove={handleMouseMove}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.liveUrl}
                          className="text-gray-400 hover:text-white transition-colors duration-200"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Project Images */}
            <motion.div 
              variants={itemVariants} 
              className="relative h-96 lg:h-full min-h-[500px] lg:sticky lg:top-24"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : hoveredProject === null ? 0.3 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8,
                      x: hoveredProject === project.id ? (mousePosition.x - 300) * 0.02 : 0,
                      y: hoveredProject === project.id ? (mousePosition.y - 250) * 0.02 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {/* Placeholder for project image */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/20 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-4 opacity-50">🖼️</div>
                        <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                        <p className="text-gray-400 text-sm max-w-xs">
                          Project screenshot will be displayed here
                        </p>
                      </div>
                    </div>
                    {/* Uncomment when you have actual project images */}
                    {/* <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    /> */}
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </motion.div>
                ))}

                {/* Default state when no project is hovered */}
                {hoveredProject === null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-2xl"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-6xl mb-4 opacity-50"
                      >
                        👆
                      </motion.div>
                      <h4 className="text-xl font-semibold text-white mb-2">Hover over a project</h4>
                      <p className="text-gray-400">to see its preview</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}