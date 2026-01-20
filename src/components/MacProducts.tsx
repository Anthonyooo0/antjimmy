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
        </div>

        {/* Collage Grid - Asymmetric Layout */}
        <div className="grid grid-cols-12 grid-rows-auto gap-4">

          {/* Box 1 - video_mac.mp4 (Large, spans 7 cols, 2 rows) */}
          <div className="col-span-12 md:col-span-7 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">1</span>
              <p className="text-white/60 mt-2">video_mac.mp4</p>
            </div>
          </div>

          {/* Box 2 - Head Developer @ MAC (Top right, smaller) */}
          <div className="col-span-12 md:col-span-5 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 min-h-[150px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">2</span>
              <p className="text-white/60 mt-2">Head Developer @ MAC</p>
            </div>
          </div>

          {/* Box 3 - Context Text Box (Below box 2) */}
          <div className="col-span-12 md:col-span-5 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 min-h-[150px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">3</span>
              <p className="text-white/60 mt-2">Context Text Box</p>
            </div>
          </div>

          {/* Box 4 - Login Interface (Small square) */}
          <div className="col-span-6 md:col-span-4 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[200px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">4</span>
              <p className="text-white/60 mt-2">Login Interface</p>
            </div>
          </div>

          {/* Box 5 - Quality Dashboard (Large, spans more) */}
          <div className="col-span-6 md:col-span-8 row-span-2 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[300px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">5</span>
              <p className="text-white/60 mt-2">Quality_Dashboard.mp4</p>
            </div>
          </div>

          {/* Box 6 - Fulltime role text */}
          <div className="col-span-12 md:col-span-4 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-6 min-h-[150px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">6</span>
              <p className="text-white/60 mt-2">Fulltime role while still in college</p>
            </div>
          </div>

          {/* Box 7 - mac_pp.mp4 */}
          <div className="col-span-12 md:col-span-6 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[250px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">7</span>
              <p className="text-white/60 mt-2">mac_pp.mp4</p>
            </div>
          </div>

          {/* Box 8 - Router Automation */}
          <div className="col-span-12 md:col-span-6 bg-white/10 border-2 border-dashed border-white/40 rounded-lg min-h-[250px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-bold text-white/30">8</span>
              <p className="text-white/60 mt-2">Router Automation</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="col-span-6 md:col-span-3 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-4 min-h-[100px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-white/30">9</span>
              <p className="text-white/60 text-sm mt-1">Stats</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-4 min-h-[100px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-white/30">10</span>
              <p className="text-white/60 text-sm mt-1">Stats</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-4 min-h-[100px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-white/30">11</span>
              <p className="text-white/60 text-sm mt-1">Stats</p>
            </div>
          </div>

          <div className="col-span-6 md:col-span-3 bg-white/10 border-2 border-dashed border-white/40 rounded-lg p-4 min-h-[100px] flex items-center justify-center">
            <div className="text-center">
              <span className="text-4xl font-bold text-white/30">12</span>
              <p className="text-white/60 text-sm mt-1">Stats</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
