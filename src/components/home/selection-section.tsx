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
      <div className={`${sectionContainerClass} gap-8`}>
        <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
          100% das empresas são criteriosamente selecionadas. <br />
          Fazemos o que ninguém no Brasil faz. E fazemos com autoridade e provas reais do que funciona para empresas sérias e consolidadas. <br />
          Por isso, poucos e bons (muito bons) recebem nossa alfaiataria de tecnologia com IA para processos eficientes e negócios ainda mais duradouros.
        </h2>
        <p className="max-w-3xl text-base text-slate-300 sm:text-lg">
          O ICIA é um programa de aceleração com vagas limitadas. Selecionamos apenas empresas comprometidas com inovação real e abertura para aplicar IA de forma prática e estratégica. Nosso foco é performance e margem líquida, não complexidade técnica.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectionCriteria.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-sm shadow-blue-500/5"
            >
              <Icon className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}