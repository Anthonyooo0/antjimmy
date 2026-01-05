"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { personalInfo, metrics, socialLinks } from "@/lib/data";
import { ArrowRight, ArrowDown, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          labelRef.current,
          headlineRef.current,
          subtitleRef.current,
          ctaRef.current,
          metricsRef.current,
        ],
        { opacity: 1, y: 0 }
      );
      return;
    }

    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      labelRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out" },
        "-=0.3"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" },
        "-=0.4"
      )
      .fromTo(
        metricsRef.current?.children || [],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "expo.out" },
        "-=0.2"
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
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--color-warm)]/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="container-wide relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl">
          {/* Role Label */}
          <span
            ref={labelRef}
            className="inline-flex items-center gap-2 type-label text-[var(--color-accent)] mb-6 opacity-0"
          >
            <span className="w-8 h-px bg-[var(--color-accent)]" />
            {personalInfo.role}
          </span>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="type-display text-[var(--color-text)] mb-6 opacity-0"
          >
            {personalInfo.tagline.split(" ").slice(0, 3).join(" ")}
            <br />
            <span className="text-[var(--color-text-secondary)]">
              {personalInfo.tagline.split(" ").slice(3).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="type-subtitle text-[var(--color-text-secondary)] max-w-2xl mb-10 opacity-0"
          >
            {personalInfo.description}
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 mb-16 opacity-0"
          >
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "#work")}
              className="btn-primary group"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="btn-secondary"
            >
              Get in Touch
            </a>
            <div className="flex items-center gap-2 ml-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Metrics */}
          <div
            ref={metricsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-[var(--color-border)]"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="opacity-0">
                <div className="type-headline text-[var(--color-accent)] mb-1">
                  {metric.value}
                </div>
                <div className="type-small text-[var(--color-text-muted)]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
        <span className="type-label text-[10px]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
