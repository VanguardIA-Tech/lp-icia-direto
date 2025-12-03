import type { Metadata } from "next";
import { seoConfig } from "@/config/seo-config";

export const metadata: Metadata = {
  title: seoConfig.pages.form.title,
  description: seoConfig.pages.form.description,
  keywords: seoConfig.pages.form.keywords,
  robots: seoConfig.pages.form.robots,
  openGraph: {
    title: seoConfig.pages.form.title,
    description: seoConfig.pages.form.description,
    url: `${seoConfig.site.url}${seoConfig.pages.form.path}`,
  },
  twitter: {
    title: seoConfig.pages.form.title,
    description: seoConfig.pages.form.description,
  },
  alternates: {
    canonical: seoConfig.pages.form.path,
  },
};

export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
