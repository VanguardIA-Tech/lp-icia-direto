"use client";

import React from "react";
import { TopBanner } from "../../components/home/top-banner";
import { ObrigadoHero } from "../../components/obrigado/hero";
import { MiniCasesCarousel } from "../../components/obrigado/mini-cases-carousel";
import { ExclusivityBlock } from "../../components/obrigado/exclusivity";
import { ObrigadoFooter } from "../../components/obrigado/footer";

export default function ObrigadoPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <TopBanner />
      <main className="flex flex-col">
        <ObrigadoHero />
        <MiniCasesCarousel />
        <ExclusivityBlock />
      </main>
      <ObrigadoFooter />
    </div>
  );
}