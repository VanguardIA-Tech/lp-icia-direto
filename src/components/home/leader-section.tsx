import { ShieldCheck } from "lucide-react";
import { sectionContainerClass } from "./section-container";

export function LeaderSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-8`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Quem lidera o movimento de Eficiência Inteligente no Brasil.
            </h2>
            <p className="text-base text-slate-700 sm:text-lg">
              Empresário e estrategista, Jorge Antonio Auad Filho é fundador do Grupo VanguardIA — a primeira aceleradora empresarial de IA do Norte do Brasil. Reconhecido por sua abordagem prática e humana, já ajudou centenas de negócios a dobrarem sua eficiência e margem. Criador dos métodos CNH da IA, COPA e CTC, que hoje formam a base do movimento Eficiência que Liberta.
            </p>
            <p className="text-lg italic text-slate-900">
              “IA não substitui pessoas. Liberta o potencial delas.”
            </p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative h-full w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-slate-200" />
              <div className="relative space-y-6 text-slate-800">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Bastidores VanguardIA
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">Eficiência que Liberta</h3>
                </div>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>
                    Mentorias executivas, squads de automação e laboratórios internos conectando líderes e tecnologia.
                  </p>
                  <p>
                    Cultura de dados, processos enxutos e IA aplicada para gerar margem e escala sustentável.
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-xs font-medium uppercase tracking-widest text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  VanguardIA — Inteligência Aplicada à Prosperidade
                </div>
              </div>
            </div>
            <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}