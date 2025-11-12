import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
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

      <div className="relative z-10 mx-auto h-full min-h-0 w-full px-6 py-4 flex flex-col justify-center gap-6 sm:gap-8 sm:py-6 lg:grid lg:h-full lg:grid-cols-[40%_60%] lg:items-center lg:gap-10 lg:px-24 lg:py-0 xl:px-32">
        {/* Coluna esquerda: ocupa 40% */}
        <div className="flex w-full flex-col gap-4 text-center sm:text-left">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Transforme sua operação com{" "}
            <span className="text-orange-400">sistemas personalizados de IA</span> e automação
            integrados à sua realidade.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl text-slate-200">
            O Programa ICIA (Inteligência Corporativa Integrada com Automação) é a aceleração que
            redesenha processos, integra pessoas e instala cultura de eficiência com IA. Sem precisar
            trocar seus sistemas atuais nem contratar um monte de gente com altos salários.
          </p>
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <Button
              asChild
              className="rounded-md bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
            >
              <Link href="/form" id="cta-hero" data-cta="lead" data-track="true">
                Quero meu Diagnóstico
              </Link>
            </Button>
            <p className="mt-1 text-sm italic text-slate-300 md:text-base">
              O futuro das empresas eficientes é sob medida. A sua também pode ser.
            </p>
          </div>
        </div>

        {/* Coluna direita: ocupa 60%, imagem até 90% da altura */}
        <div className="flex w-full justify-center lg:justify-end">
          <img
            src="/jorge3.webp"
            alt="Retrato de Jorge Auad"
            className="h-[70%] sm:h-[75%] md:h-[80%] lg:h-[85%] xl:h-[90%] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}