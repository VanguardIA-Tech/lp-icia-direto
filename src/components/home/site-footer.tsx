import { sectionContainerClass } from "./section-container";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-10 text-slate-300">
      <div className={`${sectionContainerClass} items-center justify-between gap-6 text-sm`}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold text-white">
            V
          </div>
          <div className="text-base font-semibold text-white">VanguardIA</div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-slate-400">
          <span>Contato</span>
          <span>Endereço</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
      <div className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        “VanguardIA — Inteligência Aplicada à Prosperidade.”
      </div>
    </footer>
  );
}