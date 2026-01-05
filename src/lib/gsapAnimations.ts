/**
 * GSAP Animation Utilities
 *
 * This module provides reusable scroll-triggered animations using GSAP.
 * All animations respect prefers-reduced-motion for accessibility.
 *
 * Premium Motion Principles:
 * - Subtle, purposeful movement
 * - Staggered reveals for lists/grids
 * - Smooth easing (power3.out for entrances)
 * - 20% viewport trigger for natural timing
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Check for reduced motion preference
const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Default animation configuration
const defaultConfig = {
  duration: 0.8,
  ease: "power3.out",
  start: "top 80%",
  toggleActions: "play none none none",
};

/**
 * Fade Up Animation
 * Elements slide up from below while fading in
 */
export const fadeUpAnimation = (
  elements: string | Element | Element[],
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
    y?: number;
  }
) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  const { duration = 0.8, delay = 0, stagger = 0.1, y = 60 } = options || {};

  gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: defaultConfig.ease,
      scrollTrigger: {
        trigger: elements,
        start: defaultConfig.start,
        toggleActions: defaultConfig.toggleActions,
      },
    }
  );
};

/**
 * Fade In Animation
 * Simple opacity fade without movement
 */
export const fadeInAnimation = (
  elements: string | Element | Element[],
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
  }
) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1 });
    return;
  }

  const { duration = 0.6, delay = 0, stagger = 0.1 } = options || {};

  gsap.fromTo(
    elements,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements,
        start: defaultConfig.start,
        toggleActions: defaultConfig.toggleActions,
      },
    }
  );
};

/**
 * Scale In Animation
 * Elements scale up from smaller size while fading
 */
export const scaleInAnimation = (
  elements: string | Element | Element[],
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
    scale?: number;
  }
) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, scale: 1 });
    return;
  }

  const { duration = 0.8, delay = 0, stagger = 0.15, scale = 0.9 } = options || {};

  gsap.fromTo(
    elements,
    { opacity: 0, scale },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elements,
        start: defaultConfig.start,
        toggleActions: defaultConfig.toggleActions,
      },
    }
  );
};

/**
 * Slide From Left Animation
 */
export const slideFromLeftAnimation = (
  elements: string | Element | Element[],
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
    x?: number;
  }
) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, x: 0 });
    return;
  }

  const { duration = 0.8, delay = 0, stagger = 0.1, x = -60 } = options || {};

  gsap.fromTo(
    elements,
    { opacity: 0, x },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      stagger,
      ease: defaultConfig.ease,
      scrollTrigger: {
        trigger: elements,
        start: defaultConfig.start,
        toggleActions: defaultConfig.toggleActions,
      },
    }
  );
};

/**
 * Slide From Right Animation
 */
export const slideFromRightAnimation = (
  elements: string | Element | Element[],
  options?: {
    duration?: number;
    delay?: number;
    stagger?: number;
    x?: number;
  }
) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, x: 0 });
    return;
  }

  const { duration = 0.8, delay = 0, stagger = 0.1, x = 60 } = options || {};

  gsap.fromTo(
    elements,
    { opacity: 0, x },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      stagger,
      ease: defaultConfig.ease,
      scrollTrigger: {
        trigger: elements,
        start: defaultConfig.start,
        toggleActions: defaultConfig.toggleActions,
      },
    }
  );
};

/**
 * Staggered List Animation
 * Animates list items with staggered timing
 */
export const staggeredListAnimation = (
  container: string | Element,
  itemSelector: string,
  options?: {
    duration?: number;
    stagger?: number;
    y?: number;
  }
) => {
  if (prefersReducedMotion()) {
    gsap.set(itemSelector, { opacity: 1, y: 0 });
    return;
  }

  const { duration = 0.6, stagger = 0.12, y = 40 } = options || {};

  gsap.fromTo(
    itemSelector,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        toggleActions: defaultConfig.toggleActions,
      },
    }
  );
};

/**
 * Hero Animation Timeline
 * Creates a sequenced animation for hero sections
 */
export const heroAnimation = (options?: {
  headlineSelector?: string;
  subtitleSelector?: string;
  ctaSelector?: string;
}) => {
  if (prefersReducedMotion()) {
    if (options?.headlineSelector) gsap.set(options.headlineSelector, { opacity: 1, y: 0 });
    if (options?.subtitleSelector) gsap.set(options.subtitleSelector, { opacity: 1, y: 0 });
    if (options?.ctaSelector) gsap.set(options.ctaSelector, { opacity: 1, y: 0 });
    return;
  }

  const {
    headlineSelector = ".hero-headline",
    subtitleSelector = ".hero-subtitle",
    ctaSelector = ".hero-cta",
  } = options || {};

  const tl = gsap.timeline({ delay: 0.2 });

  tl.fromTo(
    headlineSelector,
    { opacity: 0, y: 80 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  )
    .fromTo(
      subtitleSelector,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      ctaSelector,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

  return tl;
};

/**
 * Card Hover Animation
 * Subtle lift effect on hover
 */
export const cardHoverAnimation = (element: Element) => {
  if (prefersReducedMotion()) return;

  const enterHandler = () => {
    gsap.to(element, {
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const leaveHandler = () => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  element.addEventListener("mouseenter", enterHandler);
  element.addEventListener("mouseleave", leaveHandler);

  // Return cleanup function
  return () => {
    element.removeEventListener("mouseenter", enterHandler);
    element.removeEventListener("mouseleave", leaveHandler);
  };
};

/**
 * Parallax Scroll Effect
 * Subtle vertical parallax on scroll
 */
export const parallaxAnimation = (
  element: string | Element,
  options?: {
    speed?: number;
    start?: string;
    end?: string;
  }
) => {
  if (prefersReducedMotion()) return;

  const { speed = 0.5, start = "top bottom", end = "bottom top" } = options || {};

  gsap.to(element, {
    yPercent: -100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: true,
    },
  });
};

/**
 * Text Reveal Animation
 * Characters or words reveal with stagger
 */
export const textRevealAnimation = (
  element: string | Element,
  options?: {
    duration?: number;
    stagger?: number;
    splitBy?: "chars" | "words";
  }
) => {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1 });
    return;
  }

  const { duration = 0.8, stagger = 0.02 } = options || {};

  gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: defaultConfig.toggleActions,
      },
    }
  );
};

/**
 * Initialize all scroll animations
 * Call this in your main layout or page component
 */
export const initScrollAnimations = () => {
  if (typeof window === "undefined") return;

  // Refresh ScrollTrigger after page load
  ScrollTrigger.refresh();

  // Optional: Add scroll progress indicator
  // gsap.to(".progress-bar", {
  //   scaleX: 1,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: "body",
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //   },
  // });
};

/**
 * Cleanup all ScrollTrigger instances
 * Call this on component unmount
 */
export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

const gsapAnimations = {
  fadeUpAnimation,
  fadeInAnimation,
  scaleInAnimation,
  slideFromLeftAnimation,
  slideFromRightAnimation,
  staggeredListAnimation,
  heroAnimation,
  cardHoverAnimation,
  parallaxAnimation,
  textRevealAnimation,
  initScrollAnimations,
  cleanupAnimations,
};

export default gsapAnimations;
