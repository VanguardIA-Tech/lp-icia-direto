import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import { sectionContainerClass } from "./section-container";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
];

const navLinks = [
  { name: "Contato", href: "/form" },
  { name: "Política de Privacidade", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className={`${sectionContainerClass} py-12 md:py-16`}>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
          {/* Coluna A: Logo e Descrição */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block" aria-label="Página Inicial da VanguardIA">
              <Image
                src="/vanguardia-logo.png"
                alt="VanguardIA Logo"
                width={150}
                height={32}
                className="mx-auto h-8 w-auto md:mx-0"
                priority={false}
              />
            </Link>
            <p className="mx-auto mt-4 max-w-xs text-sm text-slate-400 md:mx-0">
              IA e automação sob medida para empresas que buscam eficiência real.
            </p>
          </div>

          {/* Coluna B: Navegação */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-sm text-slate-300 transition-colors hover:text-blue-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna C: Redes Sociais */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              Siga-nos
            </h3>
            <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            “VanguardIA — Inteligência Aplicada à Prosperidade.”
          </p>
        </div>
      </div>
    </footer>
  );
}