import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producción Integral de Eventos Corporativos y Ferias | Multiespacios SAS",
  description:
    "Producción de eventos corporativos, gubernamentales, ferias regionales y universitarios. Escenografía, luces, sonido y logística completa. Bogotá, Colombia. ☎ 3125575477",
  keywords: [
    "producción eventos corporativos Bogotá",
    "producción eventos gubernamentales Colombia",
    "ferias regionales producción",
    "eventos universitarios producción",
    "escenografía eventos Colombia",
    "logística eventos integrales",
    "decoración eventos empresariales",
    "Multiespacios producción eventos",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/produccion",
  },
  openGraph: {
    title: "Producción Integral de Eventos Corporativos y Ferias | Multiespacios SAS",
    description:
      "Producción de eventos corporativos, gubernamentales y ferias con escenografía, luces y logística completa.",
    url: "https://www.multiespacios.com.co/produccion",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
  },
};

export default function ProduccionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
