# 🚀 Guia de Implementação SEO - VanguardIA

## ✅ O que foi implementado

### 1. **Configuração Centralizada** (`src/config/seo-config.ts`)
Arquivo único com todas as configurações de SEO:
- Informações do site (título, descrição, URL)
- Dados da empresa
- Keywords (palavras-chave)
- Configurações por página (home, form, obrigado)
- URLs de redes sociais

**Vantagens:**
- Fácil manutenção
- Type-safe (TypeScript)
- Reutilizável
- Single source of truth

---

### 2. **Metadata Completa no Layout** (`src/app/layout.tsx`)
Implementado no layout principal:
- ✅ Title template (títulos dinâmicos)
- ✅ Description
- ✅ Keywords
- ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
- ✅ Twitter Cards
- ✅ Robots (index, follow)
- ✅ Authors e Creator
- ✅ metadataBase (base URL)
- ✅ Canonical URL

**O que isso faz:**
- Melhora compartilhamento em redes sociais
- Cards visuais bonitos no WhatsApp/Facebook/LinkedIn
- Controle de indexação do Google
- Evita conteúdo duplicado

---

### 3. **Metadata por Página**
Cada página tem sua própria metadata otimizada:

**Home (`src/app/page.tsx`):**
- Title: "VanguardIA — Eficiência Inteligente para Empresas"
- Keywords focadas em programa ICIA, IA empresarial
- robots: index + follow (máxima visibilidade)

**Formulário (`src/app/form/page.tsx`):**
- Title: "Diagnóstico de Eficiência e IA — VanguardIA"
- Keywords focadas em diagnóstico, análise
- robots: index + follow

**Obrigado (`src/app/obrigado/page.tsx`):**
- Title: "Obrigado — Diagnóstico Enviado | VanguardIA"
- Keywords de confirmação
- robots: **noindex** + follow (não aparece no Google, evita tráfego indesejado)

---

### 4. **Dados Estruturados JSON-LD** (`src/app/layout.tsx`)
Implementados 2 schemas do Schema.org:

**a) Organization Schema:**
```json
{
  "@type": "Organization",
  "name": "VanguardIA",
  "url": "https://icia.vanguardia.cloud",
  "logo": "...",
  "description": "...",
  "contactPoint": {...},
  "sameAs": ["linkedin", "instagram", "youtube"]
}
```

**b) WebSite Schema:**
```json
{
  "@type": "WebSite",
  "name": "VanguardIA",
  "url": "https://icia.vanguardia.cloud",
  "description": "...",
  "publisher": {...}
}
```

**O que isso faz:**
- Google entende melhor sua empresa
- Pode aparecer em rich snippets (resultados visuais)
- Melhor ranking
- Knowledge Graph do Google

---

### 5. **Sitemap.xml** (`src/app/sitemap.ts`)
Geração dinâmica de sitemap com todas as páginas:
- Home (prioridade 1.0, weekly)
- /form (prioridade 0.8, monthly)
- /obrigado (prioridade 0.3, monthly)

**O que isso faz:**
- Google descobre todas as páginas
- Velocidade de indexação
- Priorização de conteúdo
- **Acesse em:** `https://seu-dominio.com/sitemap.xml`

---

### 6. **Robots.txt** (`src/app/robots.ts`)
Configuração de rastreamento:
- Permite todos os bots (`User-agent: *`)
- Permite todas as páginas (`Allow: /`)
- Bloqueia rotas sensíveis (`/api/`, `/admin/`)
- Referencia o sitemap

**O que isso faz:**
- Controla o que Google pode rastrear
- Evita desperdício de crawl budget
- Referencia sitemap.xml
- **Acesse em:** `https://seu-dominio.com/robots.txt`

---

## 📋 Checklist de Próximos Passos

### ⚠️ CRÍTICO (Fazer AGORA)

- [ ] **Atualizar URL do site** em `src/config/seo-config.ts`:
  ```typescript
  url: "https://icia.vanguardia.cloud", // Trocar pela URL real
  ```

