"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Hide on touch devices
    const isTouchDevice = "ontouchstart" in window;

    if (prefersReducedMotion || isTouchDevice) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      if (cursorDotRef.current) cursorDotRef.current.style.display = "none";
      return;
    }

    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    // Hover handlers
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorTextAttr = target.dataset.cursorText;

      setIsHovering(true);
      if (cursorTextAttr) setCursorText(cursorTextAttr);

      gsap.to(cursor, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");

      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Click handlers
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: isHovering ? 2 : 1,
        duration: 0.2,
      });
    };

    // Add listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, [data-cursor]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });

      document.body.style.cursor = "";
    };
  }, [isHovering]);

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 pointer-events-none z-[9999] mix-blend-difference transition-colors duration-200 ${
          isHovering ? "bg-white" : "border-2 border-white"
        } rounded-full flex items-center justify-center`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="text-[8px] font-bold uppercase tracking-wider text-black">
            {cursorText}
          </span>
        )}
      </div>

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-1 h-1 -ml-0.5 -mt-0.5 pointer-events-none z-[9999] bg-white rounded-full transition-opacity duration-200 ${
          isHovering ? "opacity-0" : "opacity-100"
        }`}
        style={{ willChange: "transform" }}
      />
    </>
  );
}
