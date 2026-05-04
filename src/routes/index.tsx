import { createFileRoute } from "@tanstack/react-router";
import { SplashScreen } from "@/components/SplashScreen";
import { AlertBar } from "@/components/AlertBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { Faculty } from "@/components/Faculty";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { Reviews } from "@/components/Reviews";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dropper's Club — Bhopal's Premier NEET & JEE Coaching" },
      { name: "description", content: "Crafting toppers for NEET, JEE Mains/Advanced & foundation classes (9–12). IIT/AIIMS faculty, proven results, Kolar Road, Bhopal." },
      { property: "og:title", content: "Dropper's Club — Crafting Toppers" },
      { property: "og:description", content: "Bhopal's premier coaching for NEET, JEE & foundation batches." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SplashScreen />
      <div className="sticky top-0 z-50">
        <AlertBar />
        <Navbar />
      </div>
      <main>
        <Hero />
        <Courses />
        <Faculty />
        <Results />
        <Testimonials />
        <Reviews />
        <RegistrationForm />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}
