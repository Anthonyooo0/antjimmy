'use client'

import React from 'react'

export default function MacProducts() {
  return (
    <section id="mac-products" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="max-w-6xl mx-auto">

        {/* Collage Grid - Asymmetric Layout */}
        <div className="grid grid-cols-12 grid-rows-auto gap-4">

          {/* Box 1 - video_mac.mp4 (Large, spans 7 cols, 2 rows) */}
          <div className="col-span-12 md:col-span-7 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">1</span>
              <p className="text-white/60 mt-2">video_mac.mp4</p>
            </div>
          </div>

          {/* Box 2 - Lead Developer @ MAC (Combined with description) */}
          <div className="col-span-12 md:col-span-5 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 flex flex-col justify-center">
            <div className="text-center mb-4">
              <span className="text-6xl font-bold text-white/30">2</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Lead Developer @</span>
              <img src="/mac_logo.png" alt="MAC Products" className="h-8 w-auto" />
            </div>
            <p className="text-white/80 text-center text-sm leading-relaxed">
              Building AI-powered enterprise systems that transform manufacturing operations.
              Architecting end-to-end solutions from LLM-powered document analysis to automated compliance workflows.
              Full-time role while completing my degree at NJIT.
            </p>
          </div>

          {/* Box 3 - Login Interface (Taller) */}
          <div className="col-span-6 md:col-span-4 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[350px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">3</span>
              <p className="text-white/60 mt-2">Login Interface</p>
            </div>
          </div>

          {/* Box 4 - Quality Dashboard (Large, spans more) */}
          <div className="col-span-6 md:col-span-8 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[350px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">4</span>
              <p className="text-white/60 mt-2">Quality_Dashboard.mp4</p>
            </div>
          </div>

          {/* Box 5 - mac_pp.mp4 (Bigger) */}
          <div className="col-span-12 md:col-span-6 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[350px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">5</span>
              <p className="text-white/60 mt-2">mac_pp.mp4</p>
            </div>
          </div>

          {/* Box 6 - Router Automation (Bigger) */}
          <div className="col-span-12 md:col-span-6 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[350px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">6</span>
              <p className="text-white/60 mt-2">Router Automation</p>
            </div>
          </div>

          {/* Box 7 - Stats (All in one box) */}
          <div className="col-span-12 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-white/30">7</span>
              <p className="text-white/60 mt-2">Stats (all in one text box)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
