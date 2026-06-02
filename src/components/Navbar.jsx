import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/profile.js";

const navLinks = [
  { label: "Resume", href: profile.resumeUrl, download: true },
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-900/10 bg-mist/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-base font-bold text-ink transition hover:text-ocean"
          onClick={closeMenu}
        >
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.download
                  ? "inline-flex items-center gap-1.5 rounded-lg border border-ocean/20 bg-white px-3 py-2 text-sm font-semibold text-ocean transition hover:border-ocean hover:bg-emerald-50"
                  : "text-sm font-medium text-ink/75 transition hover:text-ocean"
              }
              download={link.download}
            >
              {link.download && <Download size={15} />}
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-900/10 bg-white text-ink md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-emerald-900/10 bg-white md:hidden">
          <div className="mx-auto grid w-full max-w-6xl gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.download
                    ? "inline-flex items-center gap-2 rounded-lg border border-ocean/20 bg-emerald-50 px-3 py-3 text-sm font-semibold text-ocean transition hover:border-ocean"
                    : "rounded-lg px-3 py-3 text-sm font-medium text-ink/75 transition hover:bg-emerald-50 hover:text-ocean"
                }
                onClick={closeMenu}
                download={link.download}
              >
                {link.download && <Download size={16} />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
