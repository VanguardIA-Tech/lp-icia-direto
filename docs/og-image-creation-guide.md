# 🎨 Guia de Criação da Imagem Open Graph

## 📐 Especificações Técnicas

### Dimensões Obrigatórias
- **Largura:** 1200px
- **Altura:** 630px
- **Proporção:** 1.91:1
- **Formato:** PNG ou JPG
- **Peso:** < 1MB (ideal < 300KB)
- **Local:** `public/og-image.png`

### Por que essas dimensões?
Essas são as dimensões recomendadas pelo Facebook/Open Graph. São usadas por:
- Facebook
- LinkedIn
- WhatsApp
- Twitter (com adaptação)
- Discord
- Slack

---

## 🎯 O que incluir na imagem

### Elementos Essenciais

1. **Logo da VanguardIA**
   - Posição: Canto superior esquerdo ou centro
   - Tamanho: Visível mas não dominante
   - Cor: Versão clara ou escura dependendo do background

2. **Headline Principal**
   - Texto: "Eficiência Inteligente com IA" ou similar
   - Font: Grande e legível (60-80px)
   - Peso: Bold/ExtraBold
   - Cor: Alto contraste com background

3. **Subtítulo (opcional)**
   - Texto: "Programa ICIA - VanguardIA"
   - Font: Média (30-40px)
   - Peso: Medium/SemiBold

4. **Call to Action Visual (opcional)**
   - Exemplo: "100 empresas em 2026"
   - Ou: "Diagnóstico em 48h"

5. **Background**
   - Cores da marca (azul/laranja do site)
   - Gradiente ou sólido
   - Textura sutil (opcional)
   - **Evitar:** Imagens com muito detalhe que não reduzem bem

### Elementos a Evitar
- ❌ Texto muito pequeno (< 30px)
- ❌ Muita informação (keep it simple)
- ❌ Cores de baixo contraste
- ❌ Fotos genéricas de stock
- ❌ Elementos fora da safe zone

---

## 📏 Safe Zones (Zonas Seguras)

Diferentes plataformas cortam a imagem de formas diferentes:

### Facebook Feed
- **Corte:** 1.91:1 (mostra tudo)
- **Safe zone:** Toda imagem

### WhatsApp
- **Corte:** 1:1 (quadrado no centro)
- **Safe zone:** Centro 630x630px

### LinkedIn
- **Corte:** 1.91:1 (mostra tudo)
- **Safe zone:** Toda imagem

### Twitter
- **Corte:** 2:1 ou 1:1 dependendo do card
- **Safe zone:** Centro 600x600px

**Recomendação:** Mantenha elementos importantes no **centro** 800x500px.

---

## 🛠️ Ferramentas Recomendadas

### Online (Grátis)

1. **Canva**
   - 🔗 https://canva.com
   - Templates prontos
   - Fácil de usar
   - **Buscar:** "Open Graph" ou "Social Media Post 1200x630"

2. **Figma**
   - 🔗 https://figma.com
   - Mais controle
   - Colaborativo
   - Grátis para uso pessoal

3. **OG Image Playground**
   - 🔗 https://og-playground.vercel.app/
   - Gera imagens com código
   - Bom para desenvolvedores

### Desktop

4. **Photoshop**
   - Profissional
   - Controle total

5. **GIMP**
   - Grátis
   - Alternativa ao Photoshop

---

## 🎨 Paleta de Cores VanguardIA

Com base no site atual:

### Cores Primárias
- **Azul:** `#3b82f6` (blue-500)
- **Laranja:** `#f97316` (orange-500)
- **Slate Escuro:** `#0f172a` (slate-950)
- **Slate Claro:** `#f1f5f9` (slate-100)

### Sugestão de Combinação
- Background: Slate escuro `#0f172a`
- Texto principal: Branco `#ffffff`
- Accent 1: Laranja `#f97316`
- Accent 2: Azul `#3b82f6`

---

## 📝 Templates de Texto

