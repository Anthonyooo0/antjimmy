'use client'

import React from 'react'

export default function MacProducts() {
  return (
    <section id="mac-products" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="max-w-5xl mx-auto">

        {/* Collage - Matching wireframe exactly */}
        <div className="relative">

          {/* Row 1: Box 1 + Text 2 (no box) */}
          <div className="flex items-start">
            {/* Box 1 */}
            <div className="w-5/12 h-[250px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">1</span>
                <p className="text-white/60 mt-2">video_mac.mp4</p>
              </div>
            </div>

            {/* Text 2 - NO BOX, just text */}
            <div className="w-7/12 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-white">Lead Developer @</span>
                <img src="/mac_logo.png" alt="MAC Products" className="h-10 w-auto" />
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Building AI-powered enterprise systems that transform manufacturing operations.
                Full-time role while completing my degree at NJIT.
              </p>
            </div>
          </div>

          {/* Row 2: Box 3 + Box 4 */}
          <div className="flex items-start">
            {/* Box 3 - smaller */}
            <div className="w-4/12 h-[280px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">3</span>
                <p className="text-white/60 mt-2">Login Interface</p>
              </div>
            </div>

            {/* Box 4 - larger */}
            <div className="w-6/12 h-[320px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">4</span>
                <p className="text-white/60 mt-2">Quality_Dashboard.mp4</p>
              </div>
            </div>
          </div>

          {/* Text 2.1 - NO BOX, floating text */}
          <div className="py-6 pl-4">
            <p className="text-white/70 text-lg italic">
              Fulltime role while still in college
            </p>
          </div>

          {/* Row 3: Box 5 + Box 6 */}
          <div className="flex items-start">
            {/* Box 5 */}
            <div className="w-5/12 h-[280px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">5</span>
                <p className="text-white/60 mt-2">mac_pp.mp4</p>
              </div>
            </div>

            {/* Box 6 */}
            <div className="w-5/12 h-[280px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">6</span>
                <p className="text-white/60 mt-2">Router Automation</p>
              </div>
            </div>
          </div>

          {/* Text 7 - NO BOX, stats floating at bottom left */}
          <div className="py-8 pl-4 w-5/12">
            <div className="text-white">
              <p className="text-lg font-semibold mb-2">Stats</p>
              <p className="text-white/70 text-sm">• 3 production AI systems</p>
              <p className="text-white/70 text-sm">• 6,000+ lines of code</p>
              <p className="text-white/70 text-sm">• Full-time while in college</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
