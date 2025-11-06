import Image from "next/image";
import { sectionContainerClass } from "./section-container";

export function LeaderSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-8`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              Quem lidera o movimento de Eficiência Inteligente no Brasil.
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              Empresário e estrategista, Jorge Antonio Auad Filho é fundador do Grupo VanguardIA — a primeira aceleradora empresarial de IA do Norte do Brasil. Reconhecido por sua abordagem prática e humana, já ajudou centenas de negócios a dobrarem sua eficiência e margem. Criador dos métodos CNH da IA, COPA e CTC, que hoje formam a base do movimento Eficiência que Liberta.
            </p>
            <p className="text-lg italic text-slate-100">
              “IA não substitui pessoas. Liberta o potencial delas.”
            </p>
          </div>

          {/* Imagem ancorada pela base, sem moldura de card */}
          <div className="relative flex items-end justify-center lg:justify-end">
            <div className="mt-8 w-full max-w-xs sm:mx-auto sm:max-w-sm md:max-w-md lg:mt-0 lg:max-w-[420px] xl:max-w-[520px]">
              <Image
                src="/jorge.webp"
                alt="Jorge Antonio Auad Filho"
                width={800}
                height={1000}
                loading="lazy"
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 420px, (min-width: 768px) 380px, 280px"
                className="h-auto w-full rounded-2xl object-contain object-bottom shadow-lg shadow-slate-900/30"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}