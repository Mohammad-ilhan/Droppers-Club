import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

type Category = "ALL" | "NEET" | "JEE" | "CLASSES 6–10";

const toppers: {
  name: string;
  initials: string;
  exam: string;
  course: string;
  rank: string;
  category: Exclude<Category, "ALL">;
}[] = [
  { name: "Aarav Sharma", initials: "AS", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 142", category: "NEET" },
  { name: "Priya Verma", initials: "PV", exam: "JEE Adv. '25", course: "Class 12 Classroom Course", rank: "AIR 395", category: "JEE" },
  { name: "Rohan Mehta", initials: "RM", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 247", category: "NEET" },
  { name: "Sneha Patel", initials: "SP", exam: "JEE Adv. '25", course: "Class 12 Classroom Course", rank: "AIR 516", category: "JEE" },
  { name: "Disha Patil", initials: "DP", exam: "CBSE 10th '25", course: "Foundation Classroom Course", rank: "99.2 %", category: "CLASSES 6–10" },
  { name: "Kunal Rathore", initials: "KR", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 56", category: "NEET" },
  { name: "Ananya Gupta", initials: "AG", exam: "JEE Mains '25", course: "Class 12 Classroom Course", rank: "AIR 1050", category: "JEE" },
  { name: "Vikram Joshi", initials: "VJ", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 78", category: "NEET" },
  { name: "Isha Raghav", initials: "IR", exam: "JEE Adv. '25", course: "Class 12 Classroom Course", rank: "AIR 980", category: "JEE" },
  { name: "Hemant K.", initials: "HK", exam: "CBSE 12th '25", course: "Foundation Classroom Course", rank: "98.4 %", category: "CLASSES 6–10" },
];

const tabs: Category[] = ["ALL", "NEET", "JEE", "CLASSES 6–10"];

export function Results() {
  const [active, setActive] = useState<Category>("ALL");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = active === "ALL" ? toppers : toppers.filter((t) => t.category === active);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="results" className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden relative">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-10"
        >
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Hall of Fame</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold mt-2 sm:mt-3 text-primary">
            Meet our <span className="italic text-gradient-gold">stars</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Real students. Real ranks. Year after year, Dropper's Club continues to deliver Bhopal's best results.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1.5 sm:gap-2 bg-card border border-border rounded-full p-1.5 shadow-soft">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold transition-all ${
                  active === t
                    ? "bg-primary text-primary-foreground shadow-glow-navy"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-soft items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-soft items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((t, i) => (
              <motion.article
                key={t.name + i}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 5) * 0.05 }}
                className="snap-start shrink-0 w-[160px] sm:w-[200px] lg:w-[220px] bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft lift"
              >
                {/* Portrait area */}
                <div className="relative h-36 sm:h-44 bg-gradient-to-br from-muted via-muted/70 to-card flex items-center justify-center">
                  <div className="absolute inset-0 dot-bg opacity-50" />
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glow-navy">
                    <span className="font-display text-2xl sm:text-3xl font-semibold text-secondary">
                      {t.initials}
                    </span>
                  </div>
                  {/* Exam badge */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {t.exam}
                  </div>
                </div>

                {/* Body */}
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="font-display text-sm sm:text-base font-semibold text-primary truncate">
                    {t.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 truncate">
                    {t.course}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                    {t.exam}
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-1.5">
                    <span className="font-display text-lg sm:text-xl font-semibold text-primary">
                      {t.rank}
                    </span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-secondary" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 sm:mt-10 italic">
          Verified scorecards displayed in our institute. Updated after every result season.
        </p>
      </div>
    </section>
  );
}
