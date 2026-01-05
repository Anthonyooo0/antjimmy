"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade" | "scale" | "slide-left" | "slide-right" | "rotate";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function RevealOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 1,
  distance = 60,
  once = true,
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !elementRef.current) return;

    const getFromVars = () => {
      switch (animation) {
        case "fade-up":
          return { opacity: 0, y: distance };
        case "fade":
          return { opacity: 0 };
        case "scale":
          return { opacity: 0, scale: 0.9 };
        case "slide-left":
          return { opacity: 0, x: -distance };
        case "slide-right":
          return { opacity: 0, x: distance };
        case "rotate":
          return { opacity: 0, rotation: 10, y: distance / 2 };
        default:
          return { opacity: 0, y: distance };
      }
    };

    const getToVars = () => {
      switch (animation) {
        case "fade-up":
          return { opacity: 1, y: 0 };
        case "fade":
          return { opacity: 1 };
        case "scale":
          return { opacity: 1, scale: 1 };
        case "slide-left":
          return { opacity: 1, x: 0 };
        case "slide-right":
          return { opacity: 1, x: 0 };
        case "rotate":
          return { opacity: 1, rotation: 0, y: 0 };
        default:
          return { opacity: 1, y: 0 };
      }
    };

    gsap.fromTo(
      elementRef.current,
      getFromVars(),
      {
        ...getToVars(),
        duration,
        delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: once ? "play none none none" : "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === elementRef.current) {
          st.kill();
        }
      });
    };
  }, [animation, delay, duration, distance, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
