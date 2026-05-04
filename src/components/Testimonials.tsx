import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const items = [
  { name: "Aarav Sharma", role: "NEET 2024 — AIR 142", text: "The mentorship at Dropper's Club changed my approach. Personal attention from teachers made all the difference." },
  { name: "Priya Verma", role: "JEE Advanced 2024", text: "Best decision I ever made. The faculty doesn't just teach — they build your confidence every day." },
  { name: "Rohan Mehta", role: "NEET 2023 — AIR 56", text: "Doubt sessions, test series, and the family-like environment helped me crack it in my dropper year." },
  { name: "Sneha Patel", role: "JEE Mains 2024", text: "From struggling in physics to scoring 99.2 percentile — Dropper's Club made it happen." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">Words from <span className="text-gradient-brand">Our Family</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative glass rounded-3xl p-8 shadow-3d"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-secondary text-secondary" />)}
              </div>
              <p className="text-lg leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-secondary">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
