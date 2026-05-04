import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Trophy, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span>Bhopal's Premier NEET & JEE Coaching</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
            Where <span className="text-gradient-brand">Droppers</span><br />
            Become <span className="italic" style={{ fontFamily: "var(--font-script)" }}>Toppers.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            A revolutionary coaching ecosystem built for serious aspirants. Personal mentorship, IIT/AIIMS faculty, and a winning culture — all under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground font-semibold hover:opacity-90 shadow-glow-orange">
              <a href="#register">Book Free Demo <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-card/40 backdrop-blur">
              <a href="#courses">Explore Courses</a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "1200+", l: "Selections", i: Trophy },
              { n: "25+", l: "Faculty", i: Users },
              { n: "98%", l: "Result Rate", i: Sparkles },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <s.i className="w-5 h-5 text-secondary mb-2" />
                <div className="text-2xl font-bold">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
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
            <div className="absolute -inset-4 bg-gradient-brand opacity-25 blur-2xl rounded-3xl" />
            <div className="relative glass rounded-3xl p-6 shadow-3d border border-border/60">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-brand mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary-foreground float">
                    👤
                  </div>
                  <p className="text-sm text-muted-foreground italic">[ Owner / Director Photo ]</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Reserved space</p>
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-secondary">Founder & Director</div>
                  <div className="text-xl font-bold mt-1">Dropper's Club</div>
                </div>
                <div className="text-right text-xs text-muted-foreground">
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
