import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Mobiliario para Eventos — Sillas, Mesas y Lounge | Multiespacios SAS",
  description:
    "Alquiler de sillas, mesas, salas lounge, camerinos, pisos y alfombras para eventos. Más de 20 tipos de mobiliario disponibles. Entrega en todo Colombia. ☎ 3125575477",
  keywords: [
    "alquiler sillas eventos Colombia",
    "alquiler mesas eventos",
    "sala lounge eventos alquiler",
    "mobiliario corporativo alquiler",
    "camerinos eventos alquiler",
    "pisos alfombras eventos",
    "silla italiana alquiler",
    "silla eames eventos",
    "Multiespacios mobiliario",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/mobiliario",
  },
  openGraph: {
    title: "Alquiler de Mobiliario para Eventos — Sillas, Mesas y Lounge | Multiespacios SAS",
    description:
      "Más de 20 tipos de sillas, mesas, salas lounge y mobiliario especializado para eventos en Colombia.",
    url: "https://www.multiespacios.com.co/mobiliario",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
  },
};

export default function MobiliarioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
