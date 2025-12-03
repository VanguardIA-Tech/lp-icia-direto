import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo-config";

/**
 * Gera o sitemap.xml dinamicamente
 * Next.js automaticamente converte isso em sitemap.xml
 * Acesse em: https://seu-dominio.com/sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.site.url;
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/form`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/obrigado`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.3, // Baixa prioridade para página de conversão
    },
  ];
}
