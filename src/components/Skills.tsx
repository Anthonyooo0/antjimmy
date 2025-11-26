'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Database, Terminal, Layout, Calculator, Brain, BarChart3, Bot, GitBranch } from 'lucide-react'
import { siteConfig } from '@/content/config'

const iconMap = {
  code: Code,
  server: Server,
  database: Database,
  terminal: Terminal,
  layout: Layout,
  calculator: Calculator,
  brain: Brain,
  chart: BarChart3,
  bot: Bot,
  'git-branch': GitBranch,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Expertise in ML/AI, deep learning, data engineering, and production model deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {siteConfig.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg border border-surface rounded-lg p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-text mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Code
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-3 rounded-md border border-surface hover:border-accent/50 transition-colors duration-200 group"
                    >
                      <IconComponent 
                        size={24} 
                        className="text-accent group-hover:text-accent/80 transition-colors duration-200 mb-2" 
                      />
                      <span className="text-sm text-muted group-hover:text-text transition-colors duration-200 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
