"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";

const navigation = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-700 bg-gray-950/95 text-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex min-h-16 items-center justify-between gap-4">
          <a href="#main-content" className="font-bold tracking-tight">
            Alston Dsouza
          </a>

          <button
            type="button"
            className="rounded p-2 text-white transition hover:bg-gray-800 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>

          <nav
            id="primary-navigation"
            aria-label="Primary navigation"
            className={`absolute left-0 top-full w-full border-b border-gray-700 bg-gray-950 px-4 py-3 shadow-lg md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block rounded px-3 py-3 text-sm font-bold transition md:py-2 ${
                        isActive
                          ? "bg-white text-gray-950"
                          : "text-gray-200 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
