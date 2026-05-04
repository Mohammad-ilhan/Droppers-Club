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
    <div className="sticky top-0 z-[60] overflow-hidden bg-gradient-brand text-primary-foreground py-2 shadow-md">
      <div className="marquee gap-12 px-6 text-sm font-semibold">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <Megaphone className="w-4 h-4" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
