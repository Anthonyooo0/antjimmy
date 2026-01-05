"use client";

/**
 * Process / How It Works Section
 *
 * Reduces friction by demystifying the engagement process.
 * Makes working together feel approachable and well-structured.
 *
 * Design Rationale:
 * - Numbered steps create clear progression
 * - Brief descriptions keep it scannable
 * - Visual connection between steps (line/dots)
 * - 4 steps is optimal - not too few, not overwhelming
 *
 * Animation: Sequential reveal with connecting line animation
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Search, Code, Rocket } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We discuss your challenges, goals, and data landscape. I'll ask questions to understand the full picture and identify opportunities.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Analysis & Strategy",
    description:
      "I analyze your data, research solutions, and develop a clear technical roadmap with defined milestones and deliverables.",
    icon: Search,
  },
  {
    number: "03",
    title: "Build & Iterate",
    description:
      "Development begins with regular check-ins. You'll see progress weekly and provide feedback to ensure we're on track.",
    icon: Code,
  },
  {
    number: "04",
    title: "Deploy & Support",
    description:
      "Launch to production with documentation and training. I provide ongoing support to ensure long-term success.",
    icon: Rocket,
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".process-step", { opacity: 1, x: 0 });
      return;
    }

    gsap.fromTo(
      ".process-step",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stepsRef.current,
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
      id="process"
      ref={sectionRef}
      className="section-padding-lg bg-primary-900"
      aria-labelledby="process-heading"
    >
      <div className="container-premium">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-caption text-secondary-400 mb-4">
            How I Work
          </p>
          <h2
            id="process-heading"
            className="text-headline text-white mb-6"
          >
            A Clear Path from
            <br />
            Idea to Implementation
          </h2>
          <p className="text-body-lg text-neutral-300">
            Every project follows a structured approach that ensures
            clarity, reduces risk, and delivers results on time.
          </p>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connecting Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-[60px] right-[60px] h-0.5 bg-white/10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <article
                key={index}
                className="process-step relative opacity-0"
              >
                {/* Step Number & Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-coral flex items-center justify-center mb-2">
                    <step.icon
                      className="w-10 h-10 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="absolute top-2 right-2 text-5xl font-heading font-bold text-white/10">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
