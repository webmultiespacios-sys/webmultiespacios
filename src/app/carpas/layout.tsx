import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Carpas para Eventos en Colombia | Multiespacios SAS",
  description:
    "Carpas tipo pagoda, dos aguas, hangares y domos. Montaje certificado con cobertura nacional para eventos corporativos y sociales en Colombia. Cotiza: ☎ 3125575477",
  keywords: [
    "alquiler carpas eventos Colombia",
    "carpa pagoda alquiler",
    "carpa dos aguas eventos",
    "carpa hangar alquiler",
    "domo para eventos",
    "carpa corporativa Bogotá",
    "Multiespacios SAS carpas",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/carpas",
  },
  openGraph: {
    title: "Alquiler de Carpas para Eventos en Colombia | Multiespacios SAS",
    description:
      "Carpas tipo pagoda, dos aguas, hangares y domos con montaje certificado. Cobertura nacional.",
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
