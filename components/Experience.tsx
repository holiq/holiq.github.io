'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { slideInLeft, slideInRight } from '@/lib/animations'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    if (timelineRef.current) {
      gsap.to(timelineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })
    }
  }, [])

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'Volunteer':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Part-time':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10">
            <div
              ref={timelineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-indigo-600"
              style={{ height: '0%' }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-16">
            {portfolioData.experience.map((exp, index) => {
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  variants={isEven ? slideInLeft : slideInRight}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full border-4 border-slate-900 transform -translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="group relative p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {exp.title}
                            </h3>
                            <p className="text-purple-400 font-semibold text-lg flex items-center gap-2">
                              <Briefcase className="w-5 h-5" />
                              {exp.company}
                            </p>
                            <p className="text-gray-400 text-sm mt-2 flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getTypeBadgeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                          <span className="text-gray-400 text-sm">{exp.period}</span>
                        </div>

                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
