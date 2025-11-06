"use client";

import React from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { sectionContainerClass } from "@/components/home/section-container";

export function ObrigadoFooter() {
  return (
    <footer className="bg-slate-950 pb-12 pt-8 text-slate-300">
      <div className={`${sectionContainerClass} items-center justify-between gap-6`}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-semibold text-white">
            V
          </div>
          <div className="text-base font-semibold text-white">VanguardIA</div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="rounded-md p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <Youtube className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        “Eficiência que liberta.”
      </div>
    </footer>
  );
}

export default ObrigadoFooter;