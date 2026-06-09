import logoImg from "@/assets/logo.jpeg";

export function BrandBanner() {
  return (
    <div className="relative w-full bg-background border-b border-border">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
        {/* Left: logo + name */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <img
            src={logoImg}
            alt="Dropper's Club"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-secondary shrink-0"
          />
          <div className="leading-tight min-w-0">
            <div className="font-display text-xl sm:text-2xl font-bold text-foreground truncate">
              Dropper's Club
            </div>
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              An Institute for NEET Preparation
            </div>
          </div>
        </div>

        {/* Right: admissions + pills (desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
              Admissions Help
            </span>
            <a
              href="tel:+918770788459"
              className="text-sm font-bold text-foreground hover:text-secondary transition-colors"
            >
              8770788459 · 8103026373
            </a>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs rounded-full font-semibold">
              NEET · AIIMS
            </span>
            <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
              Foundation 9-12
            </span>
          </div>
        </div>

        {/* Right: compact phone for tablet/mobile */}
        <a
          href="tel:+918770788459"
          className="lg:hidden text-xs sm:text-sm font-bold text-foreground hover:text-secondary transition-colors"
        >
          8770788459
        </a>
      </div>

      {/* Mobile pills row */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 pb-3 flex flex-wrap gap-2">
        <span className="px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold">
          NEET · AIIMS
        </span>
        <span className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold">
          Foundation 9-12
        </span>
        <span className="px-2.5 py-1 rounded-full border border-border text-foreground text-[10px] font-semibold">
          Home Tuition 6-12
        </span>
      </div>
    </div>
  );
}
