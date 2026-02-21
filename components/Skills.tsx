'use client'

import { motion } from 'framer-motion'
import { Code, Database, Wrench } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { staggerContainer, zoomIn, blurUp } from '@/lib/animations'
import SectionBackground from './SectionBackground'

export default function Skills() {
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill.name)
    return acc
  }, {} as Record<string, string[]>)

  const categoryIcons = {
    Backend: Code,
    Frontend: Code,
    Database: Database,
    Tools: Wrench,
  }

  const categoryColors = {
    Backend: 'from-purple-500 to-pink-500',
    Frontend: 'from-indigo-500 to-cyan-500',
    Database: 'from-blue-500 to-teal-500',
    Tools: 'from-orange-500 to-red-500',
  }

  return (
    <SectionBackground variant="skills" id="skills" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text"
          variants={blurUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {Object.entries(skillsByCategory).map(([category, skills]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            const colorClass = categoryColors[category as keyof typeof categoryColors]
            
            return (
              <motion.div
                key={category}
                variants={zoomIn}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-white/60 dark:bg-slate-800/40 shadow-sm dark:shadow-none backdrop-blur-md border border-slate-200/60 dark:border-white/10 hover:border-purple-300 dark:hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClass}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category}</h3>
                    </div>

                    <div className="space-y-3">
                      {skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        className="group/skill px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300 text-sm hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-300 dark:hover:border-purple-500/30 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 cursor-default relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 6, scale: 1.03 }}
                      >
                        {/* Hover gradient effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '0%' }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 font-medium">{skill}</span>
                      </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionBackground>
  )
}
