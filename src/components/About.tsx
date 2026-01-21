'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Play, BookOpen } from 'lucide-react'
import { siteConfig } from '@/content/config'

const courses = [
  { code: 'CS 301', name: 'Data Structures & Algorithms', grade: 'A' },
  { code: 'CS 341', name: 'Machine Learning', grade: 'A' },
  { code: 'CS 370', name: 'Software Engineering', grade: 'A' },
  { code: 'CS 288', name: 'Database Systems', grade: 'A-' },
  { code: 'MATH 333', name: 'Linear Algebra', grade: 'A' },
  { code: 'CS 252', name: 'Computer Architecture', grade: 'B+' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-accent" size={28} />
            <span className="text-accent font-medium">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-text mb-4">
            NJIT Student & Developer
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            {siteConfig.tagline}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left: About + Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Bio Card */}
            <div className="p-6 bg-bg rounded-xl border border-muted/20">
              <p className="text-muted leading-relaxed mb-6">
                {siteConfig.about.bio}
              </p>

              {/* Education */}
              <div className="pt-4 border-t border-muted/20">
                <h4 className="text-lg font-bold text-text mb-3">{siteConfig.education.school}</h4>
                <p className="text-muted text-sm">{siteConfig.education.college}</p>
                <p className="text-muted text-sm">{siteConfig.education.major}</p>
                <p className="text-accent text-sm mt-2">Expected: {siteConfig.education.graduation}</p>
                <p className="text-muted text-xs mt-2 italic">{siteConfig.education.athletics}</p>
              </div>
            </div>

            {/* Video Spot */}
            <div className="relative aspect-video bg-bg rounded-xl overflow-hidden border border-muted/20 group cursor-pointer">
              <video
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                poster="/about_poster.jpg"
              >
                <source src="/about_video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1" size={28} />
                </div>
              </div>
              <span className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
                My Journey
              </span>
            </div>
          </motion.div>

          {/* Right: Courses */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-bg rounded-xl border border-muted/20 h-full">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="text-accent" size={20} />
                <h3 className="text-xl font-bold text-text">Relevant Coursework</h3>
              </div>

              <div className="space-y-3">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.code}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-surface rounded-lg hover:bg-surface/80 transition-colors"
                  >
                    <div>
                      <span className="text-accent font-mono text-sm">{course.code}</span>
                      <p className="text-text text-sm">{course.name}</p>
                    </div>
                    <span className="text-accent font-bold">{course.grade}</span>
                  </motion.div>
                ))}
              </div>

              {/* Skills Summary */}
              <div className="mt-8 pt-6 border-t border-muted/20">
                <h4 className="text-sm font-semibold text-text mb-4">Core Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React', 'TypeScript', 'ML/AI', 'SQL', 'Git'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
