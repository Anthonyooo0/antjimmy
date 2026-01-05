/**
 * Premium Marketing Homepage
 *
 * This page assembles all section components into a cohesive,
 * scroll-driven experience inspired by premium agency sites.
 *
 * Architecture:
 * - Each section is a self-contained component with its own animations
 * - GSAP ScrollTrigger handles scroll-based reveals
 * - Semantic HTML ensures accessibility
 * - Generous vertical spacing creates premium rhythm
 *
 * Section Flow (Persuasion Arc):
 * 1. Hero - Emotional hook & value proposition
 * 2. Trusted - Credibility through metrics
 * 3. Services - What I offer (benefit-focused)
 * 4. Featured Work - Visual proof of capability
 * 5. Process - How we work together
 * 6. Testimonials - Human validation
 * 7. CTA - Final conversion moment
 */

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      {/* Navigation - Sticky header with scroll-aware styling */}
      <Nav />

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section - Emotional entry point */}
        <Hero />

        {/* Trusted/Stats Section - Build credibility */}
        <Trusted />

        {/* Services Section - Explain capabilities */}
        <Services />

        {/* Featured Work Section - Show, don't tell */}
        <FeaturedWork />

        {/* Process Section - Demystify engagement */}
        <Process />

        {/* Testimonials Section - Human validation */}
        <Testimonials />

        {/* CTA Section - Final conversion moment */}
        <CTA />
      </main>

      {/* Footer - Professional completion */}
      <Footer />
    </>
  );
}
