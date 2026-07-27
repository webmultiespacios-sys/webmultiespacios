import { IconType } from "react-icons";
import { FiGrid, FiStar, FiFlag, FiMap, FiBookOpen } from "react-icons/fi";

export interface Category {
  label: string;
  icon: IconType;
}

export interface Produccion {
  title: string;
  category: string;
  dimensions: string;
  image: string | string[];
  description: string;
}

export const categories: Category[] = [
  { label: "Todos", icon: FiGrid },
  { label: "Evento con Marcas", icon: FiStar },
  { label: "Eventos Gubernamentales", icon: FiFlag },
  { label: "Ferias y Eventos Regionales", icon: FiMap },
  { label: "Universidades", icon: FiBookOpen },
];

export const producciones: Produccion[] = [
  {
    title: "Evento con Marcas",
    category: "Evento con Marcas",
    dimensions: "Personalizable",
    image: [],
    description:
      "Producción integral de eventos para lanzamientos de marca, activaciones BTL y experiencias corporativas con instalaciones de alto impacto visual y estructuras a medida.",
  },
  {
    title: "Eventos Gubernamentales",
    category: "Eventos Gubernamentales",
    dimensions: "Personalizable",
    image: [],
    description:
      "Montajes para eventos de entidades públicas, ceremonias institucionales, lanzamientos de programas y eventos masivos con cumplimiento de normas de seguridad y protocolo.",
  },
  {
    title: "Ferias y Eventos Regionales",
    category: "Ferias y Eventos Regionales",
    dimensions: "Personalizable",
    image: [],
    description:
      "Infraestructura completa para ferias regionales, exposiciones comerciales y eventos comunitarios en municipios y capitales de todo el país.",
  },
  {
    title: "Universidades",
    category: "Universidades",
    dimensions: "Personalizable",
    image: [],
    description:
      "Soluciones de infraestructura para grados, ferias de emprendimiento, eventos académicos y culturales en campus universitarios.",
  },
];
