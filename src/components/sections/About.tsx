'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-8 md:p-12"
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                {/* Add your personal story here */}
                Welcome to my digital space! I'm a passionate Frontend Developer who loves crafting beautiful, functional, and user-centric web experiences. My journey in web development began with curiosity and has evolved into a professional pursuit of creating innovative digital solutions.
              </p>
              
              <p>
                {/* Add more about your background, interests, and goals */}
                With a strong foundation in modern JavaScript frameworks and a keen eye for design, I specialize in building responsive, accessible, and performant web applications. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
              </p>

              <p>
                {/* Add your philosophy or approach to work */}
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I'm always eager to take on new challenges and collaborate on exciting projects that make a difference.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">What I bring to the table:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-base">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Clean, maintainable code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Responsive design expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>Performance optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span>User-centered approach</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}