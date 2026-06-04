import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";

const testimonials = [
  { text: "The mentorship at Dropper's Club changed my approach to NEET. Personal attention from teachers made all the difference.", image: "https://randomuser.me/api/portraits/men/32.jpg", name: "Aarav Sharma", role: "NEET 2024 — AIR 142", exam: "NEET" },
  { text: "Best decision I ever made. Faculty doesn't just teach — they build your confidence and discipline every single day.", image: "https://randomuser.me/api/portraits/women/44.jpg", name: "Priya Verma", role: "JEE Advanced 2024", exam: "JEE" },
  { text: "Doubt sessions, regular tests, and a family-like environment helped me crack NEET in my dropper year. Forever grateful.", image: "https://randomuser.me/api/portraits/men/45.jpg", name: "Rohan Mehta", role: "NEET 2023 — AIR 56", exam: "NEET" },
  { text: "From struggling in physics to 99.2 percentile in JEE Mains — the structured approach here made it possible.", image: "https://randomuser.me/api/portraits/women/68.jpg", name: "Sneha Patel", role: "JEE Mains 2024", exam: "JEE" },
  { text: "Small batch sizes meant teachers actually knew my weak areas. The monthly performance reviews kept me on track.", image: "https://randomuser.me/api/portraits/men/12.jpg", name: "Kunal Rathore", role: "NEET Qualifier 2024", exam: "NEET" },
  { text: "Coming from a small town, I needed guidance more than lectures. Dropper's Club gave me both — and a top rank.", image: "https://randomuser.me/api/portraits/women/22.jpg", name: "Ananya Gupta", role: "JEE 2024 — 99.4 %ile", exam: "JEE" },
];

const examColor: Record<string, string> = {
  NEET: "#c0392b",
  JEE: "#2980b9",
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 px-4 sm:px-6 bg-muted/40 border-y border-border">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />)}
            <span className="ml-1 text-sm font-bold text-primary">4.9</span>
            <span className="text-muted-foreground text-sm">/ 5.0 · 200+ reviews</span>
          </div>
          <p className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-2">Student Reviews</p>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary">
            Words from Our Toppers
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-gradient-gold rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl">
            Real stories from students who turned their dreams into ranks at Dropper's Club.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => {
            const color = examColor[t.exam] ?? "#d4a017";
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-xl border border-border shadow-card hover:-translate-y-1 hover:shadow-glow-navy transition-all duration-300 overflow-hidden relative"
                style={{ borderLeft: `3px solid ${color}` }}
              >
                {/* Quote watermark */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/5" />

                <div className="p-5">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-secondary fill-secondary" />)}
                  </div>

                  <p className="text-sm text-foreground/85 leading-relaxed">"{t.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                    <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover shrink-0" style={{ boxShadow: `0 0 0 2px ${color}40` }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-primary truncate">{t.name}</span>
                        <BadgeCheck className="w-3.5 h-3.5 shrink-0" style={{ color }} />
                      </div>
                      <div className="text-xs font-medium truncate mt-0.5" style={{ color }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
