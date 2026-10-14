import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño, Fabricación y Alquiler de Stands para Ferias y Exposiciones | Multiespacios SAS",
  description:
    "Stands en panelería, Octanorm, Scaffold, Trimalla y backings publicitarios. Diseño, fabricación y montaje de stands para ferias comerciales, exposiciones, ruedas de negocios y activaciones de marca. Stand design & booth rental Colombia. ☎ 3125575477",
  keywords: [
    // Sinónimos en español
    "alquiler stands ferias Colombia",
    "diseño fabricación montaje stands",
    "stand feria exposición exhibición",
    "stand octanorm modular",
    "stand panelería tradicional cenefa",
    "stand scaffold industrial contemporáneo",
    "stand trimalla túnel techo",
    "backing publicitario photocall prensa",
    "vitrina exhibidor display",
    "punto de venta POP exhibición",
    "stand personalizado a medida",
    "montaje ferias comerciales Bogotá",
    "rueda de negocios exposición",
    "activación de marca BTL",
    "Multiespacios stands ferias",
    // Keywords en inglés
    "trade show booth rental Colombia",
    "exhibition stand design Bogota",
    "booth fabrication Colombia",
    "trade fair display rental",
    "custom booth design",
    "expo stand hire Colombia",
    "press wall backdrop rental",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/stands",
  },
  openGraph: {
    title: "Diseño y Alquiler de Stands para Ferias y Exposiciones | Multiespacios SAS",
    description:
      "Stands Octanorm, panelería, Scaffold, Trimalla y backings. Diseño, fabricación y montaje. Booth rental & stand design Colombia.",
    url: "https://www.multiespacios.com.co/stands",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
  },
};

export default function StandsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
