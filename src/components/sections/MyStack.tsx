'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiAntdesign,
  SiMaterialdesign,
  SiReacthookform,
  SiAxios,
  SiSupabase,
} from 'react-icons/si'
import { FaUserShield, FaPalette, FaKey, FaLock, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa'

const techStacks = {
  frontend: [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#ffffff' },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  ],
  tools: [
    { name: 'Material UI', icon: SiMaterialdesign, color: '#007FFF' },
    { name: 'Ant Design', icon: SiAntdesign, color: '#1890FF' },
    { name: 'React Hook Form', icon: SiReacthookform , color: '#ffffff' },
    { name: 'shadcn/ui', icon: FaPalette, color: '#FF0080' },
    { name: 'Clerk', icon: FaUserShield, color: '#4B5563' },
  ]
}


export default function MyStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const TechCard = ({ tech, index }: { tech: any, index: number }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      className="tech-card group relative"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          className="text-5xl transition-all duration-300"
          style={{ color: tech.color }}
          initial={{ scale: 1, rotate: 0, y: 0 }}
          whileHover={{ scale: 1.28, rotate: 8, y: -8 }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        >
          <tech.icon />
        </motion.div>
        <motion.h3 className="text-white font-semibold text-center transition-colors duration-300"
          initial={{ color: '#FFFFFF' }}
          whileHover={{ color: '#60A5FA' }}
          transition={{ duration: 0.2 }}
        >
          {tech.name}
        </motion.h3>
      </div>
      {/* Overlay removed per request (no background color on hover) */}
    </motion.div>
  )

  const StackSection = ({ title, techs, delay = 0, key }: { title: string, techs: any[], delay?: number, key:number; }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-8 hover:text-blue-400 transition-colors duration-300"
      key={key}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center hover:text-blue-400 transition-colors duration-300">
        <span className="gradient-text text-white">{title}</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {techs.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index + delay} />
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="stack" className="py-20 lg:py-32" ref={ref}>
      <div className="">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
              MY <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="space-y-20">
            <StackSection key={1} title="Frontend" techs={[
              ...techStacks.frontend,
              { name: 'Axios', icon: SiAxios, color: '#0082C8' },
              { name: 'RTK Query', icon: SiRedux, color: '#764ABC' },
              { name: 'TanStack Query', icon: FaProjectDiagram, color: '#FF6A00' },
            ]} delay={0} />
            <StackSection key={2} title="Backend" techs={[
              ...techStacks.backend,
              { name: 'Prisma ORM', icon: SiPrisma, color: '#ffffff' },
              { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
              { name: 'JWT', icon: FaKey, color: '#F59E0B' },
              { name: 'jose', icon: FaLock, color: '#10B981' },
              { name: 'Zod Validation', icon: FaCheckCircle, color: '#06B6D4' },
            ]} delay={7} />
            <StackSection key={3} title="Database" techs={techStacks.database} delay={14} />
            <StackSection key={4} title="Tools & Libraries" techs={techStacks.tools} delay={16} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}