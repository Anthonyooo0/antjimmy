/**
 * Portfolio Homepage
 *
 * Assembles all sections into a cohesive, scroll-driven experience.
 * Each section is self-contained with its own GSAP animations.
 *
 * Section Flow (Persuasion Arc):
 * 1. Hero - Emotional hook & value proposition
 * 2. Featured Work - Visual proof of capability
 * 3. About - Personal story & credibility
 * 4. CTA - Final conversion moment
 */

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
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
    </>
  );
}
