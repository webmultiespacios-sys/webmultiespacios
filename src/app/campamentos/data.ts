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
    dimensions: "Personalizable",
    image: [],
    description:
      "Instalaciones de campamento temporal con carpas dormitorio, zonas comunes y estructuras complementarias para operaciones en campo, proyectos de infraestructura y actividades al aire libre.",
  },
  {
    title: "Hangares",
    category: "Hangares",
    dimensions: "Gran escala",
    image: [],
    description:
      "Estructuras tipo hangar de gran escala para almacenamiento temporal, bodegas industriales de obra, resguardo de maquinaria y equipos en proyectos de construcción o minería.",
  },
  {
    title: "Pabellones",
    category: "Pabellones",
    dimensions: "Personalizable",
    image: [],
    description:
      "Pabellones modulares de amplia superficie para ferias, exhibiciones permanentes, centros de acopio y áreas de operación temporal en proyectos de gran envergadura.",
  },
];
