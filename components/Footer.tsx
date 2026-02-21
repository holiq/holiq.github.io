'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Mail } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import SectionBackground from './SectionBackground'

export default function Footer() {
  return (
    <SectionBackground variant="footer" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-2 mb-6 text-gray-400">
            <span>© {new Date().getFullYear()} {portfolioData.personal.name}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using Next.js
            </span>
          </div>

          <div className="flex justify-center items-center gap-6">
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-gray-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>Languages: {portfolioData.languages.join(', ')}</p>
          </div>
        </motion.div>
      </div>
    </SectionBackground>
  )
}
