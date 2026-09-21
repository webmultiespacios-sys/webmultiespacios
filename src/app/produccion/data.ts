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
    image: [
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-3.webp",
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-1.webp",
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-2.webp",
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-4.webp",
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-5.webp",
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-6.webp",
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-7.webp",
      "/imagenes/6_Produccion_de_eventos/Evento con marcas/evento-marca-8.webp",
    ],
    description:
      "Producción integral de eventos para lanzamientos de marca, activaciones BTL y experiencias corporativas con instalaciones de alto impacto visual y estructuras a medida.",
  },
  {
    title: "Eventos Gubernamentales",
    category: "Eventos Gubernamentales",
    dimensions: "Personalizable",
    image: [
      "/imagenes/6_Produccion_de_eventos/Eventos Gubernamentales/evento-gubernamental-1.webp",
      "/imagenes/6_Produccion_de_eventos/Eventos Gubernamentales/evento-gubernamental-2.webp",
      "/imagenes/6_Produccion_de_eventos/Eventos Gubernamentales/evento-gubernamental-3.webp",
      "/imagenes/6_Produccion_de_eventos/Eventos Gubernamentales/evento-gubernamental-4.webp",
    ],
    description:
      "Montajes para eventos de entidades públicas, ceremonias institucionales, lanzamientos de programas y eventos masivos con cumplimiento de normas de seguridad y protocolo.",
  },
  {
    title: "Ferias y Eventos Regionales",
    category: "Ferias y Eventos Regionales",
    dimensions: "Personalizable",
    image: [
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-4.webp",
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-1.webp",
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-2.webp",
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-3.webp",
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-5.webp",
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-6.webp",
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-7.webp",
      "/imagenes/6_Produccion_de_eventos/Ferias y Eventos Regionales/feria-regional-8.webp",
    ],
    description:
      "Infraestructura completa para ferias regionales, exposiciones comerciales y eventos comunitarios en municipios y capitales de todo el país.",
  },
  {
    title: "Universidades",
    category: "Universidades",
    dimensions: "Personalizable",
    image: [
      "/imagenes/6_Produccion_de_eventos/Universidades/universidad-1.webp",
      "/imagenes/6_Produccion_de_eventos/Universidades/universidad-2.webp",
    ],
    description:
      "Soluciones de infraestructura para grados, ferias de emprendimiento, eventos académicos y culturales en campus universitarios.",
  },
];
