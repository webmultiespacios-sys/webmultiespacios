import { IconType } from "react-icons";
import { FiGrid, FiHexagon, FiTriangle, FiMaximize, FiCloud } from "react-icons/fi";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Stand {
  title: string;
  category: string;
  dimensions: string;
  image: string | string[];
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Pagodas", icon: FiHexagon },
  { label: "Polos", icon: FiTriangle },
  { label: "Pabellones", icon: FiMaximize },
  { label: "Inflables", icon: FiCloud },
];

export const stands: Stand[] = [
  {
    title: "Carpa Pagoda",
    category: "Pagodas",
    dimensions: "Personalizable",
    image: [
      "/imagenes/1_carpas/Carpa pagoda/carpa-pagoda.webp",
      "/imagenes/1_carpas/Carpa pagoda/carpa-pagoda-colores.webp",
      "/imagenes/1_carpas/Carpa pagoda/carpa-pagoda-transparente-6x6.webp"
    ],
    description: "Carpa de diseño elegante y techo puntiagudo, perfecta para eventos al aire libre, recepciones y activaciones de marca pequeñas.",
  },
  {
    title: "Carpa Polo",
    category: "Polos",
    dimensions: "Personalizable",
    image: [
      "/imagenes/1_carpas/Carpa polo/carpa-polo.webp",
      "/imagenes/1_carpas/Carpa polo/carpa-polo-2.webp"
    ],
    description: "Estructura tradicional soportada por postes centrales, ofreciendo un amplio espacio cubierto con un toque clásico y festivo.",
  },
  {
    title: "Carpa Pabellón",
    category: "Pabellones",
    dimensions: "Personalizable",
    image: [
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellon-tarima.webp",
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellón.webp",
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellon-3x3.webp",
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellon-4x4.webp",
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellon-interior.webp"
    ],
    description: "Estructura modular de gran formato ideal para exposiciones, ferias o eventos corporativos masivos, ofreciendo máxima amplitud sin columnas intermedias.",
  },
  {
    title: "Carpa Inflable",
    category: "Inflables",
    dimensions: "Personalizable",
    image: [
      "/imagenes/1_carpas/Carpa Inflable/carpa-inflable-2.webp",
      "/imagenes/1_carpas/Carpa Inflable/carpa-inflable-iglu.webp",
      "/imagenes/1_carpas/Carpa Inflable/carpa-inflable-concha.webp"
    ],
    description: "Carpas neumáticas modernas y llamativas, de rápida instalación. Ideales para stands publicitarios, puntos de hidratación y activaciones BTL.",
  }
];
