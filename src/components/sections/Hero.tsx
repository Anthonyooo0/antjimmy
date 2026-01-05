"use client";

/**
 * Hero Section Component
 *
 * The hero is the emotional entry point - it must capture attention
 * within 3 seconds and communicate the core value proposition.
 *
 * Design Principles:
 * - Bold, oversized typography for impact
 * - Minimal elements to avoid cognitive overload
 * - Clear primary CTA with secondary option
 * - Generous whitespace creates premium feel
 * - Subtle background visual adds depth without distraction
 *
 * Animation: GSAP timeline sequences headline -> subtitle -> CTA
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // Set final states without animation
      gsap.set([badgeRef.current, headlineRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });
      return;
    }

    // Create animation timeline
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

    return () => {
      tl.kill();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle"
      aria-label="Hero section"
    >
      {/* Background Pattern - Subtle geometric shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container-premium relative z-10 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-soft border border-neutral-200 mb-8 opacity-0"
          >
            <Sparkles className="w-4 h-4 text-secondary-500" aria-hidden="true" />
            <span className="text-sm font-medium text-neutral-700">
              AI & Machine Learning Engineer
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-display text-primary-900 mb-8 opacity-0"
          >
            Building Intelligent
            <br />
            <span className="text-secondary-500">Systems That Scale</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-12 opacity-0"
          >
            I transform complex data into production-ready AI solutions.
            From predictive models to LLM-powered automation, I build
            systems that drive real business impact.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0"
          >
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "#work")}
              className="btn-primary group"
            >
              View My Work
              <ArrowRight
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="btn-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-neutral-400 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-neutral-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
