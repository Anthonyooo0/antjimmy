"use client";

/**
 * Trusted / Stats Section
 *
 * This section establishes credibility through:
 * - Key metrics that quantify impact
 * - Technologies/tools used (as pseudo-logos)
 *
 * Design Rationale:
 * Numbers speak louder than words. This section uses large,
 * bold statistics to create instant credibility. The tech
 * stack serves as "social proof" for technical competence.
 *
 * Animation: Staggered fade-up for each stat
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, TrendingUp, Code2, Cpu } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  value: string;
  label: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  {
    value: "5+",
    label: "ML Models Deployed",
    icon: Cpu,
  },
  {
    value: "70%+",
    label: "Processing Time Reduced",
    icon: TrendingUp,
  },
  {
    value: "12+",
    label: "AI/ML Technologies",
    icon: Code2,
  },
  {
    value: "3+",
    label: "Production Systems",
    icon: Zap,
  },
];

const technologies = [
  "PyTorch",
  "TensorFlow",
  "LangChain",
  "XGBoost",
  "Scikit-learn",
  "OpenAI",
  "FastAPI",
  "PostgreSQL",
];

export default function Trusted() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".stat-item", { opacity: 1, y: 0 });
      gsap.set(".tech-item", { opacity: 1, y: 0 });
      return;
    }

    // Stats animation
    gsap.fromTo(
      ".stat-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Tech pills animation
    gsap.fromTo(
      ".tech-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 85%",
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
      ref={sectionRef}
      className="section-padding bg-white"
      aria-label="Key metrics and technologies"
    >
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-caption text-secondary-500 mb-4">
            Proven Results
          </p>
          <h2 className="text-headline text-primary-900">
            Impact by the Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center p-8 rounded-2xl bg-neutral-50 border border-neutral-100 opacity-0"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary-500/10 flex items-center justify-center">
                <stat.icon
                  className="w-7 h-7 text-secondary-500"
                  aria-hidden="true"
                />
              </div>
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-2">
                {stat.value}
              </p>
              <p className="text-neutral-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div ref={techRef} className="text-center">
          <p className="text-sm text-neutral-500 mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="tech-item px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-700 font-medium text-sm hover:bg-primary-900 hover:text-white transition-all duration-300 cursor-default opacity-0"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
