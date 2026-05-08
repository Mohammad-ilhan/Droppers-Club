import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const items = [
  { label: "Classroom", emoji: "🏫", span: "md:col-span-2 md:row-span-2", h: "h-full min-h-[320px]" },
  { label: "Reading Area", emoji: "📚", span: "", h: "h-56" },
  { label: "Doubt Clearing Desk", emoji: "💡", span: "", h: "h-56" },
  { label: "Test & Practice Hall", emoji: "📝", span: "md:col-span-2", h: "h-56" },
  { label: "Mentorship Corner", emoji: "🤝", span: "", h: "h-56" },
  { label: "Toppers' Wall", emoji: "🏆", span: "", h: "h-56" },
  { label: "Felicitation Moments", emoji: "🎓", span: "md:col-span-2", h: "h-56" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-hero">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">A Look Inside Our Classes</p>
          <h2 className="text-4xl md:text-6xl font-display font-semibold mt-3 text-primary">
            Inside <span className="italic text-gradient-gold">Dropper's Club</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Every corner crafted for focus, every space built for results. A visual look at the place where toppers are made.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-min">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative lift overflow-hidden rounded-3xl bg-card border border-border shadow-soft ${it.span}`}
            >
              <div className={`relative ${it.h} bg-gradient-to-br from-primary/8 via-card to-secondary/15 flex items-center justify-center`}>
                <div className="absolute inset-0 dot-bg opacity-40" />
                <div className="relative text-center">
                  <div className="text-5xl mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {it.emoji}
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Photo Reserved</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Camera className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold tracking-wide">{it.label}</span>
                </div>
              </figcaption>
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur text-[9px] tracking-[0.25em] uppercase font-semibold text-primary border border-border">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
