import { IconType } from "react-icons";
import { FiGrid, FiHexagon, FiTriangle, FiMaximize, FiHome, FiPackage, FiLayout } from "react-icons/fi";

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
  { label: "Hangares", icon: FiPackage },
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
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp"
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
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp"
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
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-1.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-2.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-3.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-4.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-5.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-6.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-7.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-8.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-9.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-10.webp",
      "/imagenes/7_Campamentos y Bodegas/Campamento/campamento-11.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp",
    ],
    description:
      "Instalaciones de campamento temporal con carpas dormitorio, zonas comunes y estructuras complementarias para operaciones en campo, proyectos de infraestructura y actividades al aire libre.",
  },
  {
    title: "Hangares",
    category: "Hangares",
    dimensions: "",
    image: [
      "/imagenes/7_Campamentos y Bodegas/Hangar/hangar-1.webp",
      "/imagenes/7_Campamentos y Bodegas/Hangar/hangar-2.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp",
    ],
    description:
      "Estructuras tipo hangar de gran escala para almacenamiento temporal, bodegas industriales de obra, resguardo de maquinaria y equipos en proyectos de construcción o minería.",
  },
  {
    title: "Pabellones Industriales",
    category: "Pabellones Industriales",
    dimensions: "",
    image: [
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-1.webp",
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-2.webp",
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-3.webp",
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-4.webp",
      "/imagenes/1_carpas/ficha-tecnica-carpas.webp",
    ],
    description:
      "Pabellones modulares de amplia superficie para ferias, exhibiciones permanentes, centros de acopio y áreas de operación temporal en proyectos de gran envergadura.",
  },
];

