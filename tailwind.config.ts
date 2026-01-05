import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* ========================================
         PREMIUM COLOR PALETTE
         - Primary: Deep Indigo (sophisticated)
         - Secondary: Warm Coral (energetic CTAs)
         - Accent: Electric Teal (modern highlights)
         - Neutrals: Cool grays for text/bg
      ======================================== */
      colors: {
        // Primary - Deep Indigo
        primary: {
          900: "#1a1a2e",
          800: "#16213e",
          700: "#1f3460",
          600: "#2d4a7c",
          500: "#3d5a80",
          400: "#5a7a9e",
          300: "#7d9bbc",
        },
        // Secondary - Warm Coral
        secondary: {
          600: "#d95a3c",
          500: "#ee6c4d",
          400: "#f4845f",
          300: "#f7a080",
        },
        // Accent - Electric Teal
        accent: {
          600: "#0d9488",
          500: "#14b8a6",
          400: "#2dd4bf",
          300: "#5eead4",
        },
        // Neutral - Cool Grays
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Semantic aliases (backwards compat)
        bg: "#0B0E11",
        surface: "#131820",
        text: "#E6E9EF",
        muted: "#94A3B8",
      },

      /* ========================================
         TYPOGRAPHY
      ======================================== */
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      fontSize: {
        // Fluid type scale
        display: [
          "clamp(3rem, 8vw, 6.5rem)",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        headline: [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        title: [
          "clamp(1.5rem, 3vw, 2rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": [
          "clamp(1.125rem, 2vw, 1.25rem)",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
      },

      /* ========================================
         SPACING SCALE (8px base)
      ======================================== */
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "section-sm": "4rem",
        "section-md": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },

      /* ========================================
         CONTAINER & LAYOUT
      ======================================== */
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
        container: "90rem", // 1440px
      },

      /* ========================================
         ANIMATIONS
      ======================================== */
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },

      /* ========================================
         TRANSITIONS
      ======================================== */
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },

      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },

      /* ========================================
         SHADOWS & EFFECTS
      ======================================== */
      boxShadow: {
        premium:
          "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.1)",
        "premium-lg":
          "0 35px 60px -15px rgba(0, 0, 0, 0.2), 0 15px 30px -10px rgba(0, 0, 0, 0.15)",
        soft: "0 4px 14px 0 rgba(0, 0, 0, 0.05)",
        card: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
      },

      /* ========================================
         BORDER RADIUS
      ======================================== */
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      /* ========================================
         Z-INDEX
      ======================================== */
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;
