import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Smartphone, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "#courses",      label: "Courses" },
  { href: "#faculty",      label: "Faculty" },
  { href: "#results",      label: "Results" },
  { href: "#gallery",      label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#register",     label: "Admissions" },
];

const programs = [
  { href: "#courses", label: "NEET Preparation" },
  { href: "#courses", label: "JEE Mains & Advanced" },
  { href: "#courses", label: "Class 11 & 12" },
  { href: "#courses", label: "Foundation (9 & 10)" },
  { href: "#courses", label: "Olympiad Training" },
  { href: "#courses", label: "Crash Courses" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* ─── Animated gold border at top ─── */}
      <div className="footer-top-border" />

      {/* ─── Dark navy body ─── */}
      <div
        className="relative"
        style={{ background: "linear-gradient(180deg, oklch(0.18 0.05 260), oklch(0.14 0.04 260))" }}
      >
        {/* Background dots */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(oklch(0.74 0.12 75 / 0.2) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Ambient glow */}
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 pt-14 sm:pt-20 pb-10 grid md:grid-cols-4 gap-10 sm:gap-12">

          {/* ─── Brand column ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-secondary/30 rounded-full blur-sm" />
                <img
                  src={logo}
                  alt="Dropper's Club"
                  className="relative w-12 h-12 rounded-full ring-2 ring-secondary/40 object-cover"
                />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">Dropper's Club</div>
                <div className="text-[10px] tracking-[0.3em] text-secondary/70 uppercase">Crafting Toppers</div>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed">
              Bhopal's best coaching for NEET, JEE & foundation — guiding serious students to top ranks with discipline, mentorship, and proven results.
            </p>

            {/* App download */}
            <a
              href="https://play.google.com/store/apps/details?id=co.hodor.dvzeq"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold hover:bg-secondary/20 transition-all"
            >
              <Smartphone className="w-4 h-4" />
              Get the App
            </a>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="social-insta w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="social-yt w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="social-fb w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ─── Quick links ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-secondary transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── Programs ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Programs</h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="group flex items-center gap-2 text-sm text-white/50 hover:text-secondary transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── Contact + Map ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 mb-5">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 text-sm text-white/50 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a href="mailto:info@droppersclub.in" className="flex items-start gap-3 text-sm text-white/50 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  info@droppersclub.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                Near Bhumika Residency,<br />Kolar Road, Bhopal
              </li>
            </ul>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-white/10 ring-1 ring-secondary/20">
              <iframe
                title="Dropper's Club Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.40%2C23.18%2C77.50%2C23.25&layer=mapnik"
                className="w-full h-32 sm:h-40 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>

        {/* ─── Bottom bar ─── */}
        <div
          className="relative border-t py-5 px-6"
          style={{ borderColor: "oklch(0.74 0.12 75 / 0.12)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">
              © {new Date().getFullYear()} Dropper's Club. All rights reserved.
            </p>
            <p className="text-xs text-white/30 flex items-center gap-1.5">
              Made with{" "}
              <span className="text-red-400 heartbeat inline-block">❤️</span>{" "}
              in Bhopal, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
