// Single source of truth for every SEO surface: metadata, JSON-LD, sitemap,
// robots, manifest and the OG image. Changing a fact here changes it everywhere,
// which is what keeps Google from seeing three different job titles on one site.

export const SITE = {
  url: "https://next-portfolio-2-0.vercel.app",
  name: "Md Aminul Islam Shaon",
  // Recruiters search all three of these spellings
  alternateNames: ["Aminul Islam Shaon", "Aminul Islam", "Shaon"],
  firstName: "Aminul",
  jobTitle: "Full-Stack Developer",
  locale: "en_US",
  country: "Bangladesh",
  countryCode: "BD",
  email: "aminul007.ais@gmail.com",
  yearsOfExperience: "2",
  github: "https://github.com/Shaon247on",
  linkedin: "https://www.linkedin.com/in/md-aminul-islam-shaon07/",
  cv: "https://drive.google.com/uc?export=download&id=18kDjzxmg5mekSvfwWQEoXcJ8Drva_Abl",
  photo: "/photo.png",
} as const;

// Title stays under ~60 characters so Google renders it without truncating.
export const SEO_TITLE = `${SITE.name} | Full-Stack Developer`;

export const SEO_TITLE_LONG = `${SITE.name} — Full-Stack Developer | Next.js, React & TypeScript`;

// Meta description, kept under ~160 characters. Leads with the primary keyword,
// closes with hiring intent.
export const SEO_DESCRIPTION =
  "Full-Stack Developer from Bangladesh building production SaaS with Next.js, React, TypeScript, Node.js and MongoDB. 12+ shipped platforms — available for hire.";

// Shorter variant for social cards, where space is tighter.
export const SEO_DESCRIPTION_SHORT =
  "Full-Stack Developer specialising in Next.js, React, TypeScript and Node.js — SaaS dashboards, role-based auth, real-time features and Stripe payments.";

// Brand queries: the highest-converting terms for any personal portfolio,
// because someone typing a name has already decided to look you up.
export const BRAND_KEYWORDS = [
  "Md Aminul Islam Shaon",
  "Aminul Islam Shaon",
  "Aminul Islam developer",
  "Aminul Shaon portfolio",
  "Shaon developer",
  "Shaon247on",
];

// Role queries: what someone types when they don't know you yet.
export const ROLE_KEYWORDS = [
  "Full-Stack Developer",
  "Full Stack Developer portfolio",
  "Full Stack Developer Bangladesh",
  "MERN stack developer",
  "Next.js developer",
  "React developer",
  "TypeScript developer",
  "frontend developer Bangladesh",
  "web developer portfolio",
];

// Hiring-intent long tail: lower volume, far higher conversion.
export const INTENT_KEYWORDS = [
  "hire full stack developer",
  "hire Next.js developer",
  "hire React developer Bangladesh",
  "freelance full stack developer Bangladesh",
  "remote full stack developer",
  "SaaS dashboard developer",
  "B2B SaaS developer",
  "admin dashboard developer",
  "POS system developer",
  "role-based access control developer",
  "Next.js authentication developer",
  "JWT authentication developer",
  "Stripe integration developer",
  "Socket.IO real-time developer",
  "multi-tenant SaaS developer",
];

// Stack queries: these also feed Person.knowsAbout in the structured data.
export const TECH_KEYWORDS = [
  "Next.js 15",
  "React 18",
  "TypeScript",
  "Tailwind CSS",
  "Shadcn/ui",
  "Redux Toolkit",
  "RTK Query",
  "TanStack Query",
  "React Hook Form",
  "Zod",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma ORM",
  "NextAuth",
  "Socket.IO",
  "Stripe",
  "Firebase",
  "React Native",
  "Docker",
  "REST API integration",
  "server-side rendering",
  "Core Web Vitals",
];

export const ALL_KEYWORDS = [
  ...BRAND_KEYWORDS,
  ...ROLE_KEYWORDS,
  ...INTENT_KEYWORDS,
  ...TECH_KEYWORDS,
];

/** Turns a site-relative path into the absolute URL crawlers and social scrapers require. */
export function absoluteUrl(path: string): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
