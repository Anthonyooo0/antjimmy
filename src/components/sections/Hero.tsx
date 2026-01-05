"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { personalInfo, metrics, socialLinks } from "@/lib/data";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import MagneticButton from "@/components/MagneticButton";
import Parallax from "@/components/Parallax";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          labelRef.current,
          line1Ref.current,
          line2Ref.current,
          subtitleRef.current,
          ctaRef.current,
          scrollRef.current,
        ],
        { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" }
      );
      if (metricsRef.current) {
        gsap.set(metricsRef.current.children, { opacity: 1, y: 0 });
      }
      return;
    }

    const tl = gsap.timeline({ delay: 0.3 });

    // Label with line animation
    tl.fromTo(
      labelRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "expo.out" }
    )
      // Headline line 1 - clip reveal
      .fromTo(
        line1Ref.current,
        { clipPath: "inset(100% 0 0 0)", y: 50 },
        { clipPath: "inset(0% 0 0 0)", y: 0, duration: 1.2, ease: "expo.out" },
        "-=0.4"
      )
      // Headline line 2 - clip reveal
      .fromTo(
        line2Ref.current,
        { clipPath: "inset(100% 0 0 0)", y: 50 },
        { clipPath: "inset(0% 0 0 0)", y: 0, duration: 1.2, ease: "expo.out" },
        "-=0.9"
      )
      // Subtitle fade up
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "expo.out" },
        "-=0.7"
      )
      // CTA buttons
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" },
        "-=0.5"
      )
      // Metrics stagger
      .fromTo(
        metricsRef.current?.children || [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "expo.out" },
        "-=0.4"
      )
      // Scroll indicator
      .fromTo(
        scrollRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" },
        "-=0.2"
      );

    // Floating animation for scroll indicator
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleScroll = (e: React.MouseEvent, href: string) => {
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
      {/* Animated Background */}
      <AnimatedBackground variant="hero" />

      {/* Parallax decorative elements */}
      <Parallax speed={0.2} className="absolute top-20 right-[10%] opacity-20">
        <div className="w-32 h-32 border border-[var(--color-accent)] rounded-full" />
      </Parallax>
      <Parallax speed={0.3} className="absolute bottom-40 left-[5%] opacity-10">
        <div className="w-48 h-48 border border-[var(--color-text-muted)] rounded-full" />
      </Parallax>

      {/* Main Content */}
      <div className="container-wide relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl">
          {/* Role Label */}
          <span
            ref={labelRef}
            className="inline-flex items-center gap-3 type-label text-[var(--color-accent)] mb-8 opacity-0"
          >
            <span className="w-12 h-px bg-[var(--color-accent)]" />
            {personalInfo.role}
          </span>

          {/* Headline with clip reveal */}
          <h1 className="type-display text-[var(--color-text)] mb-8">
            <span ref={line1Ref} className="block overflow-hidden">
              <span className="block">Building intelligent</span>
            </span>
            <span ref={line2Ref} className="block overflow-hidden">
              <span className="block text-[var(--color-text-secondary)]">
                systems that learn.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="type-subtitle text-[var(--color-text-secondary)] max-w-2xl mb-12 opacity-0"
          >
            {personalInfo.description}
          </p>

          {/* CTAs with magnetic effect */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 mb-20 opacity-0"
          >
            <MagneticButton
              as="a"
              href="#work"
              onClick={() => {
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary group"
              strength={0.2}
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
              strength={0.2}
            >
              Get in Touch
            </MagneticButton>

            <div className="flex items-center gap-1 ml-4">
              <MagneticButton
                as="a"
                href={socialLinks.github}
                target="_blank"
                className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                strength={0.4}
              >
                <Github size={22} />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={socialLinks.linkedin}
                target="_blank"
                className="p-3 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                strength={0.4}
              >
                <Linkedin size={22} />
              </MagneticButton>
            </div>
          </div>

          {/* Metrics with counter animation potential */}
          <div
            ref={metricsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-[var(--color-border)]"
          >
            {metrics.map((metric) => (
              <div key={metric.label} className="group opacity-0">
                <div className="type-headline text-[var(--color-accent)] mb-2 group-hover:scale-110 transition-transform duration-500 origin-left">
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
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--color-text-muted)] opacity-0 cursor-pointer"
        onClick={(e) => handleScroll(e as React.MouseEvent, "#work")}
      >
        <span className="type-label text-[10px] tracking-[0.2em]">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-[var(--color-text-muted)] flex justify-center pt-1">
          <div className="w-1 h-2 bg-[var(--color-accent)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
