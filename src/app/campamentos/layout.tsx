import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campamentos, Bodegas Temporales y Hangares Industriales | Multiespacios SAS",
  description:
    "Campamentos corporativos, bodegas temporales, hangares industriales y pabellones modulares para operaciones logísticas, minería, construcción y eventos masivos. Infraestructura temporal a gran escala en Colombia. Temporary warehouse Colombia. ☎ 3125575477",
  keywords: [
    // Sinónimos en español
    "campamentos corporativos Colombia",
    "campamentos logísticos operacionales",
    "bodegas temporales almacenamiento",
    "hangares industriales modulares",
    "pabellones industriales gran formato",
    "infraestructura temporal minería construcción",
    "carpas dormitorio campo",
    "centros de acopio temporales",
    "almacenamiento maquinaria temporal",
    "campamentos recreativos team building",
    "instalaciones temporales proyectos",
    "Multiespacios campamentos bodegas",
    // Keywords en inglés
    "temporary warehouse Colombia",
    "industrial tent camp Colombia",
    "temporary storage facility",
    "mining camp infrastructure",
    "modular camp setup Colombia",
    "team building camp rental",
    "temporary pavilion industrial",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/campamentos",
  },
  openGraph: {
    title: "Campamentos, Bodegas Temporales y Hangares Industriales | Multiespacios SAS",
    description:
      "Campamentos, bodegas, hangares y pabellones industriales. Infraestructura temporal a gran escala. Temporary warehouse & camp Colombia.",
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
