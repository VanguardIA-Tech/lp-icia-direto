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
    <section className="bg-white py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            “Você sente que sua empresa trabalha demais para entregar bem menos do que poderia?”
          </h2>
          <ul className="space-y-4 text-base text-slate-700 sm:text-lg">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1.5 h-5 w-5 flex-none text-blue-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          type="button"
          onClick={onPrimaryClick}
          variant="outline"
          className="inline-flex w-fit items-center gap-2 rounded-full border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
        >
          Quero resolver isso agora
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}