'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Code, Database, Shield } from 'lucide-react'

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants = {
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
    <section id="experience" className="py-20 lg:py-32" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              My <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey and key achievements
            </p>
          </motion.div>

          <motion.div variants={cardVariants} className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

              {/* Experience Card */}
              <div className="relative glass rounded-2xl p-8 md:p-12 md:ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-32 top-12 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-dark-800 hidden md:block"></div>

                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Next.js Developer
                      </h3>
                      <h4 className="text-xl text-blue-400 font-semibold mb-2">
                        TechSoul
                      </h4>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>October 2024 - Present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Working as a Next.js Developer at TechSoul, contributing to the development of enterprise-level software solutions and SAAS platforms.
                    </p>

                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-white">Key Projects & Responsibilities:</h5>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Code className="w-5 h-5 text-blue-400" />
                            <h6 className="font-semibold text-white">SuperShop POS</h6>
                          </div>
                          <p className="text-sm text-gray-400 ml-8">
                            Developed and enhanced features for a comprehensive retail management system, improving user experience and system performance.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Database className="w-5 h-5 text-purple-400" />
                            <h6 className="font-semibold text-white">Pharma POS</h6>
                          </div>
                          <p className="text-sm text-gray-400 ml-8">
                            Contributed to pharmaceutical management software, implementing complex inventory and sales tracking features.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-5 h-5 text-green-400" />
                          <h6 className="font-semibold text-white">Current Project: Restaurant POS SAAS</h6>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Leading the development of a comprehensive Restaurant POS SAAS platform, building scalable architecture and implementing modern authentication systems.
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-white">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {['Next.js', 'TypeScript', 'Prisma ORM', 'MongoDB', 'Zod', 'Shadcn/ui', 'NextAuth', 'JWT'].map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-700">
                    <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {[
                        'Successfully integrated complex authentication systems using NextAuth and JWT',
                        'Improved application performance through code optimization and modern React patterns',
                        'Collaborated with cross-functional teams to deliver scalable software solutions',
                        'Implemented responsive designs ensuring compatibility across all devices'
                      ].map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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