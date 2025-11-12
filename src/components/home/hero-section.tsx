import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex flex-1 min-h-0 overflow-hidden bg-[#0B1220] text-white">
      {/* Aurora Mesh Blobs */}
      <div
        aria-hidden="true"
        className="absolute left-[12%] top-[20%] h-[60vw] w-[60vw] rounded-full bg-[#2F76FF]/[0.35] blur-[100px] lg:h-[48rem] lg:w-[48rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[8%] top-[32%] h-[48vw] w-[48vw] rounded-full bg-[#6EE7F9]/[0.25] blur-[100px] lg:h-[34rem] lg:w-[34rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-10%] right-[-12%] h-[80vw] w-[80vw] rounded-full bg-[#FF7A18]/[0.18] blur-[150px] lg:h-[60rem] lg:w-[60rem]"
      />

      <div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col justify-center gap-8 px-6 py-6 sm:gap-10 sm:py-8 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-24 lg:py-0 xl:gap-16 2xl:px-32">
        {/* Coluna esquerda */}
        <div className="flex flex-col gap-5 text-center sm:text-left lg:col-span-6 xl:col-span-5 lg:flex lg:h-full lg:max-w-[40vw] lg:justify-center">
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] 2xl:text-[3.25rem]">
            Transforme sua operação com{" "}
            <span className="text-orange-400">sistemas personalizados de IA</span> e automação
            integrados à sua realidade.
            <span className="mt-2 block font-semibold text-orange-400">
              Tudo feito para atender o seu negócio.
            </span>
          </h1>

          <p className="text-base text-slate-200 sm:text-lg lg:text-xl xl:text-[1.35rem] leading-relaxed">
            O Programa ICIA (Inteligência Corporativa Integrada com Automação) é a aceleração que
            redesenha processos, integra pessoas e instala cultura de eficiência com IA. Sem precisar
            trocar seus sistemas atuais nem contratar um monte de gente com altos salários.
          </p>

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Button
              asChild
              className="inline-flex items-center rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(47,118,255,.25)] sm:text-lg"
            >
              <Link href="/form" id="cta-hero" data-cta="lead" data-track="true">
                Quero meu Diagnóstico
              </Link>
            </Button>
            <p className="text-sm italic text-slate-300 sm:text-base">
              O futuro das empresas eficientes é sob medida. A sua também pode ser.
            </p>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="flex justify-center lg:col-span-6 xl:col-span-7 lg:h-full lg:items-end lg:justify-end">
          <img
            src="/jorge3.webp"
            alt="Retrato de Jorge Auad"
            className="h-auto w-auto max-h-[55vh] object-contain object-bottom sm:max-h-[60vh] md:max-h-[65vh] lg:max-h-[70vh] xl:max-h-[75vh] 2xl:max-h-[78vh]"
          />
        </div>
      </div>
    </section>
  );
}