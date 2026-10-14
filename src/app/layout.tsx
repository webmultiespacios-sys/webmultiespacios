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
      name: "Alquiler de Carpas, Stands y Atracciones para Eventos | Multiespacios SAS",
      isPartOf: { "@id": "https://www.multiespacios.com.co/#website" },
      about: { "@id": "https://www.multiespacios.com.co/#organization" },
      description:
        "Alquiler de carpas, stands, tarimas, escenarios, mobiliario, sillas, mesas, estructuras truss, andamios, atracciones mecánicas y producción integral de eventos en Colombia. Tent rental, stage rental, event production Colombia.",
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
        "Alquiler de carpas, mobiliario, tarimas, escenarios, pisos, techos, truss, andamios, stands y atracciones para eventos en Colombia. Event equipment rental Colombia.",
      publisher: { "@id": "https://www.multiespacios.com.co/#organization" },
      inLanguage: "es-CO",
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.multiespacios.com.co/#organization",
      name: "Multiespacios SAS",
      alternateName: "ABC Multiespacios SAS",
      url: "https://www.multiespacios.com.co/",
      telephone: ["+573125575477", "+573138004323"],
      email: "comercial@multiespacios.com.co",
      priceRange: "$$",
      foundingDate: "1990",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Cra 87 # 84A-25",
        addressLocality: "Bogotá",
        addressRegion: "Cundinamarca",
        postalCode: "111071",
        addressCountry: "CO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 4.7071916,
        longitude: -74.0991715,
      },
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
      logo: {
        "@type": "ImageObject",
        inLanguage: "es-CO",
        "@id": "https://www.multiespacios.com.co/#/schema/logo/image/",
        url: "/imagenes/logos/image2.png",
        contentUrl: "/imagenes/logos/image2.png",
        width: 2560,
        height: 619,
        caption: "Multiespacios SAS",
      },
      image: {
        "@id": "https://www.multiespacios.com.co/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.instagram.com/abcmultiespacios/",
        "https://www.facebook.com/abcmultiespacios",
        "https://www.tiktok.com/@multiespaciosltda",
        "https://www.youtube.com/@MultiespaciosSAS",
      ],
      knowsAbout: [
        "Alquiler de carpas para eventos",
        "Diseño y fabricación de stands",
        "Tarimas y escenarios para conciertos",
        "Mobiliario para eventos corporativos",
        "Estructuras truss y scaffold",
        "Atracciones mecánicas y recreativas",
        "Producción integral de eventos",
        "Arquitectura efímera",
        "Tent rental for events",
        "Trade show booth design",
        "Event production Colombia",
      ],
    },
  ],
};

// ─── Next.js Metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Alquiler de Carpas, Stands y Atracciones para Eventos | Multiespacios SAS",
  description:
    "35+ años produciendo eventos en Colombia. Alquiler de carpas, toldos, stands, tarimas, escenarios, mobiliario, sillas, mesas, estructuras truss, andamios, atracciones mecánicas y producción integral. Cobertura nacional. Tent & stage rental Colombia. ☎ 3125575477",
  keywords: [
    // ── Keywords heredadas del WP (posicionadas) ──
    "alquiler carpas",
    "alquiler carpas Colombia",
    "alquiler mobiliario eventos",
    "tarimas eventos",
    "andamios alquiler",
    "estructuras eventos Colombia",
    // ── Sinónimos creativos de productos ──
    "alquiler toldos eventos",
    "carpas tipo pagoda pabellón hangar",
    "escenarios para conciertos",
    "plataformas para eventos",
    "tarimas escenarios andamios estructuras",
    "alquiler sillas mesas salas lounge",
    "pisos alfombras eventos",
    "graderías tribunas eventos",
    "pórticos arcos de entrada",
    "cortinaje pipe drape divisiones",
    // ── Keywords nuevas (nuevos servicios) ──
    "alquiler stands ferias Colombia",
    "diseño fabricación montaje stands",
    "stands octanorm panelería scaffold trimalla",
    "backings publicitarios photocall",
    "tobogán arcoíris alquiler",
    "atracciones mecánicas recreativas eventos",
    "carros chocones jumping muro escalar",
    "producción eventos corporativos Bogotá",
    "producción eventos gubernamentales",
    "logística integral eventos masivos",
    // ── Palabras en inglés (ampliar espectro) ──
    "tent rental Colombia",
    "event tent hire Bogota",
    "stage rental Colombia",
    "trade show booth rental",
    "exhibition stand Colombia",
    "event furniture rental",
    "event production company Colombia",
    "scaffolding stage Colombia",
    "truss structure rental",
    "mechanical rides rental events",
    // ── Marca y entidad ──
    "Multiespacios SAS",
    "ABC Multiespacios",
    "arquitectura efímera Colombia",
    "ephemeral architecture Colombia",
  ],
  // Canonical URL — conserva autoridad acumulada del dominio
  alternates: {
    canonical: "https://www.multiespacios.com.co/",
  },
  // Robots — idéntico al WP (max-image-preview mejora el CTR en SERPs)
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
  // Open Graph — para compartir en redes sociales
  openGraph: {
    title: "Alquiler de Carpas, Stands y Atracciones para Eventos | Multiespacios SAS",
    description:
      "35+ años produciendo eventos en Colombia. Carpas, toldos, stands, tarimas, escenarios, mobiliario, estructuras, atracciones y producción integral. Tent & stage rental.",
    url: "https://www.multiespacios.com.co/",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "https://www.multiespacios.com.co/wp-content/uploads/2025/02/horizontal-scaled.jpg",
        width: 2560,
        height: 619,
        alt: "Multiespacios SAS — Alquiler de carpas, stands, tarimas y atracciones para eventos en Colombia",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Alquiler de Carpas, Stands y Atracciones para Eventos | Multiespacios SAS",
    description:
      "35+ años produciendo eventos en Colombia. Carpas, stands, tarimas, mobiliario, atracciones y producción integral. Tent & stage rental.",
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
