/**
 * GSAP Animation Utilities
 *
 * Restrained, premium motion design inspired by studio-quality websites.
 * Uses expo easing curves and staggered reveals for sophistication.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Default animation configuration
 * - Expo easing for premium feel
 * - Moderate duration (not too fast, not too slow)
 * - Subtle transforms (don't distract from content)
 */
export const defaultConfig = {
  duration: 1,
  ease: "expo.out",
  stagger: 0.1,
} as const;

/**
 * Fade up reveal animation
 * Use for: headlines, paragraphs, cards
 */
export function revealUp(
  elements: gsap.TweenTarget,
  options: {
    trigger?: string | Element;
    start?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
  } = {}
) {
  const {
    trigger,
    start = "top 85%",
    delay = 0,
    stagger = defaultConfig.stagger,
    duration = defaultConfig.duration,
  } = options;

  return gsap.fromTo(
    elements,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: defaultConfig.ease,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/**
 * Fade in animation (no transform)
 * Use for: images, backgrounds, subtle elements
 */
export function fadeIn(
  elements: gsap.TweenTarget,
  options: {
    trigger?: string | Element;
    start?: string;
    delay?: number;
    duration?: number;
  } = {}
) {
  const {
    trigger,
    start = "top 85%",
    delay = 0,
    duration = defaultConfig.duration,
  } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0 },
    {
      opacity: 1,
      duration,
      delay,
      ease: defaultConfig.ease,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/**
 * Scale in animation
 * Use for: cards, images, emphasis elements
 */
export function scaleIn(
  elements: gsap.TweenTarget,
  options: {
    trigger?: string | Element;
    start?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
  } = {}
) {
  const {
    trigger,
    start = "top 85%",
    delay = 0,
    stagger = defaultConfig.stagger,
    duration = defaultConfig.duration,
  } = options;

  return gsap.fromTo(
    elements,
    {
      scale: 0.95,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: defaultConfig.ease,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/**
 * Slide from left
 * Use for: alternating grid items, navigation
 */
export function slideLeft(
  elements: gsap.TweenTarget,
  options: {
    trigger?: string | Element;
    start?: string;
    delay?: number;
    duration?: number;
  } = {}
) {
  const {
    trigger,
    start = "top 85%",
    delay = 0,
    duration = defaultConfig.duration,
  } = options;

  return gsap.fromTo(
    elements,
    {
      x: -40,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: defaultConfig.ease,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/**
 * Slide from right
 * Use for: alternating grid items, CTAs
 */
export function slideRight(
  elements: gsap.TweenTarget,
  options: {
    trigger?: string | Element;
    start?: string;
    delay?: number;
    duration?: number;
  } = {}
) {
  const {
    trigger,
    start = "top 85%",
    delay = 0,
    duration = defaultConfig.duration,
  } = options;

  return gsap.fromTo(
    elements,
    {
      x: 40,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease: defaultConfig.ease,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/**
 * Staggered children animation
 * Use for: lists, grids, navigation items
 */
export function staggerChildren(
  container: string | Element,
  childSelector: string,
  options: {
    start?: string;
    stagger?: number;
    duration?: number;
    y?: number;
  } = {}
) {
  const {
    start = "top 85%",
    stagger = 0.08,
    duration = 0.8,
    y = 40,
  } = options;

  return gsap.fromTo(
    `${container} ${childSelector}`,
    {
      y,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: defaultConfig.ease,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Text split line animation
 * Use for: hero headlines, section titles
 */
export function animateLines(
  elements: gsap.TweenTarget,
  options: {
    trigger?: string | Element;
    start?: string;
    stagger?: number;
  } = {}
) {
  const {
    trigger,
    start = "top 85%",
    stagger = 0.15,
  } = options;

  return gsap.fromTo(
    elements,
    {
      y: "100%",
      opacity: 0,
    },
    {
      y: "0%",
      opacity: 1,
      duration: 1.2,
      stagger,
      ease: "expo.out",
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

/**
 * Parallax scroll effect
 * Use for: background images, decorative elements
 */
export function parallax(
  element: string | Element,
  options: {
    speed?: number;
    start?: string;
    end?: string;
  } = {}
) {
  const {
    speed = 0.3,
    start = "top bottom",
    end = "bottom top",
  } = options;

  return gsap.to(element, {
    y: `${speed * 100}%`,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub: true,
    },
  });
}

/**
 * Counter animation for metrics
 * Use for: statistics, numbers
 */
export function animateCounter(
  element: HTMLElement,
  endValue: number,
  options: {
    duration?: number;
    suffix?: string;
  } = {}
) {
  const { duration = 2, suffix = "" } = options;

  const counter = { value: 0 };

  return gsap.to(counter, {
    value: endValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(counter.value) + suffix;
    },
  });
}

/**
 * Create scroll-triggered animation context
 * Use this to batch multiple animations for a section
 */
export function createSectionAnimation(
  sectionSelector: string,
  setup: (ctx: gsap.Context) => void
) {
  const ctx = gsap.context(() => {
    setup(gsap.context(() => {}));
  }, sectionSelector);

  return ctx;
}

/**
 * Kill all ScrollTrigger instances
 * Call on route change in Next.js
 */
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresh ScrollTrigger calculations
 * Call after dynamic content loads
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
