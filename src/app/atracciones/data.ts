import { IconType } from "react-icons";
import {
  FiGrid,
  FiWind,
  FiZap,
  FiActivity,
  FiTarget,
  FiTruck,
  FiStar,
  FiAnchor,
  FiDroplet,
  FiBox,
} from "react-icons/fi";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Atraccion {
  title: string;
  category: string;
  dimensions: string;
  image: string | string[];
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Toboganes", icon: FiZap },
  { label: "Jumping", icon: FiActivity },
  { label: "Muro de Escalar", icon: FiTarget },
  { label: "Carros Chocones", icon: FiTruck },
  { label: "Cuatri Motos", icon: FiStar },
  { label: "Guerrero Ninja", icon: FiAnchor },
  { label: "Botes de Pedal", icon: FiDroplet },
  { label: "Play Drump", icon: FiBox },
];

export const atracciones: Atraccion[] = [
  {
    title: "Toboganes",
    category: "Toboganes",
    dimensions: "Varios tamaños",
    image: [
      "/imagenes/5_Atracciones/Tobogan/tobogan-1.webp",
    ],
    description:
      "Toboganes gigantes acuáticos y secos para eventos al aire libre. Seguros, certificados y de alto impacto visual para todas las edades.",
  },
  {
    title: "Jumping",
    category: "Jumping",
    dimensions: "Estándar",
    image: [
      "/imagenes/5_Atracciones/Jumping/jumping-1.webp",
    ],
    description:
      "Camas elásticas profesionales tipo Jumping para activaciones físicas, festivales y eventos infantiles y juveniles.",
  },
  {
    title: "Muro de Escalar",
    category: "Muro de Escalar",
    dimensions: "Varios tamaños",
    image: [
      "/imagenes/5_Atracciones/Muro de Escalar/muro-de-escalar-1.webp",
      "/imagenes/5_Atracciones/Muro de Escalar/muro-de-escalar-2.webp",
    ],
    description:
      "Muros de escalada portátiles con diferentes niveles de dificultad. Perfectos para activaciones deportivas, empresariales y eventos escolares.",
  },
  {
    title: "Carros Chocones",
    category: "Carros Chocones",
    dimensions: "Pista estándar",
    image: [
      "/imagenes/5_Atracciones/Carros chocones/carro-chocon-1.webp",
    ],
    description:
      "Pista de carros chocones eléctricos para entretenimiento de todas las edades. Incluye montaje de pista, vehículos y operación durante el evento.",
  },
  {
    title: "Cuatri Motos",
    category: "Cuatri Motos",
    dimensions: "",
    image: [
      "/imagenes/5_Atracciones/Cuatri Motos/cuatrimoto-1.webp",
    ],
    description:
      "Cuatrimotos de entretenimiento para niños y adultos. Circuito seguro con operadores incluidos, ideal para ferias y eventos al aire libre.",
  },
  {
    title: "Guerrero Ninja",
    category: "Guerrero Ninja",
    dimensions: "Instalación modular",
    image: [
      "/imagenes/5_Atracciones/Guerrero Ninja/guerrero-ninja-1.webp",
      "/imagenes/5_Atracciones/Guerrero Ninja/guerrero-ninja-2.webp",
      "/imagenes/5_Atracciones/Guerrero Ninja/guerrero-ninja-3.webp",
    ],
    description:
      "Circuito de obstáculos estilo Guerrero Ninja con puentes colgantes, barras y plataformas. Alto impacto para eventos y festivales deportivos.",
  },
  {
    title: "Botes de Pedal",
    category: "Botes de Pedal",
    dimensions: "2-4 pasajeros",
    image: [
      "/imagenes/5_Atracciones/Botes de pedal/bote-de-pedal-1.webp",
    ],
    description:
      "Botes de pedal para actividades acuáticas recreativas en piscinas, lagos y zonas de agua en eventos y festivales.",
  },
  {
    title: "Play Drump",
    category: "Play Drump",
    dimensions: "Estándar",
    image: [
      "/imagenes/5_Atracciones/Play drump/play-drump-1.webp",
      "/imagenes/5_Atracciones/Play drump/play-drump-2.webp",
    ],
    description:
      "Área de juegos interactivos y estimulación temprana para los más pequeños. Ideal para zonas infantiles en eventos familiares y corporativos.",
  },
];
