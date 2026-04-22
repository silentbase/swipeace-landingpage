import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Features />
      <HowItWorks />
   {/*<SocialProof />*/}
      <FAQ />
      <Footer />
    </main>
  );
}
