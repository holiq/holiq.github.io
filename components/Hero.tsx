'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeIn, blurUp } from '@/lib/animations'
import { portfolioData } from '@/data/portfolio'
import { Github, Mail, Linkedin } from 'lucide-react'
import SectionBackground from './SectionBackground'

export default function Hero() {
  const { scrollY } = useScroll()
  
  // Parallax effects for content
  const yContent = useTransform(scrollY, [0, 500], [0, 50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <SectionBackground variant="hero" id="hero" className="min-h-screen flex items-center justify-center">
      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 text-center"
        style={{ y: yContent, opacity }}
      >
        {/* Avatar with Enhanced Hover Effect */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.8 
          }}
        >
          <motion.div 
            className="mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative inline-block">
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full gradient-bg flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl ring-4 ring-white/30 dark:ring-white/10">
                HI
              </div>
              {/* Animated ring effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-400/50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Name with Better Typography */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={blurUp}
          transition={{ delay: 0.2 }}
        >
          {portfolioData.personal.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl gradient-text font-semibold mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          {portfolioData.personal.title}
        </motion.p>

        {/* Summary */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          {portfolioData.summary}
        </motion.p>

        {/* CTA Buttons with Enhanced Hover */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit GitHub profile"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <Github className="w-5 h-5 relative z-10" aria-hidden="true" />
            <span className="font-semibold relative z-10">GitHub</span>
          </motion.a>

          <motion.a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600/15 dark:bg-blue-600/20 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/30 rounded-full hover:bg-blue-600/25 dark:hover:bg-blue-600/30 transition-all duration-300 flex items-center justify-center gap-3 text-blue-700 dark:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Visit LinkedIn profile"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <Linkedin className="w-5 h-5 relative z-10" aria-hidden="true" />
            <span className="font-semibold relative z-10">LinkedIn</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 gradient-bg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact me"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span className="font-semibold">Contact Me</span>
          </motion.a>
        </motion.div>
      </motion.div>

    </SectionBackground>
  )
}
