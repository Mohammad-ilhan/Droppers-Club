import { createFileRoute } from "@tanstack/react-router";
import { SplashScreen } from "@/components/SplashScreen";
import { AlertBar } from "@/components/AlertBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Faculty } from "@/components/Faculty";
import { Resources } from "@/components/Resources";
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
      { name: "description", content: "Bhopal's best coaching for NEET, JEE & foundation classes (9–12). Expert IIT/AIIMS faculty, personal mentorship, and a proven track record of toppers." },
      { property: "og:title", content: "Dropper's Club — Crafting Toppers" },
      { property: "og:description", content: "Bhopal's best coaching for NEET, JEE & foundation — where serious students become top rankers." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen max-w-full overflow-x-clip bg-background">
      <SplashScreen />
      <div className="sticky top-0 z-50">
        <AlertBar />
        <Navbar />
      </div>
      <main className="max-w-full overflow-x-clip">
        <Hero />
        <Courses />
        <WhyUs />
        <Faculty />
        <Gallery />
        <Resources />
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
