'use client'

import { useEffect, useRef } from 'react'
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion'
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  CreditCard,
  Database,
  Download,
  Gauge,
  Github,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Radio,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import { PROJECTS } from '@/data/projects'
import { SITE, TECH_KEYWORDS } from '@/utils/seo'

/* ---------------------------------------------------------------------------
   Content lives in these arrays so the JSX below stays a layout concern only.
   Every label is phrased the way a recruiter or client actually searches —
   "hire Next.js developer", "SaaS dashboard", "role-based access control",
   "Stripe integration", "Socket.IO real-time" — because this section is the
   densest block of indexable prose on the page. Facts (name, years, links)
   come from @/utils/seo so the copy can never drift from the structured data.
--------------------------------------------------------------------------- */

const STATS = [
  {
    value: Number(SITE.yearsOfExperience),
    suffix: '+',
    label: 'Years of experience',
    hint: 'Full-stack, in production',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Platforms shipped',
    hint: 'SaaS · POS · FinTech',
  },
  {
    value: PROJECTS.length,
    suffix: '',
    label: 'Live case studies',
    hint: 'Deployed, most with demo logins',
  },
  {
    value: TECH_KEYWORDS.length,
    suffix: '+',
    label: 'Technologies in daily use',
    hint: 'Front end to database',
  },
]

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Full-Stack Web Development',
    copy:
      'Next.js 15 App Router, React 18 and TypeScript on the front, Node.js and Express REST APIs behind it — one developer across the whole request.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    iconClass: 'text-blue-400',
    glow: 'from-blue-500/20',
    ring: 'group-hover:border-blue-500/40',
  },
  {
    icon: LayoutDashboard,
    title: 'SaaS Dashboards & Admin Panels',
    copy:
      'B2B SaaS dashboards and multi-role admin panels — Admin, Owner and Staff tiers, tenant-scoped data, analytics and CSV-driven bulk operations.',
    tags: ['B2B SaaS', 'Multi-tenant', 'Analytics', 'Shadcn/ui'],
    iconClass: 'text-purple-400',
    glow: 'from-purple-500/20',
    ring: 'group-hover:border-purple-500/40',
  },
  {
    icon: ShieldCheck,
    title: 'Authentication & Role-Based Access Control',
    copy:
      'JWT authentication with HttpOnly cookie sessions, silent token refresh, NextAuth, middleware route guards and permission checks that hold on the server too.',
    tags: ['JWT', 'NextAuth', 'RBAC', 'jose'],
    iconClass: 'text-emerald-400',
    glow: 'from-emerald-500/20',
    ring: 'group-hover:border-emerald-500/40',
  },
  {
    icon: CreditCard,
    title: 'Payments & Subscriptions',
    copy:
      'Stripe checkout, subscription lifecycles, webhooks, payouts and plan-based feature gating — billing state that the UI and the API agree on.',
    tags: ['Stripe', 'Webhooks', 'Feature gating', 'Payouts'],
    iconClass: 'text-pink-400',
    glow: 'from-pink-500/20',
    ring: 'group-hover:border-pink-500/40',
  },
  {
    icon: Radio,
    title: 'Real-Time Features',
    copy:
      'Socket.IO chat, live notifications, booking calendars driven by weekly availability, and in-app video calling with mute and camera controls.',
    tags: ['Socket.IO', 'Live chat', 'Notifications', 'Scheduling'],
    iconClass: 'text-cyan-400',
    glow: 'from-cyan-500/20',
    ring: 'group-hover:border-cyan-500/40',
  },
  {
    icon: Database,
    title: 'Databases & Data Modelling',
    copy:
      'MongoDB and PostgreSQL through Prisma ORM, with Supabase and Firebase where they earn their place — schemas designed before the first query.',
    tags: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Supabase'],
    iconClass: 'text-indigo-400',
    glow: 'from-indigo-500/20',
    ring: 'group-hover:border-indigo-500/40',
  },
  {
    icon: Gauge,
    title: 'Performance, SEO & Core Web Vitals',
    copy:
      'Server-side rendering, cached queries with RTK Query and TanStack Query, image optimisation and structured data — scores that survive a mid-range phone.',
    tags: ['SSR', 'Core Web Vitals', 'Structured data', 'Caching'],
    iconClass: 'text-amber-400',
    glow: 'from-amber-500/20',
    ring: 'group-hover:border-amber-500/40',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform & Responsive UI',
    copy:
      'React Native for mobile, Tailwind CSS and Framer Motion for the web — interfaces that behave the same on a 360px screen and an ultrawide monitor.',
    tags: ['React Native', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
    iconClass: 'text-rose-400',
    glow: 'from-rose-500/20',
    ring: 'group-hover:border-rose-500/40',
  },
  {
    icon: Rocket,
    title: 'Ship, Deploy & Maintain',
    copy:
      'Typed API clients instead of guesswork, Zod-validated contracts from form to endpoint, Docker for parity, and Vercel deployments you can open right now.',
    tags: ['Zod', 'Docker', 'Vercel', 'Typed clients'],
    iconClass: 'text-teal-400',
    glow: 'from-teal-500/20',
    ring: 'group-hover:border-teal-500/40',
  },
]

