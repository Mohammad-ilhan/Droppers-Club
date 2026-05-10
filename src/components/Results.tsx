import { motion } from "framer-motion";


const toppers = [
  { name: "Aarav Sharma", initials: "AS", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 142" },
  { name: "Priya Verma", initials: "PV", exam: "JEE Adv. '25", course: "Class 12 Classroom Course", rank: "AIR 395" },
  { name: "Rohan Mehta", initials: "RM", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 247" },
  { name: "Sneha Patel", initials: "SP", exam: "JEE Adv. '25", course: "Class 12 Classroom Course", rank: "AIR 516" },
  { name: "Disha Patil", initials: "DP", exam: "CBSE 10th '25", course: "Foundation Classroom Course", rank: "99.2 %" },
  { name: "Kunal Rathore", initials: "KR", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 56" },
  { name: "Ananya Gupta", initials: "AG", exam: "JEE Mains '25", course: "Class 12 Classroom Course", rank: "AIR 1050" },
  { name: "Vikram Joshi", initials: "VJ", exam: "NEET-UG '25", course: "Dropper Classroom Course", rank: "AIR 78" },
  { name: "Isha Raghav", initials: "IR", exam: "JEE Adv. '25", course: "Class 12 Classroom Course", rank: "AIR 980" },
  { name: "Hemant K.", initials: "HK", exam: "CBSE 12th '25", course: "Foundation Classroom Course", rank: "98.4 %" },
];

function Card({ t }: { t: (typeof toppers)[number] }) {
  return (
    <article className="shrink-0 w-[160px] sm:w-[200px] lg:w-[220px] bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft">
      <div className="relative h-36 sm:h-44 bg-gradient-to-br from-muted via-muted/70 to-card flex items-center justify-center">
        <div className="absolute inset-0 dot-bg opacity-50" />
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glow-navy">
          <span className="font-display text-2xl sm:text-3xl font-semibold text-secondary">{t.initials}</span>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] sm:text-[10px] tracking-[0.18em] uppercase font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
          {t.exam}
        </div>
      </div>
      <div className="p-3 sm:p-4 text-center">
        <h3 className="font-display text-sm sm:text-base font-semibold text-primary truncate">{t.name}</h3>
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 truncate">{t.course}</p>
        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{t.exam}</p>
        <div className="mt-2 font-display text-lg sm:text-xl font-semibold text-primary">{t.rank}</div>
      </div>
    </article>
  );
}

export function Results() {
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

        {/* Auto-scrolling marquee — pause on hover */}
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex gap-3 sm:gap-5 w-max">
            {[...toppers, ...toppers].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 sm:mt-10 italic">
          Verified scorecards displayed in our institute. Updated after every result season.
        </p>
      </div>

      <style>{`
        .marquee-track {
          animation: stars-marquee 40s linear infinite;
          will-change: transform;
        }
        @keyframes stars-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (hover: hover) {
          .group:hover .marquee-track { animation-play-state: paused; }
        }
      `}</style>
    </section>
  );
}
