"use client";

import React from "react";
import { sectionContainerClass } from "@/components/home/section-container";

export function ObrigadoHero() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24 text-white">
      <div className={`${sectionContainerClass} items-center text-center gap-6`}>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Sua aplicação foi enviada!
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
          Em breve meu time de especialistas entrará em contato para agendar o seu diagnóstico.
        </p>
      </div>
    </section>
  );
}

export default ObrigadoHero;