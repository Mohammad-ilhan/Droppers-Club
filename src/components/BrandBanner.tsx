import { Phone } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

export function BrandBanner() {
  return (
    <div className="relative w-full bg-gradient-hero border-b border-border overflow-hidden">
      {/* subtle pattern to match Hero */}
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full stripe-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between gap-4 flex-wrap">
        {/* Left: logo + name */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <img
            src={logoImg}
            alt="Dropper's Club"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-secondary/40 shrink-0"
          />
          <div className="leading-tight min-w-0">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-semibold">
              An Institute for NEET Preparation
            </div>
            <div className="font-display text-xl sm:text-3xl font-bold text-gradient-brand truncate">
              Dropper's Club
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground italic hidden sm:block">
              Connecting link between Students &amp; Success
            </div>
          </div>
        </div>

        {/* Middle: course pills */}
        <div className="hidden md:flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide">
            NEET · AIIMS · FOUNDATION (9–12)
          </span>
          <span className="px-3 py-1.5 rounded-full bg-gradient-gold text-primary text-xs font-bold tracking-wide">
            Home Tuition · 6th–12th
          </span>
        </div>

        {/* Right: phones */}
        <a
          href="tel:+918770788459"
          className="flex items-center gap-2 text-primary shrink-0"
        >
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          <div className="text-xs sm:text-sm font-semibold leading-tight">
            <div>8770788459</div>
            <div>8103026373</div>
          </div>
        </a>
      </div>

      {/* mobile pills row */}
      <div className="md:hidden relative max-w-7xl mx-auto px-4 pb-3 flex flex-wrap gap-2">
        <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
          NEET · AIIMS · FOUNDATION (9–12)
        </span>
        <span className="px-2.5 py-1 rounded-full bg-gradient-gold text-primary text-[10px] font-bold">
          Home Tuition · 6th–12th
        </span>
      </div>
    </div>
  );
}
