import { motion } from "framer-motion";

const faculty = [
  { name: "Faculty 1", subject: "Physics", qual: "M.Sc, IIT Delhi" },
  { name: "Faculty 2", subject: "Chemistry", qual: "Ph.D, IIT Bombay" },
  { name: "Faculty 3", subject: "Biology", qual: "MBBS, AIIMS" },
  { name: "Faculty 4", subject: "Mathematics", qual: "M.Sc, IIT Kanpur" },
  { name: "Faculty 5", subject: "Organic Chem", qual: "M.Sc, IISc" },
  { name: "Faculty 6", subject: "Zoology", qual: "M.Sc, BHU" },
];

export function Faculty() {
  return (
    <section id="faculty" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/40 to-transparent" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Meet the Mentors</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">Faculty That <span className="text-gradient-brand">Make Toppers</span></h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">A handpicked team from IITs, AIIMS and India's premier institutions — committed to one mission: your success.</p>
        </motion.div>

        {/* Group photo showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 perspective-1000"
        >
          <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-[3rem]" />
          <div className="relative glass rounded-[2.5rem] p-4 md:p-6 shadow-3d">
            <div className="aspect-[16/8] rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/15 border border-border flex items-center justify-center">
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

        {/* Individual cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass shadow-3d aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
                  🎓
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-xs text-secondary tracking-widest uppercase">{f.subject}</div>
                  <div className="font-bold mt-1">{f.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{f.qual}</div>
                </div>
                <div className="absolute inset-0 ring-2 ring-secondary/0 group-hover:ring-secondary/60 rounded-2xl transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
