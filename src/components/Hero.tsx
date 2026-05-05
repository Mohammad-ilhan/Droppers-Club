import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Trophy, Users, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 dot-bg opacity-60" />
      <div className="absolute -top-40 -right-40 w-[28rem] h-[28rem] rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-xs font-medium mb-6">
            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span className="text-primary tracking-wide">Bhopal's Premier NEET & JEE Institute</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[0.98] text-primary">
            Where <span className="italic font-normal text-gradient-gold">droppers</span><br />
            become <span className="italic font-normal" style={{ fontFamily: "var(--font-script)" }}>toppers.</span>
          </h1>

          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A revolutionary coaching ecosystem built for serious aspirants. Personal mentorship, IIT &amp; AIIMS faculty, and a winning culture — all under one roof.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-7 shadow-glow-navy">
              <a href="#register">Book Free Demo <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 bg-card/60 backdrop-blur hover:bg-card">
              <a href="#courses">Explore Courses</a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "1200+", l: "Selections", i: Trophy },
              { n: "25+", l: "Expert Faculty", i: Users },
              { n: "98%", l: "Result Rate", i: Sparkles },
            ].map((s) => (
              <div key={s.l} className="bg-card/70 backdrop-blur border border-border rounded-2xl p-4 shadow-soft">
                <s.i className="w-5 h-5 text-secondary mb-2" />
                <div className="text-2xl font-display font-semibold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative lift">
            {/* Soft gold halo */}
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-[3rem]" />
            {/* Decorative offset frame */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border-2 border-primary/30" />

            <div className="relative bg-card rounded-3xl p-6 shadow-3d border border-border">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/8 to-secondary/15 border border-border flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 dot-bg opacity-50" />
                <div className="text-center p-8 relative">
                  <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-3xl text-primary-foreground float ring-4 ring-secondary/30">
                    👤
                  </div>
                  <p className="text-sm text-muted-foreground italic">[ Founder / Director Photo ]</p>
                  <p className="text-[10px] tracking-widest text-muted-foreground/70 mt-1 uppercase">Reserved space</p>
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-secondary font-semibold">Founder &amp; Director</div>
                  <div className="text-xl font-display font-semibold mt-1 text-primary">Dropper's Club</div>
                </div>
                <div className="text-right text-[11px] text-muted-foreground leading-tight">
                  Mentor to<br />1000+ Toppers
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
