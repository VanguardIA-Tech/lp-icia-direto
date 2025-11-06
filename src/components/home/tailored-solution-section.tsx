import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Gauge, Sparkles, ShieldCheck } from "lucide-react";
import { sectionContainerClass } from "./section-container";
import Link from "next/link";

const differentiators = [
  {
    icon: Workflow,
    title: "Fluxos mapeados",
    description: "Diagnóstico detalhado e co-criação com quem executa os processos.",
  },
  {
    icon: Gauge,
    title: "Eficiência contínua",
    description: "Sistemas adaptativos que evoluem com a operação sem travar o time.",
  },
  {
    icon: Sparkles,
    title: "IA integrada",
    description: "Automação inteligente conectada aos sistemas que você já usa.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e governança",
    description: "Implementações alinhadas à cultura, compliance e ritmo da empresa.",
  },
] as const;

export function TailoredSolutionSection() {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className={`${sectionContainerClass} gap-8`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
              A Alfaiataria de IA que cria sistemas sob medida para o seu negócio.
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              Diferente de ERPs e plataformas genéricas, nós desenhamos sistemas personalizados e integrados com IA e automação, totalmente adaptados ao seu fluxo real. Cada empresa passa por um diagnóstico profundo, mapeamento de processos e prototipagem de soluções. Ao final, você ganha um “Sistema Vivo de Eficiência”: tecnologia que se adapta às pessoas e a sua empresa, e não o contrário. Exatamente o que você nunca tinha encontrado, mas sabe que é o que faltava.
            </p>
            <Button
              asChild
              className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-500"
            >
              <Link href="/form">
                Quero entender o método
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {differentiators.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <Icon className="h-7 w-7 text-blue-400" />
                <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
                <p className="text-sm text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}