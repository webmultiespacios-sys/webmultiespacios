import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GlobalSearchModal } from "@/components/SearchModal";

// ─── SEO: Schema.org JSON-LD ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.multiespacios.com.co/",
      url: "https://www.multiespacios.com.co/",
      name: "Alquiler de carpas y mobiliarios - Multiespacios SAS",
      isPartOf: { "@id": "https://www.multiespacios.com.co/#website" },
      about: { "@id": "https://www.multiespacios.com.co/#organization" },
      description:
        "Alquiler de Carpas y Producción de Eventos, tarimas, sonido, mesas, sillas, barandas, pisos, techos, estructuras, andamios y más 3125575477",
      inLanguage: "es-CO",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.multiespacios.com.co/"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.multiespacios.com.co/#website",
      url: "https://www.multiespacios.com.co/",
      name: "Multiespacios SAS",
      description:
        "Alquiler de carpas, mobiliario, piso, techos, truss y andamios para eventos",
      publisher: { "@id": "https://www.multiespacios.com.co/#organization" },
      inLanguage: "es-CO",
    },
    {
      "@type": "Organization",
      "@id": "https://www.multiespacios.com.co/#organization",
      name: "Multiespacios SAS",
      url: "https://www.multiespacios.com.co/",
      telephone: "+573125575477",
      logo: {
        "@type": "ImageObject",
        inLanguage: "es-CO",
        "@id": "https://www.multiespacios.com.co/#/schema/logo/image/",
        url: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/horizontal-scaled.jpg",
        contentUrl:
          "https://www.multiespacios.com.co/wp-content/uploads/2025/02/horizontal-scaled.jpg",
        width: 2560,
        height: 619,
        caption: "Multiespacios SAS",
      },
      image: {
        "@id": "https://www.multiespacios.com.co/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/multiespacios",
        "https://www.instagram.com/multiespacios",
      ],
    },
  ],
};

// ─── Next.js Metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Combina keywords del WP (carpas, mobiliario) + nuevos servicios (stands, atracciones)
  title: "Alquiler de Carpas, Stands y Atracciones para Eventos | Multiespacios SAS",
  description:
    "35+ años produciendo eventos en Colombia. Alquiler de carpas, stands, mobiliario, estructuras, tarimas, atracciones mecánicas y producción integral de eventos. Cobertura nacional. ☎ 3125575477",
  keywords: [
    // Keywords del WP que ya rankean
    "alquiler carpas",
    "alquiler mobiliario eventos",
    "tarimas eventos",
    "andamios alquiler",
    "estructuras eventos Colombia",
    // Keywords nuevas del sitio
    "alquiler stands ferias Colombia",
    "diseño fabricación stands",
    "tobogán arcoíris alquiler",
    "atracciones mecánicas eventos",
    "producción eventos corporativos Bogotá",
    "campamentos corporativos Colombia",
    "alquiler sillas mesas eventos",
    "Multiespacios SAS",
    "arquitectura efímera Colombia",
  ],
  // Canonical URL — crítico para conservar autoridad del dominio
  alternates: {
    canonical: "https://www.multiespacios.com.co/",
  },
  // Robots — idéntico al WP (max-image-preview mejora el ranking)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Open Graph — título refleja el nuevo catálogo completo
  openGraph: {
    title: "Alquiler de Carpas, Stands y Atracciones para Eventos | Multiespacios SAS",
    description:
      "35+ años produciendo eventos en Colombia. Carpas, stands, mobiliario, estructuras, atracciones y producción integral. Cobertura nacional.",
    url: "https://www.multiespacios.com.co/",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/horizontal-scaled.jpg",
        width: 2560,
        height: 619,
        alt: "Multiespacios SAS — Alquiler de carpas, stands y atracciones para eventos",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Alquiler de Carpas, Stands y Atracciones para Eventos | Multiespacios SAS",
    description:
      "35+ años produciendo eventos en Colombia. Carpas, stands, mobiliario, estructuras, atracciones y producción integral. Cobertura nacional.",
    images: [
      "https://www.multiespacios.com.co/wp-content/uploads/2025/02/horizontal-scaled.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <head>
        {/* Schema.org JSON-LD — Datos estructurados para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager — ID preservado del sitio anterior */}
        <Script
          id="gtag-init"
          src="https://www.googletagmanager.com/gtag/js?id=GT-MJSZCMJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('set', 'linker', { domains: ['www.multiespacios.com.co'] });
            gtag('js', new Date());
            gtag('config', 'GT-MJSZCMJ');
          `}
        </Script>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <GlobalSearchModal />
      </body>
    </html>
  );
}
