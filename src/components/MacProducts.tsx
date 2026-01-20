'use client'

import React from 'react'

export default function MacProducts() {
  return (
    <section id="mac-products" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="max-w-6xl mx-auto">

        {/* Collage Grid - Organic Asymmetric Layout */}
        <div className="relative">

          {/* Row 1 - Offset start */}
          <div className="flex">
            <div className="w-1/12 hidden md:block" /> {/* Offset spacer */}

            {/* Box 1 - video_mac.mp4 */}
            <div className="w-full md:w-5/12 h-[280px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">1</span>
                <p className="text-white/60 mt-2">video_mac.mp4</p>
              </div>
            </div>

            {/* Box 2 - Lead Developer */}
            <div className="w-full md:w-5/12 h-[280px] bg-white/10 border-2 border-dashed border-white/40 p-6 flex flex-col justify-center">
              <div className="text-center mb-4">
                <span className="text-6xl font-bold text-white/30">2</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl font-bold text-white">Lead Developer @</span>
                <img src="/mac_logo.png" alt="MAC Products" className="h-8 w-auto" />
              </div>
              <p className="text-white/80 text-center text-sm leading-relaxed">
                Building AI-powered enterprise systems that transform manufacturing operations.
                Full-time role while completing my degree at NJIT.
              </p>
            </div>
          </div>

          {/* Row 2 - Full width different sizes */}
          <div className="flex flex-wrap md:flex-nowrap">
            {/* Box 3 - Login Interface (smaller) */}
            <div className="w-full md:w-3/12 h-[320px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">3</span>
                <p className="text-white/60 mt-2">Login Interface</p>
              </div>
            </div>

            {/* Box 4 - Quality Dashboard (larger) */}
            <div className="w-full md:w-6/12 h-[320px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">4</span>
                <p className="text-white/60 mt-2">Quality_Dashboard.mp4</p>
              </div>
            </div>

            {/* Box 5 - Small accent */}
            <div className="w-full md:w-3/12 h-[200px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center self-end">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">5</span>
                <p className="text-white/60 mt-2">mac_pp.mp4</p>
              </div>
            </div>
          </div>

          {/* Row 3 - Offset end */}
          <div className="flex flex-wrap md:flex-nowrap">
            {/* Box 6 - Router Automation */}
            <div className="w-full md:w-7/12 h-[250px] bg-white/10 border-2 border-dashed border-white/40 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl font-bold text-white/30">6</span>
                <p className="text-white/60 mt-2">Router Automation</p>
              </div>
            </div>

            {/* Box 7 - Stats */}
            <div className="w-full md:w-4/12 h-[180px] bg-white/10 border-2 border-dashed border-white/40 p-6 flex items-center justify-center self-start">
              <div className="text-center">
                <span className="text-4xl font-bold text-white/30">7</span>
                <p className="text-white/60 mt-2">Stats</p>
              </div>
            </div>

            <div className="w-1/12 hidden md:block" /> {/* Offset spacer */}
          </div>

        </div>
      </div>
    </section>
  )
}
