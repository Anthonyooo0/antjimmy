"use client";

/**
 * Portfolio Homepage
 *
 * Premium scroll-driven experience with:
 * - Lenis smooth scrolling
 * - Custom cursor
 * - Scroll progress indicator
 * - GSAP animations throughout
 */

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Scroll Progress */}
      <ScrollProgress variant="bar" position="top" />

      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero - Entry point */}
        <Hero />

        {/* Featured Work - Show, don't tell */}
        <FeaturedWork />

        {/* About - Build connection */}
        <About />

        {/* CTA - Conversion moment */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScroll>
  );
}
