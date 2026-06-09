import { motion } from "framer-motion";
import facultyGroupImg from "@/assets/faculty-group.png";

const faculty = [
  {
    name: "Dr. R. Sharma",
    subject: "Physics",
    qual: "M.Sc, IIT Delhi",
    exp: "12+ yrs",
    bio: "Specialises in Electrodynamics & Modern Physics. Known for making complex concepts crystal-clear.",
    subjectColor: "oklch(0.55 0.15 250)",
    emoji: "⚛️",
  },
  {
    name: "Dr. P. Kapoor",
    subject: "Chemistry",
    qual: "Ph.D, IIT Bombay",
    exp: "10+ yrs",
    bio: "Expert in Organic & Inorganic Chemistry. Hundreds of NEET selections under his guidance.",
    subjectColor: "oklch(0.55 0.18 142)",
    emoji: "🧪",
  },
  {
    name: "Dr. A. Verma",
    subject: "Biology",
    qual: "MBBS, AIIMS",
    exp: "8+ yrs",
    bio: "Real clinical experience combined with teaching excellence. NEET Biology made mastery.",
    subjectColor: "oklch(0.55 0.22 27)",
    emoji: "🔬",
  },
  {
    name: "Prof. S. Joshi",
    subject: "Mathematics",
    qual: "M.Sc, IIT Kanpur",
    exp: "14+ yrs",
    bio: "JEE Advanced specialist. Known for elegant shortcuts and building mathematical intuition.",
    subjectColor: "oklch(0.60 0.18 300)",
    emoji: "📐",
  },
  {
    name: "Dr. N. Iyer",
    subject: "Organic Chem",
    qual: "M.Sc, IISc Bangalore",
    exp: "9+ yrs",
    bio: "Master of reaction mechanisms. Students call her 'the reason they cracked Chemistry'.",
    subjectColor: "oklch(0.74 0.12 75)",
    emoji: "⚗️",
  },
  {
    name: "Dr. M. Rao",
    subject: "Zoology",
    qual: "M.Sc, BHU",
    exp: "11+ yrs",
    bio: "Deep expertise in Human Physiology & Genetics. Consistent top NEET results in Biology.",
    subjectColor: "oklch(0.50 0.15 340)",
    emoji: "🦠",
  },
];

