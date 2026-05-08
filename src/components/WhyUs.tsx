import { motion } from "framer-motion";
import {
  Users, BookOpen, Target, Award,
  ClipboardCheck, HeartHandshake,
} from "lucide-react";

const pillars = [
  { icon: Target, title: "Personal Mentorship", desc: "1-on-1 mentor assigned to every student. Monthly performance review with parents." },
  { icon: ClipboardCheck, title: "Daily Practice & Tests", desc: "DPPs every day, full-length tests every week — exam-ready from day one." },
  { icon: Users, title: "Small Batch Sizes", desc: "Capped batches so every doubt is heard and every student is tracked." },
  { icon: BookOpen, title: "Printed Study Material", desc: "Inhouse modules updated yearly — concise theory, tiered problems, PYQs." },
  { icon: HeartHandshake, title: "Doubt Clearing 24×7", desc: "Walk-in doubt cabins + WhatsApp support after class hours." },
  { icon: Award, title: "Result-First Culture", desc: "Toppers' wall, scholarship rewards, and a winning peer environment." },
];


const journey = [
  { step: "01", title: "Counselling", desc: "Career mapping with mentor & parent." },
  { step: "02", title: "Diagnostic Test", desc: "Identify strengths, gaps, learning style." },
  { step: "03", title: "Custom Roadmap", desc: "Personalised study plan + targets." },
  { step: "04", title: "Daily Execution", desc: "Classes, DPPs, doubt sessions." },
  { step: "05", title: "Weekly Review", desc: "Test analysis with mentor & parent." },
  { step: "06", title: "Selection 🎯", desc: "NEET / JEE / Boards — every milestone celebrated." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Everything You Need · One Roof</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold mt-3 text-primary">
            Why Parents <span className="italic text-gradient-gold">Choose Us</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A complete look at how Dropper's Club builds toppers — from the first counselling session to the final selection list.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="lift bg-card border border-border rounded-3xl p-6 shadow-soft"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-glow-navy mb-4">
                <p.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey timeline */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] text-secondary uppercase">Student Journey</p>
            <h3 className="text-3xl md:text-4xl font-display font-semibold mt-2 text-primary">
              From day one to <span className="italic text-gradient-gold">selection day</span>.
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {journey.map((j, i) => (
              <motion.div
                key={j.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative lift bg-card border border-border rounded-3xl p-6 shadow-soft"
              >
                <div className="absolute top-5 right-5 font-display text-5xl font-semibold text-secondary/30">
                  {j.step}
                </div>
                <h4 className="text-lg font-display font-semibold text-primary">{j.title}</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed pr-12">{j.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
