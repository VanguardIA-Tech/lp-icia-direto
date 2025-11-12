import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PainPointsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seus desafios, nossa solução
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Entendemos as dores de gerenciar uma frota. Veja como podemos
            transformar sua operação.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            {/* Pain Point 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Alto Custo de Combustível
              </h3>
              <p className="text-gray-600">
                Monitoramento ineficiente leva a desvios e consumo excessivo.
                Nossa plataforma otimiza rotas e monitora o comportamento do
                motorista.
              </p>
            </div>

            {/* Pain Point 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Manutenção Imprevisível
              </h3>
              <p className="text-gray-600">
                A falta de dados em tempo real resulta em quebras inesperadas e
                custos altos. Receba alertas preditivos e gerencie a manutenção
                preventiva.
              </p>
            </div>

            {/* Pain Point 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Segurança e Risco
              </h3>
              <p className="text-gray-600">
                Comportamento de direção arriscado aumenta acidentes. Avalie e
                treine seus motoristas com base em dados concretos de direção.
              </p>
            </div>
          </div>

          <Link
            href="/demonstracao"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-5 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <span className="hidden sm:inline">
              Quero agendar uma demonstração
            </span>
            <span className="sm:hidden">
              Quero agendar
              <br />
              uma demonstração
            </span>
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}