/**
 * Configuração Centralizada de SEO
 * 
 * Este arquivo centraliza todas as informações de SEO do site,
 * facilitando manutenção e garantindo consistência.
 */

export const seoConfig = {
  // Informações do Site
  site: {
    name: "VanguardIA",
    title: "VanguardIA — Eficiência Inteligente para Empresas",
    description:
      "Transforme sua operação com sistemas personalizados de IA e automação integrados à sua realidade. O Programa ICIA da VanguardIA acelera empresas de 30 a 1000 colaboradores sem trocar seus sistemas atuais.",
    url: "https://icia.vanguardiagrupo.com.br/", // URL real em produção
    language: "pt-BR",
    locale: "pt_BR",
  },

  // Informações da Empresa
  company: {
    name: "VanguardIA",
    legalName: "VanguardIA Tecnologia Ltda",
    description:
      "A VanguardIA é a aceleradora empresarial de IA que implementa cultura de Inteligência Artificial e automação transversal. Especializada em empresas de médio porte, une o programa ICIA e a certificação CNH da IA para gerar eficiência, integração de sistemas e aumento de margem.",
    email: "contato@vanguardia.cloud",
    phone: "+55 11 99999-9999", // TODO: Adicionar telefone real
  },

  // SEO
  seo: {
    // Keywords principais (8-15 palavras-chave)
    keywords: [
      "programa de aceleração empresarial com IA",
      "inteligência artificial corporativa",
      "cultura de IA e automação",
      "automação empresarial sob medida",
      "IA para empresas de médio porte",
      "eficiência operacional com IA",
      "consultoria em inteligência artificial",
      "implementação de IA no Brasil",
      "diagnóstico de eficiência com IA",
      "integração de sistemas com IA",
      "otimização de processos empresariais",
      "sistemas personalizados com IA",
      "automação de processos corporativos",
      "transformação digital com IA",
      "VanguardIA ICIA",
    ] as string[],

    // Imagens para compartilhamento social
    ogImage: "/og-image.png", // TODO: Criar imagem 1200x630px
    logo: "/android-chrome-512x512-dark.png",

    // Redes sociais (TODO: Adicionar URLs reais)
    social: {
      linkedin: "https://br.linkedin.com/company/grupovanguardiabr",
      instagram: "https://www.instagram.com/grupovanguard.ia/",
      youtube: "https://www.youtube.com/@VanguardiaGrupo",
      // Sem Twitter no momento
    },
  },

  // Configurações por Página
  pages: {
    home: {
      title: "VanguardIA — Eficiência Inteligente para Empresas",
      description:
        "Programa ICIA da VanguardIA: IA e automação sob medida para empresas de 30 a 1000 colaboradores. Transforme processos, reduza custos e aumente a produtividade com inteligência artificial.",
      path: "/",
      keywords: [
        "programa ICIA",
        "inteligência artificial empresarial",
        "automação sob medida",
        "consultoria IA Brasil",
        "transformação digital empresas",
        "eficiência operacional IA",
      ] as string[],
      robots: {
        index: true,
        follow: true,
      },
    },
    form: {
      title: "Diagnóstico de Eficiência e IA — VanguardIA",
      description:
        "Solicite um diagnóstico personalizado e descubra quanto tempo e margem sua empresa pode recuperar com IA. Análise em até 48h por especialistas VanguardIA.",
      path: "/form",
      keywords: [
        "diagnóstico de eficiência",
        "análise empresarial IA",
        "consultoria gratuita IA",
        "avaliação de processos",
        "diagnóstico automação",
      ] as string[],
      robots: {
        index: true,
        follow: true,
      },
    },
    obrigado: {
      title: "Obrigado — Diagnóstico Enviado | VanguardIA",
      description:
        "Sua solicitação foi recebida! Nossa equipe entrará em contato em breve com seu diagnóstico personalizado de eficiência com IA.",
      path: "/obrigado",
      keywords: [
        "confirmação diagnóstico",
        "solicitação recebida",
        "próximos passos IA",
      ] as string[],
      robots: {
        index: false, // Página de conversão não deve ser indexada
        follow: true,
      },
    },
  },
} as const;

// Tipos TypeScript para autocomplete
export type SeoPageKey = keyof typeof seoConfig.pages;
