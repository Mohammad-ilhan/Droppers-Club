import { motion } from "framer-motion";
import { Atom, Stethoscope, GraduationCap, BookOpen, FlaskConical, Brain } from "lucide-react";

const courses = [
  { title: "NEET", desc: "Complete medical entrance prep with expert guidance.", icon: Stethoscope, color: "from-primary to-primary/40" },
  { title: "JEE Mains", desc: "Focused coaching for serious engineering aspirants.", icon: Atom, color: "from-secondary to-secondary/40" },
  { title: "Class 11 & 12", desc: "Board + competitive integrated program.", icon: GraduationCap, color: "from-primary to-secondary" },
  { title: "Class 9 & 10", desc: "Build the early edge — concepts that last.", icon: BookOpen, color: "from-secondary to-primary" },
  { title: "Foundation Olympiad", desc: "NTSE, KVPY, science olympiads.", icon: FlaskConical, color: "from-primary to-primary/40" },
  { title: "Crash Courses", desc: "Last-mile revision for droppers.", icon: Brain, color: "from-secondary to-secondary/40" },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-10 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-7 sm:mb-14 lg:mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Explore Programs</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 sm:mt-3">Courses That <span className="text-gradient-brand">Shape Futures</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative lift"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-15 blur-2xl rounded-3xl transition-opacity" />
              <div className="relative h-full bg-card rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 shadow-soft overflow-hidden border border-border">
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${c.color} opacity-15 blur-2xl`} />
                <div className="flex items-start mb-3 sm:mb-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shadow-glow-navy">
                    <c.icon className="w-5 h-5 sm:w-7 sm:h-7 text-secondary" />
                  </div>
                </div>
                <h3 className="text-base sm:text-2xl font-display font-semibold text-primary leading-tight">{c.title}</h3>
                <p className="text-[11px] sm:text-sm text-muted-foreground mt-1.5 sm:mt-2 leading-snug sm:leading-relaxed">{c.desc}</p>
                <a href="#register" className="inline-flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-6 text-xs sm:text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Learn more <span className="text-secondary">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
