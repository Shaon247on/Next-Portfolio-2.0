"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import FloatingImage from "./FloatingImage";
import Project from "./Project";

// TypeScript interface for project structure
export interface ProjectType {
  slug: string;
  title: string;
  thumbnail: string;
  liveLink: string;
  codeBase?: string;
  techStack: string[];
  credentials?: {
    email?: string;
    password?: string;
  };
  description?: string;
  features?: string[];
}

// Updated data structure with new projects
export const PROJECTS: ProjectType[] = [
  {
    slug: "sports-coaching-platform",
    title: "BallMastery",
    thumbnail: "../../../public/ballmastery.png",
    liveLink: "https://ballmastery.com/",
    codeBase: "https://github.com/Shaon247on/sportsverse",
    techStack: [
      "Next.js",
      "TypeScript",
      "Socket.IO",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    credentials: {
      email: "brighteto11@gmail.com",
      password: "admin",
    },
    description:
      "A comprehensive sports coaching platform connecting students with basketball and football coaches through dynamic booking, real-time video sessions, and location-based trainer discovery.",
    features: [
      "Dynamic booking calendar based on trainer weekly availability",
      "Real-time video calling with mute/unmute and camera controls",
      "Map-based trainer discovery with distance filtering",
      "Real-time chat and notifications using Socket.IO",
      "Admin-managed onboarding with trainer verification and payment gating",
    ],
  },
  {
    slug: "job-training-platform",
    title: "RbWoodRuff",
    thumbnail: "/api/placeholder/400/500",
    liveLink: "https://dashboard.neworkx.com/",
    codeBase: "https://github.com/Shaon247on/RbWoodRuff",
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn/ui",
      "React Hook Form",
    ],
    credentials: {
      email: "admin@gmail.com",
      password: "Admin@1234",
    },
    description:
      "Multi-role job and training management platform featuring four specialized dashboards for training providers, employers, agencies, and administrators with court-referred user tracking.",
    features: [
      "Role-based dashboards for employers, training providers, agencies, and admin",
      "CSV upload functionality for case ID and court date management",
      "Matching logic for tracking users with similar case IDs",
      "AI resume builder integration with completion scoring",
      "Compliance report generation for court submission",
    ],
  },
  {
    slug: "geography-quiz-platform",
    title: "Geography",
    thumbnail: "../../../public/geography.png",
    liveLink: "https://geographygeyser.com/",
    codeBase: "https://github.com/Shaon247on/Global-Math",
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    credentials: {
      email: "jahidislam1204.bd@gmail.com",
      password: "123456789",
    },
    description:
      "MCQ-based geography learning platform with comprehensive admin controls for question management, quiz scheduling, and student performance tracking.",
    features: [
      "Admin dashboard for subject creation and question management",
      "CSV upload support for bulk question imports",
      "Scheduled quiz windows with time-based participation",
      "Real-time score tracking and performance analytics",
      "User-friendly interface for seamless learning experience",
    ],
  },
  {
    slug: "business-platform",
    title: "Oxdoug",
    thumbnail: "../../../public/oxdoug.png",
    liveLink: "https://www.notoverlandtech.com/",
    codeBase: "https://github.com/Shaon247on/Oxdoug-Frontend",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
    ],
    credentials: {
      email: "jahidislam1204.bd@gmail.com",
      password: "123456789",
    },
    description:
      "Full-featured e-commerce platform with comprehensive shopping functionality including product browsing, cart management, secure checkout, order tracking, and user account management for seamless online shopping experience.",
    features: [
      "Complete product catalog with advanced search and filtering",
      "Shopping cart with real-time updates and inventory management",
      "Secure checkout process with multiple payment options",
      "User authentication and profile management",
      "Order history tracking and status updates",
      "Responsive design for optimal mobile and desktop experience",
    ],
  },
  {
    slug: "math-platform",
    title: "Mathos",
    thumbnail: "../../../public/mathos.png",
    liveLink: "https://mathos.cloud/",
    codeBase: "https://github.com/Shaon247on/Mathos-Frontend",
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    credentials: {
      email: "admin@gmail.com",
      password: "admin",
    },
    description:
      "StackOverflow-inspired mathematics platform enabling students to collaborate on problem-solving with AI-powered assistance, classroom features, and community-driven voting system.",
    features: [
      "Upvote/downvote system with top solutions pinned automatically",
      "Classroom features with Facebook-style group functionality",
      "AI-powered assistance for solution generation and refinement",
      "Real-time messaging between students and teachers",
      "Comprehensive admin dashboard for user moderation and quiz management",
    ],
  },
  {
    slug: "Competition Platform",
    title: "Victory Vault",
    thumbnail: "/api/placeholder/400/500",
    liveLink: "https://assignment-12-supremacy.web.app/",
    codeBase: "https://github.com/Shaon247on/Victory-Vault-A12",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Tailwind CSS",
    ],
    credentials: {
      email: "emarot@kaka.com",
      password: "Rango247on",
    },
    description:
      "Interactive competition platform with real-time features, comprehensive user management, and engaging community interactions for competitive gaming enthusiasts.",
    features: [
      "Real-time competition tracking with Socket.io integration",
      "User authentication and profile management",
      "Dynamic leaderboard and ranking system",
      "Community features for user interaction",
      "Responsive design for optimal mobile experience",
    ],
  },
  {
    slug: "Social Community Platform",
    title: "Reflect Radar",
    thumbnail: "/api/placeholder/400/500",
    liveLink: "https://assignment-11-battlefield.web.app/",
    codeBase: "https://github.com/Shaon247on/Reflect-Radar-A11",
    techStack: ["React", "Prisma", "MongoDB", "Firebase", "Tailwind CSS"],
    description:
      "Social community platform fostering user engagement through interactive features, content sharing, and real-time communication capabilities.",
    features: [
      "User authentication with Firebase integration",
      "Content sharing and community interaction features",
      "Real-time updates and notifications",
      "Responsive UI with Tailwind CSS",
      "Database management with Prisma and MongoDB",
    ],
  },
];

// Main Projects Section Component
export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(
    PROJECTS[0].slug
  );
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSelectedProject(null);
      } else {
        setSelectedProject(PROJECTS[0].slug);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;

      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // Hide image if cursor is outside container
      if (
        rect.top > e.clientY ||
        rect.bottom < e.clientY ||
        rect.left > e.clientX ||
        rect.right < e.clientX
      ) {
        return;
      }

      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const handleMouseEnter = (slug: string) => {
    if (isMobile) {
      setSelectedProject(null);
      return;
    }
    setSelectedProject(slug);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setSelectedProject(PROJECTS[0].slug);
    }
  };

  const handleProjectClick = (slug: string) => {
    setExpandedProject(expandedProject === slug ? null : slug);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-20 lg:py-32" id="projects">
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
                expandedProject={expandedProject}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onProjectClick={handleProjectClick}
                isMobile={isMobile}
              />
            ))}
          </div>

          {/* Floating Image (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {!isMobile && (
              <FloatingImage
                selectedProject={selectedProject}
                mousePosition={mousePosition}
                containerRef={containerRef}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}