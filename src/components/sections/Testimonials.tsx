"use client";

/**
 * Testimonials Section
 *
 * Human validation through peer experiences. Real voices
 * build trust and address objections better than marketing copy.
 *
 * Design Rationale:
 * - Large quote marks as visual anchors
 * - Photos humanize the testimonials
 * - Clean cards with generous spacing
 * - Mix of roles/contexts shows breadth
 *
 * Note: Using placeholder testimonials that can be replaced
 * with real ones as they're collected.
 *
 * Animation: Staggered fade-up for cards
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Quote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Anthony's ML solution transformed how we handle patient data. The predictive model he built is now a critical part of our clinical workflow, helping us prioritize care more effectively.",
    author: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    company: "Healthcare Analytics Co.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "The automation system Anthony built reduced our complaint processing time by 70%. What used to take days now happens in minutes. His attention to detail and understanding of our workflow was impressive.",
    author: "Michael Torres",
    role: "Operations Director",
    company: "MAC Products",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote:
      "Working with Anthony on our data pipeline was seamless. He not only delivered a robust solution but also documented everything clearly and trained our team. True end-to-end professionalism.",
    author: "Jessica Park",
    role: "VP of Engineering",
    company: "DataFlow Systems",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".testimonial-card", { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
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
      id="about"
      ref={sectionRef}
      className="section-padding-lg bg-gradient-subtle"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-caption text-secondary-500 mb-4">
            What Others Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-headline text-primary-900 mb-6"
          >
            Trusted by Teams
            <br />
            Building the Future
          </h2>
          <p className="text-body-lg text-neutral-600">
            I&apos;ve had the privilege of working with amazing teams across
            healthcare, manufacturing, and technology.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="testimonial-card relative p-8 lg:p-10 bg-white rounded-3xl shadow-soft hover:shadow-premium transition-shadow duration-500 opacity-0"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8">
                <Quote
                  className="w-10 h-10 text-secondary-500/20"
                  aria-hidden="true"
                />
              </div>

              {/* Quote Text */}
              <blockquote className="mb-8">
                <p className="text-body text-neutral-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-neutral-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
