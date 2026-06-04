import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap, Trophy, TrendingUp, Star } from "lucide-react";

const toppers = [
  { name: "Aarav Sharma",  initials: "AS", exam: "NEET-UG '25",  course: "Dropper Classroom",  rank: "AIR 142",  color: "oklch(0.55 0.22 27)"  },
  { name: "Priya Verma",   initials: "PV", exam: "JEE Adv. '25", course: "Class 12 Classroom", rank: "AIR 395",  color: "oklch(0.55 0.15 250)" },
  { name: "Rohan Mehta",   initials: "RM", exam: "NEET-UG '25",  course: "Dropper Classroom",  rank: "AIR 247",  color: "oklch(0.55 0.22 27)"  },
  { name: "Sneha Patel",   initials: "SP", exam: "JEE Adv. '25", course: "Class 12 Classroom", rank: "AIR 516",  color: "oklch(0.55 0.15 250)" },
  { name: "Disha Patil",   initials: "DP", exam: "CBSE 10th '25",course: "Foundation Course",  rank: "99.2 %",   color: "oklch(0.55 0.18 142)" },
  { name: "Kunal Rathore", initials: "KR", exam: "NEET-UG '25",  course: "Dropper Classroom",  rank: "AIR 56",   color: "oklch(0.55 0.22 27)"  },
  { name: "Ananya Gupta",  initials: "AG", exam: "JEE Mains '25",course: "Class 12 Classroom", rank: "AIR 1050", color: "oklch(0.60 0.18 300)" },
  { name: "Vikram Joshi",  initials: "VJ", exam: "NEET-UG '25",  course: "Dropper Classroom",  rank: "AIR 78",   color: "oklch(0.55 0.22 27)"  },
  { name: "Isha Raghav",   initials: "IR", exam: "JEE Adv. '25", course: "Class 12 Classroom", rank: "AIR 980",  color: "oklch(0.55 0.15 250)" },
  { name: "Hemant K.",     initials: "HK", exam: "CBSE 12th '25",course: "Foundation Course",  rank: "98.4 %",   color: "oklch(0.55 0.18 142)" },
];

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - startTime) / duration, 1);
            setCount(Math.round((1 - Math.pow(1 - p, 3)) * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

/* ─── Single topper card — same look on all devices ─── */
function TopperCard({ t }: { t: (typeof toppers)[number] }) {
  return (
    <article
      className="group relative flex-shrink-0 w-44 sm:w-52 rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:-translate-y-2 hover:shadow-glow-gold transition-all duration-300"
    >
      {/* Photo / avatar area */}
      <div
        className="relative h-40 sm:h-48 flex flex-col items-center justify-center gap-2 overflow-hidden"
        style={{ background: `linear-gradient(145deg, oklch(0.18 0.05 260), oklch(0.22 0.06 260))` }}
      >
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(${t.color} 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />
        {/* Colour glow blob */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 60%, ${t.color}25, transparent 65%)` }}
        />

        {/* Avatar initials — placeholder for real photo */}
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, oklch(0.28 0.06 260), ${t.color}60)`,
            boxShadow: `0 0 0 3px ${t.color}35, 0 0 20px ${t.color}20`,
          }}
        >
          <span className="font-display text-2xl sm:text-3xl font-bold text-white">{t.initials}</span>
        </div>

        {/* Exam badge — top left */}
        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur border border-white/15 text-[9px] sm:text-[10px] text-white/85 font-semibold tracking-wider uppercase">
          {t.exam}
        </div>

        {/* Live 2025 dot — top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
          <span className="text-[9px] text-white/50 font-medium">2025</span>
        </div>
      </div>

      {/* Info panel */}
      <div className="px-3 py-3 sm:px-4 sm:py-4 text-center space-y-1">
        <h3 className="font-display text-sm sm:text-[15px] font-bold text-primary leading-tight truncate">
          {t.name}
        </h3>
        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{t.course}</p>

        {/* Rank pill */}
        <div
          className="mt-2 mx-auto w-full py-1.5 sm:py-2 rounded-xl font-display font-bold text-base sm:text-xl text-center"
          style={{
            background: `linear-gradient(135deg, oklch(0.20 0.06 260), oklch(0.25 0.07 260))`,
            color: t.color,
            boxShadow: `inset 0 0 0 1px ${t.color}30`,
          }}
        >
          {t.rank}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
      />
    </article>
  );
}

/* ─── Stats bar ─── */
const STATS = [
  { n: 1200, s: "+", label: "Total Selections", icon: Trophy    },
  { n: 98,   s: "%", label: "Result Rate",      icon: TrendingUp },
  { n: 6,    s: "+", label: "Years of Trust",   icon: Star       },
];

export function Results() {
  return (
    <section id="results" className="py-10 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden relative">
      <div className="absolute inset-0 dot-bg opacity-20" />

      {/* ── Stats banner ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mb-10 sm:mb-16 overflow-hidden rounded-2xl sm:rounded-3xl mx-auto max-w-4xl"
        style={{ background: "linear-gradient(135deg, oklch(0.18 0.05 260), oklch(0.25 0.08 260))" }}
      >

        <div className="relative grid grid-cols-3 divide-x divide-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-5 sm:py-8 px-3 sm:px-6 text-center gap-1 sm:gap-2">
              <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-secondary/70 mb-0.5" />
              <div className="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-secondary leading-none">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="footer-top-border" />
      </motion.div>

      {/* ── Section heading ── */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/25 mb-4">
            <Zap className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-widest">
              Hall of Fame · Latest Results 2025
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-primary">
            Meet our <span className="italic text-gradient-gold">stars</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Real students. Real ranks. Year after year, Dropper's Club delivers Bhopal's best results.
          </p>
        </motion.div>

        {/* ── Marquee — consistent card size across all devices ── */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          {/* Row 1 — left to right */}
          <div className="marquee-row-1 flex gap-3 sm:gap-4 w-max mb-3 sm:mb-4">
            {[...toppers, ...toppers].map((t, i) => (
              <TopperCard key={`r1-${i}`} t={t} />
            ))}
          </div>
          {/* Row 2 — right to left (offset) */}
          <div className="marquee-row-2 flex gap-3 sm:gap-4 w-max">
            {[...toppers.slice(5), ...toppers, ...toppers.slice(0, 5)].map((t, i) => (
              <TopperCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>

        <p className="text-center text-[11px] sm:text-xs text-muted-foreground mt-6 sm:mt-10 italic">
          Verified scorecards displayed in our institute. Real photos will be added by client.
        </p>
      </div>

      <style>{`
        .marquee-row-1 {
          animation: marquee-ltr 36s linear infinite;
          will-change: transform;
        }
        .marquee-row-2 {
          animation: marquee-rtl 40s linear infinite;
          will-change: transform;
        }
        @keyframes marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (hover: hover) {
          .marquee-row-1:hover,
          .marquee-row-2:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
