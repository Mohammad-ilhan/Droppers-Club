import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Sparkles, Clock, CheckCircle2, Users, BookOpen, Shield } from "lucide-react";

const BENEFITS = [
  { icon: CheckCircle2, text: "Personal mentor assigned within 24 hrs" },
  { icon: CheckCircle2, text: "Free diagnostic test on first day" },
  { icon: CheckCircle2, text: "Parents' orientation session included" },
  { icon: CheckCircle2, text: "Study material provided from day one" },
];

/* ─── Confetti pieces ─── */
function Confetti({ show }: { show: boolean }) {
  if (!show) return null;
  const pieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: i % 3 === 0 ? "oklch(0.74 0.12 75)" : i % 3 === 1 ? "oklch(0.28 0.06 260)" : "oklch(0.82 0.13 80)",
    left: Math.random() * 100,
    delay: Math.random() * 0.4,
    size: Math.random() * 8 + 4,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece absolute"
          style={{
            left: `${p.left}%`,
            top: "40%",
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: `${p.delay}s`,
            borderRadius: p.id % 2 === 0 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Urgency seats counter ─── */
function UrgencyBar() {
  const [seats, setSeats] = useState(7);
  useEffect(() => {
    const t = setInterval(() => {
      setSeats((s) => {
        if (s <= 3) return 7;
        return s - 1;
      });
    }, 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="urgency-bar flex items-center gap-3 px-4 py-3 mb-6">
      <div className="flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-orange-400 pulse-dot" />
        <span className="text-xs font-semibold text-orange-600">
          Only <span className="font-black text-sm">{seats}</span> seats left in this batch!
        </span>
      </div>
      <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
        <Clock className="w-3.5 h-3.5" />
        Admissions closing soon
      </div>
    </div>
  );
}

export function RegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [confetti, setConfetti] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setDone(true);
    setConfetti(true);
    toast.success("🎉 Registration received! We'll call you within 24 hours.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setConfetti(false), 2000);
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <section id="register" className="py-14 sm:py-20 px-4 sm:px-6 bg-muted/40 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-secondary uppercase mb-2">Join Us</p>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-primary">
            Start Your Topper Journey
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-gradient-gold rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Fill in your details — our team will reach out within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
          {/* ─── Benefits panel ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="rounded-xl p-5 sm:p-6 shadow-card border border-border bg-card space-y-4">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-primary">What you get</h3>
              {BENEFITS.map((b) => (
                <div key={b.text} className="flex items-start gap-3">
                  <b.icon className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-snug">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4 sm:p-5 border border-border bg-card space-y-3">
              {[
                { icon: Users, label: "Small batch", value: "Max 30 students" },
                { icon: BookOpen, label: "Study material", value: "Included free" },
                { icon: Shield, label: "Guarantee", value: "Result-first focus" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-primary">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── Form ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 relative"
          >
            <Confetti show={confetti} />

            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl border border-border shadow-card overflow-hidden relative"
            >
              {/* Navy header strip */}
              <div className="bg-primary px-6 py-4">
                <h3 className="text-white font-display font-bold text-lg">Registration Form</h3>
                <p className="text-white/60 text-xs mt-0.5">Free · No commitment · Response within 24 hrs</p>
              </div>
              <div className="p-5 sm:p-8 space-y-5">
              {/* Urgency bar */}
              <UrgencyBar />

              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</Label>
                  <Input
                    required
                    placeholder="Your full name"
                    className="bg-background/50 h-11 sm:h-12 border-border focus:border-secondary/60 transition-colors"
                  />
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</Label>
                  <Input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="bg-background/50 h-11 sm:h-12 border-border focus:border-secondary/60 transition-colors"
                  />
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</Label>
                  <Input
                    required
                    type="email"
                    placeholder="you@email.com"
                    className="bg-background/50 h-11 sm:h-12 border-border focus:border-secondary/60 transition-colors"
                  />
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">City</Label>
                  <Input
                    placeholder="Bhopal"
                    className="bg-background/50 h-11 sm:h-12 border-border focus:border-secondary/60 transition-colors"
                  />
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Class / Target</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 h-11 sm:h-12">
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      {["9", "10", "11", "12"].map((c) => (
                        <SelectItem key={c} value={c}>Class {c}</SelectItem>
                      ))}
                      <SelectItem value="dropper">Dropper</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Course</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 h-11 sm:h-12">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neet">NEET</SelectItem>
                      <SelectItem value="jee">JEE Mains / Advanced</SelectItem>
                      <SelectItem value="foundation">Foundation</SelectItem>
                      <SelectItem value="boards">Boards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitting || done}
                className={`w-full h-12 rounded-lg font-bold text-base transition-all duration-300 disabled:cursor-not-allowed text-white ${
                  done ? "bg-green-600" : "bg-primary hover:bg-primary/90"
                }`}
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Registering…
                  </span>
                ) : done ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Registered! We'll call you soon.
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Register Now — It's Free
                  </span>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                No spam. We'll only contact you about your admission.
              </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
