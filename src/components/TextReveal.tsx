"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  trigger?: "load" | "scroll";
  splitBy?: "chars" | "words" | "lines";
  animation?: "fade-up" | "fade" | "slide-up" | "blur";
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 1,
  stagger = 0.03,
  trigger = "scroll",
  splitBy = "words",
  animation = "fade-up",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !textRef.current || !containerRef.current) {
      return;
    }

    const text = textRef.current.innerText;
    let elements: string[] = [];

    // Split text based on splitBy option
    switch (splitBy) {
      case "chars":
        elements = text.split("");
        break;
      case "words":
        elements = text.split(" ");
        break;
      case "lines":
        elements = text.split("\n");
        break;
    }

    // Create spans for each element
    textRef.current.innerHTML = elements
      .map((el, i) => {
        const content = splitBy === "words" && i < elements.length - 1 ? el + "&nbsp;" : el;
        return `<span class="inline-block overflow-hidden"><span class="reveal-element inline-block">${content}</span></span>`;
      })
      .join(splitBy === "chars" ? "" : "");

    const revealElements = textRef.current.querySelectorAll(".reveal-element");

    // Set initial state based on animation type
    const getInitialState = () => {
      switch (animation) {
        case "fade-up":
          return { y: "100%", opacity: 0 };
        case "fade":
          return { opacity: 0 };
        case "slide-up":
          return { y: "120%" };
        case "blur":
          return { opacity: 0, filter: "blur(10px)" };
        default:
          return { y: "100%", opacity: 0 };
      }
    };

    const getFinalState = () => {
      switch (animation) {
        case "fade-up":
          return { y: "0%", opacity: 1 };
        case "fade":
          return { opacity: 1 };
        case "slide-up":
          return { y: "0%" };
        case "blur":
          return { opacity: 1, filter: "blur(0px)" };
        default:
          return { y: "0%", opacity: 1 };
      }
    };

    gsap.set(revealElements, getInitialState());

    const animationConfig = {
      ...getFinalState(),
      duration,
      stagger,
      ease: "expo.out",
      delay,
    };

    if (trigger === "scroll") {
      gsap.to(revealElements, {
        ...animationConfig,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    } else {
      gsap.to(revealElements, animationConfig);
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === containerRef.current) {
          st.kill();
        }
      });
    };
  }, [children, delay, duration, stagger, trigger, splitBy, animation]);

  return (
    <div ref={containerRef} className={className}>
      <span ref={textRef}>{children}</span>
    </div>
  );
}
