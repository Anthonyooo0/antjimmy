"use client";

/**
 * Featured Work Section
 *
 * Visual showcase of portfolio projects. This is the "show, don't tell"
 * moment that proves capability through concrete examples.
 *
 * Design Rationale:
 * - Large, immersive images create visual impact
 * - Overlay text provides context without cluttering
 * - Hover effects invite exploration
 * - Mix of grid sizes creates visual rhythm
 *
 * Animation: Fade-up with stagger for project cards
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI Clinical Triage Assistant",
    category: "Healthcare ML",
    description:
      "Production ML system predicting 24-hour patient deterioration using MIMIC-IV dataset with SHAP interpretability for clinician trust.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    tech: ["XGBoost", "SHAP", "Streamlit", "Python"],
    featured: true,
  },
  {
    title: "Complaint Monitor App",
    category: "AI Automation",
    description:
      "AI system ingesting emails via Microsoft Graph API, extracting part numbers with OCR, and classifying complaints using multi-step LLM reasoning.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["Gemini LLM", "Graph API", "OCR", "SQLite"],
    link: "#",
  },
  {
    title: "V8 Engine Deal Finder",
    category: "ML-Powered Scoring",
    description:
      "End-to-end ML system scraping automotive listings and engineering price/condition features for 85%+ accuracy deal scoring.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
    tech: ["Random Forest", "Playwright", "Selenium"],
    link: "https://github.com/Anthonyooo0/Engine_Deal_AI",
  },
  {
    title: "PDF Data Extraction Pipeline",
    category: "Data Engineering",
    description:
      "Automated data extraction processing PDF attachments with OCR for scanned documents and table extraction for digital PDFs.",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&h=600&fit=crop",
    tech: ["Tesseract OCR", "pdf2image", "ETL"],
    link: "https://github.com/Anthonyooo0/Email_PDF_Data_Export",
  },
];

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".project-card", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
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
      id="work"
      ref={sectionRef}
      className="section-padding-lg bg-white"
      aria-labelledby="work-heading"
    >
      <div className="container-premium">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <p className="text-caption text-secondary-500 mb-4">
              Featured Work
            </p>
            <h2
              id="work-heading"
              className="text-headline text-primary-900"
            >
              Projects That Drive
              <br />
              Real Results
            </h2>
          </div>
          <a
            href="https://github.com/Anthonyooo0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start lg:self-auto"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`project-card group relative overflow-hidden rounded-3xl bg-neutral-100 opacity-0 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  project.featured ? "aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={project.featured ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                {/* Category */}
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500 text-white text-xs font-semibold mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-200 text-body mb-6 max-w-2xl">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Arrow */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    aria-label={`View ${project.title} project`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary-900" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
