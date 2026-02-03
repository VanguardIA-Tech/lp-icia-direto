import { sectionContainerClass } from "./section-container"
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid"
import testimonials from "@/data/testimonials.json"

export function TestimonialsGridSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-24">
      <div className={`${sectionContainerClass} gap-10`}>
        <h2 className="text-center text-2xl font-semibold leading-snug text-slate-50 sm:text-3xl">
          Veja depoimentos de quem está transformando seus resultados com ICIA.
        </h2>

        <p className="max-w-3xl text-center text-base leading-relaxed text-slate-300 sm:text-lg">
          Ouça histórias reais de profissionais e empresas que implementaram nossas soluções com IA e conquistaram resultados mensuráveis.
        </p>

        <div className="mt-8">
          <TestimonialsGrid items={testimonials} />
        </div>
      </div>
    </section>
  )
}
