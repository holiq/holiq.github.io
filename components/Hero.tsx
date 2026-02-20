'use client'

import { motion } from 'framer-motion'
import { Suspense, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { fadeInUp, fadeIn, bounceIn, blurUp } from '@/lib/animations'
import { portfolioData } from '@/data/portfolio'
import { Github, Mail, Linkedin } from 'lucide-react'
import LoadingSpinner from './LoadingSpinner'

// Dynamic import for Three.js components to reduce initial bundle size
const Hero3D = dynamic(() => import('./Hero3D'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
})

export default function Hero() {
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Disable 3D on mobile / low-end devices to save GPU & battery
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* 3D / Gradient Background */}
      <div className="absolute inset-0 z-0">
        {isClient && !isMobile ? (
          <Suspense fallback={<LoadingSpinner />}>
            <Hero3D />
          </Suspense>
        ) : (
          /* Static gradient fallback for mobile & SSR — zero GPU cost */
          <div className="w-full h-full bg-gradient-to-br from-slate-100 via-purple-100/40 to-slate-50 dark:from-slate-900 dark:via-purple-950/30 dark:to-slate-900" />
        )}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-25 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 dark:opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={bounceIn}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-float">
              HI
            </div>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={blurUp}
          transition={{ delay: 0.2 }}
        >
          {portfolioData.personal.name}
        </motion.h1>

        <motion.p
          className="text-3xl md:text-4xl gradient-text font-semibold mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          {portfolioData.personal.title}
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          {portfolioData.summary}
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-black/10 dark:bg-white/10 backdrop-blur-md border border-black/20 dark:border-white/20 rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 flex items-center gap-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Visit GitHub profile"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            <span className="font-semibold">GitHub</span>
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-blue-600/15 dark:bg-blue-600/20 backdrop-blur-md border border-blue-400/40 dark:border-blue-500/30 rounded-full hover:bg-blue-600/25 dark:hover:bg-blue-600/30 transition-all duration-300 flex items-center gap-3 text-blue-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className="w-5 h-5" aria-hidden="true" />
            <span className="font-semibold">LinkedIn</span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 gradient-bg rounded-full hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Contact me"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span className="font-semibold">Contact Me</span>
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
