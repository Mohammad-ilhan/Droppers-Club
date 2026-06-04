import { motion } from "framer-motion";
import { Atom, Stethoscope, GraduationCap, BookOpen, FlaskConical, Brain, ArrowRight, Clock, Users } from "lucide-react";

const courses = [
  {
    title: "NEET Preparation",
    desc: "Complete medical entrance prep — Physics, Chemistry & Biology with AIIMS/NEET pattern practice.",
    icon: Stethoscope,
    tag: "Medical",
    accent: "#c0392b",
    duration: "1 Year",
    batch: "30 Students",
  },
  {
    title: "JEE Mains & Advanced",
    desc: "Deep PCM problem solving for serious engineering aspirants. JEE pattern DPPs from day one.",
    icon: Atom,
    tag: "Engineering",
    accent: "#2980b9",
    duration: "1 Year",
    batch: "30 Students",
  },
  {
    title: "Class 11 & 12",
    desc: "Board + competitive integrated program. Score high in boards while cracking NEET/JEE.",
    icon: GraduationCap,
    tag: "Integrated",
    accent: "#d4a017",
    duration: "2 Years",
    batch: "35 Students",
  },
  {
    title: "Foundation (Class 9 & 10)",
    desc: "Build strong conceptual roots early. The edge that matters when it counts most.",
    icon: BookOpen,
    tag: "Foundation",
    accent: "#27ae60",
    duration: "2 Years",
    batch: "35 Students",
  },
  {
    title: "Olympiad Training",
    desc: "NTSE, KVPY & Science Olympiad prep. Compete nationally, learn beyond the syllabus.",
    icon: FlaskConical,
    tag: "Advanced",
    accent: "#8e44ad",
    duration: "6 Months",
    batch: "25 Students",
  },
  {
    title: "Dropper Crash Course",
    desc: "Intensive last-mile revision for droppers. Targeted, fast-paced, results-driven.",
    icon: Brain,
    tag: "Dropper",
    accent: "#e67e22",
    duration: "6 Months",
    batch: "25 Students",
  },
];

export function Courses() {
  return (
    <section id="courses" className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-2">Our Programs</p>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary">
            Courses That Shape Futures
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-gradient-gold rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl">
            Purpose-built programs for every stage — from foundation to dropper, each course is crafted for one goal: your result.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group bg-white border border-border rounded-xl overflow-hidden shadow-card hover:shadow-glow-navy hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent bar */}
              <div className="h-[3px]" style={{ background: c.accent }} />

              <div className="p-5 sm:p-6">
                {/* Tag + Icon row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}30` }}
                  >
                    <c.icon className="w-5 h-5" style={{ color: c.accent }} />
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ color: c.accent, background: `${c.accent}12`, border: `1px solid ${c.accent}25` }}
                  >
                    {c.tag}
                  </span>
                </div>

                {/* Title & desc */}
                <h3 className="text-base sm:text-lg font-display font-bold text-primary leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>

                {/* Meta row */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    {c.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="w-3.5 h-3.5 text-secondary" />
                    Max {c.batch}
                  </div>
                  <a
                    href="#register"
                    className="ml-auto flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors group/link"
                  >
                    Enroll
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
