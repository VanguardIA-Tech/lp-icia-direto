import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopBanner } from "@/components/home/top-banner";
import { HeroSection } from "@/components/home/hero-section";
import { PainPointsSection } from "@/components/home/pain-points-section";
import { SelectionCriteriaSection } from "@/components/home/selection-section";
import { TailoredSolutionSection } from "@/components/home/tailored-solution-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { TestimonialsGridSection } from "@/components/home/testimonials-grid-section";
import { LeaderSection } from "@/components/home/leader-section";
import { SiteFooter } from "@/components/home/site-footer";
import { DiagnosisSection } from "@/components/home/diagnosis-section";
import { MethodSection } from "@/components/home/method-section";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  title: seoConfig.pages.home.title,
  description: seoConfig.pages.home.description,
  keywords: seoConfig.pages.home.keywords,
  openGraph: {
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
    url: `${seoConfig.site.url}${seoConfig.pages.home.path}`,
  },
  twitter: {
    title: seoConfig.pages.home.title,
    description: seoConfig.pages.home.description,
  },
  alternates: {
    canonical: seoConfig.pages.home.path,
  },
};

const floatingCTAClasses =
  "fixed bottom-6 left-6 right-6 sm:left-auto sm:w-auto z-50 shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Dobra inicial: Banner + Hero */}
      <div className="flex min-h-0 flex-col lg:h-screen">
        <TopBanner />
        {/* Hero preenche o restante em telas grandes */}
        <HeroSection />
      </div>

      <main className="flex flex-col" id="conteudo">
        <PainPointsSection />
        <SelectionCriteriaSection />
        <TailoredSolutionSection />
        <SuccessStoriesSection />
        <TestimonialsGridSection />
        <LeaderSection />
        <DiagnosisSection />
        <MethodSection />
      </main>

      <SiteFooter />

      <Button
        asChild
        className={`${floatingCTAClasses} rounded-md bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 text-center`}
      >
        <Link
          href="/form"
          id="cta-floating"
          data-cta="floating:iniciar-funil-diagnostico"
          data-track="true"
        >
          Agendar Diagnóstico de Eficiência com IA
        </Link>
      </Button>
    </div>
  );
}