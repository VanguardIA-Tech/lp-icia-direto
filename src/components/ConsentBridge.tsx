"use client";
import { useEffect } from "react";
import { setConsent, applyDefensiveMasking } from "@/lib/privacy";

declare global {
  interface Window {
    __consentGrant?: () => void;
    __consentDeny?: () => void;
  }
}

export default function ConsentBridge() {
  useEffect(() => {
    const mode = (process.env.NEXT_PUBLIC_CLARITY_CONSENT_MODE || "implied").toLowerCase();

    // 1) Política de consentimento
    if (mode === "explicit") {
      // Inicia bloqueado até o banner liberar
      setConsent("denied");
    }
    // Expor funções globais para o banner
    window.__consentGrant = () => setConsent("granted");
    window.__consentDeny  = () => setConsent("denied");

    // 2) Masking defensivo no primeiro carregamento
    applyDefensiveMasking(document);

    // 3) (Opcional) Masking futuro: observar mutações que inserem novos campos
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.addedNodes && m.addedNodes.length) {
          m.addedNodes.forEach((n) => {
            if (n instanceof HTMLElement) applyDefensiveMasking(n);
          });
        }
      }
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      delete window.__consentGrant;
      delete window.__consentDeny;
    };
  }, []);

  return null;
}