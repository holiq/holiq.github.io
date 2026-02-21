'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface OrbConfig {
  color: string
  size: string
  position: string
  blur: string
  opacity: string
  delay?: string
}

interface SectionBackgroundProps {
  variant: 'hero' | 'stats' | 'experience' | 'projects' | 'skills' | 'education' | 'contact' | 'footer'
  children: React.ReactNode
  className?: string
  id?: string
}

const sectionConfigs: Record<string, {
  orbs: OrbConfig[]
  pattern?: 'dots' | 'grid' | 'diagonal' | 'none'
  gradientOverlay?: string
}> = {
  hero: {
    orbs: [
      { color: 'bg-purple-400', size: 'w-[500px] h-[500px]', position: 'top-10 -left-20', blur: 'blur-[120px]', opacity: 'opacity-25 dark:opacity-[0.12]' },
      { color: 'bg-violet-400', size: 'w-[450px] h-[450px]', position: 'top-32 -right-16', blur: 'blur-[120px]', opacity: 'opacity-20 dark:opacity-[0.10]', delay: 'animation-delay-2000' },
      { color: 'bg-pink-300', size: 'w-[400px] h-[400px]', position: '-bottom-10 left-1/3', blur: 'blur-[120px]', opacity: 'opacity-20 dark:opacity-[0.10]', delay: 'animation-delay-4000' },
      { color: 'bg-indigo-300', size: 'w-[350px] h-[350px]', position: 'bottom-20 right-1/4', blur: 'blur-[100px]', opacity: 'opacity-[0.15] dark:opacity-[0.08]', delay: 'animation-delay-3000' },
    ],
    pattern: 'dots',
    gradientOverlay: 'bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]',
  },
  stats: {
    orbs: [
      { color: 'bg-purple-300', size: 'w-[350px] h-[350px]', position: '-top-20 left-1/4', blur: 'blur-[100px]', opacity: 'opacity-15 dark:opacity-[0.08]' },
      { color: 'bg-indigo-300', size: 'w-[300px] h-[300px]', position: 'bottom-0 right-1/3', blur: 'blur-[100px]', opacity: 'opacity-10 dark:opacity-[0.06]', delay: 'animation-delay-2000' },
    ],
    pattern: 'none',
    gradientOverlay: 'bg-gradient-to-b from-[var(--bg)] via-transparent to-transparent',
  },
  experience: {
    orbs: [
      { color: 'bg-purple-300', size: 'w-[450px] h-[450px]', position: 'top-20 -right-20', blur: 'blur-[120px]', opacity: 'opacity-[0.12] dark:opacity-[0.07]' },
      { color: 'bg-indigo-200', size: 'w-[400px] h-[400px]', position: 'bottom-10 -left-10', blur: 'blur-[110px]', opacity: 'opacity-[0.12] dark:opacity-[0.06]', delay: 'animation-delay-3000' },
    ],
    pattern: 'diagonal',
  },
  projects: {
    orbs: [
      { color: 'bg-indigo-300', size: 'w-[500px] h-[500px]', position: 'top-10 left-1/2 -translate-x-1/2', blur: 'blur-[130px]', opacity: 'opacity-[0.14] dark:opacity-[0.07]' },
      { color: 'bg-pink-200', size: 'w-[350px] h-[350px]', position: 'bottom-20 -left-10', blur: 'blur-[100px]', opacity: 'opacity-[0.12] dark:opacity-[0.06]', delay: 'animation-delay-2000' },
    ],
    pattern: 'grid',
  },
  skills: {
    orbs: [
      { color: 'bg-violet-300', size: 'w-[400px] h-[400px]', position: '-top-10 right-10', blur: 'blur-[110px]', opacity: 'opacity-[0.14] dark:opacity-[0.08]' },
      { color: 'bg-purple-200', size: 'w-[350px] h-[350px]', position: 'bottom-0 left-1/4', blur: 'blur-[100px]', opacity: 'opacity-[0.10] dark:opacity-[0.06]', delay: 'animation-delay-4000' },
    ],
    pattern: 'dots',
  },
  education: {
    orbs: [
      { color: 'bg-indigo-300', size: 'w-[400px] h-[400px]', position: 'top-10 -left-16', blur: 'blur-[120px]', opacity: 'opacity-[0.12] dark:opacity-[0.06]' },
      { color: 'bg-purple-200', size: 'w-[300px] h-[300px]', position: 'bottom-10 right-10', blur: 'blur-[100px]', opacity: 'opacity-[0.10] dark:opacity-[0.06]', delay: 'animation-delay-3000' },
    ],
    pattern: 'diagonal',
  },
  contact: {
    orbs: [
      { color: 'bg-purple-400', size: 'w-[450px] h-[450px]', position: 'top-1/4 -right-20', blur: 'blur-[130px]', opacity: 'opacity-[0.15] dark:opacity-[0.08]' },
      { color: 'bg-indigo-300', size: 'w-[400px] h-[400px]', position: 'bottom-10 -left-16', blur: 'blur-[110px]', opacity: 'opacity-[0.12] dark:opacity-[0.07]', delay: 'animation-delay-2000' },
    ],
    pattern: 'grid',
  },
  footer: {
    orbs: [
      { color: 'bg-purple-300', size: 'w-[300px] h-[300px]', position: 'top-0 left-1/2 -translate-x-1/2', blur: 'blur-[100px]', opacity: 'opacity-[0.08] dark:opacity-[0.05]' },
    ],
    pattern: 'none',
    gradientOverlay: 'bg-gradient-to-b from-transparent to-slate-100/50 dark:to-slate-950/50',
  },
}

function PatternOverlay({ type }: { type: 'dots' | 'grid' | 'diagonal' | 'none' }) {
  if (type === 'none') return null

  const patterns: Record<string, string> = {
    dots: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%238b5cf6' fill-opacity='0.08'/%3E%3C/svg%3E\")",
    grid: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%238b5cf6' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E\")",
    diagonal: "url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 16L16 0' fill='none' stroke='%238b5cf6' stroke-opacity='0.04' stroke-width='1'/%3E%3C/svg%3E\")",
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ backgroundImage: patterns[type], backgroundRepeat: 'repeat' }}
    />
  )
}

export default function SectionBackground({ variant, children, className = '', id }: SectionBackgroundProps) {
  const ref = useRef<HTMLElement>(null)
  const config = sectionConfigs[variant]

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const orbY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      {/* Orbs layer with parallax */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbY }}>
        {config.orbs.map((orb, i) => (
          <div
            key={i}
            className={`absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter animate-blob-section ${orb.color} ${orb.size} ${orb.position} ${orb.blur} ${orb.opacity} ${orb.delay ?? ''}`}
          />
        ))}
      </motion.div>

      {/* Pattern overlay */}
      {config.pattern && <PatternOverlay type={config.pattern} />}

      {/* Gradient overlay for smooth transitions between sections */}
      {config.gradientOverlay && (
        <div className={`absolute inset-0 pointer-events-none ${config.gradientOverlay}`} />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
