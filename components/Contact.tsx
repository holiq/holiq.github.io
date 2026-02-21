'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'
import { staggerContainer, fadeInUp } from '@/lib/animations'

// Setup Instructions:
// 1. Sign up at https://formspree.io (free)
// 2. Create a new form and get your form ID
// 3. Replace YOUR_FORM_ID below with your actual form ID
// 4. Or set NEXT_PUBLIC_FORMSPREE_ID in .env.local
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID 
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : 'mailto:me@holiq.id' // Fallback to direct email

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    setErrorMessage('')

    // If using mailto fallback, open email client
    if (FORMSPREE_ENDPOINT.startsWith('mailto:')) {
      const subject = encodeURIComponent('Portfolio Contact')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `${FORMSPREE_ENDPOINT}?subject=${subject}&body=${body}`
      setFormStatus('success')
      setFormData({ name: '', email: '', message: '' })
      return
    }

    // Otherwise use Formspree
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        throw new Error(data?.error ?? 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setFormStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message.')
    }
  }

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
          <p className="text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.icon === Github ? '_blank' : undefined}
              rel={item.icon === Github ? 'noopener noreferrer' : undefined}
              variants={fadeInUp}
              className="group relative focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-2xl"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`Contact via ${item.title}: ${item.value}`}
            >
              <div className="relative p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 shadow-sm dark:shadow-none backdrop-blur-md border border-slate-200/60 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 text-center h-full">
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  initial={false}
                  whileHover={{ opacity: 0.1 }}
                />
                <div className="relative">
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:gradient-text transition-all duration-300">{item.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm break-all">{item.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 shadow-sm dark:shadow-none backdrop-blur-md border border-slate-200/60 dark:border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-2xl" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center">Send a Message</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm text-center mb-8">I'll get back to you as soon as possible.</p>

              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-8 text-center"
                >
                  <div className="p-4 rounded-full bg-green-500/20 border border-green-500/30">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h4>
                  <p className="text-slate-500 dark:text-gray-400">Thanks for reaching out. I'll reply soon.</p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-2 px-6 py-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-slate-800 dark:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Name <span className="text-purple-500 dark:text-purple-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors hover:border-black/20 dark:hover:border-white/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Email <span className="text-purple-500 dark:text-purple-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors hover:border-black/20 dark:hover:border-white/20"
                      />
                    </div>
                  </div>

                  <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                        Message <span className="text-purple-500 dark:text-purple-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hi..."
                        className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors hover:border-black/20 dark:hover:border-white/20 resize-none"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{errorMessage}</span>
                      <button
                        type="button"
                        onClick={() => setFormStatus('idle')}
                        className="ml-auto text-xs underline hover:no-underline focus:outline-none"
                      >
                        Retry
                      </button>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl gradient-bg font-semibold text-white hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 text-slate-500 dark:text-gray-400">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>{portfolioData.personal.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
