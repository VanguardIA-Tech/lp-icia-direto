import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { sectionContainerClass } from "./section-container";

const painPoints = [
  "Processos lentos, manuais e repetitivos.",
  "Softwares caros que não conversam entre si.",
  "Equipes sobrecarregadas e desalinhadas.",
  "Retrabalho e gargalos entre áreas.",
  "Falta de tempo para pensar e inovar.",
] as const;

type PainPointsSectionProps = {
  onPrimaryClick: () => void;
};

export function PainPointsSection({ onPrimaryClick }: PainPointsSectionProps) {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-10 items-center`}>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl">
            “Você sente que sua empresa trabalha demais para entregar bem menos do que poderia?”
          </h2>

          {/* Grid pequeno de cards com ícone + texto (melhora scanability) */}
          <div className="grid gap-3 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/60 p-4 transition hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-800/20 text-blue-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-sm text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA e prova social alinhados verticalmente */}
        <div className="flex w-full max-w-md flex-col items-start gap-4">
          <Button
            type="button"
            onClick={onPrimaryClick}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform hover:scale-[1.02] sm:w-auto"
            aria-label="Quero resolver isso agora"
          >
            Quero resolver isso agora
            <ArrowRight className="h-4 w-4" />
          </Button>

          {/* Linha de prova social discreta */}
          <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-block rounded-full bg-slate-800/40 px-2 py-1 text-slate-200">
              +30
            </span>
            <span>empresas já aplicaram nosso método com resultados reais</span>
          </div>
        </div>
      </div>
    </section>
  );
}