import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/config/site";

export const metadata: Metadata = {
  title: "Alquiler de Mobiliario para Eventos — Sillas, Mesas, Lounge y Camerinos | Multiespacios SAS",
  description:
    "Más de 20 tipos de sillas (Tiffani, Eames, Italiana, Cross-Back), mesas cocteleras, salas lounge, sofás, atriles, pisos, alfombras, separadores, ventiladores y camerinos VIP. Alquiler de muebles para eventos Colombia. Event furniture rental. ☎ 3125575477",
  keywords: [
    // Sinónimos en español
    "alquiler sillas eventos Colombia",
    "silla tiffani shibari boda gala",
    "silla eames alquiler",
    "silla italiana eventos",
    "silla cross-back rústica",
    "silla plegable plástica pupitre",
    "alquiler mesas eventos cocteleras",
    "mesa alta bar counter",
    "sala lounge sofá poltrona puff",
    "alquiler mobiliario muebles eventos",
    "camerinos VIP maquillaje artistas",
    "atriles podium conferencias",
    "pisos alfombras tapetes eventos",
    "separadores catenarias control accesos",
    "ventiladores industriales carpas",
    "mobiliario corporativo oficina temporal",
    "Multiespacios mobiliario",
    // Keywords en inglés
    "event furniture rental Colombia",
    "chair rental Bogota events",
    "lounge furniture hire",
    "cocktail table rental",
    "VIP dressing room setup",
    "event carpet flooring rental",
  ],
  alternates: {
    canonical: `${SITE_ORIGIN}/mobiliario`,
  },
  openGraph: {
    title: "Alquiler de Mobiliario para Eventos — Sillas, Mesas y Lounge | Multiespacios SAS",
    description:
      "20+ tipos de sillas, mesas, salas lounge, camerinos y accesorios para eventos. Event furniture rental Colombia.",
    url: `${SITE_ORIGIN}/mobiliario`,
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
