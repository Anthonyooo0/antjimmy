"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollProgressProps {
  variant?: "bar" | "circle" | "dots";
  position?: "top" | "bottom" | "right";
}

export default function ScrollProgress({
  variant = "bar",
  position = "top",
}: ScrollProgressProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  if (variant === "bar") {
    return (
      <div
        className={`fixed ${
          position === "top" ? "top-0" : "bottom-0"
        } left-0 right-0 h-[2px] bg-[var(--color-border)] z-50`}
      >
        <div
          ref={progressRef}
          className="h-full bg-[var(--color-accent)] origin-left transition-transform duration-100"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    );
  }

  if (variant === "circle") {
    const circumference = 2 * Math.PI * 18;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div
        className={`fixed ${
          position === "right" ? "right-6 top-1/2 -translate-y-1/2" : "bottom-6 right-6"
        } z-50`}
      >
        <svg width="48" height="48" className="rotate-[-90deg]">
          {/* Background circle */}
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="2"
          />
          {/* Progress circle */}
          <circle
            cx="24"
            cy="24"
            r="18"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: "stroke-dashoffset 0.1s ease",
            }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[var(--color-text-muted)]">
          {Math.round(progress)}%
        </span>
      </div>
    );
  }

  // Dots variant
  const sections = 5;
  const activeSection = Math.floor((progress / 100) * sections);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {Array.from({ length: sections }).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            const scrollTarget = (i / (sections - 1)) * (document.documentElement.scrollHeight - window.innerHeight);
            window.scrollTo({ top: scrollTarget, behavior: "smooth" });
          }}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i <= activeSection
              ? "bg-[var(--color-accent)] scale-125"
              : "bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]"
          }`}
          aria-label={`Scroll to section ${i + 1}`}
        />
      ))}
    </div>
  );
}
