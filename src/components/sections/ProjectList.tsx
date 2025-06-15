'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import FloatingImage from './FloatingImage'
import Project from './Project'

// TypeScript interface for project structure
export interface ProjectType {
  slug: string;
  title: string;
  thumbnail: string;
  liveLink: string;
  codeBase?: string;
  techStack: string[];
  credentials?: {
    username?: string | undefined;
    password?: string | undefined;
  };
}

// Updated data structure with live links, codeBase, and credentials
export const PROJECTS: ProjectType[] = [
  {
    slug: 'SAAS Application-1',
    title: 'RESTORA- POS',
    thumbnail: '/api/placeholder/400/500',
    liveLink: 'https://restora.aamardokan.online/',
    codeBase: 'https://github.com/Shaon247on/Restora-App',
    techStack: ['Next.js', 'TypeScript', 'Prisma','Tailwind CSS', 'MongoDB', 'Shadcn/ui', 'ZOD'],
    credentials: {
      username: 'aminul247on@25',
      password: 'Rango247on'
    }
  },
  {
    slug: 'Competition Platform',
    title: 'Victory Vault', 
    thumbnail: '/api/placeholder/400/500',
    liveLink: 'https://assignment-12-supremacy.web.app/',
    codeBase: 'hhttps://github.com/Shaon247on/Victory-Vault-A12',
    techStack: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
    credentials: {
      username: 'emarot@kaka.com',
      password: 'Rango247on'
    }
  },
  {
    slug: 'Social Comunity Platform',
    title: 'Reflect Radar',
    thumbnail: '/api/placeholder/400/500',
    liveLink: 'https://assignment-11-battlefield.web.app/',
    codeBase: 'https://github.com/Shaon247on/Reflect-Radar-A11',
    techStack: ['React', 'Prisma', 'MongoDB', 'Firebase', 'Tailwind CSS'],
  },
  {
    slug: 'SAAS Application-2',
    title: 'AAmar Dokan- POS',
    thumbnail: '/api/placeholder/400/500',
    liveLink: 'https://pos.aamardokan.online/',
    techStack: ['React.js', 'TypeScript', 'Node.js', 'JWT', 'MongoDB', 'Express.js'],
    credentials: {
      username: '01995962937',
      password: 'Rango247on'
    }
  }
]

// Main Projects Section Component
export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(PROJECTS[0].slug)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)
  
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setSelectedProject(null)
      } else {
        setSelectedProject(PROJECTS[0].slug)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return
      
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      
      // Hide image if cursor is outside container
      if (
        rect.top > e.clientY ||
        rect.bottom < e.clientY ||
        rect.left > e.clientX ||
        rect.right < e.clientX
      ) {
        return
      }

      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  const handleMouseEnter = (slug: string) => {
    if (isMobile) {
      setSelectedProject(null)
      return
    }
    setSelectedProject(slug)
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setSelectedProject(PROJECTS[0].slug)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <section className="py-20 lg:py-32" id="selected-projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white">
            SELECTED{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Container */}
        <motion.div
          className="group/projects relative"
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Projects List */}
          <div className="flex flex-col group-hover/projects:*:opacity-30 hover:*:!opacity-100">
            {PROJECTS.map((project, index) => (
              <Project
                key={project.slug}
                project={project}
                index={index}
                selectedProject={selectedProject}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                isMobile={isMobile}
              />
            ))}
          </div>

          {/* Floating Image (Desktop Only) */}
          {!isMobile && (
            <FloatingImage
              selectedProject={selectedProject}
              mousePosition={mousePosition}
              containerRef={containerRef}
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}