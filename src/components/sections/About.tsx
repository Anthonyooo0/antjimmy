"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutText, skills, experiences, education } from "@/lib/data";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([headerRef.current, ".about-item"], { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".about-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: contentRef.current,
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
    <section id="about" ref={sectionRef} className="section">
      <div className="container-wide">
        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20 opacity-0">
          <span className="type-label text-[var(--color-accent)] mb-4 block">
            About
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <h2 className="type-headline text-[var(--color-text)]">
              Engineer with a
              <br />
              competitive edge
            </h2>
            <div className="space-y-4">
              <p className="type-body text-[var(--color-text-secondary)]">
                {aboutText.intro}
              </p>
              <p className="type-body text-[var(--color-text-secondary)]">
                {aboutText.body}
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills */}
          <div className="about-item card opacity-0">
            <h3 className="type-title text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center">
                <span className="text-[var(--color-accent)]">{"<>"}</span>
              </span>
              Skills
            </h3>

            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-6 last:mb-0">
                <h4 className="type-label text-[var(--color-text-muted)] mb-3 capitalize">
                  {category === "ml" ? "ML / AI" : category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="about-item card opacity-0">
            <h3 className="type-title text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center">
                <Briefcase size={20} className="text-[var(--color-accent)]" />
              </span>
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-4 border-l-2 border-[var(--color-border)]"
                >
                  {exp.current && (
                    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  )}
                  <h4 className="type-subtitle text-[var(--color-text)] mb-1">
                    {exp.title}
                  </h4>
                  <p className="type-small text-[var(--color-accent)] mb-1">
                    {exp.company}
                  </p>
                  <p className="type-small text-[var(--color-text-muted)] mb-2">
                    {exp.period}
                  </p>
                  <p className="type-small text-[var(--color-text-secondary)]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Personal */}
          <div className="space-y-8">
            {/* Education */}
            <div className="about-item card opacity-0">
              <h3 className="type-title text-[var(--color-text)] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center">
                  <GraduationCap
                    size={20}
                    className="text-[var(--color-accent)]"
                  />
                </span>
                Education
              </h3>

              <div>
                <h4 className="type-subtitle text-[var(--color-text)] mb-1">
                  {education.school}
                </h4>
                <p className="type-small text-[var(--color-accent)] mb-1">
                  {education.degree}
                </p>
                <p className="type-small text-[var(--color-text-muted)] mb-2">
                  {education.status} · Expected {education.graduation}
                </p>
              </div>
            </div>

            {/* Athletics */}
            <div className="about-item card opacity-0">
              <h3 className="type-title text-[var(--color-text)] mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[var(--color-warm-dim)] flex items-center justify-center">
                  <Trophy size={20} className="text-[var(--color-warm)]" />
                </span>
                Athletics
              </h3>

              <p className="type-body text-[var(--color-text-secondary)] mb-4">
                {education.highlight}
              </p>
              <p className="type-small text-[var(--color-text-muted)]">
                {aboutText.personal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
