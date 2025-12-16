'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const companies = [
  { name: 'Barclays', logo: '/logos/barclays.png' },
  { name: 'EY', logo: '/logos/ey.png' },
  { name: 'Lehman Brothers', logo: '/logos/lehman.png' },
  { name: 'Citi', logo: '/logos/citi.png' },
  { name: 'Condé Nast', logo: '/logos/condenast.png' },
  { name: 'The New York Times', logo: '/logos/nytimes.png' },
  { name: 'Marriott', logo: '/logos/marriott.png' },
  { name: 'US Open', logo: '/logos/usopen.png' },
  { name: 'Compass Group', logo: '/logos/compass.png' },
  { name: 'Restaurant Associates', logo: '/logos/restaurantassociates.png' },
  { name: 'Goldman Sachs', logo: '/logos/goldmansachs.png' },
]

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Managing operations for Fortune 500 companies and prestigious organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative w-full h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
