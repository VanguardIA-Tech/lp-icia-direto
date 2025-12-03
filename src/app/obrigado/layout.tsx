import type { Metadata } from "next";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  title: seoConfig.pages.obrigado.title,
  description: seoConfig.pages.obrigado.description,
  keywords: seoConfig.pages.obrigado.keywords,
  robots: seoConfig.pages.obrigado.robots,
  openGraph: {
    title: seoConfig.pages.obrigado.title,
    description: seoConfig.pages.obrigado.description,
    url: `${seoConfig.site.url}${seoConfig.pages.obrigado.path}`,
  },
  twitter: {
    title: seoConfig.pages.obrigado.title,
    description: seoConfig.pages.obrigado.description,
  },
  alternates: {
    canonical: seoConfig.pages.obrigado.path,
  },
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
