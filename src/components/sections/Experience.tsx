"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  Code,
  Database,
  Shield,
  Users,
  Brain,
  Building2,
  MessageSquare,
} from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 lg:py-32" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-white">
              MY{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional journey and key achievements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block"></div>

              {/* TechSoul Experience Card */}
              <motion.div
                variants={cardVariants}
                className="relative glass rounded-2xl p-8 md:p-12 md:ml-20 mb-8"
              >
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
                        <span>October 2024 - December 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>On-Site</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Working as a Next.js Developer at TechSoul, contributing
                      to the development of enterprise-level software solutions
                      and SAAS platforms.
                    </p>

                    <div className="space-y-4">
                      <h5 className="text-lg font-semibold text-white">
                        Key Projects & Responsibilities:
                      </h5>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Code className="w-5 h-5 text-blue-400" />
                            <h6 className="font-semibold text-white">
                              SuperShop POS
                            </h6>
                          </div>
                          <p className="text-sm text-gray-400 ml-8">
                            Developed and enhanced features for a comprehensive
                            retail management system, improving user experience
                            and system performance.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Database className="w-5 h-5 text-purple-400" />
                            <h6 className="font-semibold text-white">
                              Pharma POS
                            </h6>
                          </div>
                          <p className="text-sm text-gray-400 ml-8">
                            Contributed to pharmaceutical management software,
                            implementing complex inventory and sales tracking
                            features.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="w-5 h-5 text-green-400" />
                          <h6 className="font-semibold text-white">
                            Current Project: Restora (Restaurant POS SAAS)
                          </h6>
                        </div>
                        <p className="text-gray-300 mb-4">
                          Leading the development of a comprehensive Restaurant
                          POS SAAS platform, building scalable architecture and
                          implementing modern authentication systems.
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-white">
                            Tech Stack:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Next.js",
                              "TypeScript",
                              "Prisma ORM",
                              "MongoDB",
                              "Zod",
                              "Shadcn/ui",
                              "NextAuth",
                              "JWT",
                            ].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-700">
                    <h5 className="text-lg font-semibold text-white mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {[
                        "Successfully integrated complex authentication systems using NextAuth and JWT",
                        "Improved application performance through code optimization and modern React patterns",
                        "Collaborated with cross-functional teams to deliver scalable software solutions",
                        "Implemented responsive designs ensuring compatibility across all devices",
                      ].map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Join Venture AI Experience Card */}
              <motion.div
                variants={cardVariants}
                className="relative glass rounded-2xl p-8 md:p-12 md:ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-32 top-12 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full border-4 border-dark-800 hidden md:block"></div>

                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Junior Frontend Developer
                      </h3>
                      <h4 className="text-xl text-purple-400 font-semibold mb-2">
                        Join Vanture AI
                      </h4>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>October 2024 - present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>On-Site</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Contributed to multiple production-level web platforms,
                      dashboards, and SaaS applications with a strong focus on
                      usability, scalability, and real-time features.
                    </p>

                    <div className="space-y-6">
                      <h5 className="text-lg font-semibold text-white">
                        Key Projects & Responsibilities:
                      </h5>

                      {/* Sports Coaching Platform */}
                      <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Users className="w-5 h-5 text-purple-400" />
                          <h6 className="font-semibold text-white">
                            Sports Coaching Platform
                          </h6>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Sports-focused web application connecting students
                          with basketball and football coaches through dynamic
                          booking and real-time communication.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>
                              Built dynamic booking calendar based on trainer
                              weekly session availability
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>
                              Implemented real-time video calling with
                              mute/unmute and camera controls
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>
                              Integrated map-based trainer discovery with
                              distance filtering and side card list view
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>
                              Developed real-time chat with notifications using
                              Socket.IO for post-booking communication
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>
                              Created admin-managed onboarding flow with
                              verification and payment gating
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Mathos Platform */}
                      <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Brain className="w-5 h-5 text-cyan-400" />
                          <h6 className="font-semibold text-white">
                            Mathos (Math Problem-Solving Platform)
                          </h6>
                        </div>
                        <p className="text-gray-300 mb-3">
                          StackOverflow-inspired mathematics platform enabling
                          students to collaborate on problem-solving with AI
                          assistance.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>
                              Implemented upvote/downvote logic with
                              highest-voted solutions pinned at top
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>
                              Built classroom features enabling teachers to
                              create Facebook-style groups
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>
                              Integrated AI-powered assistance for solution
                              generation and refinement
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">•</span>
                            <span>
                              Developed admin dashboard for moderation, quiz
                              generation, and scheduling
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* RbWoodRuff Platform */}
                      <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                        <div className="flex items-center gap-3 mb-3">
                          <Building2 className="w-5 h-5 text-orange-400" />
                          <h6 className="font-semibold text-white">
                            RbWoodRuff (Job & Training Management)
                          </h6>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Multi-role platform with four specialized dashboards
                          managing job placement, training programs, and
                          court-referred user compliance.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li className="flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            <span>
                              Built role-based dashboards for employers,
                              training providers, agencies, and admin
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            <span>
                              Implemented CSV upload functionality for case ID
                              and court date management
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            <span>
                              Created matching logic for tracking users with
                              similar case IDs
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            <span>
                              Integrated AI resume builder with completion
                              scoring for agency monitoring
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Geography Quiz Platform */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <MessageSquare className="w-5 h-5 text-green-400" />
                            <h6 className="font-semibold text-white">
                              Geography Quiz Platform
                            </h6>
                          </div>
                          <p className="text-sm text-gray-400 ml-8">
                            MCQ-based learning application with admin-managed
                            question banks, CSV uploads, and scheduled quiz
                            windows for user participation and score tracking.
                          </p>
                        </div>

                        {/* Jonathan AI POS */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Brain className="w-5 h-5 text-pink-400" />
                            <h6 className="font-semibold text-white">
                              Jonathan – AI Powered POS
                            </h6>
                          </div>
                          <p className="text-sm text-gray-400 ml-8">
                            AI-powered analytics application for restaurant
                            management. Completed frontend implementation with
                            dashboards to visualize insights and operational
                            metrics.
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-white mb-3">
                          Tech Stack:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "Shadcn/ui",
                            "Redux Toolkit",
                            "RTK Query",
                            "Axios",
                            "Framer Motion",
                            "React Hook Form",
                            "Zod",
                          ].map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-700">
                    <h5 className="text-lg font-semibold text-white mb-3">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {[
                        "Built and maintained complex, role-based dashboards used in production environments",
                        "Implemented real-time features including chat, notifications, and video communication",
                        "Delivered scalable and responsive UI components aligned with modern UX standards",
                        "Collaborated closely with backend, mobile, and product teams in an Agile workflow",
                      ].map((achievement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
