import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Carpas para Eventos en Colombia — Pagoda, Pabellón, Hangar | Multiespacios SAS",
  description:
    "Alquiler de carpas tipo pagoda, dos aguas, pabellón, hangar y domo para eventos corporativos y sociales. Toldos, cubiertas y estructuras temporales con montaje certificado. Cobertura nacional. Tent rental Colombia. ☎ 3125575477",
  keywords: [
    // Sinónimos en español
    "alquiler carpas eventos Colombia",
    "carpa pagoda alquiler",
    "carpa dos aguas eventos",
    "carpa pabellón modular",
    "carpa hangar alquiler",
    "domo para eventos",
    "toldo para eventos",
    "cubierta temporal eventos",
    "carpa corporativa Bogotá",
    "carpa para feria exposición",
    "pabellón industrial modular",
    "campamentos carpas campo",
    "Multiespacios SAS carpas",
    // Keywords en inglés
    "tent rental Colombia",
    "event tent hire Bogota",
    "pagoda tent rental",
    "warehouse tent temporary",
    "outdoor event canopy Colombia",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/carpas",
  },
  openGraph: {
    title: "Alquiler de Carpas para Eventos en Colombia | Multiespacios SAS",
    description:
      "Carpas pagoda, pabellón, hangar y domo con montaje certificado. Toldos y cubiertas temporales. Tent rental Colombia. Cobertura nacional.",
    url: "https://www.multiespacios.com.co/carpas",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
  },
};

export default function CarpasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
