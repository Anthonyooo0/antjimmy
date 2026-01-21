'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FlaskConical, Play, ExternalLink } from 'lucide-react'

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FlaskConical className="text-accent" size={28} />
            <span className="text-accent font-medium">Research</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text mb-4">
            Biomedical Software
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Applying machine learning and software engineering to solve problems in healthcare and biomedical research.
          </p>
        </motion.div>

        {/* Research Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Research Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Research Project Card */}
            <div className="p-6 bg-surface rounded-xl border border-muted/20">
              <h3 className="text-2xl font-bold text-text mb-3">AI Clinical Triage</h3>
              <p className="text-muted mb-4">
                Machine learning system for patient risk prediction and clinical decision support.
                Analyzing patient data to identify high-risk cases and optimize triage workflows.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted text-sm">Patient risk stratification models</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted text-sm">Clinical data preprocessing pipelines</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted text-sm">Real-time prediction APIs</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Python</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">scikit-learn</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">PyTorch</span>
                <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">Pandas</span>
              </div>
            </div>

            {/* NJIT Connection */}
            <div className="p-6 bg-surface rounded-xl border border-muted/20">
              <h4 className="text-lg font-bold text-text mb-2">NJIT Research</h4>
              <p className="text-muted text-sm mb-4">
                Conducted as part of undergraduate research at Ying Wu College of Computing.
                Combining coursework in ML, data science, and software engineering.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-accent hover:underline text-sm"
              >
                View Relevant Courses <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right: Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Main Video */}
            <div className="relative aspect-video bg-surface rounded-xl overflow-hidden border border-muted/20 group cursor-pointer mb-6">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="/research_poster.jpg"
              >
                <source src="/research_demo.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1" size={32} />
                </div>
              </div>
              <span className="absolute bottom-4 left-4 text-white/80 text-sm font-medium bg-black/30 px-3 py-1 rounded">
                Research Demo
              </span>
            </div>

            {/* Research Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-surface rounded-lg border border-muted/20 text-center">
                <p className="text-2xl font-bold text-accent">ML</p>
                <p className="text-muted text-sm">Patient Risk Models</p>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-muted/20 text-center">
                <p className="text-2xl font-bold text-accent">Data</p>
                <p className="text-muted text-sm">Clinical Pipelines</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
