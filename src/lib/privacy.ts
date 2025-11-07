"use client";

type ClarityFn = ((...a:any[])=>void) | undefined;

function c(): ClarityFn {
  return (typeof window !== "undefined" ? (window as any).clarity : undefined);
}

/* --- Consent API --- */
export function setConsent(status: "granted"|"denied") {
  const fn = c();
  if (!fn) return;
  fn("consent", status);
}

/* --- Guardas anti-PII (email/CPF/telefone) --- */
const reEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const reCPF   = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;         // formatos comuns
const reTel   = /^\+?\d[\d\s().-]{7,}$/;                  // genérico

export function containsPII(v: string): boolean {
  const s = (v || "").toLowerCase();
  return reEmail.test(s) || reCPF.test(s) || reTel.test(s);
}

/* Wrappers seguros para evitar PII inadvertido */
export function claritySetSafe(key: string, val: string) {
  if (containsPII(val)) return; // bloqueia envios sensíveis
  const fn = c(); if (!fn) return;
  fn("set", key, val);
}

export function clarityEventSafe(name: string) {
  if (containsPII(name)) return;
  const fn = c(); if (!fn) return;
  fn("event", name);
}

/* --- Masking defensivo --- 
   Clarity mascara inputs por padrão; aqui reforçamos e padronizamos.
*/
export function applyDefensiveMasking(root: Document | HTMLElement = document) {
  const SENSITIVE_SELECTORS = [
    'input[type="email"]',
    'input[type="tel"]',
    'input[type="text"][name*="cpf" i]',
    'input[type="password"]',
    'input[type="number"]',
    "textarea"
  ];
  const nodes = root.querySelectorAll(SENSITIVE_SELECTORS.join(","));
  nodes.forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    if (el.hasAttribute("data-clarity-unmask")) return; // exceção explícita
    el.setAttribute("data-clarity-mask", "true");
  });

  // Reforço por formulário inteiro se marcado
  const forms = root.querySelectorAll("form[data-clarity-mask='true']");
  forms.forEach((f) => {
    const inputs = f.querySelectorAll("input, textarea");
    inputs.forEach((i) => (i as HTMLElement).setAttribute("data-clarity-mask", "true"));
  });
}