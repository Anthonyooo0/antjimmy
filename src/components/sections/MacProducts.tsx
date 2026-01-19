"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { macProducts } from "@/lib/data";
import { Briefcase, Zap, Code2, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MacProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([headerRef.current, ".mac-card"], { opacity: 1, y: 0 });
      return;
    }

    // Header reveal
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cards stagger animation
    const cards = gsap.utils.toArray<HTMLElement>(".mac-card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        }
      );
    });

    // Metrics counter animation
    const metricElements = gsap.utils.toArray<HTMLElement>(".mac-metric-value");
    metricElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="mac-products"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-surface)] to-[var(--color-bg)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-warm)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-20 lg:mb-28 opacity-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[var(--color-warm)]/10 border border-[var(--color-warm)]/20">
              <Briefcase size={20} className="text-[var(--color-warm)]" />
            </div>
            <span className="type-label text-[var(--color-warm)]">
              Professional Work
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="type-headline text-[var(--color-text)] max-w-2xl">
                Built at
                <br />
                <span className="text-[var(--color-warm)]">MAC Products</span>
              </h2>
              <p className="type-body text-[var(--color-text-secondary)] mt-6 max-w-xl">
                Production AI systems transforming manufacturing operations—from intelligent email processing to automated document generation.
              </p>
            </div>

            {/* Company badge */}
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-warm)]/10 flex items-center justify-center">
                <span className="text-xl font-bold text-[var(--color-warm)]">M</span>
              </div>
              <div>
                <p className="type-small font-semibold text-[var(--color-text)]">AI Software Engineer</p>
                <p className="type-label text-[var(--color-text-muted)]">Sep 2025 – Present</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-16">
          {macProducts.map((project, index) => (
            <article
              key={project.id}
              className="mac-card group relative opacity-0"
            >
              <div className="rounded-3xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-warm)]/30 transition-all duration-500">
                {/* Card Header */}
                <div className="p-8 lg:p-10 pb-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      {/* Project number */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-warm)]/10 text-[var(--color-warm)] type-label font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[var(--color-warm)]/30 to-transparent" />
                      </div>

                      {/* Title */}
                      <h3 className="type-title text-[var(--color-text)] mb-2 group-hover:text-[var(--color-warm)] transition-colors duration-500">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="type-small text-[var(--color-warm)] mb-4">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="type-body text-[var(--color-text-secondary)] max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 lg:gap-4 lg:w-80">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="mac-metric-value p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center group-hover:border-[var(--color-warm)]/20 transition-colors"
                        >
                          <p className="text-2xl lg:text-3xl font-bold text-[var(--color-warm)]">
                            {metric.value}
                          </p>
                          <p className="type-label text-[var(--color-text-muted)] mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Impact */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Zap size={16} className="text-[var(--color-accent)]" />
                        <h4 className="type-small font-semibold text-[var(--color-text)]">
                          Impact
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2
                              size={16}
                              className="text-[var(--color-accent)] mt-1 flex-shrink-0"
                            />
                            <span className="type-small text-[var(--color-text-secondary)]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Highlights */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Code2 size={16} className="text-[var(--color-accent)]" />
                        <h4 className="type-small font-semibold text-[var(--color-text)]">
                          Technical Highlights
                        </h4>
                      </div>
                      <ul className="space-y-3">
                        {project.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-warm)] mt-2 flex-shrink-0" />
                            <span className="type-small text-[var(--color-text-secondary)]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--color-warm)]/10 text-[var(--color-warm)] border border-[var(--color-warm)]/20 group-hover:bg-[var(--color-warm)]/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="h-1 bg-gradient-to-r from-[var(--color-warm)] via-[var(--color-accent)] to-[var(--color-warm)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
