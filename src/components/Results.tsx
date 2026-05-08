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
          initial={{ opacity: 0, y: 20 }}
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
              initial={{ opacity: 0, y: 20 }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {toppers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.06 }}
              className="group relative lift bg-card border border-border rounded-3xl overflow-hidden shadow-soft"
            >
              {/* photo space */}
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${t.color} opacity-90`}>
                <div className="absolute inset-0 dot-bg opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-card/80 backdrop-blur ring-4 ring-secondary/30 flex items-center justify-center text-3xl">
                    <GraduationCap className="w-9 h-9 text-primary" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/95 backdrop-blur text-[9px] tracking-[0.25em] uppercase font-semibold text-primary border border-border">
                  {t.exam}
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold tracking-wider uppercase shadow-soft">
                  <Star className="w-3 h-3 fill-current" /> {t.rank}
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <div className="text-base sm:text-lg font-display font-semibold text-primary truncate">{t.name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t.score}</div>
                <div className="mt-3 inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-semibold text-secondary">
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
