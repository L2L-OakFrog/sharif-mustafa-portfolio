"use client";

import { useState } from "react";
import { NavItem } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--glass-border)] bg-[color:color-mix(in_srgb,var(--glass-fill-base)_82%,transparent)] backdrop-blur-[28px]">
      <div className="section-shell relative py-4">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
            <span className="liquid-stage flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-[var(--font-heading)] text-sm font-extrabold tracking-[0.22em] text-[var(--accent)]">
              SM
            </span>
            <span className="min-w-0">
              <span className="block font-[var(--font-heading)] text-[13px] font-extrabold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-base">
                Sharif Mustafa
              </span>
              <span className="block text-[13px] text-[color:color-mix(in_srgb,var(--foreground)_65%,transparent)] sm:text-sm">
                QA Automation Engineer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="anchor-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="liquid-pill rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setIsOpen((value) => !value)}
              className="liquid-pill flex h-12 w-12 items-center justify-center rounded-2xl"
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-[var(--foreground)] transition-all duration-300 ${
                    isOpen ? "rotate-45" : "-translate-y-[6px]"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-[var(--foreground)] transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-5 rounded-full bg-[var(--foreground)] transition-all duration-300 ${
                    isOpen ? "-rotate-45" : "translate-y-[6px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 top-[73px] z-40 transition-all duration-300 xl:hidden ${
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[color:color-mix(in_srgb,var(--background)_42%,transparent)] backdrop-blur-md"
          />
          <div className="section-shell relative pt-3">
          <div className="liquid-panel max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[var(--radius-card)] p-4 shadow-[var(--shadow)]">
            <nav className="grid gap-2.5">
              <div className="flex items-center justify-between rounded-[var(--radius-panel)] px-1 pb-2">
                <span className="text-sm font-semibold text-[color:color-mix(in_srgb,var(--foreground)_68%,transparent)]">
                  Navigation
                </span>
              </div>
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="liquid-pill rounded-[var(--radius-panel)] px-4 py-3 text-sm font-semibold text-[color:color-mix(in_srgb,var(--foreground)_86%,transparent)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-[var(--radius-panel)] bg-[var(--accent)] px-4 py-3 text-center text-sm font-bold text-white shadow-[var(--shadow-soft)]"
              >
                Let&apos;s Connect
              </a>
            </nav>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
