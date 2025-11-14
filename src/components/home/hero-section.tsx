"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const handleScrollToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("conteudo");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: smooth scroll 1 viewport height
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-1 min-h-0 overflow-hidden bg-[#0B1220] text-white">
      {/* Aurora Mesh Blobs */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[22%] h-[60vw] w-[60vw] rounded-full bg-[#2F76FF]/[0.35] blur-[100px] lg:h-[48rem] lg:w-[48rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[30%] h-[48vw] w-[48vw] rounded-full bg-[#6EE7F9]/[0.25] blur-[100px] lg:h-[34rem] lg:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-8%] right-[-12%] h-[80vw] w-[80vw] rounded-full bg-[#FF7A18]/[0.20] blur-[140px] lg:h-[60rem] lg:w-[60rem]"
      />

      {/* Mobile (flex) / Desktop (grid) */}
      <div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col justify-between gap-8 px-6 sm:gap-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-0 lg:px-16 lg:py-0">
        {/* Coluna esquerda (Texto e CTA) */}
        <div className="flex flex-col gap-4 text-center sm:text-left lg:col-span-6 lg:flex lg:h-full lg:justify-center py-8 sm:py-10 lg:py-0">
          <h1 className="mx-auto max-w-[560px] text-balance text-3xl font-extrabold leading-tight tracking-tight sm:mx-0 sm:text-4xl md:text-[42px] lg:text-[44px]">
            Transforme sua operação com{" "}
            <span className="text-orange-400">sistemas personalizados de IA</span> e automação
            integrados à sua realidade.
            <span className="mt-2 block font-semibold text-orange-400">
              Tudo feito para atender o seu negócio.
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-base text-slate-200 sm:mx-0 sm:text-lg">
            O Programa ICIA (Inteligência Corporativa Integrada com Automação) é a aceleração que
            redesenha processos, integra pessoas e instala cultura de eficiência com IA. Sem precisar
            trocar seus sistemas atuais nem contratar um monte de gente com altos salários.
          </p>
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Button
              asChild
              className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(47,118,255,.25)]"
            >
              <Link href="/form" id="cta-hero" data-cta="lead" data-track="true">
                Quero meu Diagnóstico
              </Link>
            </Button>
            <p className="mt-1 text-sm italic text-slate-300">
              O futuro das empresas eficientes é sob medida. A sua também pode ser.
            </p>
          </div>
        </div>

        {/* Coluna direita (Imagem) */}
        <div className="mt-auto flex justify-center lg:col-span-6 lg:mt-0 lg:h-full lg:items-end lg:justify-end">
          <img
            src="/jorge6.webp"
            alt="Retrato de Jorge Auad"
            className="h-auto max-w-full max-h-[60vh] sm:max-h-[360px] md:max-h-[520px] lg:h-full lg:max-h-[70vh] xl:max-h-[80vh] object-contain object-bottom"
          />
        </div>
      </div>

      {/* Seta de rolagem (pulsante e suave) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex justify-center lg:bottom-6">
        <a
          href="#conteudo"
          aria-label="Role para ver mais"
          className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          id="cta-scroll-arrow"
          data-track="true"
          onClick={handleScrollToContent}
        >
          <ChevronDown
            className="h-6 w-6 animate-bounce"
            style={{ animationDuration: "1.8s" }}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
}