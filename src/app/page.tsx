"use client";

import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopBanner } from "@/components/home/top-banner";
import { HeroSection } from "@/components/home/hero-section";
import { PainPointsSection } from "@/components/home/pain-points-section";
import { SelectionCriteriaSection } from "@/components/home/selection-section";
import { TailoredSolutionSection } from "@/components/home/tailored-solution-section";
import { SuccessStoriesSection } from "@/components/home/success-stories-section";
import { LeaderSection } from "@/components/home/leader-section";
import { ApplicationFormSection } from "@/components/home/application-form-section";
import { SiteFooter } from "@/components/home/site-footer";

const floatingCTAClasses =
  "fixed bottom-6 right-6 z-50 shadow-xl shadow-orange-500/20 transition hover:scale-[1.02]";

export default function Home() {
  const scrollToForm = useCallback(() => {
    const formSection = document.getElementById("application-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleCTA = useCallback(() => {
    scrollToForm();
  }, [scrollToForm]);

  return (
    <div className="bg-slate-950 text-slate-100">
      <TopBanner />

      <main className="flex flex-col">
        <HeroSection onPrimaryClick={handleCTA} />
        <PainPointsSection onPrimaryClick={handleCTA} />
        <SelectionCriteriaSection />
        <TailoredSolutionSection onSecondaryClick={handleCTA} />
        <SuccessStoriesSection />
        <LeaderSection />
        <ApplicationFormSection />
      </main>

      <SiteFooter />

      <Button
        type="button"
        onClick={handleCTA}
        className={`${floatingCTAClasses} rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-600`}
      >
        Agendar Diagnóstico de Eficiência com IA
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}