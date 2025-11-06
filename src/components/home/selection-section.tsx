import { Users, Lightbulb, ShieldCheck } from "lucide-react";
import { sectionContainerClass } from "./section-container";

const selectionCriteria = [
  {
    icon: Users,
    title: "+30 colaboradores",
    description: "Operações com escala suficiente para grandes ganhos de eficiência.",
  },
  {
    icon: Lightbulb,
    title: "Mentalidade de crescimento e inovação constantes",
    description: "Empresas que enxergam tecnologia como estratégia, não como custo.",
  },
  {
    icon: ShieldCheck,
    title: "Comprometimento com transformação",
    description: "Executivos e líderes prontos para implementar mudanças reais.",
  },
] as const;

export function SelectionCriteriaSection() {
  return (
    <section className="bg-slate-900 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <div className="max-w-4xl space-y-4">
          <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
            100% das empresas são criteriosamente selecionadas.
          </h2>
          <p className="text-base text-slate-300 sm:text-lg">
            Fazemos o que ninguém no Brasil faz. E fazemos com autoridade e provas reais do que funciona
            para empresas sérias e consolidadas. Por isso, poucos e bons (muito bons) recebem nossa
            alfaiataria de tecnologia com IA para processos eficientes e negócios ainda mais duradouros.
          </p>
          <p className="text-base text-slate-300 sm:text-lg">
            O ICIA é um programa de aceleração com vagas limitadas. Selecionamos apenas empresas
            comprometidas com inovação real e abertura para aplicar IA de forma prática e estratégica.
            Nosso foco é performance e margem líquida, não complexidade técnica.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectionCriteria.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="h-full rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-sm shadow-blue-500/5 transition-colors hover:border-slate-700"
            >
              <div className="flex h-full flex-col gap-3">
                <Icon className="h-8 w-8 text-blue-400" />
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                <p className="text-sm text-slate-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}