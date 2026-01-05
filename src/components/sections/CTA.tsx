"use client";

/**
 * CTA (Call to Action) Section
 *
 * The final conversion moment. This section captures users
 * who are ready to take action after scrolling through the site.
 *
 * Design Rationale:
 * - High contrast background for visual break
 * - Clear, benefit-focused headline
 * - Single primary CTA to avoid decision paralysis
 * - Secondary contact info for those who prefer email
 * - Generous padding creates premium, confident feel
 *
 * Animation: Fade-up with scale for dramatic entrance
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail, Calendar } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(contentRef.current, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding-lg bg-gradient-coral relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto text-center opacity-0"
        >
          {/* Headline */}
          <h2
            id="cta-heading"
            className="text-headline text-white mb-6"
          >
            Ready to Build Something
            <br />
            Intelligent Together?
          </h2>

          {/* Subtext */}
          <p className="text-body-lg text-white/90 max-w-2xl mx-auto mb-12">
            Whether you have a specific project in mind or just want to explore
            possibilities, I&apos;d love to hear from you. Let&apos;s discuss how AI
            can transform your workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:tj.jimenez03@gmail.com"
              className="btn px-8 py-4 bg-white text-secondary-600 rounded-full hover:bg-neutral-100 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary-500 group"
            >
              <Mail className="mr-2 w-5 h-5" aria-hidden="true" />
              Start a Conversation
              <ArrowRight
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-4 bg-transparent text-white rounded-full border-2 border-white hover:bg-white hover:text-secondary-600 hover:scale-[1.02] transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary-500"
            >
              <Calendar className="mr-2 w-5 h-5" aria-hidden="true" />
              Schedule a Call
            </a>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
            <a
              href="mailto:tj.jimenez03@gmail.com"
              className="hover:text-white transition-colors duration-300"
            >
              tj.jimenez03@gmail.com
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href="tel:+12012304890"
              className="hover:text-white transition-colors duration-300"
            >
              (201) 230-4890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