const FOCUS_AREAS = [
  {
    label: 'Frontend Engineering',
    detail: 'Next.js · React · TypeScript · Tailwind CSS · Shadcn/ui · Framer Motion',
    level: 95,
    bar: 'from-blue-500 to-cyan-400',
  },
  {
    label: 'Backend & API Development',
    detail: 'Node.js · Express.js · REST APIs · Prisma ORM · Zod validation',
    level: 85,
    bar: 'from-purple-500 to-fuchsia-400',
  },
  {
    label: 'Databases & Data Modelling',
    detail: 'MongoDB · PostgreSQL · Supabase · Firebase · Docker',
    level: 80,
    bar: 'from-emerald-500 to-teal-400',
  },
  {
    label: 'Auth, Payments & Real-Time',
    detail: 'JWT · NextAuth · RBAC · Stripe · Socket.IO · webhooks',
    level: 90,
    bar: 'from-pink-500 to-rose-400',
  },
]

const QUICK_FACTS = [
  { icon: Briefcase, label: 'Role', value: 'Full-Stack Developer (MERN + Next.js)' },
  { icon: MapPin, label: 'Based in', value: `${SITE.country} · remote-friendly (UTC+6)` },
  { icon: Sparkles, label: 'Experience', value: `${SITE.yearsOfExperience}+ years shipping production apps` },
  { icon: Rocket, label: 'Availability', value: 'Open to full-time, contract & freelance' },
]

/* ---------------------------------------------------------------------------
   Animation primitives, shared by every block so the whole section reads as
   one motion system instead of nine unrelated effects.
--------------------------------------------------------------------------- */

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

const scaleIn = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// Shared viewport config: animate once, as soon as a fifth of the block shows.
// Without `once` the long section would replay every scroll pass.
const viewport = { once: true, amount: 0.2 } as const

/** Counts up to `to` when the stat grid enters view; static under reduced motion. */
function Counter({ to, isInView }: { to: number; isInView: boolean }) {
  const reduceMotion = useReducedMotion()
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (!isInView) return
    if (reduceMotion) {
      count.set(to)
      return
    }
    const controls = animate(count, to, { duration: 1.4, ease: 'easeOut' })
    return () => controls.stop()
  }, [count, isInView, reduceMotion, to])

  return <motion.span>{rounded}</motion.span>
}

