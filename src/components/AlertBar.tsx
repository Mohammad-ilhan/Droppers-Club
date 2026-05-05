import { Megaphone } from "lucide-react";

export function AlertBar() {
  const items = [
    "🎯 New batch starts soon — Limited seats!",
    "📞 Contact us: +91 98765 43210",
    "🏆 Crafting NEET & JEE toppers since day one",
    "📍 Kolar Road, Bhopal",
    "✨ Admissions open for Class 9–12 & Droppers",
  ];
  const all = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-primary text-primary-foreground py-2 border-b border-primary/20">
      <div className="marquee gap-12 px-6 text-xs font-medium tracking-wide">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <Megaphone className="w-3.5 h-3.5 text-secondary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
