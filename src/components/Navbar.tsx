import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.jpeg";

/* Trim to only essential nav items — less is more */
const links = [
  { href: "#home",         label: "Home" },
  { href: "#courses",      label: "Courses" },
  { href: "#faculty",      label: "Faculty" },
  { href: "#results",      label: "Results" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact",      label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_16px_-4px_oklch(0.24_0.08_265/0.12)] border-b border-border" : "border-b border-border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">

          {/* ── Logo only (brand name lives in banner above) ── */}
          <a href="#home" className="flex items-center gap-2 shrink-0 group">
            <img
              src={logoImg}
              alt="Dropper's Club Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-border group-hover:border-secondary transition-colors duration-200"
            />
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-foreground/70 hover:text-primary transition-colors relative group py-1 whitespace-nowrap"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-secondary group-hover:w-full transition-all duration-250 rounded-full" />
              </a>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 text-sm text-primary font-medium hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 98765 43210</span>
            </a>
            <a
              href="#register"
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors shadow-glow-navy"
            >
              Register Free
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-white hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 bg-white border-b border-border shadow-card lg:hidden"
          >
            {/* Gold top accent */}
            <div className="h-[3px] bg-gradient-gold" />

            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-0">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between py-3.5 border-b border-border/50 last:border-0 text-base font-semibold text-primary hover:text-secondary transition-colors"
                >
                  {l.label}
                  <span className="text-border text-sm">›</span>
                </motion.a>
              ))}
            </nav>

            <div className="px-4 pb-5 pt-2">
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-base"
              >
                Register Free →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
