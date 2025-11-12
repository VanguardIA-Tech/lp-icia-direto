import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PainPointsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Seus desafios de gestão de projetos acabam aqui.
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Pare de perder tempo com planilhas desorganizadas e ferramentas
            complexas. O Dyad simplifica a gestão, permitindo que você se
            concentre no que realmente importa: entregar resultados.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/agendar-demonstracao"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              <span className="hidden sm:inline">
                Quero agendar uma demonstração
              </span>
              <span className="sm:hidden">
                Quero agendar
                <br />
                uma demonstração
              </span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}