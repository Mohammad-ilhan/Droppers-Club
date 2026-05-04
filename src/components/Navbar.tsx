import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#faculty", label: "Faculty" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Dropper's Club" className="w-11 h-11 rounded-full ring-2 ring-primary/40" />
          <div className="leading-tight">
            <div className="font-bold text-lg">Dropper's Club</div>
            <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Crafting Toppers</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all" />
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-gradient-brand text-primary-foreground hover:opacity-90 font-semibold">
            <a href="#register">Register Now</a>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-card">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm">{l.label}</a>
          ))}
          <Button asChild className="bg-gradient-brand text-primary-foreground"><a href="#register">Register Now</a></Button>
        </div>
      )}
    </header>
  );
}
