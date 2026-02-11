'use client'

import { motion } from 'framer-motion'
import { Code, Database, Wrench } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/animations'

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
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                variants={fadeInUp}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClass}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category}</h3>
                    </div>

                    <div className="space-y-3">
                      {skills.map((skill, idx) => (
                        <motion.div
                          key={idx}
                          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {skill}
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
    </section>
  )
}
