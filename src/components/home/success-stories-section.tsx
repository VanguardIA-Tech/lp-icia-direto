import { Building2 } from "lucide-react";
import { sectionContainerClass } from "./section-container";

const successStories = [
  {
    title: "Rede Mais Saúde",
    result: "Redução de 25 dias para 3 dias em processos internos.",
  },
  {
    title: "Do It Hub",
    result: "Operação comercial multiplicada por 3 em 60 dias.",
  },
  {
    title: "Silveira Athias",
    result: "Escritório jurídico com cultura de IA instalada em toda a equipe.",
  },
] as const;

export function SuccessStoriesSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <h2 className="text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl">
          Empresas que já transformaram seus resultados com o ICIA.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map(({ title, result }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-blue-300" />
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
              </div>
              <p className="text-sm text-slate-200">{result}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-slate-300 sm:text-lg">
          São empresas que decidiram parar de improvisar e começaram a operar com sistemas sob medida — criados pela VanguardIA.
        </p>
      </div>
    </section>
  );
}