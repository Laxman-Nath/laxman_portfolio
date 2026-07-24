"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../common/ThemeToggle";

const links = [
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-ledger bg-void/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center justify-between gap-4 px-6 py-5">
        <a
          href="#home"
          className="font-mono text-sm font-bold uppercase tracking-wide text-paper"
        >
          Laxman Nath
        </a>

        {/* Desktop inline nav - hidden on mobile */}
        <nav className="hidden items-center gap-4 md:flex">
          {links.map((l) => {
            const isActive = activeId === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                  isActive ? "text-signal" : "text-paperdim hover:text-paper"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            className="hidden whitespace-nowrap rounded-md border border-ledger px-3.5 py-2 font-mono text-xs font-semibold text-paper transition-colors hover:border-signal hover:text-signal md:inline-block"
          >
            ↓ Resume
          </a>

          {/* Hamburger only shows on mobile */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-ledger text-paper transition-colors hover:text-signal md:hidden"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown - only renders below md breakpoint since button that opens it is hidden on desktop */}
      {open && (
        <nav className="border-b border-ledger bg-void px-6 pb-6 md:hidden">
          <div className="flex flex-col">
            {links.map((l) => {
              const isActive = activeId === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-ledgersoft py-4 font-mono text-sm uppercase tracking-wide last:border-none ${
                    isActive ? "text-signal" : "text-paperdim hover:text-paper"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 border-t border-ledger pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              className="inline-block font-mono text-xs uppercase tracking-widest text-fog hover:text-paper"
            >
              System / Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