export default function About() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden py-20 lg:py-32"
    >
      {/* Ambient glows. Purely decorative, and held still when the visitor has
          asked the OS for reduced motion. */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <motion.div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
          animate={reduceMotion ? undefined : { scale: [1, 1.18, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"
          animate={reduceMotion ? undefined : { scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-custom">
        {/* ---------------------------------------------------------------- */}
        {/* Heading                                                          */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-gray-300"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-emerald-400"
              animate={reduceMotion ? undefined : { scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Available for hire — remote or on-site
          </motion.div>

          <motion.h2
            id="about-heading"
            variants={fadeUp}
            className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.div
            className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-3xl text-base text-gray-400 md:text-lg"
          >
            <strong className="font-semibold text-gray-200">{SITE.name}</strong> — Full-Stack
            Developer from {SITE.country}, building production SaaS dashboards, POS systems and
            FinTech platforms with Next.js, React, TypeScript, Node.js, MongoDB and PostgreSQL.
          </motion.p>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* Stats grid — animated counters                                   */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          ref={statsRef}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="glass group rounded-2xl p-5 text-center transition-colors duration-300 hover:border-blue-500/40 md:p-6"
            >
              <p className="font-heading text-3xl font-bold md:text-4xl">
                <span className="gradient-text">
                  <Counter to={stat.value} isInView={statsInView} />
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-sm font-semibold text-white md:text-base">{stat.label}</p>
              <p className="mt-1 text-xs text-gray-500">{stat.hint}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* Bio + profile card                                               */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20 grid gap-6 lg:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="glass rounded-2xl p-8 md:p-10 lg:col-span-2"
          >
            <h3 className="mb-6 font-heading text-2xl font-bold text-white">
              A Full-Stack Developer who ships
            </h3>

            <div className="space-y-5 text-base leading-relaxed text-gray-300 md:text-lg">
              <p>
                I&apos;m <strong className="text-white">{SITE.name}</strong>, a{' '}
                <strong className="text-white">Full-Stack Developer</strong> based in{' '}
                {SITE.country}. For the past {SITE.yearsOfExperience} years I&apos;ve shipped
                production web applications with{' '}
                <strong className="text-white">Next.js, React, TypeScript and Node.js</strong> —
                B2B SaaS dashboards, POS and inventory systems, and a FinTech platform that
                businesses use daily.
              </p>

              <p>
                My work sits where the interface meets the hard parts:{' '}
                <strong className="text-white">role-based access control</strong> across Admin,
                Owner and Staff tiers; <strong className="text-white">JWT authentication</strong>{' '}
                with HttpOnly cookie sessions and silent token refresh;{' '}
                <strong className="text-white">Stripe subscriptions</strong> with plan-based
                feature gating; real-time chat, notifications and scheduling over{' '}
                <strong className="text-white">Socket.IO</strong>. On the data side I work with
                MongoDB, PostgreSQL and Prisma ORM, with Zod-validated contracts from form to API.
              </p>

              <p>
                I care about what happens after launch — typed API clients instead of guesswork,
                reusable Shadcn/ui component systems, cached queries with RTK Query and TanStack
                Query, and Core Web Vitals that still hold up on a mid-range phone. Every project
                below is deployed and open to inspect, most of them with demo credentials so you
                can judge the work yourself instead of taking my word for it.
              </p>
            </div>
          </motion.div>

          {/* Quick facts — the scannable version of the three paragraphs */}
          <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
            <h3 className="mb-6 font-heading text-xl font-bold text-white">At a glance</h3>

            <ul className="space-y-5">
              {QUICK_FACTS.map((fact) => (
                <li key={fact.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                    <fact.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-gray-500">
                      {fact.label}
                    </span>
                    <span className="block text-sm font-medium text-gray-200">{fact.value}</span>
                  </span>
                </li>
              ))}

              <li className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-gray-500">
                    Email
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="block truncate text-sm font-medium text-gray-200 transition-colors hover:text-blue-400"
                  >
                    {SITE.email}
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub profile of ${SITE.name}`}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-white"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile of ${SITE.name}`}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href={SITE.cv}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glass inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-gray-200 transition-colors hover:text-white"
              >
                <Download className="h-4 w-4" />
                Résumé
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* What I build — capability grid                                   */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
              What I <span className="gradient-text">Build</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Nine things I get hired for — from Next.js front ends and multi-role SaaS dashboards
              to authentication, Stripe payments and real-time features.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item) => (
              <motion.article
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className={`glass group relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 ${item.ring}`}
              >
                {/* Gradient wash, revealed on hover only */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <motion.span
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] ${item.iconClass}`}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                >
                  <item.icon className="h-6 w-6" />
                </motion.span>

                <h4 className="mb-3 text-lg font-semibold text-white">{item.title}</h4>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">{item.copy}</p>

                <ul className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-gray-700/60 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* ---------------------------------------------------------------- */}
        {/* Focus areas — animated proficiency bars                          */}
        {/* ---------------------------------------------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <h3 className="font-heading text-3xl font-bold text-white md:text-4xl">
              Where I Go <span className="gradient-text">Deep</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Full-stack by title, but these are the four areas I&apos;m asked for by name.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {FOCUS_AREAS.map((area) => (
              <motion.div key={area.label} variants={fadeUp} className="glass rounded-2xl p-6">
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <h4 className="text-base font-semibold text-white md:text-lg">{area.label}</h4>
                  <span className="text-sm font-semibold text-gray-400">{area.level}%</span>
                </div>
                <p className="mb-4 text-xs text-gray-500 md:text-sm">{area.detail}</p>
                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]"
                  role="progressbar"
                  aria-label={`${area.label} proficiency`}
                  aria-valuenow={area.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${area.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.level}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
