import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "./Monogram";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faculty", label: "Faculty" },
  { href: "#gallery", label: "Gallery" },
  { href: "#resources", label: "Resources" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-8">
        <a href="#home" className="flex items-center gap-3 group shrink-0">
          <Monogram size={44} className="transition-transform duration-500 group-hover:rotate-[-6deg]" />
          <div className="leading-tight">
            <div className="font-display font-semibold text-lg tracking-tight">Dropper's Club</div>
            <div className="text-[9px] tracking-[0.35em] text-muted-foreground uppercase">Crafting Toppers</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors relative group whitespace-nowrap">
              {l.label}
              <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:block shrink-0">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6">
            <a href="#register">Register Now</a>
          </Button>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-card">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm">{l.label}</a>
          ))}
          <Button asChild className="bg-primary text-primary-foreground rounded-full"><a href="#register">Register Now</a></Button>
        </div>
      )}
    </header>
  );
}
