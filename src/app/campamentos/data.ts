import { IconType } from "react-icons";
import { FiGrid, FiHome, FiPackage, FiLayout } from "react-icons/fi";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Campamento {
  title: string;
  category: string;
  dimensions: string;
  image: string | string[];
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Campamentos", icon: FiHome },
  { label: "Hangares", icon: FiPackage },
  { label: "Pabellones", icon: FiLayout },
];

export const campamentos: Campamento[] = [
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
    ],
    description:
      "Instalaciones de campamento temporal con carpas dormitorio, zonas comunes y estructuras complementarias para operaciones en campo, proyectos de infraestructura y actividades al aire libre.",
  },
  {
    title: "Hangares",
    category: "Hangares",
    dimensions: "Gran escala",
    image: [
      "/imagenes/7_Campamentos y Bodegas/Hangar/hangar-1.webp",
      "/imagenes/7_Campamentos y Bodegas/Hangar/hangar-2.webp",
    ],
    description:
      "Estructuras tipo hangar de gran escala para almacenamiento temporal, bodegas industriales de obra, resguardo de maquinaria y equipos en proyectos de construcción o minería.",
  },
  {
    title: "Pabellones",
    category: "Pabellones",
    dimensions: "",
    image: [
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-1.webp",
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-2.webp",
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-3.webp",
      "/imagenes/7_Campamentos y Bodegas/Pabellones/pabellon-4.webp",
    ],
    description:
      "Pabellones modulares de amplia superficie para ferias, exhibiciones permanentes, centros de acopio y áreas de operación temporal en proyectos de gran envergadura.",
  },
];
