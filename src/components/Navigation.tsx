'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/content/config'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.nav.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading font-bold text-xl text-text"
          >
            {siteConfig.name}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.nav.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-accent'
                    : 'text-muted hover:text-text'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="/ask-me"
              className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Ask Me Anything
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-text transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-surface"
          >
            <div className="flex flex-col space-y-4">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left font-medium transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/ask-me"
                className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 text-center"
              >
                Ask Me Anything
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
