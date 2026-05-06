import { motion } from "framer-motion";
import { FileText, Download, BookOpenCheck, NotebookPen, FlaskConical, Calculator } from "lucide-react";

const resources = [
  { title: "Physics — Class 11 Notes", type: "Handwritten Notes", size: "12 MB", icon: NotebookPen, subject: "Physics" },
  { title: "Chemistry — Mole Concept", type: "Chapter PDF", size: "4.2 MB", icon: FlaskConical, subject: "Chemistry" },
  { title: "Biology — NCERT Highlights", type: "Quick Revision", size: "8 MB", icon: BookOpenCheck, subject: "Biology" },
  { title: "Maths — Calculus Practice", type: "DPP Sheet", size: "3.1 MB", icon: Calculator, subject: "Maths" },
  { title: "NEET — Previous Year Papers", type: "PYQ Bundle", size: "22 MB", icon: FileText, subject: "NEET" },
  { title: "JEE — Formula Booklet", type: "Quick Reference", size: "2.5 MB", icon: FileText, subject: "JEE" },
];

export function Resources() {
  return (
    <section id="resources" className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-secondary uppercase">Study Material</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-semibold mt-3 text-primary">
            Notes, PDFs & <span className="italic text-gradient-gold">Practice Sheets</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            A glimpse of the printed and digital material our students get — handwritten notes, DPPs, PYQs and quick-revision booklets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group lift bg-card border border-border rounded-3xl p-5 sm:p-6 shadow-soft flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary flex items-center justify-center shadow-glow-navy shrink-0">
                  <r.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-secondary font-semibold">{r.subject}</div>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-primary mt-1 leading-snug">{r.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{r.type} · {r.size}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
                <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Sample Preview</span>
                <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  <Download className="w-4 h-4" /> Request
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs sm:text-sm text-muted-foreground">
          Full study material is shared with enrolled students. Contact us for sample copies.
        </p>
      </div>
    </section>
  );
}
