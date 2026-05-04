import { motion } from "framer-motion";
import { Play, MessageSquare } from "lucide-react";

export function Reviews() {
  const videos = [
    { name: "Kunal — NEET", thumb: "🎬" },
    { name: "Ananya — JEE", thumb: "🎬" },
    { name: "Rahul — Class 12", thumb: "🎬" },
  ];
  const text = [
    { name: "Meera S.", text: "Best coaching in Bhopal. Faculty is super supportive and the test series is solid." },
    { name: "Vikram J.", text: "Got into NIT thanks to the mentorship. Worth every rupee." },
    { name: "Isha R.", text: "Loved the doubt-clearing sessions. Small batch sizes made learning personal." },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Student Reviews</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">Hear it from <span className="text-gradient-brand">Students</span></h2>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2"><Play className="w-4 h-4" /> Video Reviews</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {videos.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-video rounded-2xl glass shadow-3d overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-6xl">
                  {v.thumb}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-brand flex items-center justify-center shadow-glow-orange group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                  <div className="text-sm font-semibold">{v.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Written Reviews</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {text.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 shadow-3d"
              >
                <p className="text-sm leading-relaxed">"{r.text}"</p>
                <div className="mt-4 text-xs font-semibold text-secondary">— {r.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
