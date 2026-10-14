import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Tarimas, Escenarios y Estructuras Truss | Multiespacios SAS",
  description:
    "Tarimas americanas, escenarios para conciertos, plataformas en vidrio, sistemas truss, scaffold, graderías, rampas y pórticos. Andamios y estructuras certificadas para eventos en Colombia. Stage rental. ☎ 3125575477",
  keywords: [
    // Sinónimos en español
    "alquiler tarimas eventos Colombia",
    "tarima americana alquiler",
    "escenario para conciertos",
    "plataforma para eventos",
    "escenarios tarimas andamios",
    "estructura truss eventos",
    "estructura scaffold andamiaje",
    "estructura octanorm ferias",
    "tarima en vidrio pasarela",
    "graderías tribunas eventos deportivos",
    "rampas accesibilidad eventos",
    "pórtico arco entrada eventos",
    "pipe drape cortinaje escenográfico",
    "pisos para tarimas LED madera laminado",
    "Multiespacios estructuras tarimas",
    // Keywords en inglés
    "stage rental Colombia",
    "truss structure rental",
    "scaffolding stage Bogota",
    "concert stage rental",
    "glass stage platform",
    "event bleachers grandstand rental",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/estructuras",
  },
  openGraph: {
    title: "Alquiler de Tarimas, Escenarios y Estructuras Truss | Multiespacios SAS",
    description:
      "Tarimas, escenarios, plataformas, truss, scaffold, graderías y pórticos certificados. Stage & truss rental Colombia.",
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
