'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import ArrowAnimation from '../ui/ArrowAnimation'

export default function Hero() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 lg:px-10">
      <ArrowAnimation />
      {/* Hero Section */}
      <div className="container-custom z-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading">
                <span className="block text-gray-300">FRONTEND</span>
                <span className="block gradient-text">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Hi! I'm <span className="text-white font-semibold">Aminul</span>. A creative Frontend Developer with 1 year of experience in building high-performance, scalable, and responsive web solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center gap-3 group">
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Hire Me
              </button>
              <button className="relative overflow-hidden border-2 border-gray-600 text-gray-300 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:border-blue-500 hover:text-white hover:scale-105 group">
                <Download className="w-5 h-5 inline mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                Download CV
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 pt-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:aminul007.ais@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Photo */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative w-80 h-80 md:w-96 md:h-96"
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDuration: '3s' }}></div>
                
                {/* Photo container */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-800 border-4 border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                  {/* Replace with your actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                    A
                  </div>
                  {/* Uncomment and replace src when you have your photo */}
                  {/* <Image
                    src="/your-photo.jpg"
                    alt="Aminul - Frontend Developer"
                    fill
                    className="object-cover"
                    priority
                  /> */}
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"
                ></motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-20"
                ></motion.div>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}