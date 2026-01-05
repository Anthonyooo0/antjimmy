"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

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

    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Cards stagger animation
    gsap.fromTo(
      ".work-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
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
      className="section bg-[var(--color-surface)]"
    >
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20 opacity-0">
          <span className="type-label text-[var(--color-accent)] mb-4 block">
            Selected Work
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="type-headline text-[var(--color-text)] max-w-xl">
              Projects that solve
              <br />
              real problems
            </h2>
            <a
              href="https://github.com/Anthonyooo0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary self-start"
            >
              View All on GitHub
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="space-y-8 lg:space-y-12">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="work-card group card p-0 overflow-hidden opacity-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content - alternating sides */}
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {/* Category Badge */}
                  <span className="type-label text-[var(--color-accent)] mb-4">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="type-title text-[var(--color-text)] mb-2">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="type-small text-[var(--color-text-muted)] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="type-body text-[var(--color-text-secondary)] mb-6">
                    {project.description}
                  </p>

                  {/* Impact */}
                  <p className="type-small text-[var(--color-accent)] mb-6">
                    {project.impact}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <Github size={18} />
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual */}
                <div
                  className={`relative bg-[var(--color-surface-elevated)] min-h-[300px] lg:min-h-[400px] flex items-center justify-center overflow-hidden ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Abstract visual representing the project */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-[var(--color-accent-dim)] flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                      <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                        <span className="type-headline text-[var(--color-accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-8 right-8 w-16 h-16 border border-[var(--color-border)] rounded-full opacity-50" />
                  <div className="absolute bottom-8 left-8 w-8 h-8 bg-[var(--color-accent)]/10 rounded" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        {projects.filter((p) => !p.featured).length > 0 && (
          <div className="mt-16 pt-16 border-t border-[var(--color-border)]">
            <h3 className="type-title text-[var(--color-text)] mb-8">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project) => (
                  <div key={project.id} className="card">
                    <span className="type-label text-[var(--color-text-muted)] mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="type-subtitle text-[var(--color-text)] mb-2">
                      {project.title}
                    </h4>
                    <p className="type-small text-[var(--color-text-secondary)] mb-4">
                      {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] mt-4 transition-colors"
                      >
                        <Github size={16} />
                        View on GitHub
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
