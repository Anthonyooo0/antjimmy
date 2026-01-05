"use client";

/**
 * Services / Capabilities Section
 *
 * Clearly communicates what I offer with benefit-focused cards.
 *
 * Design Rationale:
 * - Each service card answers "what can you do for me?"
 * - Icons provide visual anchors for scanning
 * - Hover states add interactivity and depth
 * - Grid layout ensures clean, balanced presentation
 *
 * Animation: Staggered scale-in for cards
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain,
  Database,
  Workflow,
  Bot,
  LineChart,
  Cog,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    title: "Machine Learning Systems",
    description:
      "End-to-end ML pipelines from data preprocessing to model deployment. Production-ready solutions that scale with your business needs.",
    icon: Brain,
  },
  {
    title: "Data Engineering",
    description:
      "Robust ETL pipelines, data warehousing, and real-time streaming solutions. Transform raw data into actionable insights.",
    icon: Database,
  },
  {
    title: "LLM Integration",
    description:
      "Custom AI agents, RAG systems, and LLM-powered automation using OpenAI, Gemini, and LangChain for intelligent workflows.",
    icon: Bot,
  },
  {
    title: "Predictive Analytics",
    description:
      "Build forecasting models and scoring systems that help you make data-driven decisions with confidence.",
    icon: LineChart,
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate manual processes with intelligent automation. OCR, email processing, and custom integrations.",
    icon: Workflow,
  },
  {
    title: "MLOps & Deployment",
    description:
      "Streamlined model deployment with monitoring, versioning, and continuous improvement pipelines.",
    icon: Cog,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".service-card", { opacity: 1, scale: 1 });
      return;
    }

    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
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
      id="services"
      ref={sectionRef}
      className="section-padding-lg bg-gradient-subtle"
      aria-labelledby="services-heading"
    >
      <div className="container-premium">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-caption text-secondary-500 mb-4">
            What I Do
          </p>
          <h2
            id="services-heading"
            className="text-headline text-primary-900 mb-6"
          >
            AI Solutions Built for
            <br />
            Real-World Impact
          </h2>
          <p className="text-body-lg text-neutral-600">
            From concept to production, I build intelligent systems that
            automate workflows, extract insights, and create competitive
            advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="service-card group p-8 bg-white rounded-2xl border border-neutral-100 shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 opacity-0"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-coral flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon
                  className="w-7 h-7 text-white"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 className="text-title text-primary-900 mb-3">
                {service.title}
              </h3>
              <p className="text-body text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
