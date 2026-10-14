import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alquiler de Atracciones Mecánicas y Recreativas para Eventos | Multiespacios SAS",
  description:
    "Tobogán arcoíris gigante, carros chocones, jumping, muro de escalar, cuatrimotos, circuito guerrero ninja, botes de pedal y playgrounds infantiles. Atracciones certificadas para ferias, centros comerciales y parques. Rides rental Colombia. ☎ 3125575477",
  keywords: [
    // Sinónimos en español
    "alquiler atracciones mecánicas eventos Colombia",
    "tobogán arcoíris gigante alquiler",
    "tobogán acuático seco inflable",
    "carros chocones eléctricos pista",
    "jumping cama elástica profesional",
    "muro de escalar escalada portátil",
    "cuatrimotos recreativas niños",
    "circuito obstáculos guerrero ninja",
    "botes pedal actividad acuática",
    "playground parque infantil modular",
    "juegos mecánicos alquiler feria",
    "atracciones parque diversiones",
    "entretenimiento familiar corporativo",
    "activaciones de marca recreativas",
    "ferias centros comerciales parques",
    "Multiespacios atracciones",
    // Keywords en inglés
    "mechanical rides rental Colombia",
    "bumper cars rental events",
    "climbing wall rental",
    "giant slide rental",
    "trampoline jumping rental",
    "amusement rides hire Bogota",
    "kids playground rental events",
    "ninja warrior obstacle course rental",
  ],
  alternates: {
    canonical: "https://www.multiespacios.com.co/atracciones",
  },
  openGraph: {
    title: "Alquiler de Atracciones Mecánicas y Recreativas | Multiespacios SAS",
    description:
      "Tobogán arcoíris, carros chocones, jumping, muro escalar, cuatrimotos y playgrounds. Rides & attractions rental Colombia.",
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
