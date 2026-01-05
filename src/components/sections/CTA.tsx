"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

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
      gsap.set(contentRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
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
      className="section relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-[var(--color-surface)]"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-accent)]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-wide relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0"
        >
          {/* Label */}
          <span className="type-label text-[var(--color-accent)] mb-6 block">
            Get in Touch
          </span>

          {/* Headline */}
          <h2 className="type-headline text-[var(--color-text)] mb-6">
            Let&apos;s build something
            <br />
            <span className="gradient-text">intelligent together</span>
          </h2>

          {/* Description */}
          <p className="type-body text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10">
            Whether you have a specific ML project in mind or want to explore
            how AI can transform your workflows, I&apos;d love to hear from you.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={socialLinks.email}
              className="btn-primary group"
            >
              <Mail size={18} />
              Send an Email
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-[var(--color-border)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <a
                href={socialLinks.email}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {personalInfo.email}
              </a>
              <span className="hidden sm:block text-[var(--color-border)]">
                |
              </span>
              <span className="text-[var(--color-text-muted)]">
                {personalInfo.location}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.email}
                className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Availability Badge */}
            <div className="mt-8">
              <span className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                {personalInfo.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
