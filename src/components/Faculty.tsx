import { motion } from "framer-motion";

const faculty = [
  { name: "Dr. R. Sharma", subject: "Physics", qual: "M.Sc, IIT Delhi · 12+ yrs" },
  { name: "Dr. P. Kapoor", subject: "Chemistry", qual: "Ph.D, IIT Bombay · 10+ yrs" },
  { name: "Dr. A. Verma", subject: "Biology", qual: "MBBS, AIIMS · 8+ yrs" },
  { name: "Prof. S. Joshi", subject: "Mathematics", qual: "M.Sc, IIT Kanpur · 14+ yrs" },
  { name: "Dr. N. Iyer", subject: "Organic Chem", qual: "M.Sc, IISc Bangalore · 9+ yrs" },
  { name: "Dr. M. Rao", subject: "Zoology", qual: "M.Sc, BHU · 11+ yrs" },
];

export function Faculty() {
  return (
    <section id="faculty" className="relative py-10 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-7 sm:mb-14 lg:mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Meet the Mentors</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 sm:mt-3">Faculty That <span className="text-gradient-brand">Make Toppers</span></h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">Experienced teachers and personal mentors committed to one mission: your success.</p>
        </motion.div>

        {/* Group photo showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-10 sm:mb-20"
        >
          <div className="absolute -inset-6 bg-gradient-brand opacity-15 blur-3xl rounded-[3rem]" />
          <div className="relative glass rounded-[2.5rem] p-4 md:p-6 shadow-3d">
            <div className="aspect-[16/8] rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-3">👥</div>
                <p className="text-lg font-semibold">[ Group Photo of All Faculty ]</p>
                <p className="text-sm text-muted-foreground mt-2">Reserved space — coaching to provide group photo</p>
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-brand text-primary-foreground text-xs font-bold tracking-widest uppercase shadow-glow-orange">
              The Dream Team
            </div>
          </div>
        </motion.div>

        {/* Individual cards — qualifications always visible */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="lift glass rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-3d flex gap-2.5 sm:gap-5 items-center"
            >
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-gradient-brand rounded-3xl blur opacity-40" />
                <div className="relative w-12 h-14 sm:w-24 sm:h-28 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 border border-border flex items-center justify-center text-xl sm:text-3xl">
                  🎓
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.25em] uppercase text-secondary font-semibold truncate">{f.subject}</div>
                <div className="text-sm sm:text-lg font-bold mt-0.5 sm:mt-1 truncate">{f.name}</div>
                <div className="text-[11px] sm:text-sm text-muted-foreground mt-1 sm:mt-1.5 leading-snug">{f.qual}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
