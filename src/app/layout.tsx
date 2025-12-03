import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClientProvider } from "@/components/ClientProvider";
import ClarityRouteTags from "@/components/ClarityRouteTags";
import ClickTracker from "@/components/ClickTracker";
import { UtmCollector } from "@/components/UtmCollector";
import { seoConfig } from "@/config/seo-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.site.url),
  title: {
    default: seoConfig.site.title,
    template: `%s | ${seoConfig.site.name}`,
  },
  description: seoConfig.site.description,
  keywords: seoConfig.seo.keywords,
  authors: [{ name: seoConfig.company.name }],
  creator: seoConfig.company.name,
  publisher: seoConfig.company.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: seoConfig.site.locale,
    url: seoConfig.site.url,
    title: seoConfig.site.title,
    description: seoConfig.site.description,
    siteName: seoConfig.site.name,
    images: [
      {
        url: seoConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${seoConfig.site.name} - Eficiência Inteligente para Empresas`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.site.title,
    description: seoConfig.site.description,
    images: [seoConfig.seo.ogImage],
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      // Ícones para tema claro (logo escuro)
      { url: '/favicon-dark.ico', media: '(prefers-color-scheme: light)', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16-dark.png', media: '(prefers-color-scheme: light)', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32-dark.png', media: '(prefers-color-scheme: light)', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192-dark.png', media: '(prefers-color-scheme: light)', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512-dark.png', media: '(prefers-color-scheme: light)', sizes: '512x512', type: 'image/png' },
      // Ícones para tema escuro (logo claro)
      { url: '/favicon-light.ico', media: '(prefers-color-scheme: dark)', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon-16x16-light.png', media: '(prefers-color-scheme: dark)', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32-light.png', media: '(prefers-color-scheme: dark)', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192-light.png', media: '(prefers-color-scheme: dark)', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512-light.png', media: '(prefers-color-scheme: dark)', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon-dark.png', media: '(prefers-color-scheme: light)' },
      { url: '/apple-touch-icon-light.png', media: '(prefers-color-scheme: dark)' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  // JSON-LD Schemas para dados estruturados
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.company.name,
    legalName: seoConfig.company.legalName,
    url: seoConfig.site.url,
    logo: `${seoConfig.site.url}${seoConfig.seo.logo}`,
    description: seoConfig.company.description,
    email: seoConfig.company.email,
    telephone: seoConfig.company.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressLocality: "São Paulo",
    },
    sameAs: [
      seoConfig.seo.social.linkedin,
      seoConfig.seo.social.instagram,
      seoConfig.seo.social.youtube,
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.site.name,
    url: seoConfig.site.url,
    description: seoConfig.site.description,
    inLanguage: seoConfig.site.language,
    publisher: {
      "@type": "Organization",
      name: seoConfig.company.name,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.site.url}${seoConfig.seo.logo}`,
      },
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Microsoft Clarity */}
        {clarityId ? (
          <Script
            id="ms-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${clarityId}");
                window.clarity('consentv2', { ad_Storage: 'granted', analytics_Storage: 'granted' });
              `,
            }}
          />
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        data-clarity-unmask="true"
      >
        <ClientProvider />
        <Suspense fallback={null}>
          <ClarityRouteTags variant="A" />
          <UtmCollector />
        </Suspense>
        <ClickTracker />
        {children}
        <Toaster />
      </body>
    </html>
  );
}