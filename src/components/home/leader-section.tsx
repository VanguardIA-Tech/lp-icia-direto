import Image from "next/image";
import { sectionContainerClass } from "./section-container";

export function LeaderSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-8`}>
        {/* Grid com proporções controladas: texto ~60/58% e imagem ~40/42% */}
        <div className="grid gap-10 md:[grid-template-columns:62%_38%] lg:[grid-template-columns:58%_42%]">
          {/* Coluna esquerda: hierarquia e ritmo */}
          <div className="space-y-5 sm:space-y-6 max-w-prose">
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Quem lidera o movimento de Eficiência Inteligente no Brasil.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed sm:text-lg">
              Empresário e estrategista, Jorge Antonio Auad Filho é fundador do Grupo VanguardIA — a primeira aceleradora empresarial de IA do Norte do Brasil. Reconhecido por sua abordagem prática e humana, já ajudou centenas de negócios a dobrarem sua eficiência e margem. Criador dos métodos CNH da IA, COPA e CTC, que hoje formam a base do movimento Eficiência que Liberta.
            </p>
            <p className="text-base italic text-slate-200">
              “IA não substitui pessoas. Liberta o potencial delas.”
            </p>
          </div>

          {/* Coluna direita: imagem ancorada pela base, sem borda/sombra */}
          <div className="relative flex items-end justify-center md:justify-end">
            <div className="mt-8 w-full max-w-[360px] sm:mx-auto sm:max-w-[420px] md:mt-0 md:max-w-none">
              <Image
                src="/jorge.webp"
                alt="Jorge Antonio Auad Filho"
                width={800}
                height={1000}
                loading="lazy"
                sizes="(min-width: 1280px) 42vw, (min-width: 768px) 38vw, 90vw"
                className="h-auto w-full rounded-2xl object-contain object-bottom"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}