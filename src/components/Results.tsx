import { motion } from "framer-motion";
import { Trophy, Medal, Award, TrendingUp, Star } from "lucide-react";

const metrics = [
  { n: "1200+", l: "Total Selections", i: Trophy },
  { n: "180+", l: "NEET Qualifiers", i: Medal },
  { n: "220+", l: "JEE Qualifiers", i: Award },
  { n: "98%", l: "Result Rate", i: TrendingUp },
];

const toppers = [
  { name: "Aarav Sharma", exam: "NEET 2024", rank: "AIR 142", score: "695 / 720", batch: "Dropper Batch", color: "from-primary to-primary/40" },
  { name: "Priya Verma", exam: "JEE Mains 2024", rank: "99.42 %ile", score: "AIR 891", batch: "Class 12", color: "from-secondary to-secondary/40" },
  { name: "Rohan Mehta", exam: "NEET 2024", rank: "AIR 312", score: "688 / 720", batch: "Dropper Batch", color: "from-primary to-secondary" },
  { name: "Sneha Patel", exam: "JEE 2024", rank: "98.76 %ile", score: "State Rank 47", batch: "Class 12", color: "from-secondary to-primary" },
  { name: "Kunal Rathore", exam: "NEET 2023", rank: "AIR 56", score: "705 / 720", batch: "Dropper Batch", color: "from-primary to-primary/40" },
  { name: "Ananya Gupta", exam: "JEE 2023", rank: "97.51 %ile", score: "AIR 2105", batch: "Class 12", color: "from-secondary to-secondary/40" },
  { name: "Vikram Joshi", exam: "NEET 2023", rank: "AIR 78", score: "699 / 720", batch: "Dropper Batch", color: "from-primary to-secondary" },
  { name: "Isha Raghav", exam: "JEE 2023", rank: "98.92 %ile", score: "AIR 980", batch: "Class 12", color: "from-secondary to-primary" },
];

export function Results() {
  return (
    <section id="results" className="py-10 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden relative">
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-7 sm:mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Hall of Fame</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold mt-2 sm:mt-3 text-primary">
            Our <span className="italic text-gradient-gold">Champions</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Real students. Real ranks. Year after year, Dropper's Club continues to deliver Bhopal's best results in NEET, JEE & boards.
          </p>
        </motion.div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-8 sm:mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.l}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-soft text-center"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 mx-auto rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shadow-glow-navy mb-2 sm:mb-3">
                <m.i className="w-4 h-4 sm:w-6 sm:h-6 text-secondary" />
              </div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-display font-semibold text-primary">{m.n}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-1">{m.l}</div>
            </motion.div>
          ))}
        </div>

        {/* Topper grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {toppers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="group relative lift bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft"
            >
              <div className={`h-1.5 bg-gradient-to-r ${t.color}`} />
              <div className="p-3 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-semibold text-secondary truncate">{t.exam}</div>
                    <div className="text-sm sm:text-lg font-display font-semibold text-primary leading-tight mt-1">{t.name}</div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shrink-0">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 rounded-xl sm:rounded-2xl bg-muted/60 border border-border p-2.5 sm:p-3">
                  <div className="flex items-center gap-1 text-base sm:text-xl font-display font-semibold text-primary leading-none">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-secondary" /> {t.rank}
                  </div>
                  <div className="text-[11px] sm:text-sm text-muted-foreground mt-1">{t.score}</div>
                </div>
                <div className="mt-2.5 sm:mt-3 text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-semibold text-muted-foreground">
                  {t.batch}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-10 italic">
          Toppers' photos & verified scorecards displayed in our institute. Updated after every result season.
        </p>
      </div>
    </section>
  );
}
