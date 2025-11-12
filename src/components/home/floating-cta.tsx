"use client";

import { Button } from "@/components/ui/button";
import { useFloatingCta } from "@/hooks/use-floating-cta";
import Link from "next/link";

export function FloatingCta() {
  const isVisible = useFloatingCta();

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50 transform-gpu bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 backdrop-blur-sm
        transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      <div className="mx-auto flex max-w-7xl justify-center px-4 sm:justify-end sm:px-6 lg:px-8">
        <Button
          asChild
          className="
            h-14 rounded-md bg-orange-500 px-6 text-base font-semibold text-white
            shadow-lg shadow-orange-500/30 transition-all duration-300
            hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(255,122,24,.25)]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400
            focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950
            active:scale-[0.98]
          "
        >
          <Link
            href="/form"
            id="cta-floating"
            data-cta="lead"
            data-track="true"
          >
            Quero meu Diagnóstico Gratuito
          </Link>
        </Button>
      </div>
    </div>
  );
}