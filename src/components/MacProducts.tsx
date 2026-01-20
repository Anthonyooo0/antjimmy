'use client'

import React from 'react'

export default function MacProducts() {
  return (
    <section id="mac-products" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1e3a5f' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            MAC Products
          </h2>
          <p className="text-white/80 text-lg">
            Head Developer @ MAC
          </p>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Row 1 - Left: Video placeholder */}
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-white/60 text-lg">video_mac.mp4</span>
          </div>

          {/* Row 1 - Right: Context Text Box */}
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-3">Head Developer @ MAC</h3>
            <p className="text-white/80">
              Context text box - Add your description here
            </p>
          </div>

          {/* Row 2 - Left: Login Interface */}
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-white/60 text-lg">Login Interface (Image)</span>
          </div>

          {/* Row 2 - Right: Quality Dashboard Video */}
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-white/60 text-lg">Quality_Dashboard.mp4</span>
          </div>
        </div>

        {/* Middle Text */}
        <div className="text-center my-12">
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Fulltime role while still in college
          </p>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Row 3 - Left: MAC PP Video */}
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-white/60 text-lg">mac_pp.mp4</span>
          </div>

          {/* Row 3 - Right: Router Automation */}
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg aspect-video flex items-center justify-center">
            <span className="text-white/60 text-lg">Router Automation</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 text-center">
            <span className="text-white/60">Stats</span>
          </div>
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 text-center">
            <span className="text-white/60">Stats</span>
          </div>
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 text-center">
            <span className="text-white/60">Stats</span>
          </div>
          <div className="bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 text-center">
            <span className="text-white/60">Stats</span>
          </div>
        </div>
      </div>
    </section>
  )
}
