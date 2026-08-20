"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import ArrowAnimation from "../ui/ArrowAnimation";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 lg:px-10"
    >
      <ArrowAnimation />
      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto z-20 relative">
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
                {/* The visual headline is two stacked words; this gives search
                    engines and screen readers the complete, indexable sentence. */}
                <span className="sr-only">
                  Md Aminul Islam Shaon — Full-Stack Developer specialising in
                  Next.js, React, TypeScript and Node.js, based in Bangladesh.
                </span>
                <span aria-hidden="true" className="block text-gray-300 uppercase">
                  Full-Stack
                </span>

                {/* DEVELOPER text with animated gradient */}
                <span aria-hidden="true" className="block relative">
                  <span
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse"
                    style={{
                      backgroundSize: "200% 100%",
                      animation: "gradient-flow 3s ease-in-out infinite",
                    }}
                  >
                    DEVELOPER
                  </span>
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                Hi! I&apos;m{" "}
                <span className="text-white font-semibold">
                  Md Aminul Islam Shaon
                </span>
                . A Full-Stack Developer with 2 years of experience building
                production SaaS platforms — Next.js, React, TypeScript, Node.js
                and MongoDB. Based in Bangladesh, working with teams worldwide.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:aminul007.ais@gmail.com?subject=Project%20enquiry%20for%20Md%20Aminul%20Islam%20Shaon"
                aria-label="Hire Md Aminul Islam Shaon — send an email"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl transform text-center"
                style={{
                  backgroundSize: "200% 100%",
                  animation:
                    "gradient-flow 3s ease-in-out infinite, pulse-glow 2s ease-in-out infinite",
                }}
              >
                {/* Shimmer effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    animation: "shimmer 2s ease-in-out infinite",
                  }}
                ></div>

                {/* Button content */}
                <div className="group flex items-center justify-center gap-3 cursor-pointer">
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                {/* Floating particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse"></div>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=18kDjzxmg5mekSvfwWQEoXcJ8Drva_Abl"
                aria-label="Download the CV of Md Aminul Islam Shaon, Full-Stack Developer"
                className="group relative overflow-hidden border-2 border-gray-600 text-gray-300 font-semibold py-4 px-8 rounded-full transition-all duration-500 hover:border-transparent hover:text-white hover:scale-105 transform text-center"
              >
                {/* Animated background fill */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{
                    backgroundSize: "200% 100%",
                    animation: "gradient-flow 3s ease-in-out infinite",
                  }}
                ></div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>

                {/* Button content */}
                <span className="relative flex items-center justify-center gap-3 z-10">
                  <Download className="w-5 h-5 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
                  <span>Download CV</span>
                  <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-500" />
                </span>

                {/* Corner decorations */}
                <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 pt-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Shaon247on/",
                  label: "GitHub profile of Md Aminul Islam Shaon",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/md-aminul-islam-shaon07/",
                  label: "LinkedIn profile of Md Aminul Islam Shaon",
                },
                {
                  icon: Mail,
                  href: "mailto:aminul007.ais@gmail.com",
                  label: "Email Md Aminul Islam Shaon",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 group"
                  aria-label={label}
                  target="_blank"
                  rel="me noopener noreferrer"
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
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-80 h-80 md:w-[500px] md:h-[500px] xl:w-[700px] xl:h-[700px]"
              >
                <Image
                  src="/photo.png"
                  alt="Md Aminul Islam Shaon, Full-Stack Developer working with Next.js, React and TypeScript, based in Bangladesh"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 320px, (max-width: 1280px) 500px, 700px"
                  priority
                />

                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"
                ></motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full opacity-20"
                ></motion.div>
              </motion.div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
