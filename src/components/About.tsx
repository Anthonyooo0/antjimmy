'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/content/config'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-muted leading-relaxed mb-8">
              {siteConfig.about.bio}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {siteConfig.about.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-bg rounded-lg border border-surface"
                >
                  <div className="text-2xl font-bold text-accent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-bg p-6 rounded-lg border border-surface">
              <h3 className="font-heading text-lg font-semibold text-text mb-4">
                Education
              </h3>
              <div className="space-y-2 text-sm">
                <div className="text-accent font-medium">{siteConfig.education.school}</div>
                <div className="text-muted">{siteConfig.education.college}</div>
                <div className="text-muted">{siteConfig.education.major}</div>
                <div className="text-muted">Expected: {siteConfig.education.graduation}</div>
                <div className="text-accent text-xs mt-3">{siteConfig.education.athletics}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
