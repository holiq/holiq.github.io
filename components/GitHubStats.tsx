'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { GitBranch, GitCommit, GitPullRequest } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function GitHubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const commitsRef = useRef<HTMLDivElement>(null)
  const reposRef = useRef<HTMLDivElement>(null)
  const contribsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView) {
      // Animate commits counter
      if (commitsRef.current) {
        gsap.to(commitsRef.current, {
          innerText: portfolioData.githubStats.commits,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          onUpdate: function() {
            if (commitsRef.current) {
              commitsRef.current.innerText = Math.ceil(Number(commitsRef.current.innerText)).toLocaleString() + '+'
            }
          }
        })
      }

      // Animate repositories counter
      if (reposRef.current) {
        gsap.to(reposRef.current, {
          innerText: portfolioData.githubStats.repositories,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          onUpdate: function() {
            if (reposRef.current) {
              reposRef.current.innerText = Math.ceil(Number(reposRef.current.innerText)) + '+'
            }
          }
        })
      }

      // Animate contributions counter
      if (contribsRef.current) {
        gsap.to(contribsRef.current, {
          innerText: portfolioData.githubStats.contributions,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          onUpdate: function() {
            if (contribsRef.current) {
              contribsRef.current.innerText = Math.ceil(Number(contribsRef.current.innerText)) + '+'
            }
          }
        })
      }
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
    <section id="about" className="py-20 relative">
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
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
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
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
