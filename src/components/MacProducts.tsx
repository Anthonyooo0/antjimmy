'use client'

import React from 'react'

export default function MacProducts() {
  return (
    <section id="mac-products" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="max-w-5xl mx-auto">

        {/* Collage - Matching wireframe exactly */}
        <div className="relative inline-block">

          {/* Row 1: Box 1 + Text 2 */}
          <div className="flex">
            {/* Box 1 */}
            <div className="w-[300px] h-[200px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">1</span>
              </div>
            </div>

            {/* Text 2 - NO BOX */}
            <div className="pl-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-bold text-white">Lead Developer @</span>
                <img src="/mac_logo.png" alt="MAC Products" className="h-8 w-auto" />
              </div>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Building AI-powered enterprise systems. Full-time while at NJIT.
              </p>
            </div>
          </div>

          {/* Row 2: Box 3 + Box 4 (touching) */}
          <div className="flex">
            {/* Box 3 */}
            <div className="w-[180px] h-[220px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">3</span>
              </div>
            </div>

            {/* Box 4 */}
            <div className="w-[320px] h-[260px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">4</span>
              </div>
            </div>
          </div>

          {/* Text 2.1 - NO BOX */}
          <div className="py-4">
            <p className="text-white/70 text-base italic">
              Fulltime role while still in college
            </p>
          </div>

          {/* Row 3: Box 5 + Box 6 (touching) */}
          <div className="flex">
            {/* Box 5 */}
            <div className="w-[260px] h-[200px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">5</span>
              </div>
            </div>

            {/* Box 6 */}
            <div className="w-[260px] h-[200px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center flex-shrink-0">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">6</span>
              </div>
            </div>
          </div>

          {/* Text 7 - NO BOX, stats */}
          <div className="py-4">
            <p className="text-white/70 text-sm">• 3 production AI systems • 6,000+ lines of code • Full-time while in college</p>
          </div>

        </div>
      </div>
    </section>
  )
}
