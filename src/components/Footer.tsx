import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Smartphone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dropper's Club" className="w-12 h-12 rounded-full ring-2 ring-primary/40" />
            <div>
              <div className="font-bold">Dropper's Club</div>
              <div className="text-[10px] tracking-widest text-muted-foreground uppercase">Crafting Toppers</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">Bhopal's best coaching for NEET, JEE & foundation — guiding serious students to top ranks with discipline, mentorship, and proven results.</p>
          <a
            href="https://play.google.com/store/apps/details?id=co.hodor.dvzeq"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-soft"
          >
            <Smartphone className="w-4 h-4" />
            Get the App
          </a>
          <div className="flex gap-3 mt-5">
            {[Instagram, Youtube, Facebook].map((I, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gradient-brand transition-all">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#courses" className="hover:text-foreground">Courses</a></li>
            <li><a href="#faculty" className="hover:text-foreground">Faculty</a></li>
            <li><a href="#results" className="hover:text-foreground">Results</a></li>
            <li><a href="#register" className="hover:text-foreground">Admissions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>+91 98765 43210</span></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>info@droppersclub.in</span></li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" /><span>Near Bhumika Residency, Kolar Road, Bhopal</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Visit Us</h4>
          <div className="aspect-square rounded-2xl glass overflow-hidden">
            <iframe
              title="Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.40%2C23.18%2C77.50%2C23.25&layer=mapnik"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dropper's Club. Crafted with care in Bhopal.
      </div>
    </footer>
  );
}
