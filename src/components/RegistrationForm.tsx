import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

export function RegistrationForm() {
  return (
    <section id="register" className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl" />
      <div className="relative max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-secondary uppercase">Join Us</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-3">Start Your <span className="text-gradient-brand">Topper Journey</span></h2>
          <p className="mt-4 text-muted-foreground">Fill in your details — our team will reach out within 24 hours.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); toast.success("Registration received! We'll contact you soon."); (e.target as HTMLFormElement).reset(); }}
          className="glass rounded-3xl p-8 md:p-10 shadow-3d space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input required placeholder="Your name" className="bg-background/40 h-12" />
            </div>
            <div className="space-y-2">
              <Label>Phone</Label>
              <Input required type="tel" placeholder="+91" className="bg-background/40 h-12" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input required type="email" placeholder="you@email.com" className="bg-background/40 h-12" />
            </div>
            <div className="space-y-2">
              <Label>City</Label>
              <Input placeholder="Bhopal" className="bg-background/40 h-12" />
            </div>
            <div className="space-y-2">
              <Label>Class / Target</Label>
              <Select>
                <SelectTrigger className="bg-background/40 h-12"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="9">Class 9</SelectItem>
                  <SelectItem value="10">Class 10</SelectItem>
                  <SelectItem value="11">Class 11</SelectItem>
                  <SelectItem value="12">Class 12</SelectItem>
                  <SelectItem value="dropper">Dropper</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Course</Label>
              <Select>
                <SelectTrigger className="bg-background/40 h-12"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="neet">NEET</SelectItem>
                  <SelectItem value="jee">JEE Mains/Advanced</SelectItem>
                  <SelectItem value="foundation">Foundation</SelectItem>
                  <SelectItem value="boards">Boards</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-brand text-primary-foreground font-bold text-base h-14 shadow-glow-orange hover:opacity-90">
            <Sparkles className="w-5 h-5 mr-2" /> Register Now
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
