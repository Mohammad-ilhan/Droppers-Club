import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Trophy, Users, Star, Quote } from "lucide-react";

const heroStars = [
  { name: "Aarav Sharma", initials: "AS", exam: "NEET-UG '25", rank: "AIR 142" },
  { name: "Priya Verma", initials: "PV", exam: "JEE Adv. '25", rank: "AIR 395" },
  { name: "Kunal Rathore", initials: "KR", exam: "NEET-UG '25", rank: "AIR 56" },
  { name: "Disha Patil", initials: "DP", exam: "CBSE 10th '25", rank: "99.2 %" },
  { name: "Vikram Joshi", initials: "VJ", exam: "NEET-UG '25", rank: "AIR 78" },
  { name: "Isha Raghav", initials: "IR", exam: "JEE Adv. '25", rank: "AIR 980" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 dot-bg opacity-60" />
      <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-16 lg:pt-20 pb-10 sm:pb-24 lg:pb-32 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-[10px] sm:text-xs font-medium mb-4 sm:mb-6">
            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span className="text-primary tracking-wide">Bhopal's Most Trusted Coaching for NEET, JEE & Foundation</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-semibold leading-[1.05] sm:leading-[0.98] text-primary">
            Where <span className="italic font-normal text-gradient-gold">droppers</span><br />
            become <span className="italic font-normal" style={{ fontFamily: "var(--font-script)" }}>toppers.</span>
          </h1>

          <div className="mt-5 sm:mt-7 flex items-start gap-3 max-w-xl">
            <Quote className="w-5 h-5 text-secondary shrink-0 mt-1" />
            <p
              className="text-lg sm:text-2xl md:text-[1.7rem] leading-snug text-primary"
              style={{ fontFamily: "var(--font-script)" }}
            >
              The connecting link between Students &amp; Success.
            </p>
          </div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            Personal mentorship, experienced &amp; dedicated teachers, and a winning study culture — all under one roof.
          </p>

          <div className="mt-6 sm:mt-9 flex flex-wrap gap-3 sm:gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-7 shadow-glow-navy">
              <a href="#register">Book Free Demo <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 bg-card/60 backdrop-blur hover:bg-card">
              <a href="#courses">Explore Courses</a>
            </Button>
          </div>

          <div className="mt-7 sm:mt-14 grid grid-cols-3 gap-2.5 sm:gap-6 max-w-md">
            {[
              { n: "1200+", l: "Selections", i: Trophy },
              { n: "25+", l: "Expert Faculty", i: Users },
              { n: "98%", l: "Result Rate", i: Sparkles },
            ].map((s) => (
              <div key={s.l} className="bg-card/70 backdrop-blur border border-border rounded-2xl p-3 sm:p-4 shadow-soft">
                <s.i className="w-4 h-4 sm:w-5 sm:h-5 text-secondary mb-1.5 sm:mb-2" />
                <div className="text-lg sm:text-2xl font-display font-semibold text-primary">{s.n}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-[3rem]" />
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-primary/30" />

            <div className="relative bg-card rounded-3xl p-6 shadow-3d border border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-secondary font-semibold">Hall of Fame</div>
                  <div className="text-xl font-display font-semibold mt-1 text-primary">Our Stars</div>
                </div>
                <div className="text-right text-[11px] text-muted-foreground leading-tight">
                  Verified<br />Toppers
                </div>
              </div>

              <div className="group relative h-[480px] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted/40 to-card [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <div className="hero-stars-track flex flex-col gap-3 p-3 group-hover:[animation-play-state:paused]">
                  {[...heroStars, ...heroStars].map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-card border border-border rounded-2xl p-3 shadow-soft"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glow-navy">
                        <span className="font-display text-sm font-semibold text-secondary">{s.initials}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[9px] tracking-[0.18em] uppercase font-semibold text-secondary truncate">{s.exam}</div>
                        <div className="font-display text-sm font-semibold text-primary truncate">{s.name}</div>
                      </div>
                      <div className="font-display text-base font-semibold text-primary whitespace-nowrap">{s.rank}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style>{`
            .hero-stars-track {
              animation: hero-stars-scroll 22s linear infinite;
            }
            @keyframes hero-stars-scroll {
              from { transform: translateY(0); }
              to { transform: translateY(-50%); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}
