"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import MagneticButton from "@/components/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([contentRef.current, socialsRef.current], { opacity: 1, y: 0 });
      return;
    }

    // Main content reveal
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Social links stagger
    const socialButtons = socialsRef.current?.children;
    if (socialButtons) {
      gsap.fromTo(
        socialButtons,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

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
      {/* Animated Background */}
      <AnimatedBackground variant="cta" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-[var(--color-accent)]/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-[var(--color-accent)]/10 rounded-full" />

      <div className="container-wide relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0"
        >
          {/* Label */}
          <span className="inline-flex items-center gap-2 type-label text-[var(--color-accent)] mb-8">
            <span className="w-8 h-px bg-[var(--color-accent)]" />
            Get in Touch
            <span className="w-8 h-px bg-[var(--color-accent)]" />
          </span>

          {/* Headline */}
          <h2
            ref={headlineRef}
            className="type-headline text-[var(--color-text)] mb-8"
          >
            Let&apos;s build something
            <br />
            <span className="gradient-text">intelligent together</span>
          </h2>

          {/* Description */}
          <p className="type-body text-[var(--color-text-secondary)] max-w-xl mx-auto mb-12">
            Whether you have a specific ML project in mind or want to explore
            how AI can transform your workflows, I&apos;d love to hear from you.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <MagneticButton
              as="a"
              href={socialLinks.email}
              className="btn-primary group text-lg px-8 py-4"
              strength={0.15}
            >
              <Mail size={20} />
              Send an Email
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </MagneticButton>
          </div>

          {/* Contact Info */}
          <div className="pt-10 border-t border-[var(--color-border)]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
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

            {/* Social Links with magnetic effect */}
            <div ref={socialsRef} className="flex items-center justify-center gap-4">
              <MagneticButton
                as="a"
                href={socialLinks.github}
                target="_blank"
                className="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300"
                strength={0.4}
              >
                <Github size={22} />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={socialLinks.linkedin}
                target="_blank"
                className="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300"
                strength={0.4}
              >
                <Linkedin size={22} />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={socialLinks.email}
                className="w-14 h-14 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition-all duration-300"
                strength={0.4}
              >
                <Mail size={22} />
              </MagneticButton>
            </div>

            {/* Availability Badge */}
            <div className="mt-10">
              <span className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
                </span>
                {personalInfo.availability}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
