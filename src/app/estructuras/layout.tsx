import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Tarimas y Estructuras Truss para Eventos | Multiespacios SAS",
  description:
    "Tarimas americanas, en vidrio, scaffold, sistemas truss y panelería certificada. Más de 35 años garantizando escenarios seguros en Colombia. ☎ 3125575477",
  keywords: [
    "alquiler tarimas eventos Colombia",
    "tarima americana alquiler",
    "estructura truss eventos",
    "tarima scaffold alquiler",
    "escenario certificado Colombia",
    "tarima en vidrio eventos",
    "Multiespacios estructuras tarimas",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/estructuras",
  },
  openGraph: {
    title: "Alquiler de Tarimas y Estructuras Truss para Eventos | Multiespacios SAS",
    description:
      "Tarimas americanas, en vidrio, scaffold y truss certificados. Cobertura nacional.",
    url: "https://www.multiespacios.com.co/estructuras",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
  },
};

export default function EstructurasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
