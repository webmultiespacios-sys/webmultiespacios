import { IconType } from "react-icons";
import { FiGrid, FiHexagon, FiTriangle, FiMaximize, FiHome, FiLayout } from "react-icons/fi";

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
  { label: "Campamentos", icon: FiHome },
  { label: "Pabellones Industriales", icon: FiLayout },
];

export const stands: Stand[] = [
  {
    title: "Carpa Pagoda",
    category: "Pagodas",
    dimensions: "",
    image: [
      "/imagenes/1_carpas/Carpa pagoda/carpa-pagoda.webp",
      "/imagenes/1_carpas/Carpa pagoda/carpa-pagoda-colores.webp",
      "/imagenes/1_carpas/Carpa pagoda/carpa-pagoda-transparente-6x6.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp",
      "/imagenes/1_carpas/Carpa pagoda/ficha-tecnica-2.webp"
    ],
    description: "Carpa de diseño elegante y techo puntiagudo, perfecta para eventos al aire libre, recepciones y activaciones de marca pequeñas.",
  },
  {
    title: "Carpa Polo",
    category: "Polos",
    dimensions: "",
    image: [
      "/imagenes/1_carpas/Carpa polo/carpa-polo.webp",
      "/imagenes/1_carpas/Carpa polo/carpa-polo-2.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp",
      "/imagenes/1_carpas/Carpa polo/ficha-tecnica-2.webp",
      "/imagenes/1_carpas/Carpa polo/ficha-tecnica-3.webp"
    ],
    description: "Estructura tradicional soportada por postes centrales, ofreciendo un amplio espacio cubierto con un toque clásico y festivo.",
  },
  {
    title: "Carpa Pabellón",
    category: "Pabellones",
    dimensions: "",
    image: [
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellón.webp",
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellon-3x3.webp",
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellon-4x4.webp",
      "/imagenes/1_carpas/Carpa pabellon/carpa-pabellon-interior.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp"
    ],
    description: "Estructura modular de gran formato ideal para exposiciones, ferias o eventos corporativos masivos, ofreciendo máxima amplitud sin columnas intermedias.",
  },
  {
    title: "Campamentos",
    category: "Campamentos",
    dimensions: "",
    image: [
      "/imagenes/1_carpas/Campamento/campamento-1.webp",
      "/imagenes/1_carpas/Campamento/campamento-2.webp",
      "/imagenes/1_carpas/Campamento/campamento-3.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp",
    ],
    description:
      "Instalaciones de campamento temporal con carpas dormitorio, zonas comunes y estructuras complementarias para operaciones en campo, proyectos de infraestructura y actividades al aire libre.",
  },
  {
    title: "Pabellones Industriales",
    category: "Pabellones Industriales",
    dimensions: "",
    image: [
      "/imagenes/1_carpas/Pabellon/pabellon-1.webp",
      "/imagenes/1_carpas/Pabellon/pabellon-2.webp",
      "/imagenes/1_carpas/Pabellon/pabellon-3.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp",
    ],
    description:
      "Pabellones modulares y hangares de amplia superficie para ferias, centros de acopio, almacenamiento de maquinaria y áreas de operación temporal en proyectos de gran envergadura.",
  },
];

