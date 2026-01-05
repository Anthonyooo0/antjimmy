"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function Parallax({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
}: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !elementRef.current) return;

    const getDirection = () => {
      switch (direction) {
        case "up":
          return { y: `${speed * 100}%` };
        case "down":
          return { y: `${-speed * 100}%` };
        case "left":
          return { x: `${speed * 100}%` };
        case "right":
          return { x: `${-speed * 100}%` };
      }
    };

    gsap.to(elementRef.current, {
      ...getDirection(),
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === elementRef.current) {
          st.kill();
        }
      });
    };
  }, [speed, direction]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
