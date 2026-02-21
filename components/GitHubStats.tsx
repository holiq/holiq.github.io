'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { GitBranch, GitCommit, GitPullRequest } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { staggerContainer, zoomIn } from '@/lib/animations'
import SectionBackground from './SectionBackground'

export default function GitHubStats() {
  const ref = useRef(null)
  const commitsRef = useRef<HTMLDivElement>(null)
  const reposRef = useRef<HTMLDivElement>(null)
  const contribsRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const animateCounter = (
      element: HTMLDivElement | null,
      value: number,
      format = true
    ) => {
      if (!element) return

      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          const current = Math.ceil(latest)
          element.textContent = format
            ? current.toLocaleString() + '+'
            : current + '+'
        },
      })

      return controls
    }

    const commitsControl = animateCounter(commitsRef.current, portfolioData.githubStats.commits, true)
    const reposControl = animateCounter(reposRef.current, portfolioData.githubStats.repositories, false)
    const contribsControl = animateCounter(contribsRef.current, portfolioData.githubStats.contributions, false)

    return () => {
      commitsControl?.stop()
      reposControl?.stop()
      contribsControl?.stop()
    }
  }, [isInView])

  const stats = [
    {
      icon: GitCommit,
      label: 'Total Commits',
      ref: commitsRef,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: GitBranch,
      label: 'Repositories',
      ref: reposRef,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: GitPullRequest,
      label: 'Open Source Contributions',
      ref: contribsRef,
      color: 'from-cyan-500 to-teal-500',
    },
  ]

  return (
    <SectionBackground variant="stats" id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={zoomIn}
              className="group relative p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 shadow-sm dark:shadow-none backdrop-blur-md border border-slate-200/60 dark:border-white/10 hover:border-purple-300 dark:hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              <div className="relative">
                <stat.icon className={`w-12 h-12 mb-4 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} strokeWidth={1.5} />
                <div
                  ref={stat.ref}
                  className="text-5xl font-bold gradient-text mb-2"
                >
                  0+
                </div>
                <div className="text-slate-500 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  )
}