### Opção 1: Foco em Eficiência
```
[Logo VanguardIA]

Eficiência Inteligente
com Inteligência Artificial

Programa ICIA
```

### Opção 2: Foco em Exclusividade
```
[Logo VanguardIA]

100 Empresas Selecionadas
para IA Corporativa em 2026

Programa ICIA
```

### Opção 3: Foco em Diagnóstico
```
[Logo VanguardIA]

Diagnóstico de Eficiência
em até 48h

Descubra o potencial da sua empresa
```

---

## 🎯 Exemplo de Layout

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Logo]                                         │
│                                                 │
│       Eficiência Inteligente                    │
│       com Inteligência Artificial               │
│                                                 │
│       Programa ICIA - VanguardIA                │
│                                                 │
│                                        [Graphic]│
└─────────────────────────────────────────────────┘
      1200px × 630px
```

---

## ✅ Checklist de Criação

- [ ] Dimensões: 1200x630px
- [ ] Logo VanguardIA incluído
- [ ] Headline legível e grande
- [ ] Cores de alto contraste
- [ ] Elementos importantes no centro (safe zone)
- [ ] Peso < 300KB
- [ ] Formato: PNG ou JPG
- [ ] Salvo em: `public/og-image.png`

---

## 🧪 Validação

Após criar e adicionar a imagem:

1. **Fazer deploy** ou rodar localmente
2. **Testar no Open Graph Debugger:**
   - 🔗 https://www.opengraph.xyz/
   - Cole URL do site
   - Veja preview

3. **Testar compartilhamento real:**
   - Compartilhe URL no WhatsApp (privado)
   - Verifique se imagem aparece
   - Cheque se texto está legível

4. **Testar em múltiplas plataformas:**
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator

---

## 🎨 Templates Prontos (Canva)

Busque no Canva por:
- "Facebook Post 1200x630"
- "Open Graph Template"
- "Social Media Banner"

Filtre por:
- Cor: Azul/Laranja
- Estilo: Moderno, Corporativo
- Layout: Minimalista

---

## 🚀 Exemplo de Imagem Ideal

Imagine esta composição:

**Background:** Gradiente azul escuro → slate escuro  
**Esquerda:** Logo VanguardIA (branco)  
**Centro-direita:**  
- "EFICIÊNCIA INTELIGENTE" (branco, bold, 70px)  
- "COM INTELIGÊNCIA ARTIFICIAL" (azul claro, 40px)  
- "Programa ICIA" (laranja, 35px)  
**Canto inferior direito:** Elemento gráfico abstrato (circuitos, rede neural estilizada)

---

## 💡 Dicas Finais

1. **Teste em mobile:** A maioria dos compartilhamentos é mobile
2. **Mantenha simples:** Menos é mais
3. **Alto contraste:** Garante legibilidade
4. **Brand consistency:** Use cores e fontes da marca
5. **Export 2x:** Exporte em alta qualidade
6. **Otimize peso:** Use TinyPNG ou similar para comprimir

---

## 📚 Recursos Adicionais

- [Open Graph Image Generator](https://og-image.xyz/)
- [Canva OG Templates](https://www.canva.com/templates/?query=open%20graph)
- [Design Guidelines](https://developers.facebook.com/docs/sharing/webmasters/images)
- [OG Image Gallery](https://og-image.gallery/)

---

## ❓ FAQ

**Q: Posso usar GIF animado?**  
A: Não recomendado. Facebook/LinkedIn não suportam animação no OG.

**Q: E se não tiver designer?**  
A: Use Canva com templates prontos. É suficiente e profissional.

**Q: Preciso de imagens diferentes por página?**  
A: Não inicialmente. Uma imagem padrão forte funciona. Pode criar específicas depois.

**Q: Como comprimir sem perder qualidade?**  
A: Use TinyPNG (https://tinypng.com) - comprime até 70% mantendo qualidade visual.

**Q: Posso usar foto de stock?**  
A: Pode, mas evite genéricas. Prefira elementos da marca ou gráficos abstratos.

---

Após criar a imagem, salve em `public/og-image.png` e faça commit!
