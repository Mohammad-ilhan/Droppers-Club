import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ImageIcon, X, ChevronLeft, ChevronRight, Expand, Camera } from "lucide-react";

/* ─── Only the key spaces — fewer, more impactful ─── */
const items = [
  {
    label: "Classroom",
    shortDesc: "Where learning happens",
    desc: "State-of-the-art teaching environment with interactive smartboards, comfortable seating, and full AC — built for 6–8 hrs of focused study daily.",
    emoji: "🏫",
    color: "oklch(0.55 0.15 250)",
  },
  {
    label: "Self-Study Area",
    shortDesc: "Quiet zone · 8 AM – 8 PM",
    desc: "Dedicated reading & self-study room open all day. Silent, air-conditioned, and available to all enrolled students beyond class hours.",
    emoji: "📚",
    color: "oklch(0.55 0.18 142)",
  },
  {
    label: "Test Hall",
    shortDesc: "Weekly mock exams",
    desc: "Full exam simulations every Sunday under timed, OMR-based conditions. Results analysed and shared within 24 hours.",
    emoji: "📝",
    color: "oklch(0.74 0.12 75)",
  },
  {
    label: "Toppers' Wall",
    shortDesc: "Your rank. Your name.",
    desc: "Every AIR, every percentile — celebrated here. Walk past this wall every day and let your goals stare back at you.",
    emoji: "🏆",
    color: "oklch(0.74 0.12 75)",
  },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const prev = () => setActive((a) => (a! - 1 + items.length) % items.length);
  const next = () => setActive((a) => (a! + 1) % items.length);

  return (
    <section id="gallery" className="relative py-10 sm:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden bg-muted/30 border-y border-border/50">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-secondary/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Our Facility</p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-semibold mt-2 text-primary">
            Inside <span className="italic text-gradient-gold">Dropper's Club</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Every space designed for one thing — your result.
          </p>
        </motion.div>

        {/* ── 2×2 grid on mobile, 4-col strip on desktop ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(i)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border bg-card shadow-soft hover:shadow-glow-navy hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo placeholder */}
              <div
                className="relative h-36 sm:h-44 flex flex-col items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, oklch(0.18 0.05 260) 0%, ${it.color}18 100%)`,
                }}
              >
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(${it.color} 1px, transparent 1px)`,
                    backgroundSize: "18px 18px",
                  }}
                />
                {/* Glow blob */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 60%, ${it.color}30, transparent 70%)` }}
                />

                {/* Emoji */}
                <div className="relative text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform duration-400">
                  {it.emoji}
                </div>

                {/* Photo placeholder label */}
                <div className="relative flex items-center gap-1 text-[9px] text-white/30 uppercase tracking-wider">
                  <ImageIcon className="w-2.5 h-2.5" />
                  Client photo
                </div>

                {/* Expand icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/30 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <Expand className="w-3.5 h-3.5 text-white" />
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Info strip */}
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-display font-semibold text-primary leading-tight">{it.label}</h3>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-snug">{it.shortDesc}</p>

                {/* Colour accent line */}
                <div
                  className="mt-2.5 h-[2px] rounded-full w-8 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${it.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] sm:text-xs text-muted-foreground mt-5 sm:mt-8 italic"
        >
          Click any card to learn more. Real facility photos provided by client.
        </motion.p>
      </div>

      {/* ─── Lightbox ─── */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg sm:max-w-xl rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border shadow-3d"
            >
              {/* Photo box */}
              <div
                className="relative aspect-video flex flex-col items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, oklch(0.18 0.05 260) 0%, ${items[active].color}20 100%)`,
                }}
              >
                <div className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `radial-gradient(${items[active].color} 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="text-7xl sm:text-8xl mb-3 relative">{items[active].emoji}</div>
                <div className="relative flex items-center gap-2 text-sm text-white/40">
                  <Camera className="w-4 h-4" />
                  <span>Client photo will appear here</span>
                </div>

                {/* Counter pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10 text-[10px] font-bold text-white/60">
                  {active + 1} / {items.length}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3"
                  style={{
                    color: items[active].color,
                    background: `${items[active].color}15`,
                    border: `1px solid ${items[active].color}30`,
                  }}
                >
                  {items[active].shortDesc}
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary mb-2">
                  {items[active].label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{items[active].desc}</p>
              </div>

              {/* Nav buttons */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-[38%] w-9 h-9 rounded-full bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-[38%] w-9 h-9 rounded-full bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-black/60 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
