import { motion } from "framer-motion";
import { FileText, Download, BookOpenCheck, NotebookPen, FlaskConical, Calculator, Lock } from "lucide-react";

const resources = [
  { title: "Physics — Class 11 Notes",    type: "Handwritten Notes", size: "12 MB",  icon: NotebookPen,   subject: "Physics",   color: "#2980b9", locked: false },
  { title: "Chemistry — Mole Concept",    type: "Chapter PDF",       size: "4.2 MB", icon: FlaskConical,  subject: "Chemistry", color: "#27ae60", locked: false },
  { title: "Biology — NCERT Highlights",  type: "Quick Revision",    size: "8 MB",   icon: BookOpenCheck, subject: "Biology",   color: "#c0392b", locked: false },
  { title: "Maths — Calculus Practice",   type: "DPP Sheet",         size: "3.1 MB", icon: Calculator,    subject: "Maths",     color: "#8e44ad", locked: true  },
  { title: "NEET — Previous Year Papers", type: "PYQ Bundle",        size: "22 MB",  icon: FileText,      subject: "NEET",      color: "#c0392b", locked: true  },
  { title: "JEE — Formula Booklet",       type: "Quick Reference",   size: "2.5 MB", icon: FileText,      subject: "JEE",       color: "#2980b9", locked: true  },
];

export function Resources() {
  return (
    <section id="resources" className="py-14 sm:py-20 px-4 sm:px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-2">Study Material</p>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary">
            Notes, PDFs & Practice Sheets
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-gradient-gold rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl">
            A glimpse of the material our students get — handwritten notes, DPPs, PYQs and quick-revision booklets.
          </p>
        </motion.div>

        {/* Resource list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-glow-navy transition-all duration-300"
              style={{ borderLeft: `3px solid ${r.color}` }}
            >
              <div className="p-4 sm:p-5 flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${r.color}15`, border: `1px solid ${r.color}25` }}
                >
                  <r.icon className="w-5 h-5" style={{ color: r.color }} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: r.color }}
                  >
                    {r.subject}
                  </span>
                  <h3 className="text-sm font-bold text-primary leading-snug mt-0.5 truncate">{r.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{r.type} · {r.size}</p>
                </div>
              </div>

              {/* Footer row */}
              <div className="px-4 sm:px-5 pb-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                  {r.locked ? "Enrolled students only" : "Free sample"}
                </span>
                {r.locked ? (
                  <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Enroll to access</span>
                  </div>
                ) : (
                  <button className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors">
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-7 sm:mt-10 text-center text-xs sm:text-sm text-muted-foreground">
          Free samples above. Full study material — notes, DPPs & PYQs — provided to all enrolled students.
        </p>
      </div>
    </section>
  );
}
