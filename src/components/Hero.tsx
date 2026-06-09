import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, MapPin, GraduationCap } from "lucide-react";

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
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="counter-wrap tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const QUICK_STATS = [
  { v: "98%", label: "Success Rate" },
  { v: "1:15", label: "Faculty Ratio" },
  { v: "Daily", label: "Doubt Support" },
  { v: "Smart", label: "Hybrid Labs" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-hero"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -left-20 w-[420px] h-[420px] rounded-full bg-primary/30 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {/* ─── LEFT: Hero message ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-7 flex flex-col justify-center gap-7 sm:gap-8"
          >
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                India's Premium NEET Accelerator
              </span>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
                Your <span className="text-secondary">Bridge</span> to Medical Excellence.
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                We transform aspiration into achievement with rigorous curriculum,
                expert faculty, and personalized mentorship.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-primary hover:bg-primary/90 transition-all rounded-2xl font-bold text-sm sm:text-base text-primary-foreground shadow-glow-navy hover:-translate-y-0.5"
              >
                Register Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 transition-all border border-border rounded-2xl font-bold text-sm sm:text-base text-foreground backdrop-blur-sm"
              >
                View Courses
              </a>
            </div>
          </motion.div>

          {/* ─── RIGHT: Bento grid ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {/* Stats card */}
            <div className="bg-card/60 p-5 sm:p-6 rounded-3xl border border-border backdrop-blur-xl flex flex-col justify-between group hover:border-secondary/50 transition-colors min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                  <Counter to={1200} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-bold mt-1">
                  Total Selections
                </div>
              </div>
            </div>

            {/* AIIMS small card */}
            <div className="bg-white/5 p-5 sm:p-6 rounded-3xl border border-border backdrop-blur-xl flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors min-h-[160px]">
              <GraduationCap className="w-7 h-7 text-secondary mb-2" />
              <div className="text-sm font-bold text-foreground mb-1">AIIMS</div>
              <div className="text-[10px] text-muted-foreground">Specialized Training</div>
            </div>

            {/* Meet our stars (wide) */}
            <a
              href="#results"
              className="col-span-2 bg-primary p-5 sm:p-6 rounded-3xl relative overflow-hidden group block hover:shadow-glow-navy transition-shadow"
            >
              <div className="absolute top-4 right-4">
                <span className="text-[10px] bg-white/20 px-2 py-1 rounded text-white font-bold tracking-wider">
                  NEET 2025
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold mb-4 text-primary-foreground">
                Meet Our Stars
              </h3>
              <div className="flex -space-x-3 overflow-hidden">
                <div className="inline-block h-11 w-11 rounded-full ring-4 ring-primary bg-secondary/60" />
                <div className="inline-block h-11 w-11 rounded-full ring-4 ring-primary bg-secondary/40" />
                <div className="inline-block h-11 w-11 rounded-full ring-4 ring-primary bg-secondary/80" />
                <div className="inline-flex items-center justify-center h-11 w-11 rounded-full ring-4 ring-primary bg-secondary text-[10px] font-bold text-secondary-foreground">
                  +50
                </div>
              </div>
              <p className="mt-4 text-xs text-primary-foreground/80 italic underline underline-offset-2">
                View rank holders directory
              </p>
            </a>

            {/* Location/Contact (wide) */}
            <a
              href="#contact"
              className="col-span-2 border border-border bg-white/5 p-5 sm:p-6 rounded-3xl flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <div>
                <div className="text-[10px] sm:text-xs text-secondary font-bold uppercase tracking-widest">
                  Main Center
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground mt-0.5">
                  Kolar Road, Bhopal
                </div>
              </div>
              <div className="p-3 bg-secondary text-secondary-foreground rounded-2xl hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Quick stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-7 sm:py-8 border-t border-border"
        >
          {QUICK_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-xl sm:text-2xl font-bold text-secondary">
                {s.v}
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
