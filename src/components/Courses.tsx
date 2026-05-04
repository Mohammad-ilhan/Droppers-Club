import { motion } from "framer-motion";
import { Atom, Stethoscope, GraduationCap, BookOpen, FlaskConical, Brain } from "lucide-react";

const courses = [
  { title: "NEET", desc: "Complete medical entrance prep with AIIMS faculty.", icon: Stethoscope, tag: "Most Popular", color: "from-primary to-primary/40" },
  { title: "JEE Mains & Advanced", desc: "IIT-pattern coaching for serious engineers.", icon: Atom, tag: "Advanced", color: "from-secondary to-secondary/40" },
  { title: "Class 11 & 12", desc: "Board + competitive integrated program.", icon: GraduationCap, tag: "Foundation", color: "from-primary to-secondary" },
  { title: "Class 9 & 10", desc: "Build the early edge — concepts that last.", icon: BookOpen, tag: "Early Start", color: "from-secondary to-primary" },
  { title: "Foundation Olympiad", desc: "NTSE, KVPY, science olympiads.", icon: FlaskConical, tag: "Special", color: "from-primary to-primary/40" },
  { title: "Crash Courses", desc: "Last-mile revision for droppers.", icon: Brain, tag: "Limited", color: "from-secondary to-secondary/40" },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Explore Programs</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">Courses That <span className="text-gradient-brand">Shape Futures</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
              className="group relative preserve-3d"
            >
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-30 blur-2xl rounded-3xl transition-opacity" />
              <div className="relative h-full glass rounded-3xl p-7 shadow-3d overflow-hidden">
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${c.color} opacity-20 blur-2xl`} />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow-green">
                    <c.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase glass px-3 py-1 rounded-full">{c.tag}</span>
                </div>
                <h3 className="text-2xl font-bold">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.desc}</p>
                <a href="#register" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-secondary hover:gap-3 transition-all">
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