/* ─── Flip card ─── */
function FacultyCard({ f, i }: { f: (typeof faculty)[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flip-card h-44 sm:h-52 lg:h-56 rounded-2xl sm:rounded-3xl"
    >
      <div className="flip-card-inner rounded-2xl sm:rounded-3xl">
        {/* ── Front ── */}
        <div className="flip-card-front glass rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-3d flex gap-3 sm:gap-4 items-center border border-border">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-1 rounded-xl sm:rounded-2xl blur opacity-40"
              style={{ background: `radial-gradient(circle, ${f.subjectColor}, transparent 70%)` }}
            />
            {/* Individual photo placeholder */}
            <div className="relative w-14 h-16 sm:w-20 sm:h-24 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border flex flex-col items-center justify-center overflow-hidden gap-1">
              <div className="text-xl sm:text-3xl">{f.emoji}</div>
              <div className="text-[7px] sm:text-[8px] text-muted-foreground/50 uppercase tracking-wider text-center leading-tight px-1">
                Client<br />Photo
              </div>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <div
              className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold truncate"
              style={{ color: f.subjectColor }}
            >
              {f.subject}
            </div>
            <div className="text-sm sm:text-base font-display font-bold mt-0.5 text-foreground truncate leading-tight">{f.name}</div>
            <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-snug">{f.qual}</div>
            <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-[8px] sm:text-[9px] text-secondary font-bold tracking-wider uppercase">
              {f.exp}
            </div>
          </div>
          <div className="absolute bottom-2 right-2.5 text-[8px] text-muted-foreground/40 hidden sm:block">flip →</div>
        </div>

        {/* ── Back ── */}
        <div
          className="flip-card-back rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-3d flex flex-col justify-between overflow-hidden"
          style={{ background: `linear-gradient(135deg, oklch(0.18 0.05 260), oklch(0.22 0.06 260))` }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(${f.subjectColor} 1px, transparent 1px)`,
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative">
            <div className="text-xl sm:text-2xl mb-1.5">{f.emoji}</div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-bold mb-1" style={{ color: f.subjectColor }}>
              {f.subject}
            </div>
            <div className="text-sm sm:text-base font-display font-semibold text-white mb-1.5 leading-tight">{f.name}</div>
            <p className="text-[10px] sm:text-xs text-white/65 leading-relaxed line-clamp-3">{f.bio}</p>
          </div>
          <div className="relative flex items-center justify-between mt-2">
            <div className="text-[9px] sm:text-[10px] text-white/40 leading-tight">{f.qual}<br />{f.exp}</div>
            <div
              className="px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-widest"
              style={{ background: `${f.subjectColor}25`, color: f.subjectColor, border: `1px solid ${f.subjectColor}40` }}
            >
              Expert
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Faculty() {
  return (
    <section id="faculty" className="relative py-10 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-14 lg:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Meet the Mentors</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2 sm:mt-3">
            Faculty That <span className="text-gradient-brand">Make Toppers</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Experienced teachers and personal mentors committed to one mission: your success.
          </p>
        </motion.div>

        {/* ─── Group Photo Banner ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-10 sm:mb-16 overflow-hidden rounded-2xl sm:rounded-3xl"
          style={{ background: "linear-gradient(135deg, oklch(0.18 0.05 260), oklch(0.23 0.07 260))" }}
        >
          <div className="absolute inset-0 dot-bg-gold opacity-50" />
          <div className="gold-shimmer-border absolute inset-0" />

          <div className="relative flex flex-col md:flex-row items-stretch gap-0">
            {/* ── Left: Faculty group photo with dark navy bg ── */}
            <div className="relative md:w-[55%] min-h-[240px] sm:min-h-[300px] md:min-h-[360px] overflow-hidden">
              {/* Seamless edge blend — top & sides fade into banner bg */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[oklch(0.18_0.05_260)] opacity-60 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_260)] via-transparent to-transparent opacity-40 z-10 pointer-events-none md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[oklch(0.18_0.05_260)] opacity-40 z-10 pointer-events-none" />

              {/* Warm gold glow from below the group */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-40 rounded-full blur-3xl opacity-25 z-0"
                style={{ background: "oklch(0.74 0.12 75)" }}
              />

              {/* The photo — fills the area, dark bg blends with banner */}
              <img
                src={facultyGroupImg}
                alt="Dropper's Club Faculty Team"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />

              {/* "Our Faculty Team" label */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] font-bold text-white/70 whitespace-nowrap tracking-widest uppercase">
                Our Faculty Team
              </div>
            </div>

            {/* ── Right: Stats & text ── */}
            <div className="relative md:w-[45%] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <p className="text-[10px] sm:text-xs tracking-[0.4em] text-secondary/70 uppercase mb-3">Our Teaching Force</p>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-semibold text-white leading-tight mb-4">
                <span className="shimmer-gold">25+</span>{" "}
                <span className="text-white/90">Expert</span>
                <br />
                <span className="text-white/90">Faculty</span>
              </h3>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">
                IIT · IISc · AIIMS graduates. Real expertise, real experience, real results.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { n: "IIT", l: "Alumni" },
                  { n: "10+", l: "Avg. Exp." },
                  { n: "AIIMS", l: "Doctors" },
                ].map((s) => (
                  <div key={s.l} className="text-center bg-white/5 border border-white/10 rounded-xl p-2 sm:p-3">
                    <div className="text-lg sm:text-2xl font-display font-bold text-secondary">{s.n}</div>
                    <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Subject chips */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["⚛️ Physics", "🧪 Chemistry", "🔬 Biology", "📐 Maths", "⚗️ Org. Chem", "🦠 Zoology"].map((s) => (
                  <span key={s} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-white/8 border border-white/12 text-white/60 font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-top-border" />
        </motion.div>

        {/* Faculty flip cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {faculty.map((f, i) => (
            <FacultyCard key={f.name} f={f} i={i} />
          ))}
        </div>

        <p className="text-center text-[11px] sm:text-xs text-muted-foreground mt-5 sm:mt-8 italic">
          Hover / tap each card to see faculty profile. Real photos will be provided by client.
        </p>
      </div>
    </section>
  );
}
