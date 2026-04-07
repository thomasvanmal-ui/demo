import { HeroSection } from "@/components/blocks/hero-section-5";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WAFab from "@/components/WAFab";
import RevealInit from "@/components/RevealInit";

export default function Home() {
  return (
    <>
      <RevealInit />
      <HeroSection />
      <main>
        <Features />
        <SocialProof />
        <CTASection />
      </main>
      <Footer />
      <WAFab />
    </>
  );
}
