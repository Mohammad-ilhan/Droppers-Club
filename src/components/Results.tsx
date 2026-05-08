import { motion } from "framer-motion";

const results = Array.from({ length: 8 }).map((_, i) => ({
  name: `Topper ${i + 1}`,
  rank: ["AIR 142 NEET", "AIR 891 JEE", "AIR 56 NEET", "AIR 1240 JEE", "AIR 78 NEET", "AIR 2105 JEE", "AIR 312 NEET", "AIR 980 JEE"][i],
  score: ["695/720", "99.2%ile", "705/720", "98.7%ile", "699/720", "97.5%ile", "688/720", "98.9%ile"][i],
}));

export function Results() {
  const all = [...results, ...results];
  return (
    <section id="results" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Hall of Fame</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">Our <span className="text-gradient-brand">Champions</span></h2>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="marquee gap-6">
          {all.map((r, i) => (
            <div key={i} className="w-72 shrink-0 glass rounded-3xl p-5 shadow-3d">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 mb-4 flex items-center justify-center text-5xl">🏆</div>
              <div className="text-xs uppercase tracking-widest text-secondary">{r.rank}</div>
              <div className="text-xl font-bold mt-1">{r.name}</div>
              <div className="text-sm text-muted-foreground mt-1">Score: {r.score}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
