// Project data lives here rather than inside the (client) ProjectList component so
// that server-side consumers — the JSON-LD graph in particular — can import it
// without crossing the "use client" boundary.

// A single labelled destination — one deployment, one repo, or one store listing
export interface ProjectLink {
  label: string;
  url: string;
}

// One login set. `label` distinguishes them when a project ships several roles
export interface ProjectCredential {
  label?: string;
  email?: string;
  password?: string;
}

// TypeScript interface for project structure
export interface ProjectType {
  slug: string;
  title: string;
  thumbnail: string;
  liveLinks: ProjectLink[];
  codeBases?: ProjectLink[];
  appLinks?: ProjectLink[];
  techStack: string[];
  credentials?: ProjectCredential[];
  description?: string;
  features?: string[];
}

export const PROJECTS: ProjectType[] = [
  {
    slug: "sports-facility-management-platform",
    title: "AthlonGo",
    thumbnail: "/Ahtlon.png",
    liveLinks: [
      { label: "Admin Panel", url: "https://andress-admin.vercel.app" },
      { label: "Court Manager", url: "https://andress-court-manager.vercel.app" },
    ],
    codeBases: [
      { label: "Admin Panel", url: "https://github.com/Shaon247on/andress-admin" },
      {
        label: "Court Manager",
        url: "https://github.com/Shaon247on/andress-court-manager",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Tailwind CSS",
      "Shadcn/ui",
      "Zod",
      "React Hook Form",
      "Recharts",
      "Google Maps API",
      "Cloudinary",
      "JWT",
    ],
    credentials: [
      {
        label: "Admin",
        email: "aminul007.ais@gmail.com",
        password: "Shaon20",
      },
      {
        label: "Court Manager",
        email: "mdaminulislamshaon@gmail.com",
        password: "Rango247on",
      },
    ],
    description:
      "B2B SaaS sports facility management platform handling court scheduling, multi-tier staff permissions, and revenue operations for academies running both indoor and outdoor facilities.",
    features: [
      "Visual sheet-view scheduler with drag-and-drop rescheduling and real-time conflict detection",
      "Three-tier role-based access control for Admin, Academy Owner, and Staff with task delegation",
      "Three-stage revenue workflow covering earnings, withdrawal requests, and admin approval",
      "Socket.io-powered live chat with ticket management between users and admins",
      "Google Maps integration for facility discovery and location management",
    ],
  },
  {
    slug: "product-traceability-platform",
    title: "Expiro",
    thumbnail: "/expiro.png",
    liveLinks: [{ label: "Live Demo", url: "https://expiro-seven.vercel.app/" }],
    codeBases: [
      { label: "Frontend", url: "https://github.com/Shaon247on/Expiro" },
      { label: "Backend", url: "https://github.com/Shaon247on/expiro-backend" },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Shadcn/ui",
      "Zod",
      "React Hook Form",
      "Recharts",
      "Stripe",
      "JWT",
      "Cloudinary",
    ],
    credentials: [
      {
        label: "Admin Dashboard",
        email: "admin@gmail.com",
        password: "Admin@123",
      },
    ],
    description:
      "B2B SaaS product traceability and inventory management platform combining batch-level stock tracking, an automated task pipeline, and tiered Stripe subscriptions.",
    features: [
      "Role-based dashboards for Super Admin, Admin, and Staff with permission-scoped access",
      "Real-time inventory tracking with batch management, barcode generation, and expiry alerts",
      "Five-stage task workflow covering creation, assignment, approval, recurrence, and attendance",
      "Stripe checkout across four subscription tiers with plan-based feature gating",
      "Low-stock alerting and reporting built on TanStack Query and Recharts",
    ],
  },
  {
    slug: "secure-fintech-platform",
    title: "Payparo",
    thumbnail: "/payparo.png",
    liveLinks: [{ label: "Live Dashboard Demo", url: "https://dashboard.payparo.com/" }, { label: "Live Demo", url: "https://payparo.com/" }],
    appLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.payparo",
      },
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "JWT",
      "Server Actions",
      "Middleware",
      "Tailwind CSS",
      "Shadcn/ui",
      "Zod",
      "React Hook Form",
      "Axios",
    ],
    description:
      "Secure FinTech web application built around a production-grade authentication architecture — HttpOnly cookie token storage, silent token refresh, and layered server-side authorization across user and admin roles.",
    features: [
      "JWT access and refresh tokens held in HttpOnly, Secure, SameSite cookies, never reachable from JavaScript",
      "Silent access-token renewal through Next.js Middleware and Axios interceptors, so expired sessions never force a re-login",
      "Concurrent-refresh deduplication via an isRefreshing flag and failed-request queue, collapsing simultaneous 401s into a single refresh call",
      "Two-layer route protection: middleware as the first authorization gate, server-side session validation as the second",
      "Server-side role validation for admin-only routes instead of client-side UI gating alone",
      "SSR session hydration via AuthProvider and a useAuth hook, eliminating unauthorized UI flashes and stale auth state",
      "Separate request-scoped server and browser Axios clients with typed API contracts validated by Zod",
    ],
    credentials: [
      {
        label: "Admin Dashboard",
        email: "admin@gmail.com",
        password: "Admin",
      },
    ],
  },
  // {
  //   slug: "sports-coaching-platform",
  //   title: "BallMastery",
  //   thumbnail: "/ballmastery.png",
  //   liveLinks: [{ label: "Live Demo", url: "https://ballmastery.com/" }],
  //   codeBases: [
  //     { label: "Source Code", url: "https://github.com/Shaon247on/sportsverse" },
  //   ],
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Socket.IO",
  //     "Redux Toolkit",
  //     "Tailwind CSS",
  //     "Shadcn/ui",
  //   ],
  //   credentials: [
  //     {
  //       email: "brighteto11@gmail.com",
  //       password: "admin",
  //     },
  //   ],
  //   description:
  //     "A comprehensive sports coaching platform connecting students with basketball and football coaches through dynamic booking, real-time video sessions, and location-based trainer discovery.",
  //   features: [
  //     "Dynamic booking calendar based on trainer weekly availability",
  //     "Real-time video calling with mute/unmute and camera controls",
  //     "Map-based trainer discovery with distance filtering",
  //     "Real-time chat and notifications using Socket.IO",
  //     "Admin-managed onboarding with trainer verification and payment gating",
  //   ],
  // },
  // {
  //   slug: "job-training-platform",
  //   title: "RbWoodRuff",
  //   thumbnail: "/api/placeholder/400/500",
  //   liveLinks: [{ label: "Live Demo", url: "https://dashboard.neworkx.com/" }],
  //   codeBases: [
  //     { label: "Source Code", url: "https://github.com/Shaon247on/RbWoodRuff" },
  //   ],
  //   techStack: [
  //     "Next.js",
  //     "TypeScript",
  //     "Redux Toolkit",
  //     "Tailwind CSS",
  //     "Shadcn/ui",
  //     "React Hook Form",
  //   ],
  //   credentials: [
  //     {
  //       email: "admin@gmail.com",
  //       password: "Admin@1234",
  //     },
  //   ],
  //   description:
  //     "Multi-role job and training management platform featuring four specialized dashboards for training providers, employers, agencies, and administrators with court-referred user tracking.",
  //   features: [
  //     "Role-based dashboards for employers, training providers, agencies, and admin",
  //     "CSV upload functionality for case ID and court date management",
  //     "Matching logic for tracking users with similar case IDs",
  //     "AI resume builder integration with completion scoring",
  //     "Compliance report generation for court submission",
  //   ],
  // },
  {
    slug: "geography-quiz-platform",
    title: "Geography",
    thumbnail: "/geography.png",
    liveLinks: [{ label: "Live Demo", url: "https://geographygeyser.com/" }],
    codeBases: [
      { label: "Source Code", url: "https://github.com/Shaon247on/Global-Math" },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    credentials: [
      {
        email: "jahidislam1204.bd@gmail.com",
        password: "123456789",
      },
    ],
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
    thumbnail: "/oxdoug.png",
    liveLinks: [
      { label: "Live Demo", url: "https://www.notoverlandtech.com/" },
    ],
    codeBases: [
      {
        label: "Source Code",
        url: "https://github.com/Shaon247on/Oxdoug-Frontend",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
    ],
    credentials: [
      {
        email: "jahidislam1204.bd@gmail.com",
        password: "123456789",
      },
    ],
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
    title: "Coyoote",
    thumbnail: "/mathos.png",
    liveLinks: [{ label: "Live Demo", url: "https://mathos.cloud/" }],
    codeBases: [
      {
        label: "Source Code",
        url: "https://github.com/Shaon247on/Mathos-Frontend",
      },
    ],
    appLinks: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.coyoote.app",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    credentials: [
      {
        email: "admin@gmail.com",
        password: "admin",
      },
    ],
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
    thumbnail: "/VictoryVault.png",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://assignment-12-supremacy.web.app/",
      },
    ],
    codeBases: [
      {
        label: "Source Code",
        url: "https://github.com/Shaon247on/Victory-Vault-A12",
      },
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Tailwind CSS",
    ],
    credentials: [
      {
        email: "emarot@kaka.com",
        password: "Rango247on",
      },
    ],
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
    thumbnail: "/Reflect-Radar.png",
    liveLinks: [
      {
        label: "Live Demo",
        url: "https://assignment-11-battlefield.web.app/",
      },
    ],
    codeBases: [
      {
        label: "Source Code",
        url: "https://github.com/Shaon247on/Reflect-Radar-A11",
      },
    ],
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
