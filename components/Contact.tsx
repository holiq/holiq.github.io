'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Phone, MapPin } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/animations'

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@holiq',
      href: portfolioData.personal.github,
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon === Github ? '_blank' : undefined}
              rel={item.icon === Github ? 'noopener noreferrer' : undefined}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-center h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span>{portfolioData.personal.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
