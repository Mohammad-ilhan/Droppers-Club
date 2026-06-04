import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Trophy, Users, Star, TrendingUp, CheckCircle2 } from "lucide-react";

/* ─── Animated counter ─── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
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
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref} className="counter-wrap tabular-nums">{count}{suffix}</span>;
}

/* ─── Typing effect ─── */
const WORDS = ["NEET Toppers", "JEE Champions", "Board Rankers", "Future Doctors", "IIT Engineers"];
function TypingWord() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length)
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    else if (!deleting && displayed.length === word.length)
      timeout = setTimeout(() => setDeleting(true), 1600);
    else if (deleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    else { setDeleting(false); setWordIdx((p) => (p + 1) % WORDS.length); }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);
  return <span className="text-gradient-gold italic typing-cursor">{displayed}</span>;
}

const STATS = [
  { n: 1200, suffix: "+", label: "Selections", icon: Trophy },
  { n: 25,   suffix: "+", label: "Expert Faculty", icon: Users },
  { n: 98,   suffix: "%", label: "Result Rate", icon: Sparkles },
];

const FEATURES = [
  "Personal mentor assigned within 24 hrs",
  "Small batches — max 30 students",
  "Daily doubt-clearing sessions",
  "Weekly full mock tests",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-bg opacity-60" />
      {/* Diagonal stripe accent top-right */}
      <div className="absolute top-0 right-0 w-1/2 h-full stripe-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-20 lg:pb-28 grid md:grid-cols-12 gap-8 lg:gap-16 items-center">

        {/* ─── Left: Text ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/8 text-xs font-semibold mb-5 sm:mb-7"
          >
            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span className="text-primary tracking-wide">Bhopal's Most Trusted NEET · JEE · Foundation Coaching</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.08]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block"
            >
              Where <span className="shimmer-gold italic font-normal">droppers</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="block"
            >
              become <span className="text-gradient-brand">toppers.</span>
            </motion.span>
          </h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 sm:mt-5 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Personal mentorship · experienced faculty · a winning culture — crafting{" "}
            <TypingWord />
          </motion.p>

          {/* Feature checklist */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                {f}
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-7 sm:mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-glow-navy hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Register Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-secondary text-secondary font-semibold text-sm hover:bg-secondary/8 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Trophy className="w-4 h-4" />
              See Our Results
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-8 sm:mt-12 flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-border"
          >
            {STATS.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-primary leading-none">
                    <Counter to={s.n} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── Right: Card ─── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5"
        >
          <div className="relative max-w-xs sm:max-w-sm mx-auto md:max-w-none">
            {/* Gold accent border card */}
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-2xl border-2 border-secondary/20" />
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary" />

            <div className="relative bg-white rounded-xl shadow-card border border-border overflow-hidden">
              {/* Navy header strip */}
              <div className="bg-primary px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-[0.3em] text-secondary/80 uppercase font-semibold">Dropper's Club</div>
                  <div className="text-white font-display text-lg font-semibold mt-0.5">Admission Card</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
              </div>

              {/* Photo area */}
              <div className="aspect-[4/3] bg-muted flex items-center justify-center relative overflow-hidden border-b border-border">
                <div className="absolute inset-0 dot-bg opacity-50" />
                <div className="text-center relative px-6">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 border-2 border-primary/20 mx-auto mb-3 flex items-center justify-center float">
                    <span className="text-3xl sm:text-4xl">👤</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Director / Founder</p>
                  <div className="mt-1.5 text-[10px] text-muted-foreground/60 italic">Client photo reserved</div>
                </div>
              </div>

              {/* Info rows */}
              <div className="p-4 space-y-2.5">
                {[
                  { label: "Institute", value: "Dropper's Club, Bhopal" },
                  { label: "Courses", value: "NEET · JEE · Foundation" },
                  { label: "Session", value: "2025 — 2026" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between text-sm border-b border-dashed border-border/60 pb-2 last:border-0 last:pb-0">
                    <span className="text-muted-foreground text-xs uppercase tracking-wider">{row.label}</span>
                    <span className="font-semibold text-primary text-xs">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Bottom gold strip */}
              <div className="h-2 bg-gradient-gold" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="section-divider" />
    </section>
  );
}
