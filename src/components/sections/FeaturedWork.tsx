"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import RevealOnScroll from "@/components/RevealOnScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([headerRef.current, ".work-card"], { opacity: 1, y: 0 });
      return;
    }

    // Header reveal with clip path
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

    // Cards with stagger and scale
    const cards = gsap.utils.toArray<HTMLElement>(".work-card");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Parallax effect on card visual
      const visual = card.querySelector(".card-visual");
      if (visual) {
        gsap.to(visual, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    // Other projects stagger
    gsap.fromTo(
      ".other-project-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".other-projects-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section bg-[var(--color-surface)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="mb-20 lg:mb-28 opacity-0">
          <span className="type-label text-[var(--color-accent)] mb-6 block">
            Selected Work
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="type-headline text-[var(--color-text)] max-w-2xl">
              Projects that solve
              <br />
              <span className="text-[var(--color-text-secondary)]">real problems</span>
            </h2>
            <MagneticButton
              as="a"
              href="https://github.com/Anthonyooo0"
              target="_blank"
              className="btn-secondary self-start"
              strength={0.2}
            >
              View All on GitHub
              <ArrowUpRight size={18} />
            </MagneticButton>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="work-card group relative opacity-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {/* Project number */}
                  <span className="type-label text-[var(--color-text-muted)] mb-4 block">
                    {String(index + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
                  </span>

                  {/* Category */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-[var(--color-accent-dim)] text-[var(--color-accent)] rounded-full mb-4">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="type-title text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-500">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="type-small text-[var(--color-text-muted)] mb-6">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="type-body text-[var(--color-text-secondary)] mb-6">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                    <p className="type-small text-[var(--color-accent)]">
                      {project.impact}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge group-hover:bg-[var(--color-accent)]/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    {project.githubUrl && (
                      <MagneticButton
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                        strength={0.3}
                      >
                        <Github size={18} />
                        View Code
                      </MagneticButton>
                    )}
                    {project.liveUrl && (
                      <MagneticButton
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                        strength={0.3}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </MagneticButton>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`card-visual relative aspect-[4/3] rounded-2xl overflow-hidden ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface-elevated)] to-[var(--color-bg)]" />

                  {/* Animated circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Outer ring */}
                    <div className="absolute w-48 h-48 lg:w-64 lg:h-64 rounded-full border border-[var(--color-border)] opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700" />

                    {/* Middle ring */}
                    <div className="absolute w-36 h-36 lg:w-48 lg:h-48 rounded-full bg-[var(--color-accent)]/5 group-hover:bg-[var(--color-accent)]/10 transition-all duration-700 group-hover:scale-105" />

                    {/* Inner circle with number */}
                    <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="type-headline text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-6 right-6 w-12 h-12 border border-[var(--color-border)] rounded-full opacity-30 group-hover:rotate-180 transition-transform duration-1000" />
                  <div className="absolute bottom-6 left-6 w-6 h-6 bg-[var(--color-accent)]/20 rounded group-hover:scale-150 transition-transform duration-500" />

                  {/* Hover line effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-accent)] group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>

              {/* Divider between projects */}
              {index < featuredProjects.length - 1 && (
                <div className="mt-16 lg:mt-24 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
              )}
            </article>
          ))}
        </div>

        {/* Other Projects */}
        {projects.filter((p) => !p.featured).length > 0 && (
          <div className="mt-24 pt-16 border-t border-[var(--color-border)]">
            <RevealOnScroll animation="fade-up">
              <h3 className="type-title text-[var(--color-text)] mb-12">
                Other Projects
              </h3>
            </RevealOnScroll>

            <div className="other-projects-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div
                    key={project.id}
                    className="other-project-card card group hover:border-[var(--color-accent)]/30 opacity-0"
                  >
                    <span className="type-label text-[var(--color-text-muted)] mb-3 block">
                      {project.category}
                    </span>
                    <h4 className="type-subtitle text-[var(--color-text)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h4>
                    <p className="type-small text-[var(--color-text-secondary)] mb-6">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-badge text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <Github size={16} />
                        View on GitHub
                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
