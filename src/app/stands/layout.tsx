import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diseño y Alquiler de Stands para Ferias en Colombia | Multiespacios SAS",
  description:
    "Stands en panelería, Octanorm, Scaffold, Trimalla y backings publicitarios. Diseño, fabricación y montaje para ferias y exposiciones. 35+ años de experiencia. ☎ 3125575477",
  keywords: [
    "alquiler stands ferias Colombia",
    "diseño fabricación stands",
    "stands octanorm Colombia",
    "stands panelería ferias",
    "stands scaffold exposiciones",
    "backings publicitarios",
    "stands ferias comerciales Bogotá",
    "Multiespacios stands",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/stands",
  },
  openGraph: {
    title: "Diseño y Alquiler de Stands para Ferias en Colombia | Multiespacios SAS",
    description:
      "Stands en panelería, Octanorm, Scaffold y Trimalla. Diseño, fabricación y montaje. Cobertura nacional.",
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
