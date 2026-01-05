"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnimatedBackgroundProps {
  variant?: "hero" | "section" | "cta";
}

export default function AnimatedBackground({
  variant = "hero",
}: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Floating blob animations
      gsap.to(blob1Ref.current, {
        x: "random(-50, 50)",
        y: "random(-30, 30)",
        scale: "random(0.8, 1.2)",
        duration: "random(8, 12)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(blob2Ref.current, {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        scale: "random(0.9, 1.1)",
        duration: "random(10, 14)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      gsap.to(blob3Ref.current, {
        x: "random(-60, 60)",
        y: "random(-20, 20)",
        scale: "random(0.7, 1.3)",
        duration: "random(12, 16)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      // Morphing effect using filter
      gsap.to([blob1Ref.current, blob2Ref.current, blob3Ref.current], {
        filter: "blur(80px)",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 1.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getColors = () => {
    switch (variant) {
      case "hero":
        return {
          blob1: "bg-[#22d3ee]/20",
          blob2: "bg-[#a78bfa]/15",
          blob3: "bg-[#f97316]/10",
        };
      case "cta":
        return {
          blob1: "bg-[#22d3ee]/25",
          blob2: "bg-[#818cf8]/20",
          blob3: "bg-[#22d3ee]/15",
        };
      default:
        return {
          blob1: "bg-[#22d3ee]/10",
          blob2: "bg-[#a78bfa]/10",
          blob3: "bg-[#f97316]/5",
        };
    }
  };

  const colors = getColors();

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated blobs */}
      <div
        ref={blob1Ref}
        className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] ${colors.blob1} rounded-full blur-[100px]`}
      />
      <div
        ref={blob2Ref}
        className={`absolute bottom-1/3 left-1/4 w-[400px] h-[400px] ${colors.blob2} rounded-full blur-[80px]`}
      />
      <div
        ref={blob3Ref}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${colors.blob3} rounded-full blur-[120px]`}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[var(--color-bg)]/50 to-[var(--color-bg)]" />
    </div>
  );
}