- [ ] **Criar imagem Open Graph** (`public/og-image.png`):
  - Tamanho: **1200x630px**
  - Formato: PNG ou JPG
  - Peso: < 300KB (ideal)
  - Conteúdo sugerido:
    - Logo VanguardIA
    - Texto: "Eficiência Inteligente com IA"
    - Background atrativo
  - **Ferramentas:** Canva, Figma, Photoshop
  - **Templates:** [og-image.gallery](https://og-image.gallery)

- [ ] **Adicionar telefone real** em `src/config/seo-config.ts`:
  ```typescript
  phone: "+55 11 99999-9999", // Substituir
  ```

### 🔗 IMPORTANTE (Fazer essa semana)

- [ ] **Atualizar URLs de redes sociais** em `src/config/seo-config.ts`:
  ```typescript
  social: {
    linkedin: "https://linkedin.com/company/vanguardia-real",
    instagram: "https://instagram.com/vanguardia_real",
    youtube: "https://youtube.com/@vanguardia_real",
    twitter: "@vanguardia_real",
  }
  ```

- [ ] **Validar implementação** (ver seção abaixo)

- [ ] **Testar compartilhamento** em WhatsApp, LinkedIn, Facebook

### 📊 RECOMENDADO (Fazer este mês)

- [ ] Adicionar Google Search Console
- [ ] Adicionar Google Analytics 4
- [ ] Configurar conversões no GA4
- [ ] Monitorar indexação
- [ ] Criar backlinks (LinkedIn, diretórios, etc.)

---

## 🧪 Como Validar (Ferramentas de Teste)

### 1. **Open Graph (Facebook/WhatsApp/LinkedIn)**
🔗 https://www.opengraph.xyz/
- Cole a URL do site
- Verifique se imagem, título e descrição aparecem corretamente

### 2. **Twitter Cards**
🔗 https://cards-dev.twitter.com/validator
- Cole a URL do site
- Valide preview do Twitter

### 3. **Rich Results Test (Google)**
🔗 https://search.google.com/test/rich-results
- Cole a URL do site
- Verifica JSON-LD schemas
- Mostra erros se houver

### 4. **Schema Validator**
🔗 https://validator.schema.org/
- Cole o código JSON-LD
- Valida sintaxe Schema.org

### 5. **Mobile-Friendly Test**
🔗 https://search.google.com/test/mobile-friendly
- Testa responsividade
- Google prioriza mobile

### 6. **PageSpeed Insights**
🔗 https://pagespeed.web.dev/
- Testa velocidade
- Performance afeta SEO
- Verifique Core Web Vitals

### 7. **Verificar Sitemap e Robots**
- Acesse: `https://seu-dominio.com/sitemap.xml`
- Acesse: `https://seu-dominio.com/robots.txt`
- Devem retornar conteúdo correto

---

## 📖 Como Atualizar SEO

### Mudança de título/descrição de uma página
```typescript
// src/config/seo-config.ts
pages: {
  home: {
    title: "Novo Título Aqui",
    description: "Nova descrição aqui",
  }
}
```

### Adicionar nova página
```typescript
// 1. Adicionar config em seo-config.ts
pages: {
  novaPagina: {
    title: "Título da Nova Página",
    description: "Descrição...",
    path: "/nova-pagina",
    keywords: ["keyword1", "keyword2"] as string[],
    robots: { index: true, follow: true },
  }
}

// 2. Adicionar no sitemap.ts
{
  url: `${baseUrl}/nova-pagina`,
  lastModified: currentDate,
  changeFrequency: "monthly",
  priority: 0.7,
}

// 3. Adicionar metadata na página
import { Metadata } from "next";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  title: seoConfig.pages.novaPagina.title,
  description: seoConfig.pages.novaPagina.description,
  // ... resto
};
```

### Mudar keywords globais
```typescript
// src/config/seo-config.ts
seo: {
  keywords: [
    "nova keyword 1",
    "nova keyword 2",
    // ...
  ] as string[],
}
```

---

## 🎯 Impacto Esperado

### Curto Prazo (1-2 semanas)
- ✅ Compartilhamentos em redes sociais com cards visuais
- ✅ Google indexa todas as páginas via sitemap
- ✅ Titles e descriptions aparecem corretamente no Google

### Médio Prazo (1-2 meses)
- 📈 Melhoria no ranking de keywords específicas
- 📈 Aumento de CTR (taxa de cliques) nos resultados
- 📈 Possível aparecimento em rich snippets

### Longo Prazo (3-6 meses)
- 🚀 Autoridade de domínio aumenta
- 🚀 Tráfego orgânico cresce
- 🚀 Conversões de SEO aumentam

---

## ❓ FAQ

**Q: Preciso fazer algo no código agora?**  
A: Apenas atualizar a URL do site em `seo-config.ts` e criar a imagem `og-image.png`.

**Q: Como sei se está funcionando?**  
A: Use as ferramentas de validação listadas acima. Compartilhe uma URL no WhatsApp e veja se aparece o card visual.

**Q: Quanto tempo até aparecer no Google?**  
A: 1-2 semanas após deploy. Use Google Search Console para acelerar.

**Q: Posso mudar os textos depois?**  
A: Sim! Basta editar `src/config/seo-config.ts` e fazer redeploy.

**Q: Preciso pagar por SEO?**  
A: Não. A implementação técnica está completa. Investimento seria em conteúdo, backlinks ou anúncios.

---

## 📚 Recursos Adicionais

- [Next.js Metadata Docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Guide](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

## 🎉 Conclusão

Seu site agora possui SEO técnico **profissional** e **completo**:
- ✅ Metadata otimizada
- ✅ Open Graph e Twitter Cards
- ✅ Dados estruturados Schema.org
- ✅ Sitemap.xml e robots.txt
- ✅ Configuração centralizada e reutilizável

**Próximos passos:** Atualizar URL real, criar imagem OG, validar com as ferramentas e fazer deploy!
