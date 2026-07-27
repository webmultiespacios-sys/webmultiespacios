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
  { label: "Inflables", icon: FiWind },
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
    title: "Inflables",
    category: "Inflables",
    dimensions: "Varios tamaños",
    image: [],
    description:
      "Castillos inflables, estructuras de juego y obstáculos hinchables de primera calidad para actividades familiares, ferias y eventos corporativos.",
  },
  {
    title: "Toboganes",
    category: "Toboganes",
    dimensions: "Varios tamaños",
    image: [],
    description:
      "Toboganes gigantes acuáticos y secos para eventos al aire libre. Seguros, certificados y de alto impacto visual para todas las edades.",
  },
  {
    title: "Jumping",
    category: "Jumping",
    dimensions: "Estándar",
    image: [],
    description:
      "Camas elásticas profesionales tipo Jumping para activaciones físicas, festivales y eventos infantiles y juveniles.",
  },
  {
    title: "Muro de Escalar",
    category: "Muro de Escalar",
    dimensions: "Varios tamaños",
    image: [],
    description:
      "Muros de escalada portátiles con diferentes niveles de dificultad. Perfectos para activaciones deportivas, empresariales y eventos escolares.",
  },
  {
    title: "Carros Chocones",
    category: "Carros Chocones",
    dimensions: "Pista estándar",
    image: [],
    description:
      "Pista de carros chocones eléctricos para entretenimiento de todas las edades. Incluye montaje de pista, vehículos y operación durante el evento.",
  },
  {
    title: "Cuatri Motos",
    category: "Cuatri Motos",
    dimensions: "Circuito personalizable",
    image: [],
    description:
      "Cuatrimotos de entretenimiento para niños y adultos. Circuito seguro con operadores incluidos, ideal para ferias y eventos al aire libre.",
  },
  {
    title: "Guerrero Ninja",
    category: "Guerrero Ninja",
    dimensions: "Instalación modular",
    image: [],
    description:
      "Circuito de obstáculos estilo Guerrero Ninja con puentes colgantes, barras y plataformas. Alto impacto para eventos y festivales deportivos.",
  },
  {
    title: "Botes de Pedal",
    category: "Botes de Pedal",
    dimensions: "2-4 pasajeros",
    image: [],
    description:
      "Botes de pedal para actividades acuáticas recreativas en piscinas, lagos y zonas de agua en eventos y festivales.",
  },
  {
    title: "Play Drump",
    category: "Play Drump",
    dimensions: "Estándar",
    image: [],
    description:
      "Área de juegos interactivos y estimulación temprana para los más pequeños. Ideal para zonas infantiles en eventos familiares y corporativos.",
  },
];
