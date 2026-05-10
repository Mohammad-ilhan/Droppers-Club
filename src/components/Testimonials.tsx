import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "The mentorship at Dropper's Club changed my approach to NEET. The personal attention from teachers made all the difference in my AIR.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Aarav Sharma",
    role: "NEET 2024 — AIR 142",
  },
  {
    text: "Best decision I ever made. The faculty doesn't just teach — they build your confidence and discipline every single day.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Verma",
    role: "JEE Advanced 2024",
  },
  {
    text: "Doubt sessions, regular tests, and a family-like environment helped me crack NEET in my dropper year. Forever grateful.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Rohan Mehta",
    role: "NEET 2023 — AIR 56",
  },
  {
    text: "From struggling in physics to scoring 99.2 percentile in JEE Mains — the structured approach here made it possible.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sneha Patel",
    role: "JEE Mains 2024",
  },
  {
    text: "Small batch sizes meant teachers actually knew my weak areas. The monthly performance reviews kept me on track.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Kunal Rathore",
    role: "NEET Qualifier 2024",
  },
  {
    text: "Coming from a small town, I needed guidance more than just lectures. Dropper's Club gave me both — and a top rank.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Ananya Gupta",
    role: "JEE 2024 — 99.4 %ile",
  },
  {
    text: "The teachers stay back after class to clear every doubt. That kind of dedication is rare in coaching today.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Vikram Joshi",
    role: "Class 12 Topper",
  },
  {
    text: "The test series mirrors the actual exam pressure. I walked into NEET feeling fully prepared, not nervous.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Isha Raghav",
    role: "NEET 2024 Selected",
  },
  {
    text: "Affordable fees, world-class teaching, and a mentor who actually cares about your future. Highly recommend.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Harsh Tiwari",
    role: "JEE Mains 2023",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background py-10 sm:py-20 relative">
      <div className="container z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="border border-primary/20 py-1 px-4 rounded-full text-xs tracking-[0.3em] uppercase text-secondary">
            Testimonials
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-semibold mt-4 sm:mt-5 text-primary tracking-tight">
            Words from <span className="text-gradient-gold italic font-normal">our toppers</span>
          </h2>
          <p className="text-center mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
            Real stories from students who turned their dreams into ranks at Dropper's Club.
          </p>
        </motion.div>

        {/* Mobile: compact moving strip. Desktop: animated columns. */}
        <div className="md:hidden mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="testimonials-mobile-track flex gap-3 w-max">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[270px] shrink-0 p-4 rounded-2xl border border-border shadow-soft bg-card">
                <div className="text-xs leading-relaxed text-foreground line-clamp-3">{t.text}</div>
                <div className="flex items-center gap-3 mt-3">
                  <img width={36} height={36} src={t.image} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
                  <div className="flex flex-col min-w-0">
                    <div className="text-sm font-semibold tracking-tight leading-5 text-primary truncate">{t.name}</div>
                    <div className="leading-5 text-xs tracking-tight text-secondary truncate">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
      <style>{`
        .testimonials-mobile-track {
          animation: testimonials-mobile-marquee 42s linear infinite;
          will-change: transform;
        }
        @keyframes testimonials-mobile-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
