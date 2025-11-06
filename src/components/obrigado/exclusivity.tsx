"use client";

import React from "react";
import { sectionContainerClass } from "@/components/home/section-container";

export function ExclusivityBlock() {
  return (
    <section className="bg-slate-950 py-12 sm:py-16">
      <div className={`${sectionContainerClass}`}>
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-blue-950/30"
          />
          <p className="relative text-center text-base text-slate-200 sm:text-lg">
            “Este programa é exclusivo e personalizado, faz parte da seleção das apenas 100 <br className="hidden sm:inline" />
            empresas selecionadas em 2026 para integração corporativa de IA no Brasil.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExclusivityBlock;