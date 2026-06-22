import { CtaBanner } from "@/components/cta-banner";
import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Problem } from "@/components/problem";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { LanguageProvider } from "@/lib/language-context";

export default function Home() {
  return (
    <LanguageProvider>
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
