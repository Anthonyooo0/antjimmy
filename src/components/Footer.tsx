"use client";

import Link from "next/link";
import { personalInfo, socialLinks, navigation } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowUp } from "lucide-react";

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
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="container-wide py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link
              href="/"
              className="type-title text-[var(--color-text)] inline-block mb-4"
            >
              {personalInfo.firstName}
              <span className="text-[var(--color-accent)]">.</span>
            </Link>
            <p className="type-body text-[var(--color-text-secondary)] max-w-sm mb-6">
              {personalInfo.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
              <span className="text-[var(--color-border)]">|</span>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h4 className="type-label text-[var(--color-text-muted)] mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h4 className="type-label text-[var(--color-text-muted)] mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href={socialLinks.email}
                className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">{personalInfo.email}</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </a>
              <p className="text-sm text-[var(--color-text-muted)]">
                {personalInfo.location}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  {personalInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
