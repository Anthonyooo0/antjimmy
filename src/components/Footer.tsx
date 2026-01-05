"use client";

/**
 * Footer Component
 *
 * Premium footer with:
 * - Clean grid layout with contact info
 * - Social links with hover animations
 * - Newsletter signup (optional)
 * - Legal links
 *
 * Design Rationale:
 * The footer acts as the final touchpoint. It should feel complete
 * and professional while providing all necessary contact/legal info.
 */

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Anthonyooo0",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anthony-jimenez-4bb943200/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:tj.jimenez03@gmail.com",
    icon: Mail,
  },
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-primary-900 text-white"
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div className="container-premium section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block font-heading text-3xl font-bold mb-4"
            >
              Anthony Jimenez<span className="text-secondary-500">.</span>
            </Link>
            <p className="text-neutral-300 text-body max-w-md mb-6">
              Machine Learning Engineer building intelligent systems that solve
              real-world problems. Specializing in production AI, predictive
              modeling, and automation.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-500 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-neutral-300" role="list">
              <li>
                <a
                  href="mailto:tj.jimenez03@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  tj.jimenez03@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12012304890"
                  className="hover:text-white transition-colors duration-300"
                >
                  (201) 230-4890
                </a>
              </li>
              <li className="text-neutral-400">
                New Jersey, USA
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-premium py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} Anthony Jimenez. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
