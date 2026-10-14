import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Atracciones Mecánicas para Eventos | Multiespacios SAS",
  description:
    "Tobogán arcoíris, carros chocones, jumping y atracciones interactivas certificadas. Ideal para ferias, centros comerciales y activaciones. Cobertura Colombia. ☎ 3125575477",
  keywords: [
    "alquiler atracciones mecánicas eventos Colombia",
    "tobogán arcoíris alquiler",
    "carros chocones alquiler",
    "atracciones ferias alquiler",
    "jumping mecánico alquiler",
    "atracciones corporativas Colombia",
    "atracciones centros comerciales",
    "Multiespacios atracciones",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/atracciones",
  },
  openGraph: {
    title: "Alquiler de Atracciones Mecánicas para Eventos | Multiespacios SAS",
    description:
      "Tobogán arcoíris, carros chocones y atracciones certificadas para ferias, activaciones y eventos familiares en Colombia.",
    url: "https://www.multiespacios.com.co/atracciones",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
  },
};

export default function AtraccionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
