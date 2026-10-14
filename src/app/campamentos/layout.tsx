import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campamentos Corporativos y Recreativos en Colombia | Multiespacios SAS",
  description:
    "Organización de campamentos corporativos y recreativos con infraestructura completa. Carpas, mobiliario y logística integral al aire libre. Cobertura nacional. ☎ 3125575477",
  keywords: [
    "campamentos corporativos Colombia",
    "campamentos recreativos empresas",
    "campamentos al aire libre Colombia",
    "infraestructura campamentos",
    "carpas campamentos alquiler",
    "logística campamentos corporativos",
    "Multiespacios campamentos",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/campamentos",
  },
  openGraph: {
    title: "Campamentos Corporativos y Recreativos en Colombia | Multiespacios SAS",
    description:
      "Campamentos con infraestructura completa: carpas, mobiliario y logística integral al aire libre. Cobertura nacional.",
    url: "https://www.multiespacios.com.co/campamentos",
    siteName: "Multiespacios SAS",
    type: "website",
    locale: "es_CO",
  },
};

export default function CampamentosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
