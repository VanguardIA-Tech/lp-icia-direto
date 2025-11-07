# Saved Views — Microsoft Clarity (Vanguardia • icia.vanguardia.grupo)

## Objetivo
Padronizar e documentar a criação de "Saved Views" (filtros salvos) no Microsoft Clarity para agilizar a análise de Recordings e Heatmaps, focando em segmentos-chave do funil.

## O que são Saved Views?
Saved Views são atalhos para combinações de filtros que você usa com frequência. Em vez de aplicar os mesmos filtros repetidamente, você os salva como uma "View" e pode acessá-la com um clique.

## Passo a passo na UI do Clarity
1. Vá para a seção **Recordings** ou **Heatmaps**.
2. Aplique os filtros desejados (ex: `page_type = lp`).
3. Acima da lista de resultados, clique em **"Save as view"**.
4. Dê um nome padronizado (ex: "View • LP (All)") e salve.
5. A view salva aparecerá na barra lateral para acesso rápido.

## Views Sugeridas

A seguir, uma lista de views recomendadas para criar, baseadas nas tags e eventos que já estamos enviando.

### Por Página do Funil
- **View • LP (All)**
  - **Filtro:** `page_type = lp`
  - **Uso:** Analisar todas as sessões que começaram ou passaram pela Landing Page.

- **View • Form (All)**
  - **Filtro:** `page_type = form`
  - **Uso:** Focar em usuários que chegaram à etapa de preenchimento do formulário.

- **View • Obrigado (All)**
  - **Filtro:** `page_type = thanks`
  - **Uso:** Isolar sessões de usuários convertidos.

### Por Variante (Exemplo)
- **View • LP (Variant A)**
  - **Filtros:** `page_type = lp` **E** `variant = A`
  - **Uso:** Analisar o comportamento na Landing Page especificamente para a Variante A. Repita para outras variantes (B, C, etc.).

### Por Eventos de Formulário
- **View • Form Errors**
  - **Filtro:** Evento `form:validation_error`
  - **Uso:** Assistir a gravações de sessões onde ocorreram erros de validação no formulário para identificar pontos de fricção.

- **View • Form Success**
  - **Filtro:** Evento `form:submit_success`
  - **Uso:** Analisar o comportamento de usuários que submeteram o formulário com sucesso.

### Por Canal de Aquisição
- **View • UTM Paid**
  - **Filtro:** `utm_medium = cpc` (ou outra convenção para tráfego pago)
  - **Uso:** Isolar sessões vindas de campanhas pagas para analisar o ROI e o comportamento desse público.