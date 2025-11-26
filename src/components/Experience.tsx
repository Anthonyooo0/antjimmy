'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/content/config'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Developing production AI systems, ML models, and intelligent automation workflows
          </p>
        </motion.div>

        <div className="space-y-8">
          {siteConfig.experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface border border-surface rounded-lg p-6 hover:border-accent/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-text mb-1">
                    {job.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {job.company}
                  </p>
                </div>
                <span className="text-muted text-sm bg-bg px-3 py-1 rounded-md border border-surface">
                  {job.period}
                </span>
              </div>
              
              <p className="text-muted leading-relaxed mb-4">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-bg text-accent text-xs rounded border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
