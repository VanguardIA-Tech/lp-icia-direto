import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo-config";

/**
 * Gera o robots.txt dinamicamente
 * Next.js automaticamente converte isso em robots.txt
 * Acesse em: https://seu-dominio.com/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"], // Bloqueia rotas internas se existirem
      },
    ],
    sitemap: `${seoConfig.site.url}/sitemap.xml`,
  };
}
