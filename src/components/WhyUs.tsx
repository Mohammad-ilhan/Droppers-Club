import { motion } from "framer-motion";
import { Users, BookOpen, Target, Award, ClipboardCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

const pillars = [
  { icon: Target,          title: "Personal Mentorship",     desc: "1-on-1 mentor for every student. Monthly review with parents. No student left behind." },
  { icon: ClipboardCheck,  title: "Daily Practice & Tests",  desc: "DPPs every day, full-length tests every Sunday — exam-ready from day one." },
  { icon: Users,           title: "Small Batches",           desc: "Max 30 students per batch so every doubt is heard and every student is tracked." },
  { icon: BookOpen,        title: "Our Study Material",      desc: "In-house modules updated yearly — concise theory, tiered problems, full PYQs." },
  { icon: HeartHandshake,  title: "Doubt Clearing",          desc: "Walk-in doubt cabin + WhatsApp mentor support during and after class hours." },
  { icon: Award,           title: "Result-First Culture",    desc: "Toppers' wall, scholarship rewards, peer motivation — a winning environment." },
];

const journey = [
  { step: "01", title: "Counselling",       desc: "Career mapping with mentor & parent." },
  { step: "02", title: "Diagnostic Test",   desc: "Identify strengths, gaps, learning style." },
  { step: "03", title: "Custom Roadmap",    desc: "Personalised study plan + targets." },
  { step: "04", title: "Daily Execution",   desc: "Classes, DPPs, doubt sessions." },
  { step: "05", title: "Monthly Review",    desc: "Test analysis with mentor & parent." },
  { step: "06", title: "Selection",         desc: "NEET / JEE / Boards — every rank celebrated." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-14 sm:py-20 px-4 sm:px-6 bg-muted/40 border-y border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-2">Why Dropper's Club</p>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary">
            Why Parents Choose Us
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-gradient-gold rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl">
            A complete look at how Dropper's Club builds toppers — from the first session to the final selection list.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14 sm:mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-card hover:-translate-y-1 hover:shadow-glow-navy transition-all duration-300 flex gap-4"
            >
              {/* Gold icon circle */}
              <div className="w-10 h-10 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-display font-bold text-primary leading-snug">{p.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Journey */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-2">Student Journey</p>
          <h3 className="text-xl sm:text-3xl font-display font-bold text-primary">
            From day one to selection day.
          </h3>
          <div className="mt-2 w-12 h-[3px] bg-gradient-gold rounded-full" />
        </motion.div>

        {/* Desktop steps */}
        <div className="hidden md:grid grid-cols-6 gap-3 relative mb-14">
          <div className="absolute top-6 left-[8%] right-[8%] h-px bg-border" />
          {journey.map((j, i) => (
            <motion.div
              key={j.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary border-2 border-primary flex items-center justify-center mb-3 shadow-glow-navy">
                <span className="text-sm font-bold text-secondary">{j.step}</span>
              </div>
              <h4 className="text-xs font-bold text-primary leading-tight">{j.title}</h4>
              <p className="text-[10px] text-muted-foreground mt-1 leading-snug">{j.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile steps */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-14">
          {journey.map((j, i) => (
            <motion.div
              key={j.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-4 shadow-card relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 text-3xl font-display font-bold text-primary/8">{j.step}</div>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-3">
                <span className="text-xs font-bold text-secondary">{j.step}</span>
              </div>
              <h4 className="text-sm font-bold text-primary">{j.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">{j.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="bg-primary rounded-xl px-6 py-5 flex flex-wrap gap-4 sm:gap-8 justify-center sm:justify-start">
          {["ISO Certified Institute", "6+ Years of Excellence", "Bhopal's Trusted Brand", "Parent-Approved Mentorship"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
              {t}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
