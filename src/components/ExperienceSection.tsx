'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Play } from 'lucide-react'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="text-accent" size={28} />
            <span className="text-accent font-medium">Professional Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text mb-4">
            MAC Products
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Lead Developer building AI-powered enterprise systems that transform manufacturing operations.
            Full-time role while completing my degree at NJIT.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left: Video Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Video */}
            <div className="relative aspect-video bg-bg rounded-xl overflow-hidden border border-muted/20 group cursor-pointer">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="/mac_products_poster.jpg"
              >
                <source src="/mac_products_demo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1" size={28} />
                </div>
              </div>
              <span className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
                Quality Dashboard Demo
              </span>
            </div>

            {/* Secondary Videos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-video bg-bg rounded-lg overflow-hidden border border-muted/20 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                  <Play className="text-white/60 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="absolute bottom-2 left-2 text-white/70 text-xs">Router Generator</span>
              </div>
              <div className="relative aspect-video bg-bg rounded-lg overflow-hidden border border-muted/20 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                  <Play className="text-white/60 group-hover:text-white transition-colors" size={24} />
                </div>
                <span className="absolute bottom-2 left-2 text-white/70 text-xs">Project Tracker</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Project Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Project 1 */}
            <div className="p-6 bg-bg rounded-xl border border-muted/20 hover:border-accent/40 transition-colors">
              <h3 className="text-xl font-bold text-text mb-2">Quality Dashboard</h3>
              <p className="text-muted text-sm mb-4">
                AI-powered complaint classification system using Gemini LLM.
                Processes emails, extracts data, categorizes issues automatically.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Python</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Gemini</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Streamlit</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">MS Graph API</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 bg-bg rounded-xl border border-muted/20 hover:border-accent/40 transition-colors">
              <h3 className="text-xl font-bold text-text mb-2">Router Generator</h3>
              <p className="text-muted text-sm mb-4">
                Multimodal AI that analyzes engineering PDFs and generates manufacturing routers.
                Replaces manual process requiring experienced engineers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Python</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Gemini Multimodal</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">PDF Processing</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 bg-bg rounded-xl border border-muted/20 hover:border-accent/40 transition-colors">
              <h3 className="text-xl font-bold text-text mb-2">Project Command Center</h3>
              <p className="text-muted text-sm mb-4">
                Full-stack project management for manufacturing. Real-time tracking,
                milestone visualization, audit logging for compliance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">React</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">TypeScript</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Supabase</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">3</p>
                <p className="text-muted text-sm">Production Systems</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">6K+</p>
                <p className="text-muted text-sm">Lines of Code</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">FT</p>
                <p className="text-muted text-sm">While in College</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
