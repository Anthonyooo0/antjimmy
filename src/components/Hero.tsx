'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MessageCircle } from 'lucide-react'
import { siteConfig, resumeUrl } from '@/content/config'

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold text-text mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-xl sm:text-2xl text-accent font-medium mb-4">
            {siteConfig.role}
          </p>
          <p className="text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {siteConfig.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={scrollToProjects}
            className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-medium transition-all duration-200 flex items-center gap-2 text-lg"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <a
            href="/ask-me"
            className="group border border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-md font-medium transition-all duration-200 flex items-center gap-2 text-lg"
          >
            <MessageCircle size={20} />
            Ask Me Anything
          </a>

          <a
            href={resumeUrl}
            download
            className="group border border-muted text-muted hover:border-text hover:text-text px-8 py-4 rounded-md font-medium transition-all duration-200 flex items-center gap-2 text-lg"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="text-lg text-muted">
            junior @njit
          </div>
        </motion.div>
      </div>
    </section>
  )
}
