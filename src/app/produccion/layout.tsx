import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producción Integral de Eventos Corporativos, Ferias y Espectáculos | Multiespacios SAS",
  description:
    "Producción de eventos corporativos, gubernamentales, ferias regionales, universitarios y espectáculos. Escenografía, decoración, iluminación, sonido, pantallas, tarimas y logística completa. Event production company Colombia. ☎ 3125575477",
  keywords: [
    // Sinónimos en español
    "producción eventos corporativos Bogotá",
    "producción eventos gubernamentales institucionales",
    "producción ferias regionales exposiciones",
    "producción eventos universitarios académicos",
    "organización de eventos empresariales",
    "montaje escenografía decoración eventos",
    "iluminación sonido pantallas eventos",
    "logística integral eventos masivos",
    "lanzamiento de marca activación BTL",
    "coordinación eventos protocolo",
    "producción conciertos espectáculos",
    "infraestructura temporal eventos",
    "Multiespacios producción eventos",
    // Keywords en inglés
    "event production company Colombia",
    "corporate event planner Bogota",
    "event logistics management",
    "stage lighting sound production",
    "trade fair production Colombia",
    "government event production",
    "brand activation event Colombia",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/produccion",
  },
  openGraph: {
    title: "Producción Integral de Eventos Corporativos y Ferias | Multiespacios SAS",
    description:
      "Producción de eventos corporativos, gubernamentales y ferias. Escenografía, iluminación, sonido y logística. Event production Colombia.",
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
