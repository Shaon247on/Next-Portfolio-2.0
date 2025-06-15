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
  SiMaterialdesign
} from 'react-icons/si'

const techStacks = {
  frontend: [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
  ],
  database: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748' },
  ],
  tools: [
    { name: 'Material UI', icon: SiMaterialdesign, color: '#007FFF' },
    { name: 'Ant Design', icon: SiAntdesign, color: '#1890FF' },
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
      className="tech-card group"
      // whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col items-center space-y-4">
        <div 
          className="text-5xl transition-all duration-300 group-hover:scale-110"
          style={{ color: tech.color }}
        >
          <tech.icon />
        </div>
        <h3 className="text-white font-semibold text-center group-hover:text-blue-400 transition-colors duration-300">
          {tech.name}
        </h3>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  )

  const StackSection = ({ title, techs, delay = 0 }: { title: string, techs: any[], delay?: number }) => (
    <motion.div
      variants={itemVariants}
      className="space-y-8"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center">
        <span className="gradient-text">{title}</span>
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              My <span className="gradient-text">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="space-y-20">
            <StackSection title="Frontend" techs={techStacks.frontend} delay={0} />
            <StackSection title="Backend" techs={techStacks.backend} delay={7} />
            <StackSection title="Database" techs={techStacks.database} delay={9} />
            <StackSection title="Tools & Libraries" techs={techStacks.tools} delay={12} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}