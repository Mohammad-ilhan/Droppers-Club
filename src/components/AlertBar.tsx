import { Megaphone, Phone } from "lucide-react";

export function AlertBar() {
  const items = [
    "🎯 New batch starts soon — Limited seats!",
    "📞 +91 98765 43210",
    "🏆 1200+ Selections · NEET & JEE · 2025",
    "📍 Kolar Road, Bhopal",
    "✨ Admissions open — Class 9–12 & Droppers",
    "🌟 98% Result Rate · 6 Years of Excellence",
  ];
  const all = [...items, ...items];

  return (
    <div className="navy-top-bar relative overflow-hidden">
      <div className="absolute inset-0 dot-bg-gold opacity-20" />
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />

      <div className="relative flex items-center py-2">
        {/* Left label */}
        <div className="relative z-20 flex items-center gap-2 px-4 border-r border-white/15 shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-secondary/90 whitespace-nowrap hidden sm:block">
            Latest
          </span>
          <Phone className="w-3 h-3 text-white/60 sm:hidden" />
        </div>

        {/* Marquee */}
        <div className="marquee gap-8 text-[11px] font-medium tracking-wide overflow-hidden">
          {all.map((t, i) => (
            <span key={i} className="flex items-center gap-2 whitespace-nowrap text-white/80">
              <Megaphone className="w-3 h-3 text-secondary/70 shrink-0" />
              {t}
              <span className="text-white/25 mx-1">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
