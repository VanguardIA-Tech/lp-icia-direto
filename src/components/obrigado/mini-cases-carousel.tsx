"use client";

import React from "react";
import { sectionContainerClass } from "@/components/home/section-container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cases = [
  "“Rede Mais Saúde — 25 dias → 3 dias.”",
  "“Silveira Athias — IA em 100 % dos fluxos.”",
  "“DO IT Hub — 300 % + de eficiência operacional.”",
] as const;

export function MiniCasesCarousel() {
  return (
    <section className="bg-slate-950 py-10 sm:py-14">
      <div className={`${sectionContainerClass}`}>
        <div className="relative mx-auto w-full max-w-4xl">
          <Carousel className="w-full">
            <CarouselContent>
              {cases.map((text, idx) => (
                <CarouselItem key={idx} className="basis-full">
                  <div className="mx-auto flex h-full w-full items-center justify-center">
                    <div className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center shadow-sm shadow-blue-500/10 sm:p-8">
                      <p className="text-base font-medium text-slate-100 sm:text-lg">
                        {text}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex items-center justify-center gap-3">
              <CarouselPrevious className="relative static translate-x-0 translate-y-0" />
              <CarouselNext className="relative static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default MiniCasesCarousel;